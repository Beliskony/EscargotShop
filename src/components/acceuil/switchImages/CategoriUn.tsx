import CatePictures from '../CatePictures'

const CategoriUn = () => {
    const picturesUn = [
        { src: "https://i.pinimg.com/474x/df/96/5b/df965bd12bc739e4bc62c4328cc8a403.jpg", size: "h-[450px] w-full max-sm:h-[300px]" },
        { src: "https://i.pinimg.com/474x/91/a9/1c/91a91c36104bd8752ea616e7ac806a05.jpg", size: "h-[210px] w-full max-sm:h-[150px]" },
        { src: "https://i.pinimg.com/474x/0d/44/d5/0d44d5dbd6def0765c66cd22cc922f5c.jpg", size: "h-[210px] w-full max-sm:h-[150px]" },
        { src: "https://i.pinimg.com/474x/a4/45/fa/a445fad692a4133f43737a2b892d7dab.jpg", size: "h-[450px] w-full max-sm:h-[300px]" },
        { src: "https://i.pinimg.com/474x/8b/f8/64/8bf864dbf5e2a2db61dfd1d127244bf9.jpg", size: "h-[230px] w-full max-sm:h-[150px]" },
        { src: "https://i.pinimg.com/474x/fe/04/71/fe04711db577b9d9df07779983836aba.jpg", size: "h-[190px] w-full max-sm:h-[150px]" },
      ];

  return (
    <div>
        <CatePictures pictures= {picturesUn} />
    </div>
  )
}

export default CategoriUn