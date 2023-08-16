import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { builder, BuilderContent, useIsPreviewing } from '@builder.io/react';
import '@builder.io/widgets';
import ProductDetails from '@/components/ProductDetails';

// Post model created to display a specific blog post.
// read more at: https://www.builder.io/blog/creating-blog
export default function Product({ product }: any) {
    const router = useRouter();
    const isPreviewing = useIsPreviewing();
    if (!router.isFallback && !product && !isPreviewing) {
        return <ErrorPage statusCode={404} />;
    }


    return (
        <>
            {router.isFallback ? (
                <p>Loading…</p>
            ) : (
                <>
                    <BuilderContent
                        {...(!isPreviewing && { content: product })}
                        modelName="product-details-template"
                        options={{ includeRefs: true }}
                        isStatic
                    >
                        {(product, loading, fullContent) =>
                            product && (
                                <article>
                                    <ProductDetails
                                        product={product}

                                    />
                                </article>
                            )
                        }
                    </BuilderContent>
                </>
            )
            }
        </>

    );
}

export async function getStaticProps({ params }: any) {
    const slug = params.slug;

    /*
      usage of builder sdks to fetch data
      more examples at https://github.com/BuilderIO/builder/tree/main/packages/core  */

    let post =
        (await builder
            .get('product-details-template', {
                // Content API params are detailed in this doc
                // https://www.builder.io/c/docs/query-api
                includeRefs: true,
                query: {
                    'data.slug': slug,
                },
            })
            .toPromise()) || null;

    return {
        props: {
            post,
        },
    };
}

export async function getStaticPaths() {
    const products = await builder.getAll('product-details-template', {
        options: { noTargeting: true },
    });

    return {
        paths: products?.map(product => {
            let slugUrl = product.data && product.data.slug || "dummy "
            return `/products/${slugUrl}`
        }) || [],
        fallback: true,
    };
}