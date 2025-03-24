import CatePictures from '../CatePictures'

const CategoriTrois = () => {
    const picturesTrois = [
        { src: "https://i.pinimg.com/474x/21/5b/27/215b271ad1ab69ec578d10480f214e1b.jpg", size: "h-[450px] w-full max-sm:h-[300px]" },
        { src: "https://i.pinimg.com/474x/f9/25/11/f925110347f0b832f61efae5ff2c6854.jpg", size: "h-[210px] w-full max-sm:h-[150px]" },
        { src: "https://i.pinimg.com/474x/1e/e3/cc/1ee3cc9c27112f6813f007fee60ed08e.jpg", size: "h-[210px] w-full max-sm:h-[150px]" },
        { src: "https://i.pinimg.com/474x/e3/24/6c/e3246c6d2aa200985149ec702cabd38c.jpg", size: "h-[450px] w-full  max-sm:h-[300px]" },
        { src: "https://i.pinimg.com/474x/22/38/7c/22387c18f88a4bfe3e367542d0624ea3.jpg", size: "h-[230px] w-full max-sm:h-[150px]" },
        { src: "https://i.pinimg.com/474x/d2/b8/9c/d2b89c8eeee8e6f1e4327b0881330c83.jpg", size: "h-[190px] w-full w-full max-sm:h-[150px]" },
      ];

  return (
    <div>
        <CatePictures pictures= {picturesTrois} />
    </div>
  )
}

export default CategoriTrois