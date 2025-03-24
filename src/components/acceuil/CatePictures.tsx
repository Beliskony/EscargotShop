import { FC } from "react"

interface PicturesProps{
   pictures: {src: string,alt?: string ,size?: string}[]
}

const CatePictures:FC<PicturesProps> = ({pictures}) => {
    // Assurons-nous d'avoir au moins 6 images (1+2+1+2)
  const requiredImages = 6
  const availableImages = pictures.length

  // Si nous n'avons pas assez d'images, utilisons des placeholders
  const imagesToUse =
    availableImages >= requiredImages
      ? pictures.slice(0, requiredImages)
      : [
          ...pictures,
          ...Array(requiredImages - availableImages).fill({
            src: "/placeholder.svg?height=300&width=300",
            alt: "Placeholder image",
            size: "h-full w-full",
          }),
        ]
  return (
    <div className='w-full flex justify-center'>

        <div className='w-[90%] h-[550px] -top-4 grid grid-cols-4 gap-2 items-start grid-auto-rows-auto grid-auto-flow-dense
        max-sm:w-full max-sm:h-80'>
          {/* Première colonne - 1 image */}
        <div className="h-full">
          <img
            src={imagesToUse[0].src || "/placeholder.svg"}
            alt={imagesToUse[0].alt || "Image 1"}
            className={`${imagesToUse[0].size || "h-full"} w-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-110`}/>
        </div>

        {/* Deuxième colonne - 2 images */}
        <div className="flex flex-col gap-4">
          <img
            src={imagesToUse[1].src || "/placeholder.svg"}
            alt={imagesToUse[1].alt || "Image 2"}
            className={`${imagesToUse[1].size || "h-1/2"} w-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-110`}/>
          <img
            src={imagesToUse[2].src || "/placeholder.svg"}
            alt={imagesToUse[2].alt || "Image 3"}
            className={`${imagesToUse[2].size || "h-1/2"} w-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-110`}/>
        </div>

        {/* Troisième colonne - 1 image */}
        <div className="h-full">
          <img
            src={imagesToUse[3].src || "/placeholder.svg"}
            alt={imagesToUse[3].alt || "Image 4"}
            className={`${imagesToUse[3].size || "h-full"} w-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-110`}/>
        </div>

        {/* Quatrième colonne - 2 images */}
        <div className="flex flex-col gap-4">
          <img
            src={imagesToUse[4].src || "/placeholder.svg"}
            alt={imagesToUse[4].alt || "Image 5"}
            className={`${imagesToUse[4].size || "h-1/2"} w-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-110`}/>
          <img
            src={imagesToUse[5].src || "/placeholder.svg"}
            alt={imagesToUse[5].alt || "Image 6"}
            className={`${imagesToUse[5].size || "h-1/2"} w-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-110`}/>
        </div>
        </div>

    </div>
  )
}

export default CatePictures