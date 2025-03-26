import { FC } from "react"

interface BoxServiceProps{
    icone: string
    titre: string
    texte: string
}

const BoxService:FC<BoxServiceProps> = ({icone, titre, texte}) => {
  return (
    <div className={`h-72 w-96 flex flex-col p-5 justify-around items-start rounded bg-[#E2E9C0] hover:bg-[#7AA95C]
    hover:scale-110 transition-all ease-in-out duration-300 max-sm:h-60 max-sm:w-full max-sm:p-1 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]`}>
      <div className="flex flex-row justify-center items-center gap-x-2 max-sm:gap-0.5">
        <img src={icone} className="h-14 w-14 justify-center max-sm:h-10 max-sm:w-10"/>
        <h1 className="w-full text-xl font-bold text-wrap text-center hover:text-[#E2E9C0]">{titre}</h1>
      </div>

        <div className="w-full group-hover:opacity-100 text-lg px-2 text-left text-[#1E0F1C] duration-300 hover:text-[#E2E9C0]">
            {texte}
        </div>
    </div>
  )
}

export default BoxService