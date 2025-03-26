import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import BoxService from "../components/sevices/BoxService"
import StepMap from "../components/sevices/StepMap"
import {motion} from "framer-motion"
import { useNavigate } from "react-router-dom"

function Services() {
  const navigate = useNavigate()

  return (
    <section className="flex flex-col w-full h-full justify-center bg-[#E2E9C0]">
        {/*le header*/}
        <div style={{backgroundImage: 'url(/images/bg1.webp)', backgroundSize:"cover"}} className=" flex flex-col">
            <NavBar/>

             {/*partie une*/}
         <section className="flex flex-row justify-around w-full items-center mb-10 p-10 max-sm:flex-col max-sm:p-2">

          <div className="flex flex-col justify-center items-start w-2/3 gap-y-3 max-sm:gap-y-1 max-sm:w-full">
            <h1 className="text-5xl text-[#E2E9C0] font-bold max-sm:text-2xl">Decouvrez les etapes pour la livraison de vos produits</h1>
            <p className="text-lg font-medium text-[#E2E9C0] mt-4 px-5 max-sm:text-xs max-sm:px-1">
                Commandez vos animaux ou produits d’élevage en toute simplicité. Nous assurons un transport sécurisé et adapté, 
                avec un suivi en temps réel jusqu'à la livraison à votre ferme ou domicile.
            </p>

            <button className="mt-6 mx-5 px-6 py-3 bg-[#1E0F1C] text-[#E2E9C0] font-bold rounded-lg shadow-lg 
            hover:bg-[#A7001E] transition-all duration-300 max-sm:mx-1" onClick={()=> navigate("/Contacts")}>
                Commander maintenant
            </button>
          </div>
          
          <div className="flex flex-col justify-center items-center w-1/3 max-sm:w-full">
          <motion.div className="w-2/3 max-sm:w-full">
           <StepMap step="Step 1"
                     titre="Introduction"
                     texte="Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio 
                            non explicabo odit sit minima quasi ut voluptatem"
                     bordureSide="border-r-5 border-[#A7001E]"/> 
          </motion.div>

        
          <motion.div className="w-2/3 max-sm:w-full">
           <StepMap step="Step 2"
                     titre="Introduction"
                     texte="Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio 
                            non explicabo odit sit minima quasi ut voluptatem"
                     bordureSide="border-l-5 border-[#A7001E]"/> 
          </motion.div>
      
          <motion.div className="w-2/3 max-sm:w-full">
           <StepMap step="Step 3"
                     titre="Introduction"
                     texte="Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio 
                            non explicabo odit sit minima quasi ut voluptatem"
                     bordureSide="border-r-5 border-[#A7001E]"/> 
          </motion.div>
          </div>

      </section>
        </div>

        


        {/*Corps*/}
        <section className="flex flex-col justify-center items-center my-10">

            <div className="flex flex-col w-full justify-center gap-y-5 my-5">
                <h1 className="text-4xl font-bold text-center text-[#1E0F1C] max-sm:text-2xl">Des servives divers</h1>
                <p className="text-xs font-normal text-[#1E0F1C] text-center px-20 max-sm:px-5">Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio 
                non explicabo odit sit minima quasi Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio 
                non explicabo odit sit minima quasi Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio 
                non explicabo odit sit minima quasi</p>
            </div>
      
        <div className="grid grid-cols-3 grid-rows-2 gap-x-2 gap-y-1 my-5 p-10 max-sm:gap-y-3 max-sm:p-2 max-sm:flex max-sm:flex-col max-sm:w-full">
          <motion.div initial={{opacity: 0, x:"-100%", scale: 0.8}} animate={{opacity:1, x:"0%", scale:1}} exit={{opacity: 0, x:"-100%", scale: 0.8}}
        transition={{duration:0.5, ease:"easeInOut"}} className="transition-all">
           <div className="justify-center items-center flex">
            <div className="h-56 w-60 max-sm:w-full justify-center items-left flex flex-col rounded bg-gray-400 p-5 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                <h5 className="text-xs text-[#A7001E] text-left max-sm:text-xl">Que fesons nous?</h5>
                <h1 className="text-xl font-extrabold text-black text-wrap flex text-left max-sm:text-2xl">
                    un elevage de qualite et varie</h1>
            </div></div> </motion.div>

            <motion.div initial={{opacity: 0, x:"-100%", scale: 0.8}} animate={{opacity:1, x:"0%", scale:1}} exit={{opacity: 0, x:"-100%", scale: 0.8}}
        transition={{duration:1, ease:"easeInOut"}} className="transition-all">
                <BoxService icone="/icons/farm.png"
                            titre="Cultivation ouverte"
                            texte="Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio 
                          non explicabo odit sit minima quasi"/>
            </motion.div>

            <motion.div initial={{opacity: 0, x:"-100%", scale: 0.8}} animate={{opacity:1, x:"0%", scale:1}} exit={{opacity: 0, x:"-100%", scale: 0.8}}
        transition={{duration:1, ease:"easeInOut"}} className="transition-all">
                <BoxService icone="/icons/farm.png"
                            titre="Cultivation ouverte"
                            texte="Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio 
                          non explicabo odit sit minima quasi"/>
            </motion.div>

            <motion.div initial={{opacity: 0, x:"-100%", scale: 0.8}} animate={{opacity:1, x:"0%", scale:1}} exit={{opacity: 0, x:"-100%", scale: 0.8}}
        transition={{duration:1, ease:"easeInOut"}} className="transition-all">
                <BoxService icone="/icons/farm.png"
                            titre="Cultivation ouverte"
                            texte="Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio 
                          non explicabo odit sit minima quasi"/>
            </motion.div>

            <motion.div initial={{opacity: 0, x:"-100%", scale: 0.8}} animate={{opacity:1, x:"0%", scale:1}} exit={{opacity: 0, x:"-100%", scale: 0.8}}
        transition={{duration:1, ease:"easeInOut"}} className="transition-all">
                <BoxService icone="/icons/farm.png"
                            titre="Cultivation ouverte"
                            texte="Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio 
                          non explicabo odit sit minima quasi"/>
            </motion.div>

            <motion.div initial={{opacity: 0, x:"-100%", scale: 0.8}} animate={{opacity:1, x:"0%", scale:1}} exit={{opacity: 0, x:"-100%", scale: 0.8}}
        transition={{duration:1, ease:"easeInOut"}} className="transition-all">
                <BoxService icone="/icons/farm.png"
                            titre="Cultivation ouverte"
                            texte="Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio 
                          non explicabo odit sit minima quasi"/>
            </motion.div>

               

        </div></section>

       
        {/*le footer*/}
        <section>
           <Footer/> 
        </section>

    </section>
  )
}

export default Services
