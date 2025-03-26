import { FC, useState, useRef, useEffect } from 'react'
import {motion, AnimatePresence} from "framer-motion"

interface PointProps{
    titre:string,
    contenu: string,
    imagesPoint: string
}

const Point:FC<PointProps> = ({titre,contenu, imagesPoint}) => {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() =>{
     const observer = new IntersectionObserver(
        ([entry]) => {setIsVisible(entry.isIntersecting)},
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
        transition={{duration:0.5, ease:"easeInOut"}} className='border rounded-xl w-80 h-36 my-4 flex flex-col border-[#F5F5DC] relative bg-[#E2E9C0] box-shadow: 0px 4px 16px rgba(17,17,26,0.1), 0px 8px 24px rgba(17,17,26,0.1), 0px 16px 56px rgba(17,17,26,0.1);
        justify-center transition-transform duration-300 hover:scale-110 hover:shadow-2xl'>
            
           <div className='absolute -top-10 left-5'>
                <img src={imagesPoint} className='h-20 w-20 rounded-2xl object-cover'/>
           </div>
            <h2 className='text-xl font-bold text-[#1E0F1C] mt-5 mx-5'>{titre}</h2>
            <p className='mx-5 text-xs text-[#1E0F1C]'>{contenu}</p>
             
        </motion.div>
    )}
   </AnimatePresence>
   </div>
  )
}

export default Point