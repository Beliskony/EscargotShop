import {FC, useState} from 'react'
import CategoriUn from './switchImages/CategoriUn'
import CategoriDeux from './switchImages/CategoriDeux'
import CategoriTrois from './switchImages/CategoriTrois'
import CategoriQuatre from './switchImages/CategoriQuatre'

interface ProdSwitchProps{
    categories?: {id: number, label: string}[]
}

const ProdSwitch:FC<ProdSwitchProps> = ({categories=[
    {id:1, label:"Escargots"},
    {id:2, label:"Volailles"},
    {id:3, label:"Plats escargots"},
    {id:4, label:"Plats Vollailes"} ]}) => {
        
        const [activeTab, setActiveTab] = useState(categories[0].id)

        // Calculer l'index de l'onglet actif pour l'animation
  const activeIndex = categories.findIndex((cat) => cat.id === activeTab)

  
  const ContenuRendu = () => {
    switch (activeTab) {
        case 1:
            return <CategoriUn/>
        case 2:
            return <CategoriDeux/>
        case 3:
            return <CategoriTrois/>
        case 4:
            return <CategoriQuatre/>
        default:
            return <CategoriUn/>
    }
  }

   
  return (
    <div className='w-full p-5 flex justify-center items-center max-sm:p-1'>
        {/*Navigation des categories*/}
        <div className='my-6 w-[70%] max-sm:w-full'>
            <div className='flex justify-between items-center'>
                {categories.map((categories) => (
                    <button key={categories.id} onClick={() => setActiveTab(categories.id)} className={`px-3 py-1 text-sm font-bold
                    transition-colors ${activeTab===categories.id ? "text-[#1E0F1C]" : "text-[#7AA95C]"}`}>
                       {categories.label}
                    </button>
                ))}
            </div>
        
        {/*ligne et indicateur*/}
           <div className='relative w-full h-px bg-[#7AA95C] mt-2'>
                <div className='absolute h-1 bg-[#1E0F1C] rounded-full transition-all duration-300 ease-in-out'
                style={{ width: `${100 / categories.length}%`, left: `${(activeIndex * 100) / categories.length}%` }}>

           </div>
        </div>

        {/*contenu*/}
        <div className='w-[90%]  ml-10 mt-20 max-sm:ml-0 max-sm:w-full md:ml-0 md:w-full transition-all duration-300 ease-in-out'>
            {ContenuRendu()}</div>
        </div>

    </div>
  )
}

export default ProdSwitch