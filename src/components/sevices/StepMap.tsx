import { FC } from "react"

interface StepMapProps{
    step: string
    titre: string
    texte: string
    bordureSide: string
}

const StepMap:FC<StepMapProps> = ({step,titre,texte,bordureSide}) => {
  return (
    <div className={`flex flex-col w-80 h-52 ${bordureSide} px-2 justify-center items-center max-sm:w-full`}>
        <div className="flex flex-col p-5 gap-y-1 text-leftq bg-[#7AA95C] w-full">
            <h1 className="text-xl text-[#A7001E] font-semibold">{step}</h1>
            <h3 className="text-lg font-semibold text-[#1E0F1C]">{titre}</h3>

            <p className="text-xs text-wrap font-semibold text-[#1E0F1C]">{texte}</p>
        </div>

    </div>
  )
}

export default StepMap