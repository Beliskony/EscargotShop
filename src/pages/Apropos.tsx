
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import BoxPropos from '../components/apropos/BoxPropos'
import EmblaCarousel from '../components/apropos/EmblaCarousel'
import MiniQuestion from '@/components/apropos/MiniQuestion'
import EmblaCarouselTemoi from '@/components/apropos/EmblaCarouselTemoi'


function Apropos() {


  return (
    <section className="flex flex-col w-full h-full bg-[#7AA95C]">
        {/*le header*/}
        <div style={{backgroundImage: 'url(/images/bgApropos.webp)', backgroundSize:"cover"}} className="h-[300px] flex flex-col">
            <NavBar/>
        </div>

        {/*Section2*/}
        <div className='flex flex-row w-full py-10 px-20 justify-center items-center max-sm:flex-col max-sm:px-5'>
            <div className='flex flex-col w-1/2 gap-y-5 justify-center items-left max-sm:w-full max-sm:items-center max-sm:my-5'>
                <h1 className='text-4xl font-bold '>Pourquoi nous</h1>
                <p className='text-xs text-left text-wrap w-[80%] max-sm:w-full'>Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio 
                non explicabo odit sit minima quasi ut voluptatem Quis! Aut exercitationem accusantium et aperiam enim est dignissimos Quis.
                Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio non explicabo odit sit minima
                quasi ut voluptatem Quis!
                </p>

                <button className='w-40 p-3 bg-black text-white font-mono justify-center items-center hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]
                hover:bg-white hover:text-black hover:transition-all duration-300'>
                    <Link to='/Services'>Voir</Link>  
                </button>
            </div>

            <div className='flex justify-center items-center w-1/2 max-sm:w-full'>
                <div className='grid grid-cols-2 grid-rows-1 gap-4 max-sm:flex max-sm:flex-col'>
                    <BoxPropos icone='/icons/quality.png'
                               titre='Qualite'
                               contenue='Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio 
                                         non explicabo odit sit minima quasi ut voluptatem'/>

                    <BoxPropos icone='/icons/task.png'
                               titre='Delai respecte'
                               contenue='Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio 
                                         non explicabo odit sit minima quasi ut voluptatem'/>

                    <BoxPropos icone='/icons/delivery.png'
                               titre='Livraison partout'
                               contenue='Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio 
                                         non explicabo odit sit minima quasi ut voluptatem'/>
                    
                    <BoxPropos icone='/icons/eco.png'
                               titre='Eco-responsable'
                               contenue='Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio 
                                         non explicabo odit sit minima quasi ut voluptatem'/>

                </div>
            </div>

        </div>

            <div className='bg-[#E2E9C0] w-full'>
                <EmblaCarousel/>
            </div>

        {/*testimonial*/}
        <div className='w-full flex flex-row my-10 px-20 max-sm:px-5 max-sm:flex-col max-sm:gap-y-5'>
            <div className='w-2/3 flex flex-col justify-center items-start px-5 gap-y-2 text-[#1E0F1C] max-sm:w-full max-sm:items-center'>
               <h1 className='text-4xl font-bold text-left max-sm:text-3xl'>Plus de questions ?</h1>
               <p className='text-xs text-left mx-5 max-sm:mx-1 '>Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio 
               non explicabo odit sit minima quasi ut voluptatem Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio 
               non explicabo odit sit minima quasi ut voluptatem</p>
            </div>

            <div className='w-1/3 px-5 flex flex-col max-sm:w-full'>
               <MiniQuestion/>
            </div>

        </div>

        {/*Temoignages*/}
        <div className='w-full flex flex-row my-10 px-20 max-sm:px-2'>
            <EmblaCarouselTemoi />
        </div>






        {/*le footer*/}
        <section>
           <Footer/> 
        </section>

    </section>
  )
}

export default Apropos
