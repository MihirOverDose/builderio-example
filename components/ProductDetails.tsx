import React from "react";

interface Product {
    name: string,
    description: string,
    basePrice: string,
    specialPrice: string
}

function ProductDetails({
    product
}: any) {
    const { name, description, basePrice, specialPrice } = product || {}
    return (
        <>
            <div>Product Image</div>
            <div>
                <h1>{name}</h1>
                <h4>{description}</h4>
                <h3>${basePrice}</h3>
                <h3>Special Price: ${specialPrice}</h3>
            </div>

        </>
    );
}

export default ProductDetails;
