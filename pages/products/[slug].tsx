import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { builder, BuilderContent, useIsPreviewing } from '@builder.io/react';
import ProductDetails from '@/components/ProductDetails';

// Post model created to display a specific blog post.
// read more at: https://www.builder.io/blog/creating-blog

if (!process.env.NEXT_PUBLIC_BUILDER_API_KEY) { throw new Error('Missing NEXT_PUBLIC_BUILDER_API_KEY env var') }
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);
export default function Product({ product }: any) {

    const router = useRouter();
    const isPreviewing = useIsPreviewing();
    if (!router.isFallback && !product && !isPreviewing) {
        return <ErrorPage statusCode={404} />;
    }

    console.log("this..herhhhhhhhhhhhhhhhhhhhhhhhhh", product)

    // return "hello"

    //     <>
    //     <BuilderContent
    //         {...(!isPreviewing && { content: product })}
    //         modelName="product-details-template"
    //         options={{ includeRefs: true }}
    //         isStatic
    //     >
    //         {(product, loading, fullContent) =>
    //             product && (
    //                 <article>
    //                     <ProductDetails
    //                         product={product}

    //                     />
    //                 </article>
    //             )
    //         }
    //     </BuilderContent>
    // </>
    return (
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

    );
}

export async function getStaticProps({ params }: any) {
    const slug = params.slug;


    console.log("this is lug..", slug)
    /*
      usage of builder sdks to fetch data
      more examples at https://github.com/BuilderIO/builder/tree/main/packages/core  */

    let product =
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


    let productv2Response = await fetch('https://yldyt6rr80.execute-api.ap-southeast-2.amazonaws.com/api/product-app/v1/Product/product/928942/details')

    let productData = await productv2Response.json()

    console.log("product...", product)
    return {
        props: {
            product: productData,
        },
    };
}

export async function getStaticPaths() {
    console.log("this is called....")
    const products = await builder.getAll('product-details-template', {
        options: { noTargeting: true },
    });

    // console.log("products..", products)
    return {
        paths: products?.map(product => {
            let slugUrl = product.data && product.data.slug || "dummy "
            return `/products/${slugUrl}`
        }) || [],
        fallback: true,
    };
}