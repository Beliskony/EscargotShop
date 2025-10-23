import { motion } from "framer-motion"

function Produits() {
  
  // Données des produits
  const volailles = [
    {
      nom: "Poulet à Teinte Noire",
      prix: "45$",
      description: "Poulet fermier élevé en plein air, chair savoureuse et texture unique",
      image: "https://i.pinimg.com/474x/16/9f/4f/169f4f930526bb33bd0ca700a3b7f93a.jpg"
    },
    {
      nom: "Poulet Africain",
      prix: "12$",
      description: "Race locale élevée naturellement, parfaite pour les plats traditionnels",
      image: "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=400&h=300&fit=crop"
    },
    {
      nom: "Pondeuse",
      prix: "25$",
      description: "Poules pondeuses robustes, œufs frais garantis quotidiennement",
      image: "https://images.unsplash.com/photo-1599159348282-2d74780874c9?w=400&h=300&fit=crop"
    },
    {
      nom: "Cailles",
      prix: "5$",
      description: "Cailles délicates, viande fine et raffinée pour les gourmets",
      image: "https://images.unsplash.com/photo-1559454434-d90e6c5d06d3?w=400&h=300&fit=crop"
    },
    {
      nom: "Poussin de Race",
      prix: "5$ ~ 28$",
      description: "Poussins de races sélectionnées pour l'élevage ou la consommation",
      image: "https://images.unsplash.com/photo-1559454434-d90e6c5d06d3?w=400&h=300&fit=crop"
    }
  ]

  const escargots = [
    {
      nom: "Escargot Géant d'Afrique (Par Kilo)",
      prix: "12$",
      description: "Escargots frais de grande taille, chair ferme et savoureuse",
      image: "https://i.pinimg.com/736x/c7/08/0b/c7080b7135f7f9098331b8827f1cbd07.jpg"
    },
    {
      nom: "Poudre d'Escargots",
      prix: "20$",
      description: "Poudre nutritive pour vos préparations culinaires et cosmétiques",
      image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&h=300&fit=crop"
    },
    {
      nom: "Escargots Séchés",
      prix: "30$",
      description: "Escargots séchés naturellement, conservation longue durée",
      image: "https://images.unsplash.com/photo-1551504738-4d85361ee0e4?w=400&h=300&fit=crop"
    }
  ]

  return (
    <section className="flex flex-col w-full min-h-screen bg-gradient-to-b from-[#1E0F1C] to-[#2A1A2A] pt-20">
      
      {/* En-tête de la page */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16 px-4"
      >
        <h1 className="text-6xl font-bold text-[#E2E9C0] mb-6 max-sm:text-4xl">
          Nos Produits
        </h1>
        <p className="text-xl text-[#E2E9C0]/80 max-w-2xl mx-auto leading-relaxed">
          Découvrez notre sélection de volailles et escargots d'exception, 
          élevés avec passion dans le respect de la tradition.
        </p>
      </motion.div>

      {/* Section Volailles */}
      <section id='volailles' className='w-full py-16 bg-gradient-to-br from-[#2A1A2A] to-[#1E0F1C]'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col lg:flex-row justify-between items-center gap-12'>
            
            {/* Contenu texte */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className='w-full lg:w-1/2 flex flex-col gap-8'
            >
              <div>
                <h1 className='text-5xl font-bold text-[#E2E9C0] mb-4 max-sm:text-3xl'>
                  Nos Volailles
                </h1>
                <p className='text-[#E2E9C0]/70 text-lg leading-relaxed'>
                  Des volailles élevées en plein air, nourries naturellement 
                  pour une chair savoureuse et une qualité exceptionnelle.
                </p>
              </div>

              {/* Liste des produits */}
              <div className='space-y-6'>
                {volailles.map((volaille, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className='flex justify-between items-start p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#E2E9C0]/30 transition-all duration-300 group'
                  >
                    <div className='flex-1'>
                      <h3 className='text-xl font-semibold text-[#E2E9C0] mb-2 group-hover:text-white transition-colors'>
                        {volaille.nom}
                      </h3>
                      <p className='text-sm text-[#E2E9C0]/70 leading-relaxed'>
                        {volaille.description}
                      </p>
                    </div>
                    <div className='ml-6'>
                      <span className='text-2xl font-bold text-[#8B4513] bg-white/10 px-4 py-2 rounded-full'>
                        {volaille.prix}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className='w-full lg:w-1/2 flex justify-center'
            >
              <div className="relative">
                <img 
                  src={volailles[0].image} 
                  alt='Nos volailles' 
                  className='rounded-3xl shadow-2xl w-full max-w-lg object-cover h-[600px]'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F1C] via-transparent to-transparent rounded-3xl opacity-50" />
                
                {/* Badge */}
                <div className="absolute top-6 left-6 bg-[#8B4513] text-white px-4 py-2 rounded-full font-semibold">
                  🍗 Frais du jour
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Section Escargots */}
      <section id='escargots' className='w-full py-16 bg-gradient-to-br from-[#7AA95C] to-[#5D8A4A]'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col lg:flex-row-reverse justify-between items-center gap-12'>
            
            {/* Contenu texte */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className='w-full lg:w-1/2 flex flex-col gap-8'
            >
              <div>
                <h1 className='text-5xl font-bold text-[#1E0F1C] mb-4 max-sm:text-3xl'>
                  Nos Mollusques
                </h1>
                <p className='text-[#1E0F1C]/80 text-lg leading-relaxed'>
                  Des escargots élevés dans leur environnement naturel, 
                  préparés selon les méthodes traditionnelles pour préserver 
                  toutes leurs saveurs.
                </p>
              </div>

              {/* Liste des produits */}
              <div className='space-y-6'>
                {escargots.map((escargot, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className='flex justify-between items-start p-6 bg-white/20 rounded-2xl border border-white/30 hover:border-[#1E0F1C]/50 transition-all duration-300 group'
                  >
                    <div className='flex-1'>
                      <h3 className='text-xl font-semibold text-[#1E0F1C] mb-2 group-hover:text-[#2A1A2A] transition-colors'>
                        {escargot.nom}
                      </h3>
                      <p className='text-sm text-[#1E0F1C]/70 leading-relaxed'>
                        {escargot.description}
                      </p>
                    </div>
                    <div className='ml-6'>
                      <span className='text-2xl font-bold text-[#1E0F1C] bg-white/30 px-4 py-2 rounded-full'>
                        {escargot.prix}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className='w-full lg:w-1/2 flex justify-center'
            >
              <div className="relative">
                <img 
                  src={escargots[0].image} 
                  alt='Nos escargots' 
                  className='rounded-3xl shadow-2xl w-full max-w-lg object-cover h-[600px]'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#7AA95C] via-transparent to-transparent rounded-3xl opacity-50" />
                
                {/* Badge */}
                <div className="absolute top-6 left-6 bg-[#1E0F1C] text-white px-4 py-2 rounded-full font-semibold">
                  🐌 Produit du terroir
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="py-16 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à Commander ?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous pour passer commande ou obtenir plus d'informations sur nos produits.
          </p>
          <div className="flex gap-4 justify-center max-sm:flex-col max-sm:items-center">
            <button className="bg-white text-[#8B4513] font-semibold px-8 py-3 rounded-full hover:bg-[#E2E9C0] transition-all duration-300 hover:scale-105">
              Commander maintenant
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-[#8B4513] transition-all duration-300">
              Nous contacter
            </button>
          </div>
        </div>
      </motion.section>

    </section>
  )
}

export default Produits