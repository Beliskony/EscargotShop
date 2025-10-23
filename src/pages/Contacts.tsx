import Formulaire from '@/components/contact/Formulaire'
import { motion } from 'framer-motion'

function Contacts() {
  return (
    <section className="flex flex-col w-full min-h-screen bg-gradient-to-b from-[#1E0F1C] to-[#2A1A2A] pt-20">
       
       {/* Section principale */}
        <section className='w-full flex flex-row justify-center items-start py-20 px-10 max-sm:flex-col max-sm:px-4 max-sm:py-10'>
          
          {/* Partie gauche - Informations de contact */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className='w-1/2 flex flex-col gap-8 pr-8 max-sm:w-full max-sm:pr-0 max-sm:mb-12'
          >
            {/* En-tête */}
            <div className='flex flex-col gap-4'>
              <h1 className='text-5xl font-bold text-[#E2E9C0] max-sm:text-3xl leading-tight'>
                Contactez-nous
              </h1>
              <p className='text-lg text-[#E2E9C0]/80 leading-relaxed max-w-lg'>
                Nous sommes à votre écoute pour répondre à toutes vos questions, 
                prendre vos commandes et vous offrir le meilleur service.
              </p>
            </div>

            {/* Cartes de contact */}
            <div className='grid grid-cols-2 gap-6 max-sm:grid-cols-1 max-sm:gap-4'>
              
              {/* Téléphone */}
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                className='flex flex-col p-6 bg-gradient-to-br from-[#E2E9C0] to-[#F5F5DC] rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300'
              >
                <div className='flex items-center gap-3 mb-3'>
                  <div className='p-2 bg-[#8B4513] rounded-lg'>
                    <img src="/icons/call.png" alt="Téléphone" className="h-6 w-6 invert" />
                  </div>
                  <h3 className='font-bold text-xl text-[#1E0F1C]'>Appelez-nous</h3>
                </div>
                <a href='tel:+2250707070707' className='text-[#1E0F1C]/80 hover:text-[#8B4513] transition-colors duration-300 text-lg font-semibold'>
                  +225 07-07-07-07-07
                </a>
              </motion.div>

              {/* Localisation */}
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                className='flex flex-col p-6 bg-gradient-to-br from-[#E2E9C0] to-[#F5F5DC] rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300'
              >
                <div className='flex items-center gap-3 mb-3'>
                  <div className='p-2 bg-[#8B4513] rounded-lg'>
                    <img src="/icons/location.png" alt="Localisation" className="h-6 w-6 invert" />
                  </div>
                  <h3 className='font-bold text-xl text-[#1E0F1C]'>Notre Ferme</h3>
                </div>
                <a 
                  href='https://maps.app.goo.gl/TjZAvT8ms7CDe6rL9' 
                  target='_blank' 
                  rel='noopener noreferrer'
                  className='text-[#1E0F1C]/80 hover:text-[#8B4513] transition-colors duration-300 text-lg font-semibold'
                >
                  Abidjan, Koumassi
                </a>
              </motion.div>

              {/* Email */}
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                className='flex flex-col p-6 bg-gradient-to-br from-[#E2E9C0] to-[#F5F5DC] rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300'
              >
                <div className='flex items-center gap-3 mb-3'>
                  <div className='p-2 bg-[#8B4513] rounded-lg'>
                    <img src="/icons/mail.png" alt="Email" className="h-6 w-6 invert" />
                  </div>
                  <h3 className='font-bold text-xl text-[#1E0F1C]'>Écrivez-nous</h3>
                </div>
                <a 
                  href='mailto:contact@escargots-volailles.com' 
                  className='text-[#1E0F1C]/80 hover:text-[#8B4513] transition-colors duration-300 text-lg font-semibold break-all'
                >
                  contact@escargots-volailles.com
                </a>
              </motion.div>

              {/* Réseaux sociaux */}
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                className='flex flex-col p-6 bg-gradient-to-br from-[#E2E9C0] to-[#F5F5DC] rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300'
              >
                <div className='flex items-center gap-3 mb-4'>
                  <div className='p-2 bg-[#8B4513] rounded-lg'>
                    <img src="/icons/insta.png" alt="Réseaux sociaux" className="h-6 w-6 invert" />
                  </div>
                  <h3 className='font-bold text-xl text-[#1E0F1C]'>Suivez-nous</h3>
                </div>
                <div className="flex flex-row gap-3">
                  {[
                    { icon: "/icons/insta.png", url: "#", alt: "Instagram" },
                    { icon: "/icons/fb.png", url: "#", alt: "Facebook" },
                    { icon: "/icons/x.png", url: "#", alt: "Twitter" },
                    { icon: "/icons/tiktok.png", url: "#", alt: "TikTok" }
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
              </motion.div>

            </div>

            {/* Informations supplémentaires */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 rounded-2xl p-6 border border-white/10"
            >
              <h4 className="font-semibold text-[#E2E9C0] mb-3">Horaires d'ouverture</h4>
              <div className="text-[#E2E9C0]/80 space-y-1 text-sm">
                <p>📅 <span className="font-semibold">Lundi - Vendredi:</span> 8h00 - 18h00</p>
                <p>📅 <span className="font-semibold">Samedi:</span> 8h00 - 16h00</p>
                <p>📅 <span className="font-semibold">Dimanche:</span> Fermé</p>
              </div>
            </motion.div>

          </motion.div>

          {/* Partie droite - Formulaire */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='w-1/2 max-sm:w-full'
          >
            <div className="bg-gradient-to-br from-[#E2E9C0]/10 to-[#F5F5DC]/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
              <Formulaire/>
            </div>
          </motion.div>

        </section>

        {/* Section Map */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className='w-full py-16 px-10 max-sm:px-4 max-sm:py-8'
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#E2E9C0] mb-4">Notre Localisation</h2>
            <p className="text-[#E2E9C0]/80 max-w-2xl mx-auto">
              Venez nous rencontrer à notre ferme située à Koumassi, Abidjan. 
              Nous serons ravis de vous accueillir et de vous faire découvrir nos produits.
            </p>
          </div>
          
          <div className='w-full h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20'>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63564.26572624499!2d-3.9781658804714035!3d5.299072554980033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1edd59f2ceba5%3A0x1d277795b2626983!2sKoumassi%2C%20Abidjan!5e0!3m2!1sfr!2sci!4v1743004165648!5m2!1sfr!2sci"
              style={{ width: "100%", height: "100%", border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            />
          </div>

          {/* Indications */}
          <div className="flex justify-center mt-6">
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 max-w-md">
              <p className="text-[#E2E9C0]/80 text-center text-sm">
                🚗 <span className="font-semibold">Accès facile</span> - Parking disponible sur place
              </p>
            </div>
          </div>
        </motion.section>

    </section>
  )
}

export default Contacts