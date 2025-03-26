
import { useState } from "react";

const Formulaire = () => {
    const [formData, SetFormData] = useState({
        nom: "",
        prenom: "",
        email: "",
        choixDeProduit: "",
        contact: "",
        message: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>{
        SetFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000)) 
            SetFormData({
                nom: "",
                prenom: "",
                email: "",
                choixDeProduit: "",
                contact: "",
                message: "",
            })
        } catch (error) {
            console.error("Error submitting form:", error)
        }
        
    }
  return (
    <div className="flex flex-col h-full w-full items-center gap-y-4">
        <h1 className="text-4xl font-bold text-[#1E0F1C]">Get In Touch</h1>

        <form onSubmit={handleSubmit} className="backdrop-blur-2xl bg-[#7AA95C] flex flex-col border h-full w-96 rounded-xl p-4 gap-y-4 text-[#1E0F1C]">
            <div>
                <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Nom" required className="w-full h-10 bg-transparent border-b 
                border-gray-300 placeholder:text-[#E2E9C0] focus:border-gray-500 outline-none" />
            </div>

            <div>
                <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} placeholder="Prenom" required className="w-full h-10 bg-transparent border-b 
                border-gray-300 placeholder:text-[#E2E9C0] focus:border-gray-500 outline-none" />
            </div>

            <div>
                <input type="text" name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact" required className="w-full h-10 bg-transparent border-b 
                border-gray-300 placeholder:text-[#E2E9C0] focus:border-gray-500 outline-none" />
            </div>

            <div>
                <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Mail" required className="w-full h-10 bg-transparent border-b 
                border-gray-300 placeholder:text-[#E2E9C0] focus:border-gray-500 outline-none" />
            </div>

            <div>
                <select name="produits" value={formData.choixDeProduit} onChange={handleChange} required className="w-full h-10 bg-transparent border 
                border-gray-300 focus:border-[#E2E9C0] text-[#1E0F1C] outline-none">
                    <option value="" disabled> Choisissez un produit </option>
                    <option value="produit1" >produit1</option>
                    <option value="produit2" >produit2</option>
                    <option value="produit3" >produit3</option>
                    <option value="produit4" >produit4</option>
                    <option value="produit5" >produit5</option>

                </select>
            </div>

            <div>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required className="w-full h-20 bg-transparent border-b 
                border-gray-300 placeholder:text-[#E2E9C0] focus:border-gray-500 outline-none" />
            </div>

            <div className="w-full flex justify-center">
                <button type="submit" onClick={handleSubmit} className="flex my-5 px-6 py-3 bg-[#1E0F1C] text-[#E2E9C0] font-bold rounded-lg shadow-lg 
            hover:bg-[#A7001E] transition-all duration-300 max-sm:mx-1">

                <span>Envoyer</span>
                <img src="https://img.icons8.com/?size=100&id=100004&format=png&color=E2E9C0" className="h-7 w-8 hover:text-[#1E0F1C]" />

                </button>
            </div>

        </form>

    </div>
  )
}

export default Formulaire