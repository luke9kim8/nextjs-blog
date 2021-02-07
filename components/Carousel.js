import image from 'next/image'
import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import style from './carousel.module.css'

const Carousel = () => {
    const imageList = [
        '/images/slide_2.jpg',
        '/images/slide_3.jpg',
        '/images/slide_4.jpg'
    ]
    const [currImgIndex, setCurrImgIndex] = useState(0)
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       let index = (currImgIndex >= imageList.length - 1) 
    //                 ? 0 
    //                 : currImgIndex + 1
    //         console.log(index)
    //       setCurrImgIndex(index)
    //     }, 5000);
    //     return () => clearInterval(interval);
    //   }, [currImgIndex]);
    return (
        <div className={style.carousel}>
            <div className={style.container}>
                <Image
                    src="/images/profile.jpg"
                    width={800}
                    height={600}
                />
            </div>
        </div>
    )
}

export default Carousel;