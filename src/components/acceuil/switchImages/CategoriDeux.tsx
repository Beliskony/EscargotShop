import CatePictures from '../CatePictures'

const CategoriDeux = () => {
    const picturesDeux = [
        { src: "https://i.pinimg.com/474x/e6/9d/dc/e69ddccbfcb10cb1a6ce26a4c1c49ec7.jpg", size: "h-[450px] w-full max-sm:h-[300px]" },
        { src: "https://i.pinimg.com/474x/be/be/25/bebe252d3eab7fe82baa92d60f4777bd.jpg", size: "h-[210px] w-full max-sm:h-[150px]" },
        { src: "https://i.pinimg.com/474x/64/91/db/6491db91c3fec4114e881a5db1a47381.jpg", size: "h-[210px] w-full max-sm:h-[150px]" },
        { src: "https://i.pinimg.com/474x/6d/9c/d8/6d9cd83cdfe4df5a117854f0d5c00833.jpg", size: "h-[450px] w-full max-sm:h-[300px]" },
        { src: "https://i.pinimg.com/474x/67/32/99/673299e53879db8a9a6035b8bf026ffd.jpg", size: "h-[230px] w-full max-sm:h-[150px]" },
        { src: "https://i.pinimg.com/474x/bb/0d/df/bb0ddf1aa33d324fcecb622d89e4c3be.jpg", size: "h-[190px] w-full max-sm:h-[150px]" },
      ];

  return (
    <div>
        <CatePictures pictures= {picturesDeux} />
    </div>
  )
}

export default CategoriDeux