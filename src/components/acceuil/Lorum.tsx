import { FC, useRef } from 'react'
import { motion, useInView } from "framer-motion"

interface LorumProps {
    titre: string
    contenu: string
    delay?: number
}

const Lorum: FC<LorumProps> = ({ titre, contenu, delay = 0 }) => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { 
        once: true,
        margin: "-30px"
    })

    return (
        <div ref={ref} className="flex justify-center">
            <motion.div 
                initial={{ opacity: 0, x: -100, scale: 0.8 }}
                animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -100, scale: 0.8 }}
                transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: delay * 0.1
                }}
                whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 }
                }}
                className="border rounded-xl w-80 h-32 my-4 flex flex-col border-[#F5F5DC] relative bg-[#E2E9C0] shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
            >
                {/* Titre avec fond accentué */}
                <div className='absolute top-1 left-5 z-10'>
                    <div className="relative">
                        <motion.h2 
                            className='text-2xl font-bold text-[#1E0F1C] px-3 py-1 rounded-lg bg-white/80 backdrop-blur-sm'
                            whileHover={{ scale: 1.05 }}
                        >
                            {titre}
                        </motion.h2>
                        {/* Point décoratif */}
                        <motion.div 
                            className="absolute -right-1 -bottom-1 w-2 h-2 bg-[#8B4513] rounded-full"
                            whileHover={{ scale: 1.5 }}
                        />
                    </div>
                </div>
                
                {/* Contenu avec padding ajusté */}
                <div className="pt-8 px-4 flex-1 flex items-center">
                    <p className='text-sm text-[#1E0F1C]/90 leading-tight line-clamp-2 group-hover:line-clamp-3 transition-all duration-300'>
                        {contenu}
                    </p>
                </div>

                {/* Barre de progression au hover */}
                <motion.div 
                    className="absolute bottom-0 left-0 w-0 h-1 bg-[#8B4513]"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                />
            </motion.div>
        </div>
    )
}

export default Lorum