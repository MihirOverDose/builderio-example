type ConfigType  ={
    endPoints: {
        baseURL: string,
        productDetail: (slug: string) => string
    }
}

const config : ConfigType= {
    endPoints: {
        baseURL: 'https://yldyt6rr80.execute-api.ap-southeast-2.amazonaws.com/api/product-app/v1',
        productDetail : (slug: string) => `https://yldyt6rr80.execute-api.ap-southeast-2.amazonaws.com/api/product-app/v1/Product/product/${slug}`
    }
}

export default config





