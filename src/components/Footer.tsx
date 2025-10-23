import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <section className="flex flex-row w-full bg-gradient-to-br from-[#E2E9C0] to-[#F5F5DC] text-[#1E0F1C] max-sm:flex-col">

        {/* Partie gauche - Informations de contact */}
        <div className="flex flex-col w-1/3 justify-center items-start p-8 gap-y-6 bg-gradient-to-br from-[#1E0F1C] to-[#2A1A2A] text-white max-sm:w-full max-sm:p-6">
           
           {/* Logo et Description */}
           <div className="flex items-center gap-3 mb-4">
               <img src="/icons/logo.png" alt="Logo Escargots & Volailles" className="h-12 w-12 max-sm:h-16 max-sm:w-16" />
               <span className="text-xl font-bold text-[#E2E9C0]">Escargots & Volailles</span>
           </div>

           <p className="text-sm text-[#E2E9C0]/90 leading-relaxed max-w-md">
               Découvrez l'authenticité de nos produits fermiers, élevés avec passion 
               et respect de la tradition depuis plus de 20 ans. Qualité, fraîcheur 
               et savoir-faire artisanal.
           </p>

            {/* Informations de contact */}
            <div className="flex flex-col justify-center items-start gap-y-4 w-full">
              
              {/* Localisation */}
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="group w-full">
                <div className="flex flex-row items-center gap-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300">
                   <div className="h-12 w-12 bg-[#E2E9C0]/10 rounded-xl flex justify-center items-center group-hover:bg-[#E2E9C0] group-hover:scale-110 transition-all duration-300">
                      <img src="/icons/location.png" className="h-6 w-6 group-hover:invert" alt="Localisation"/>
                   </div>
                   <div className="flex flex-col text-left">
                       <h3 className="font-semibold text-[#E2E9C0]">Notre Ferme</h3>
                       <h4 className="text-sm text-[#E2E9C0]/80">Abidjan, Cocody</h4>
                   </div>
                </div>
              </a>

              {/* Téléphone */}
              <a href="tel:+2250707070707" className="group w-full">
                <div className="flex flex-row items-center gap-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300">
                   <div className="h-12 w-12 bg-[#E2E9C0]/10 rounded-xl flex justify-center items-center group-hover:bg-[#E2E9C0] group-hover:scale-110 transition-all duration-300">
                      <img src="/icons/call.png" className="h-6 w-6 group-hover:invert" alt="Téléphone"/>
                   </div>
                   <div className="flex flex-col text-left">
                       <h3 className="font-semibold text-[#E2E9C0]">Appelez-nous</h3>
                       <h4 className="text-sm text-[#E2E9C0]/80">+225 07-07-07-07-07</h4>
                   </div>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:contact@escargots-volailles.com" className="group w-full">
                <div className="flex flex-row items-center gap-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300">
                   <div className="h-12 w-12 bg-[#E2E9C0]/10 rounded-xl flex justify-center items-center group-hover:bg-[#E2E9C0] group-hover:scale-110 transition-all duration-300">
                      <img src="/icons/mail.png" className="h-6 w-6 group-hover:invert" alt="Email"/>
                   </div>
                   <div className="flex flex-col text-left">
                       <h3 className="font-semibold text-[#E2E9C0]">Écrivez-nous</h3>
                       <h4 className="text-sm text-[#E2E9C0]/80">contact@escargots-volailles.com</h4>
                   </div>
                </div>
              </a>

            </div>
        </div>
  
        {/* Partie droite - Navigation et réseaux sociaux */}
        <div className="flex flex-col w-2/3 justify-between p-8 max-sm:w-full max-sm:gap-8">
          
          {/* Ligne supérieure - Réseaux sociaux */}
          <div className="flex flex-row justify-between items-center py-6 border-b border-[#1E0F1C]/20 max-sm:flex-col max-sm:gap-4">
            
            <div className="flex flex-col gap-y-3 max-sm:items-center">
                <h4 className="text-lg font-semibold">Suivez-nous</h4>
                <div className="flex flex-row gap-x-3">
                    {[
                        { icon: "/icons/insta.png", url: "#", alt: "Instagram" },
                        { icon: "/icons/fb.png", url: "#", alt: "Facebook" },
                        { icon: "/icons/x.png", url: "#", alt: "Twitter" },
                        { icon: "/icons/tiktok.png", url: "#", alt: "TikTok" },
                        { icon: "/icons/linkedin.png", url: "#", alt: "LinkedIn" }
                    ].map((social, index) => (
                        <a 
                            key={index}
                            href={social.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-white rounded-lg hover:bg-[#1E0F1C] hover:scale-110 transition-all duration-300 shadow-md"
                        >
                            <img src={social.icon} className="h-5 w-5 hover:invert" alt={social.alt}/>
                        </a>
                    ))}
                </div>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col gap-y-2 max-sm:items-center max-sm:text-center">
                <h4 className="text-lg font-semibold">Newsletter</h4>
                <p className="text-sm text-[#1E0F1C]/70 mb-2">Recevez nos actualités et promotions</p>
                <div className="flex gap-2 max-sm:flex-col max-sm:gap-2">
                    <input 
                        type="email" 
                        placeholder="Votre email" 
                        className="px-3 py-2 border border-[#1E0F1C]/30 rounded-lg text-sm focus:outline-none focus:border-[#8B4513] max-sm:w-full"
                    />
                    <button className="bg-[#8B4513] hover:bg-[#A0522D] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap">
                        S'abonner
                    </button>
                </div>
            </div>

          </div>

          {/* Ligne inférieure - Navigation */}
          <div className="flex flex-row justify-between pt-6 max-sm:flex-col max-sm:gap-8 max-sm:items-center">

            {/* Navigation principale */}
            <div className="flex flex-col gap-y-3 w-1/3 max-sm:w-full max-sm:text-center">
              <h2 className="text-xl font-bold text-[#1E0F1C] mb-2">Navigation</h2>
              <div className="flex flex-col gap-y-2">
                {[
                    { path: "/", label: "Accueil" },
                    { path: "/Apropos", label: "À Propos" },
                    { path: "/Contact", label: "Contact" }
                ].map((link) => (
                    <Link 
                        key={link.path}
                        to={link.path}
                        className="text-sm text-[#1E0F1C]/80 hover:text-[#8B4513] hover:font-semibold transition-all duration-200 py-1"
                    >
                        {link.label}
                    </Link>
                ))}
              </div>
            </div>

            {/* Produits */}
            <div className="flex flex-col gap-y-3 w-1/3 max-sm:w-full max-sm:text-center">
              <h2 className="text-xl font-bold text-[#1E0F1C] mb-2">Nos Produits</h2>
              <div className="flex flex-col gap-y-2">
                {[
                    { path: "/Produits#escargots", label: "🐌 Escargots" },
                    { path: "/Produits#volailles", label: "🍗 Volailles" },
                ].map((product) => (
                    <Link 
                        key={product.path}
                        to={product.path}
                        className="text-sm text-[#1E0F1C]/80 hover:text-[#8B4513] hover:font-semibold transition-all duration-200 py-1 flex items-center gap-2 max-sm:justify-center"
                    >
                        {product.label}
                    </Link>
                ))}
              </div>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-y-3 w-1/3 max-sm:w-full max-sm:text-center">
              <h2 className="text-xl font-bold text-[#1E0F1C] mb-2">Support</h2>
              <div className="flex flex-col gap-y-2">
                {[
                    { path: "/support", label: "Support Client" },
                    { path: "/cgv", label: "CGV" },
                ].map((support) => (
                    <Link 
                        key={support.path}
                        to={support.path}
                        className="text-sm text-[#1E0F1C]/80 hover:text-[#8B4513] hover:font-semibold transition-all duration-200 py-1"
                    >
                        {support.label}
                    </Link>
                ))}
              </div>
            </div>

          </div>

          {/* Copyright */}
          <div className="flex flex-row justify-between items-center pt-8 border-t border-[#1E0F1C]/20 max-sm:flex-col max-sm:gap-2 max-sm:text-center">
            <p className="text-sm text-[#1E0F1C]/60">
              © 2024 Escargots & Volailles. Tous droits réservés.
            </p>
            <p className="text-sm text-[#1E0F1C]/60">
              Fait avec ❤️ en Côte d'Ivoire
            </p>
          </div>

        </div>

    </section>
  )
}

export default Footer