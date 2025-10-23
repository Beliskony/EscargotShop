import { FC, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ProductCard {
    src: string
    title: string
    description: string
    price?: string
    category: "escargots" | "volaille" | "plats"
    featured?: boolean
}

const ModernProductShowcase: FC<{ products: ProductCard[] }> = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState<number | null>(null)

    return (
        <div className="bg-gradient-to-br from-[#1E0F1C] via-[#2A1A2A] to-[#1E0F1C] py-20 px-4">
            {/* Header Épique */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-6xl font-bold bg-gradient-to-r from-[#E2E9C0] via-[#F5F5DC] to-[#E2E9C0] bg-clip-text text-transparent mb-6">
                    Découvrez l'Excellence
                </h1>
                <p className="text-xl text-[#E2E9C0]/70 max-w-2xl mx-auto">
                    Une expérience culinaire où tradition et modernité se rencontrent
                </p>
            </motion.div>

            {/* Grid de Cartes 3D */}
            <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 60, rotateY: -15 }}
                        animate={{ opacity: 1, y: 0, rotateY: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.8 }}
                        whileHover={{ 
                            y: -15,
                            rotateY: 5,
                            scale: 1.02,
                            transition: { duration: 0.3 }
                        }}
                        className="relative group cursor-pointer perspective-1000"
                        onClick={() => setSelectedProduct(index)}
                    >
                        {/* Carte Principale */}
                        <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-6 shadow-2xl transform-style-preserve-3d transition-all duration-500 group-hover:shadow-2xl">
                            
                            {/* Effet de brillance */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl" />
                            
                            {/* Image Produit */}
                            <div className="relative mb-6 overflow-hidden rounded-2xl">
                                <img
                                    src={product.src}
                                    alt={product.title}
                                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                {/* Badge Catégorie */}
                                <div className="absolute top-4 left-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${
                                        product.category === 'escargots' 
                                            ? 'bg-[#8B4513]/80 text-white' 
                                            : product.category === 'volaille'
                                            ? 'bg-[#A0522D]/80 text-white'
                                            : 'bg-[#D2691E]/80 text-white'
                                    }`}>
                                        {product.category === 'escargots' ? '🐌' : product.category === 'volaille' ? '🍗' : '👨‍🍳'}
                                        {product.category}
                                    </span>
                                </div>
                            </div>

                            {/* Contenu */}
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#E2E9C0] transition-colors duration-300">
                                    {product.title}
                                </h3>
                                <p className="text-[#E2E9C0]/70 text-sm mb-4 line-clamp-2">
                                    {product.description}
                                </p>
                                
                                {/* Prix & CTA */}
                                <div className="flex items-center justify-between">
                                    {product.price && (
                                        <span className="text-2xl font-bold text-[#E2E9C0]">
                                            {product.price}
                                        </span>
                                    )}
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-6 py-2 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        Découvrir
                                    </motion.button>
                                </div>
                            </div>

                            {/* Effet de bordure animée */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#E2E9C0] via-[#8B4513] to-[#A0522D] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-md group-hover:blur-lg" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal de Détail */}
            <AnimatePresence>
                {selectedProduct !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedProduct(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, rotateY: 180 }}
                            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                            exit={{ scale: 0.8, opacity: 0, rotateY: -180 }}
                            className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/20 max-w-2xl w-full p-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Contenu du modal */}
                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-white mb-4">
                                    {products[selectedProduct].title}
                                </h2>
                                <p className="text-[#E2E9C0]/80 mb-6">
                                    {products[selectedProduct].description}
                                </p>
                                <button
                                    onClick={() => setSelectedProduct(null)}
                                    className="absolute top-4 right-4 text-white hover:text-[#E2E9C0] transition-colors"
                                >
                                    ✕
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default ModernProductShowcase