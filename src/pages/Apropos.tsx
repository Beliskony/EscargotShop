
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import BoxPropos from '../components/apropos/BoxPropos'


function Apropos() {
  return (
    <section className="flex flex-col w-full h-full">
        {/*le header*/}
        <div style={{backgroundImage: 'url(/images/bgApropos.webp)', backgroundSize:"cover"}} className="h-[300px] flex flex-col">
            <NavBar/>

            <div className="flex h-full w-full justify-center items-center">
                <h1 className="text-5xl text-white font-bold underline">A propos</h1>
            </div>
        </div>

        {/*Section2*/}
        <div className='flex flex-row w-full py-10 px-20 justify-center items-center'>
            <div className='flex flex-col w-1/2 gap-y-5 justify-center items-left'>
                <h1 className='text-4xl font-bold '>Pourquoi nous</h1>
                <p className='text-xs text-left text-wrap w-[80%]'>Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio 
                non explicabo odit sit minima quasi ut voluptatem Quis! Aut exercitationem accusantium et aperiam enim est dignissimos Quis.
                Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio non explicabo odit sit minima
                quasi ut voluptatem Quis!
                </p>

                <button className='w-40 p-3 bg-black text-white font-mono justify-center items-center hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]
                hover:bg-white hover:text-black hover:transition-all duration-300'>
                    <Link to='/Services'>Voir</Link>  
                </button>
            </div>

            <div className='flex justify-center items-center w-1/2'>
                <div className='grid grid-cols-2 grid-rows-1 gap-4'>
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






        {/*le footer*/}
        <section>
           <Footer/> 
        </section>

    </section>
  )
}

export default Apropos
