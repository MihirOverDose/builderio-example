import constants from "@/constants"

type ConfigType  ={
    endPoints: {
        productAppBaseURL: string ,
        productDetail: (slug: string) => string
    }
}

const config : ConfigType= {
    endPoints: {
        productAppBaseURL: process.env.NEXT_PUBLIC_PRODUCT_BASE_URL!,
        productDetail : (slug: string) => `${process.env.NEXT_PUBLIC_PRODUCT_BASE_URL!}/Product/product/${slug}`
    }
}

export default config





