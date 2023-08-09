import Image from "next/image"
import Link from "next/link"

interface ImgProps {
    img1: string,
    img2: string
}

const ImageViewer = ({ img1, img2 }: ImgProps) => {
    //comment
    return (
        <div className="grid grid-cols-2 gap-2">
            <img src={img1} alt="" className="rounded-md" />
            <img src={img2} alt="" className="rounded-md" />
        </div>
    )
}

export default ImageViewer