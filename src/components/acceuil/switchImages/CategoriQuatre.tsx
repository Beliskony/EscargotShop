import CatePictures from '../CatePictures'

const CategoriQuatre = () => {
    const picturesQuatre = [
        { src: "https://i.pinimg.com/474x/b6/7a/98/b67a98d18aec70d73240497990860f4c.jpg", size: "h-[450px] w-full  max-sm:h-[300px]" },
        { src: "https://i.pinimg.com/474x/46/be/b9/46beb9d9795a4425d22a2c5852f45ef8.jpg", size: "h-[210px] w-full max-sm:h-[150px]" },
        { src: "https://i.pinimg.com/474x/02/2a/a1/022aa1ab335071bde2408a005383f1d5.jpg", size: "h-[210px] w-full max-sm:h-[150px]" },
        { src: "https://i.pinimg.com/474x/fe/95/c3/fe95c384357dd12613ad20a23747efaa.jpg", size: "h-[450px] w-full max-sm:h-[300px]" },
        { src: "https://i.pinimg.com/474x/3f/ff/41/3fff415f3fc81e5abe177f98d4b90328.jpg", size: "h-[230px] w-full max-sm:h-[150px]" },
        { src: "https://i.pinimg.com/474x/fd/f0/48/fdf04874a170fb2b3884565fc0764ab2.jpg", size: "h-[190px] w-full max-sm:h-[150px]" },
      ];

  return (
    <div>
        <CatePictures pictures= {picturesQuatre} />
    </div>
  )
}

export default CategoriQuatre