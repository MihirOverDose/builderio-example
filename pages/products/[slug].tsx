import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { builder, BuilderContent, useIsPreviewing } from '@builder.io/react';
import ProductDetails from '@/components/ProductDetails';
import config from '@/config';
import constants from '@/constants';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

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
    return (
        <>
            <Header />
            <ProductDetails
                product={product}

            />
            <Footer />

        </>

    );
}

export async function getStaticProps({ params }: any) {
    const slug = params.slug;

    let product =
        (await builder
            .get(constants.PRODUCT_DETAIL_TEMPLATE, {
                includeRefs: true,
                query: {
                    'data.slug': slug,
                },
            })
            .toPromise()) || null;


    const productDetailUrl = config["endPoints"].productDetail('242162')
    let productv2Response = await fetch(productDetailUrl)
    let productData = await productv2Response.json()
    return {
        props: {
            product: productData,
        },
    };
}

export async function getStaticPaths() {

    const products = await builder.getAll(constants.PRODUCT_DETAIL_TEMPLATE, {
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