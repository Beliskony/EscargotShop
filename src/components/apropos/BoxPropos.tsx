import { FC } from "react"
import { motion } from "framer-motion"

interface BoxProposProps {
    icone: string
    titre: string
    contenue: string
    index?: number
    variant?: "primary" | "secondary"
}

const BoxPropos: FC<BoxProposProps> = ({ 
    icone, 
    titre, 
    contenue, 
    index = 0,
    variant = "primary" 
}) => {
  
  const variants = {
    primary: {
      background: "bg-gradient-to-br from-[#E2E9C0] to-[#F5F5DC]",
      textColor: "text-[#1E0F1C]",
      hoverColor: "hover:shadow-2xl hover:border-[#8B4513]/20"
    },
    secondary: {
      background: "bg-gradient-to-br from-[#1E0F1C] to-[#2A1A2A]",
      textColor: "text-[#E2E9C0]",
      hoverColor: "hover:shadow-2xl hover:border-[#E2E9C0]/20"
    }
  }

  const currentVariant = variants[variant]

  return (
    <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
            duration: 0.7, 
            delay: index * 0.1,
            type: "spring",
            stiffness: 100
        }}
        whileHover={{ 
            y: -12,
            scale: 1.03,
            transition: { duration: 0.4 }
        }}
        className={`flex flex-col w-80 h-44 ${currentVariant.background} p-6 gap-y-4 rounded-3xl shadow-xl border border-white/10 ${currentVariant.hoverColor} transition-all duration-500 group cursor-pointer relative overflow-hidden`}
    >
      
      {/* Effet de brillance au hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      
      {/* Icône */}
      <div className="flex items-center gap-x-3 relative z-10">
        <div className={`p-2 rounded-xl shadow-lg ${
          variant === "primary" 
            ? "bg-white group-hover:bg-[#1E0F1C]" 
            : "bg-[#E2E9C0] group-hover:bg-white"
        } transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
          <img 
            src={icone} 
            alt={titre}
            className={`h-6 w-6 transition-all duration-300 ${
              variant === "primary" 
                ? "group-hover:invert" 
                : "group-hover:invert-0"
            }`} 
          />
        </div>
        
        {/* Titre */}
        <h1 className={`text-xl font-bold ${currentVariant.textColor} group-hover:scale-105 transition-transform duration-300`}>
          {titre}
        </h1>
      </div>

      {/* Contenu */}
      <p className={`text-sm leading-relaxed flex-1 line-clamp-3 relative z-10 ${
        variant === "primary" ? "text-[#1E0F1C]/80" : "text-[#E2E9C0]/80"
      } group-hover:opacity-100 transition-opacity duration-300`}>
        {contenue}
      </p>

      {/* Badge numérique */}
      <div className={`absolute top-1 right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
        variant === "primary" 
          ? "bg-[#8B4513] text-white" 
          : "bg-[#E2E9C0] text-[#1E0F1C]"
      } shadow-lg`}>
        {index + 1}
      </div>

      {/* Bordure animée */}
      <div className={`absolute bottom-0 left-0 w-0 h-1 ${
        variant === "primary" ? "bg-[#8B4513]" : "bg-[#E2E9C0]"
      } rounded-full group-hover:w-full transition-all duration-700`} />
    </motion.div>
  )
}

export default BoxPropos