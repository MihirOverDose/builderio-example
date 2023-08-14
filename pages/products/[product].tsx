import ProductDetails from '@/components/ProductDetails';
import { builder } from '@builder.io/react';

// Replace with your Public API Key.
if (!process.env.NEXT_PUBLIC_BUILDER_API_KEY) { throw new Error('Missing NEXT_PUBLIC_BUILDER_API_KEY env var') }
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);


interface Product {
    name: string,
    description: string,
    basePrice: string,
    specialPrice: string
}

export async function getStaticProps({ params }) {
    const productDetails = await builder.get('productdetails', {
        query: {
            // Query product details by its handle field
            'data.handle': params.product
        }
    }).promise();

    return {
        props: {
            productDetails: productDetails || null,
        },
        // Show a 404 page if no product is found
        notFound: !productDetails,
        revalidate: 5,
    };
}

export default function ProductDetailPage({ productDetails }: any) {
    return (
        <>
            <ProductDetails product={productDetails} />
        </>
    );
}