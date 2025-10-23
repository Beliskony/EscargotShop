import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useLocation } from "react-router-dom"


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    // Fonction pour fermer le menu mobile après clic
    const handleLinkClick = () => {
        setIsOpen(false)
    }

    // Vérifie si un lien est actif
    const isActiveLink = (path: string) => {
        return location.pathname === path
    }

    return (
        <header className="bg-transparent w-full h-20 backdrop-blur-lg flex items-center fixed top-0 left-0 z-50 border-b border-[#E2E9C0]/20">
            <nav className="px-4 sm:px-4 lg:px-3 w-full flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/" className="flex items-center gap-2" onClick={handleLinkClick}>
                        <img 
                            src="/icons/logo.png" 
                            alt="Logo Escargots & Volaille" 
                            className="h-16 w-16 transition-transform hover:scale-105"
                        />
                        <span className="text-xl font-bold text-[#E2E9C0] max-sm:hidden">
                            Escargots & Volaille
                        </span>
                    </Link>
                </div>

                {/* Navigation Desktop */}
                <div className="hidden lg:flex flex-row items-center justify-center space-x-5">
                    {[
                        { path: "/", label: "Accueil" },
                        { path: "/Produits", label: "Produits" },
                        { path: "/Contacts", label: "Contact" },
                        { path: "/Apropos", label: "À Propos" }
                    ].map((item) => (
                        <Link 
                            key={item.path}
                            to={item.path}
                            className={`relative py-2 px-3 text-[#E2E9C0] text-lg font-medium transition-all duration-300 hover:text-2xl hover:font-bold ${
                                isActiveLink(item.path) 
                                    ? 'text-2xl font-bold text-white' 
                                    : 'hover:text-[#E2E9C0]'
                            }`}
                        >
                            {item.label}
                            {isActiveLink(item.path) && (
                                <motion.div 
                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E2E9C0]"
                                    layoutId="underline"
                                />
                            )}
                        </Link>
                    ))}
                </div>

                {/* Bouton CTA Desktop */}
                <div className="hidden lg:flex items-center">
                    <Link 
                        to="/commander" 
                        className="bg-[#8B4513] hover:bg-[#A0522D] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                        Commander
                    </Link>
                </div>

                {/* Menu Burger Mobile */}
                <button 
                    className="lg:hidden flex flex-col items-center justify-center w-10 h-10 relative z-50"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Menu"
                >
                    <motion.div
                        animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                        className="w-8 h-0.5 bg-[#E2E9C0] mb-2"
                    />
                    <motion.div
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="w-8 h-0.5 bg-[#E2E9C0] mb-2"
                    />
                    <motion.div
                        animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                        className="w-8 h-0.5 bg-[#E2E9C0]"
                    />
                </button>

                {/* Menu Mobile */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "spring", damping: 25 }}
                            className="fixed top-0 right-0 w-4/5 max-w-sm h-screen bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A] shadow-2xl lg:hidden flex flex-col pt-24 px-8 z-40"
                        >
                            {/* En-tête menu mobile */}
                            <div className="mb-8 pb-4 border-b border-[#E2E9C0]/20">
                                <h3 className="text-2xl font-bold text-[#E2E9C0]">Menu</h3>
                            </div>

                            {/* Liens navigation mobile */}
                            <div className="flex flex-col space-y-6 flex-1">
                                {[
                                    { path: "/", label: "Accueil" },
                                    { path: "/Produits", label: "Nos Produits" },
                                    { path: "/Apropos", label: "À Propos" },
                                    { path: "/Contact", label: "Contact" }
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.path}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link 
                                            to={item.path}
                                            onClick={handleLinkClick}
                                            className={`block py-3 text-xl font-semibold transition-all duration-300 ${
                                                isActiveLink(item.path)
                                                    ? 'text-2xl font-bold text-white'
                                                    : 'text-[#E2E9C0] hover:text-white hover:text-2xl'
                                            }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Bouton CTA Mobile */}
                            <div className="py-8 border-t border-[#E2E9C0]/20">
                                <Link 
                                    to="/commander" 
                                    onClick={handleLinkClick}
                                    className="block w-full bg-[#8B4513] hover:bg-[#A0522D] text-white text-center font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105"
                                >
                                    Commander Maintenant
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Overlay pour menu mobile */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-30"
                            onClick={() => setIsOpen(false)}
                        />
                    )}
                </AnimatePresence>
            </nav>
        </header>
    )
}

export default NavBar