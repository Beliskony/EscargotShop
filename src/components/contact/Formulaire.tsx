import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Formulaire = () => {
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        email: "",
        choixDeProduit: "",
        contact: "",
        message: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true)

        try {
            // Simulation d'envoi
            await new Promise((resolve) => setTimeout(resolve, 2000)) 
            
            // Réinitialisation du formulaire
            setFormData({
                nom: "",
                prenom: "",
                email: "",
                choixDeProduit: "",
                contact: "",
                message: "",
            })
            
            setIsSubmitted(true)
            setTimeout(() => setIsSubmitted(false), 5000)
            
        } catch (error) {
            console.error("Error submitting form:", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    // Options de produits réalistes
    const produitsOptions = [
        { value: "", label: "Choisissez un produit", disabled: true },
        { value: "poulet-noir", label: "🐓 Poulet à Teinte Noire" },
        { value: "poulet-africain", label: "🐔 Poulet Africain" },
        { value: "pondeuse", label: "🥚 Pondeuse" },
        { value: "cailles", label: "🦜 Cailles" },
        { value: "poussin", label: "🐤 Poussin de Race" },
        { value: "escargot-geant", label: "🐌 Escargot Géant d'Afrique" },
        { value: "poudre-escargot", label: "⚪ Poudre d'Escargots" },
        { value: "escargot-seche", label: "🐌 Escargots Séchés" },
        { value: "autre", label: "📦 Autre produit" }
    ]

    return (
        <div className="flex flex-col h-full w-full items-center gap-y-8 p-6 max-sm:p-4">
           
            

            {/* Message de succès */}
            <AnimatePresence>
                {isSubmitted && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="w-full max-w-md bg-green-500 text-white p-4 rounded-lg shadow-lg text-center"
                    >
                        ✅ Message envoyé avec succès ! Nous vous recontacterons rapidement.
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Formulaire */}
            <motion.form 
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-[#E2E9C0] to-[#F5F5DC] border-2 border-white/50 rounded-2xl p-8 w-full max-w-2xl shadow-2xl backdrop-blur-sm"
            >
                {/* Grille responsive pour nom et prénom */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Nom */}
                    <div className="relative">
                        <label htmlFor="nom" className="block text-sm font-semibold text-[#1E0F1C] mb-2">
                            Nom *
                        </label>
                        <input 
                            type="text" 
                            id="nom"
                            name="nom" 
                            value={formData.nom} 
                            onChange={handleChange} 
                            placeholder="Votre nom" 
                            required 
                            className="w-full h-12 bg-white/80 border border-[#1E0F1C]/20 rounded-xl px-4 text-[#1E0F1C] placeholder-[#1E0F1C]/50 focus:outline-none focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20 transition-all duration-300"
                        />
                    </div>

                    {/* Prénom */}
                    <div className="relative">
                        <label htmlFor="prenom" className="block text-sm font-semibold text-[#1E0F1C] mb-2">
                            Prénom *
                        </label>
                        <input 
                            type="text" 
                            id="prenom"
                            name="prenom" 
                            value={formData.prenom} 
                            onChange={handleChange} 
                            placeholder="Votre prénom" 
                            required 
                            className="w-full h-12 bg-white/80 border border-[#1E0F1C]/20 rounded-xl px-4 text-[#1E0F1C] placeholder-[#1E0F1C]/50 focus:outline-none focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20 transition-all duration-300"
                        />
                    </div>
                </div>

                {/* Grille responsive pour contact et email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Contact */}
                    <div className="relative">
                        <label htmlFor="contact" className="block text-sm font-semibold text-[#1E0F1C] mb-2">
                            Téléphone *
                        </label>
                        <input 
                            type="tel" 
                            id="contact"
                            name="contact" 
                            value={formData.contact} 
                            onChange={handleChange} 
                            placeholder="Votre numéro" 
                            required 
                            className="w-full h-12 bg-white/80 border border-[#1E0F1C]/20 rounded-xl px-4 text-[#1E0F1C] placeholder-[#1E0F1C]/50 focus:outline-none focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20 transition-all duration-300"
                        />
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <label htmlFor="email" className="block text-sm font-semibold text-[#1E0F1C] mb-2">
                            Email *
                        </label>
                        <input 
                            type="email" 
                            id="email"
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            placeholder="votre@email.com" 
                            required 
                            className="w-full h-12 bg-white/80 border border-[#1E0F1C]/20 rounded-xl px-4 text-[#1E0F1C] placeholder-[#1E0F1C]/50 focus:outline-none focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20 transition-all duration-300"
                        />
                    </div>
                </div>

                {/* Produit */}
                <div className="mb-6">
                    <label htmlFor="choixDeProduit" className="block text-sm font-semibold text-[#1E0F1C] mb-2">
                        Produit concerné *
                    </label>
                    <select 
                        id="choixDeProduit"
                        name="choixDeProduit" 
                        value={formData.choixDeProduit} 
                        onChange={handleChange} 
                        required 
                        className="w-full h-12 bg-white/80 border border-[#1E0F1C]/20 rounded-xl px-4 text-[#1E0F1C] focus:outline-none focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20 transition-all duration-300 appearance-none cursor-pointer"
                    >
                        {produitsOptions.map((option) => (
                            <option 
                                key={option.value} 
                                value={option.value}
                                disabled={option.disabled}
                                className="text-[#1E0F1C]"
                            >
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Message */}
                <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-semibold text-[#1E0F1C] mb-2">
                        Votre message *
                    </label>
                    <textarea 
                        id="message"
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        placeholder="Décrivez votre demande, commande ou question..." 
                        required 
                        rows={5}
                        className="w-full bg-white/80 border border-[#1E0F1C]/20 rounded-xl p-4 text-[#1E0F1C] placeholder-[#1E0F1C]/50 focus:outline-none focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20 transition-all duration-300 resize-vertical min-h-[120px]"
                    />
                </div>

                {/* Bouton d'envoi */}
                <div className="flex justify-center">
                    <motion.button 
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                        className={`flex items-center gap-3 px-8 py-4 font-bold rounded-xl shadow-lg transition-all duration-300 max-sm:w-full max-sm:justify-center ${
                            isSubmitting 
                                ? 'bg-gray-400 cursor-not-allowed' 
                                : 'bg-gradient-to-r from-[#8B4513] to-[#A0522D] hover:shadow-xl'
                        }`}
                    >
                        {isSubmitting ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                <span className="text-white">Envoi en cours...</span>
                            </>
                        ) : (
                            <>
                                <span className="text-white">Envoyer le message</span>
                                <img 
                                    src="https://img.icons8.com/?size=100&id=100004&format=png&color=ffffff" 
                                    alt="Envoyer" 
                                    className="h-6 w-6" 
                                />
                            </>
                        )}
                    </motion.button>
                </div>
            </motion.form>

        </div>
    )
}

export default Formulaire