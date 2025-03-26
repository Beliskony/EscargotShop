import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'


const EmblaCarousel= () => {
  const options: EmblaOptionsType= {loop: true}
  const [emblaRef] = useEmblaCarousel(options, [Autoplay({delay: 3000})])

  const images = [
    "/icons/Partenaire.png",
    "/icons/Partenaire2.png",
    "/icons/Partenaire3.png",
    "/icons/Partenaire4.png",
    "/icons/Partenaire5.png",
    "/icons/Partenaire6.png",
  ]

  return (
    <section className="embla w-full overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
            {images.map((src, index) =>(
            <div key={index} className="embla__slide flex items-center shrink-0 w-[20%] px-2">
                <img src={src} className='h-20 w-20 object-contain' alt={`Partenaire ${index + 1}`}/>
            </div>
            ))}
          
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel