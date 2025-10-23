import { FC, useState } from 'react'
import CategoriUn from './switchImages/CategoriUn'
import CategoriDeux from './switchImages/CategoriDeux'

interface Category {
    id: number
    label: string
}

interface ProdSwitchProps {
    categories?: Category[]
}

// Composant de contenu par catégorie pour une meilleure gestion
const CategoryContent: FC<{ categoryId: number }> = ({ categoryId }) => {
    const components = {
        1: CategoriUn,
        2: CategoriDeux,

    }

    const Component = components[categoryId as keyof typeof components] || CategoriUn
    return <Component />
}

const ProdSwitch: FC<ProdSwitchProps> = ({ 
    categories = [
        { id: 1, label: "Escargots" },
        { id: 2, label: "Volailles" },
    ] 
}) => {
    const [activeTab, setActiveTab] = useState<number>(categories[0].id)
    const activeIndex = categories.findIndex((cat) => cat.id === activeTab)

    return (
        <div className='w-full p-5 flex justify-center items-center max-sm:p-1'>
            <div className='my-6 w-full'>
                {/* Navigation des catégories */}
                <div className='flex justify-between items-center xl:w-1/2 mx-auto gap-x-10 max-sm:gap-x-4'>
                    {categories.map((category) => (
                        <button 
                            key={category.id} 
                            onClick={() => setActiveTab(category.id)} 
                            className={`px-3 py-1 text-sm font-bold transition-colors duration-300 ${
                                activeTab === category.id 
                                    ? "text-[#1E0F1C]" 
                                    : "text-[#7AA95C] hover:text-[#1E0F1C]/70"
                            }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>
                
                {/* Ligne et indicateur */}
                <div className='relative w-full h-px bg-[#7AA95C] mt-2 xl:justify-center xl:w-1/2 mx-auto'>
                    <div 
                        className='absolute h-1 bg-[#1E0F1C] rounded-full transition-all duration-300 ease-in-out'
                        style={{ 
                            width: `${100 / categories.length}%`, 
                            left: `${(activeIndex * 100) / categories.length}%` 
                        }}
                    />
                </div>

                {/* Contenu */}
                <div className='w-full mt-20 transition-all duration-300 ease-in-out'>
                    <CategoryContent categoryId={activeTab} />
                </div>
            </div>
        </div>
    )
}

export default ProdSwitch