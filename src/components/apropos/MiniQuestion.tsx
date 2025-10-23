import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { useState } from "react"

const MiniQuestion = () => {
  const [openItem, setOpenItem] = useState<string | null>(null)

  const questions = [
    {
      id: "item-1",
      question: "🐌 Quelle est la fraîcheur de vos escargots ?",
      answer: "Nos escargots sont récoltés et préparés quotidiennement. Ils sont expédiés le jour même pour garantir une fraîcheur optimale et des saveurs authentiques."
    },
    {
      id: "item-2",
      question: "🍗 Comment sont élevées vos volailles ?",
      answer: "Nos volailles sont élevées en plein air, avec accès à des parcours herbeux. Elles sont nourries avec des céréales naturelles sans OGM pour une chair savoureuse et ferme."
    },
    {
      id: "item-3",
      question: "🚚 Livrez-vous partout en Côte d'Ivoire ?",
      answer: "Nous livrons dans tout Abidjan et ses environs. Pour les autres régions, nous étudions au cas par cas. Contactez-nous pour connaître les possibilités de livraison."
    },
    {
      id: "item-4",
      question: "⏰ Quels sont vos délais de livraison ?",
      answer: "À Abidjan : livraison sous 24h pour les commandes passées avant 14h. En région : 2-3 jours ouvrés. Nous vous tenons informés du suivi de votre commande."
    },
    {
      id: "item-5",
      question: "💰 Proposez-vous des tarifs dégressifs ?",
      answer: "Oui, nous accordons des remises progressives à partir de 100€ d'achat. Pour les professionnels, nous établissons des devis personnalisés avec conditions avantageuses."
    },
    {
      id: "item-6",
      question: "🌱 Vos produits sont-ils biologiques ?",
      answer: "Nous pratiquons une agriculture raisonnée et respectueuse de l'environnement. Bien que non labellisés bio, nos méthodes d'élevage privilégient le naturel et le bien-être animal."
    }
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full  mx-auto"
    >
      {/* En-tête */}
      <div className="text-center mb-8">
        <motion.h3 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-[#E2E9C0] mb-3"
        >
          Questions Fréquentes
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-[#E2E9C0]/70"
        >
          Tout ce que vous devez savoir sur nos produits et services
        </motion.p>
      </div>

      {/* Accordéon */}
      <Accordion 
        type="single" 
        collapsible 
        value={openItem || undefined}
        onValueChange={setOpenItem}
        className="w-full space-y-4"
      >
        {questions.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ scale: 1.01 }}
          >
            <AccordionItem 
              value={item.id}
              className="border-0 rounded-2xl overflow-hidden bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <AccordionTrigger className="px-6 py-5 text-lg font-semibold text-[#E2E9C0] hover:text-[#8B4513] transition-colors duration-300 [&[data-state=open]]:bg-white/10 [&[data-state=open]]:text-[#8B4513]">
                <span className="text-left flex items-start gap-3">
                  <span className="flex-shrink-0 text-xl">{item.question.split(' ')[0]}</span>
                  <span>{item.question.split(' ').slice(1).join(' ')}</span>
                </span>
              </AccordionTrigger>
              
              <AccordionContent className="px-6 pb-5 text-[#E2E9C0]/80 leading-relaxed bg-white/5 border-t border-white/10">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.answer}
                </motion.div>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>


    </motion.section>
  )
}

export default MiniQuestion