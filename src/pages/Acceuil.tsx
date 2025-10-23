import Lorum from "../components/acceuil/Lorum"
import Point from "../components/acceuil/Point"
import ProdSwitch from "../components/acceuil/ProdSwitch"
import { loremData, servicesData } from "@/data/FichierData"
import { motion } from "framer-motion"

function Acceuil() {
  return (
    <section className="flex flex-col w-full h-full bg-gradient-to-b from-[#1E0F1C] to-[#2A1A2A]">
      {/* Hero Section */}
      <div 
        style={{
          backgroundImage: 'url(/images/snail.webp)', 
          backgroundSize: "cover", 
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }} 
        className="h-screen flex flex-col max-sm:h-[550px] relative"
      >
        {/* Overlay sombre pour meilleure lisibilité */}
        <div className="absolute inset-0 bg-black/40"></div>
        

        <div className="flex flex-col w-full h-full justify-center items-center gap-y-6 max-sm:px-3 relative">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#F5F5DC] font-bold text-5xl text-center text-wrap max-sm:text-3xl leading-tight"
          >
            "De la Terre à Votre Assiette : Élevage Naturel d'Escargots & Volailles"
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#F5F5DC] text-lg text-center text-wrap max-sm:text-sm max-w-2xl leading-relaxed"
          >
            Découvrez l'authenticité de nos produits fermiers, élevés avec passion 
            et respect de la tradition depuis plus de 20 ans.
          </motion.p>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 mt-6 max-sm:flex-col max-sm:items-center"
          >
            <button className="bg-[#8B4513] hover:bg-[#A0522D] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
              Découvrir nos produits
            </button>
            <button className="border-2 border-[#F5F5DC] text-[#F5F5DC] hover:bg-[#F5F5DC] hover:text-[#1E0F1C] font-semibold px-8 py-3 rounded-full transition-all duration-300">
              Nous contacter
            </button>
          </motion.div>
        </div>
      </div>
       
      {/* Section 2 - Valeurs & Engagement */}
      <div className="w-full min-h-[500px] flex flex-row justify-around py-20 px-10 max-sm:flex-col max-sm:px-4 max-sm:py-10 bg-gradient-to-br from-[#2A1A2A] to-[#1E0F1C]">
        <div className="w-1/2 flex flex-col justify-center items-center max-sm:w-full max-sm:mb-8">
          {loremData.slice(0, 3).map((item, index) => (
            <Lorum 
              key={item.id}
              titre={item.titre}
              contenu={item.contenu}
              delay={index}
            />
          ))}
        </div>

        <div className="w-1/2 flex flex-col justify-center items-center gap-y-8 max-sm:w-full">
          <motion.h1 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-bold text-5xl text-[#E2E9C0] text-center max-sm:text-3xl"
          >
            Notre Philosophie
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 max-w-md"
          >
            <h3 className="text-2xl font-semibold text-center uppercase text-[#E2E9C0] border-b-2 border-[#8B4513] pb-2">
              Excellence & Tradition
            </h3>
            <p className="text-wrap text-base leading-relaxed text-[#E2E9C0]/90 text-justify">
              Depuis trois générations, nous perpétuons un savoir-faire ancestral allié 
              aux meilleures pratiques d'élevage respectueuses de l'environnement. 
              Nos escargots et volailles grandissent en plein air, nourris naturellement 
              pour vous offrir des saveurs authentiques et une qualité irréprochable.
            </p>
            <p className="text-wrap text-base leading-relaxed text-[#E2E9C0]/90 text-justify">
              Nous croyons en une agriculture responsable qui préserve la biodiversité 
              et valorise les circuits courts. Chaque produit que nous vous proposons 
              est le fruit d'un travail passionné et d'un engagement quotidien pour 
              votre satisfaction.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Séparation */}
      <div className="w-full flex justify-center py-8">
        <div className="w-[90%] h-px bg-gradient-to-r from-transparent via-[#8B4513] to-transparent"></div>
      </div>

      {/* Section 3 - Points Forts */}
      <div className="w-full px-10 py-16 flex flex-col justify-center items-center bg-gradient-to-b from-[#1E0F1C] to-[#2A1A2A]">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-12 text-center text-[#E2E9C0] max-sm:text-3xl"
        >
          Nos Engagements
        </motion.h1>

        <div className="w-full px-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-sm:px-0 max-sm:grid-cols-1">
          {servicesData.map((item, index) => (
            <Point 
              key={item.titre}
              titre={item.titre}
              contenu={item.contenu}
              imagesPoint={item.icon}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Section Produits - ProdSwitch */}
      <section id="offreAcceuil" className="py-20 w-full bg-white">
        <div className="flex flex-col w-full justify-start items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-6 max-sm:text-2xl text-[#1E0F1C] text-center"
          >
            Nos Productions d'Exception
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-wrap text-center text-lg text-gray-600 max-w-4xl mb-12 leading-relaxed"
          >
            Découvrez la richesse de notre terroir à travers une sélection de produits 
            élaborés avec passion. Chaque spécialité reflète notre engagement pour 
            la qualité et le respect des traditions culinaires françaises.
          </motion.p>

          <ProdSwitch/>
        </div>
      </section>

      {/* Séparation */}
      <div className="w-full flex justify-center py-8 bg-white">
        <div className="w-[90%] h-px bg-gradient-to-r from-transparent via-[#8B4513] to-transparent"></div>
      </div>

      {/* Section 4 - Notre Histoire */}
      <section className="flex flex-row w-full justify-center items-center py-20 px-10 max-sm:flex-col max-sm:gap-y-10 max-sm:px-4 bg-gradient-to-br from-[#2A1A2A] to-[#1E0F1C]">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex w-1/2 justify-center px-10 max-sm:w-full max-sm:px-0"
        >
          <div className="relative">
            <img 
              src="/images/portraitUn.webp" 
              alt="Éleveurs passionnés d'escargots et volailles" 
              className="h-[500px] w-[400px] object-cover rounded-2xl shadow-2xl max-sm:w-full max-sm:h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F1C]/50 to-transparent rounded-2xl"></div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col w-1/2 justify-center items-start gap-y-6 px-8 max-sm:w-full max-sm:px-0"
        >
          <h1 className="text-5xl font-bold text-wrap text-[#E2E9C0] max-sm:text-3xl leading-tight">
            Une Histoire de Passion
          </h1>

          <div className="space-y-4">
            <p className="text-base leading-relaxed text-[#E2E9C0]/90 text-justify">
              Fondée en 1998, notre entreprise familiale puise ses racines dans 
              l'amour de la terre et le respect des traditions agricoles. 
              De génération en génération, nous avons perfectionné nos méthodes 
              d'élevage pour vous proposer des produits d'une qualité exceptionnelle.
            </p>
            
            <p className="text-base leading-relaxed text-[#E2E9C0]/90 text-justify">
              Notre ferme, nichée au cœur de la campagne française, est un havre 
              de paix où escargots et volailles s'épanouissent en parfaite harmonie 
              avec la nature. Chaque jour, nous veillons au bien-être de nos animaux 
              et à la préservation de notre écosystème.
            </p>

            <p className="text-base leading-relaxed text-[#E2E9C0]/90 text-justify">
              Aujourd'hui, nous sommes fiers de partager avec vous le fruit de 
              notre travail, en vous garantissant des produits sains, savoureux 
              et respectueux de l'environnement.
            </p>
          </div>

          <button className="bg-[#8B4513] hover:bg-[#A0522D] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 mt-4">
            En savoir plus sur notre histoire
          </button>
        </motion.div>
      </section>

    </section>
  )
}

export default Acceuil