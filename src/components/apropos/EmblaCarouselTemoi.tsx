import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Temoignages from './Temoignages'



const EmblaCarouselTemoi= () => {
  const options: EmblaOptionsType ={loop: true}
  const [emblaRef] = useEmblaCarousel(options, [Autoplay({delay:3000})])


  return (
    <section className="embla w-full overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex gap-x-3">
          
            <div className="embla__slide">
               <Temoignages nom='John Doe'
                            temps='12h30'
                            texte='Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio 
               non explicabo odit sit minima quasi ut voluptatem'/>
            </div>

            <div className="embla__slide">
               <Temoignages nom='John Doe'
                            temps='12h30'
                            texte='Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio 
               non explicabo odit sit minima quasi ut voluptatem'/>
            </div>

            <div className="embla__slide">
               <Temoignages nom='John Doe'
                            temps='12h30'
                            texte='Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio 
               non explicabo odit sit minima quasi ut voluptatem'/>
            </div>

            <div className="embla__slide">
               <Temoignages nom='John Doe'
                            temps='12h30'
                            texte='Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio 
               non explicabo odit sit minima quasi ut voluptatem'/>
            </div>

            <div className="embla__slide">
               <Temoignages nom='John Doe'
                            temps='12h30'
                            texte='Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio 
               non explicabo odit sit minima quasi ut voluptatem'/>
            </div>

        </div>
      </div>

    </section>
  )
}

export default EmblaCarouselTemoi
