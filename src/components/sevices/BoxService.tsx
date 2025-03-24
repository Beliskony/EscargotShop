import { FC } from "react"

interface BoxServiceProps{
    icone: string
    titre: string
    texte: string
}

const BoxService:FC<BoxServiceProps> = ({icone, titre, texte}) => {
  return (
    <div className={`h-72 w-80 flex flex-col p-5 justify-center items-center rounded relative group hover:bg-gray-300 ease-in-out shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]`}>
        <img src={icone} className="h-10 w-10 justify-center transition-opacity duration-300 group-hover:opacity-0"/>
        <h1 className="w-full text-base  font-bold text-wrap text-center transition-opacity duration-300 group-hover:opacity-0">{titre}</h1>

        <div className="w-full absolute opacity-0 group-hover:opacity-100 text-[15px] px-2 text-left bg-gray-300 text-white transition-opacity duration-300">
            {texte}
        </div>
    </div>
  )
}

export default BoxService