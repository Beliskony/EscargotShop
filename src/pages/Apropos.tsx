import { Link } from 'react-router-dom'
import BoxPropos from '../components/apropos/BoxPropos'
import EmblaCarousel from '../components/apropos/EmblaCarousel'
import MiniQuestion from '@/components/apropos/MiniQuestion'
import EmblaCarouselTemoi from '@/components/apropos/EmblaCarouselTemoi'
import { motion } from 'framer-motion'

export default function Apropos() {
  return (
    <section className="flex flex-col w-full min-h-screen bg-gradient-to-b from-[#1E0F1C] to-[#2A1A2A] pt-20">

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full py-20 px-10 bg-gradient-to-br from-[#2A1A2A] to-[#1E0F1C]"
      >
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-6xl font-bold text-[#E2E9C0] mb-6 max-sm:text-4xl">
            Notre Histoire
          </h1>
          <p className="text-xl text-[#E2E9C0]/80 leading-relaxed max-w-3xl mx-auto">
            Découvrez l'aventure passionnante d'une entreprise familiale dédiée 
            à l'élevage naturel d'escargots et de volailles depuis plus de 20 ans.
          </p>
        </div>
      </motion.div>

      {/* Section Valeurs */}
      <div className='flex flex-row w-full py-20 px-10 justify-center items-center bg-gradient-to-b from-[#1E0F1C] to-[#2A1A2A] max-sm:flex-col max-sm:px-5 max-sm:py-10'>
        
        {/* Partie texte */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className='flex flex-col w-1/2 gap-8 justify-center items-start max-sm:w-full max-sm:items-center max-sm:text-center max-sm:mb-12'
        >
          <div>
            <h1 className='text-5xl font-bold text-[#E2E9C0] mb-6 max-sm:text-3xl'>
              Pourquoi Nous Choisir ?
            </h1>
            <p className='text-lg text-[#E2E9C0]/80 leading-relaxed max-w-xl'>
              Depuis trois générations, nous perpétuons un savoir-faire unique alliant 
              tradition et innovation. Notre engagement pour la qualité, le respect 
              de l'environnement et la satisfaction client fait de nous votre partenaire 
              de confiance pour des produits d'exception.
            </p>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='px-8 py-4 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300'
          >
            <Link to='/services' className='flex items-center gap-2'>
              Découvrir nos services
              <span className='text-lg'>→</span>
            </Link>  
          </motion.button>
        </motion.div>

        {/* Partie valeurs */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className='flex justify-center items-center w-1/2 max-sm:w-full'
        >
          <div className='grid grid-cols-2 gap-6 max-sm:grid-cols-1 max-sm:gap-4'>
            {[
              {
                icone: '/icons/quality.png',
                titre: 'Qualité Supérieure',
                contenue: 'Produits rigoureusement sélectionnés et contrôlés pour garantir fraîcheur et saveur authentique'
              },
              {
                icone: '/icons/task.png',
                titre: 'Délais Respectés',
                contenue: 'Livraison ponctuelle et service réactif pour répondre à vos besoins dans les meilleurs délais'
              },
              {
                icone: '/icons/delivery.png',
                titre: 'Livraison Partout',
                contenue: 'Service de livraison étendu pour vous apporter nos produits frais où que vous soyez'
              },
              {
                icone: '/icons/eco.png',
                titre: 'Eco-responsable',
                contenue: 'Élevage respectueux de l\'environnement et pratiques durables pour préserver notre terroir'
              }
            ].map((item, index) => (
              <BoxPropos 
                key={index}
                icone={item.icone}
                titre={item.titre}
                contenue={item.contenue}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Section Galerie */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-full py-16 bg-gradient-to-br from-[#E2E9C0] to-[#F5F5DC]"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1E0F1C] mb-4">Notre Univers</h2>
          <p className="text-lg text-[#1E0F1C]/70 max-w-2xl mx-auto">
            Plongez au cœur de notre ferme et découvrez notre quotidien dédié à l'excellence
          </p>
        </div>
        <EmblaCarousel/>
      </motion.div>

      {/* Section FAQ */}
      <div className='w-full flex flex-row py-20 px-10 bg-gradient-to-b from-[#1E0F1C] to-[#2A1A2A] max-sm:flex-col max-sm:px-5 max-sm:py-10'>
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className='w-1/2 flex flex-col justify-center items-start pr-8 gap-6 max-sm:w-full max-sm:pr-0 max-sm:items-center max-sm:text-center max-sm:mb-12'
        >
          <div>
            <h1 className='text-5xl font-bold text-[#E2E9C0] mb-4 max-sm:text-3xl'>
              Questions Fréquentes
            </h1>
            <p className='text-lg text-[#E2E9C0]/80 leading-relaxed max-w-2xl'>
              Nous répondons à toutes vos interrogations sur nos méthodes d'élevage, 
              la qualité de nos produits et nos services. Votre satisfaction est 
              notre priorité absolue.
            </p>
          </div>

          {/* Points clés supplémentaires */}
          <div className="grid grid-cols-2 gap-4 mt-4 max-sm:grid-cols-1">
            {[
              "🐌 Élevage naturel et biologique",
              "🍗 Volailles élevées en plein air", 
              "🚚 Livraison rapide et sécurisée",
              "⭐ Produits 100% traçables"
            ].map((point, index) => (
              <div key={index} className="flex items-center gap-2 text-[#E2E9C0]">
                <span className="text-sm">{point}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className='w-1/2 max-sm:w-full'
        >
          <div className="bg-gradient-to-br from-[#E2E9C0]/10 to-[#F5F5DC]/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <MiniQuestion/>
          </div>
        </motion.div>
      </div>

      {/* Section Témoignages */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-full py-20 px-10 bg-gradient-to-br from-[#2A1A2A] to-[#1E0F1C] max-sm:px-5 max-sm:py-10"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#E2E9C0] mb-4">Ils Nous Font Confiance</h2>
            <p className="text-lg text-[#E2E9C0]/80 max-w-2xl mx-auto">
              Découvrez les retours d'expérience de nos clients satisfaits
            </p>
          </div>
          <EmblaCarouselTemoi />
        </div>
      </motion.div>

      {/* Call to Action Final */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-full py-16 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à Découvrir Nos Produits ?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Rejoignez la communauté de clients satisfaits et faites l'expérience 
            de l'authenticité et de la qualité.
          </p>
          <div className="flex gap-4 justify-center max-sm:flex-col max-sm:items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#8B4513] font-semibold px-8 py-3 rounded-full hover:bg-[#E2E9C0] transition-all duration-300"
            >
              <Link to="/produits">Voir nos produits</Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-[#8B4513] transition-all duration-300"
            >
              <Link to="/contact">Nous contacter</Link>
            </motion.button>
          </div>
        </div>
      </motion.section>

    </section>
  )
}