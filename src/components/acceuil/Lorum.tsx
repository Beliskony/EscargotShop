import { FC, useState, useRef, useEffect } from 'react'
import {motion, AnimatePresence} from "framer-motion"

interface LorumProps{
    titre:string,
    contenu: string
}

const Lorum:FC<LorumProps> = ({titre,contenu}) => {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() =>{
     const observer = new IntersectionObserver(
        ([entry]) => {setIsVisible(entry.isIntersecting)},
        {threshold:0.2} //detecte quand 20% de la section est visible
    )
     if (ref.current) {
        observer.observe(ref.current)
     }
     
}, [])

  return (
    <div ref={ref}>
   <AnimatePresence>
    {isVisible &&(
        <motion.div initial={{opacity: 0, x:"-100%", scale: 0.8}} animate={{opacity:1, x:"0%", scale:1}} exit={{opacity: 0, x:"-100%", scale: 0.8}}
        transition={{duration:0.5, ease:"easeInOut"}} className='border rounded-xl w-80 h-28 my-4 flex flex-col border-gray-500 relative bg-gray-500 box-shadow: 0px 4px 16px rgba(17,17,26,0.1), 0px 8px 24px rgba(17,17,26,0.1), 0px 16px 56px rgba(17,17,26,0.1);
        justify-center transition-transform duration-300 hover:scale-110 hover:shadow-2xl'>
            
           <div className='absolute -top-6 left-5'>
                <h2 className='text-3xl font-bold text-black'>{titre}</h2>
           </div>
            
            <p className='mx-2 text-xs'>{contenu}</p>
             
        </motion.div>
    )}
   </AnimatePresence>
   </div>
  )
}

export default Lorum