import { motion } from "framer-motion"

const NotFound = () => {
  return (
    <section className="flex flex-col w-full min-h-screen bg-gradient-to-br from-[#1E0F1C] to-[#2A1A2A] pt-20">
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Animation et Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12 relative"
          >
            {/* Éléments décoratifs */}
            <div className="absolute -top-10 -left-10 text-6xl opacity-20">🐌</div>
            <div className="absolute -top-5 -right-5 text-4xl opacity-20">🍗</div>
            <div className="absolute -bottom-10 left-20 text-5xl opacity-20">👨‍🍳</div>
            
            {/* Chiffre 404 animé */}
            <motion.h1 
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-9xl font-bold text-[#E2E9C0] mb-4 max-sm:text-7xl"
            >
              404
            </motion.h1>
            
            {/* Ligne décorative */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ delay: 0.8, duration: 1 }}
              className="h-1 bg-gradient-to-r from-[#8B4513] to-[#A0522D] mx-auto mb-8 rounded-full"
            />
          </motion.div>

          {/* Message principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-[#E2E9C0] mb-6 max-sm:text-2xl">
              Oups ! Cette page s'est échappée...
            </h2>
            <p className="text-xl text-[#E2E9C0]/80 leading-relaxed max-w-2xl mx-auto mb-8 max-sm:text-lg">
              Comme nos escargots les plus curieux, cette page a semble-t-il pris 
              une direction inattendue. Mais ne vous inquiétez pas, nous pouvons 
              vous ramener vers des pâturages plus verts !
            </p>
            
            {/* Message humoristique */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="inline-block bg-[#8B4513]/20 border border-[#8B4513]/30 rounded-2xl px-6 py-4 mb-6"
            >
              <p className="text-[#E2E9C0] text-sm italic">
                "Même nos volailles les mieux élevées ne trouveraient pas cette page !"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

    
    </section>
  )
}

export default NotFound