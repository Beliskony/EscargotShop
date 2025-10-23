import { FC, useRef } from 'react'
import { motion, useInView } from "framer-motion"

interface PointProps {
    titre: string
    contenu: string
    imagesPoint: string
    index?: number
}

// Variants pour les animations
const cardVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: { 
        opacity: 1, 
        x: 0, 
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    },
    hover: {
        scale: 1.05,
        y: -8,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        transition: { duration: 0.3 }
    }
}

const Point: FC<PointProps> = ({ titre, contenu, imagesPoint, index = 0 }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { 
        once: true, // Animation une seule fois
        margin: "-50px" 
    })

    return (
        <motion.div 
            ref={ref}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover="hover"
            custom={index}
            transition={{ delay: index * 0.1 }}
            className="border rounded-xl w-80 h-36 my-4 flex flex-col border-[#F5F5DC] relative bg-[#E2E9C0] shadow-lg cursor-pointer group"
        >
            {/* Image avec effet de superposition */}
            <div className='absolute -top-6 left-6 z-10'>
                <div className='relative'>
                    <motion.img 
                        src={imagesPoint} 
                        className='h-16 w-16 rounded-2xl object-cover border-2 border-white shadow-lg'
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                    />
                    <div className='absolute inset-0 bg-[#8B4513]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </div>
            </div>
            
            {/* Contenu */}
            <div className="pt-8 px-5 flex-1 flex flex-col justify-center">
                <motion.h2 
                    className='text-lg font-bold text-[#1E0F1C] mb-2 line-clamp-1'
                    whileHover={{ color: "#8B4513" }}
                >
                    {titre}
                </motion.h2>
                <p className='text-sm text-[#1E0F1C]/80 leading-relaxed line-clamp-2'>
                    {contenu}
                </p>
            </div>

            {/* Barre de progression animée */}
            <motion.div 
                className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#8B4513] to-[#A0522D] rounded-full"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
            />
        </motion.div>
    )
}

export default Point