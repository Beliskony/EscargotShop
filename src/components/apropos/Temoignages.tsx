import { FC } from "react"

interface TemoignagesProps{
    nom: string
    temps: string
    texte?: string
}

const Temoignages:FC<TemoignagesProps> = ({nom, texte, temps}) => {
  return (
    <div className="flex flex-col justify-around items-center p-5 w-96 h-52 bg-[#E2E9C0]">
        <div className="flex flex-row w-full justify-between items-center ">

          <div className="flex flex-row w-1/2 justify-center items-center gap-x-2">
            <img src="/icons/avatar.png" className="rounded-full h-14 w-14"/>
              <div className="flex flex-col justify-center items-center h-28">  
                <h4 className="text-lg text-[#1E0F1C] font-semibold">{nom}</h4>
                <img src="/icons/star.png" className="h-12 w-12"/>
              </div>
          </div>
          <div>
            <h4 className="flex justify-end">{temps}</h4>
          </div>

        </div>

        <div className="w-full px-2 text-xs text-wrap text-left flex text-[#1E0F1C]">
              {texte}
        </div>

    </div>
  )
}

export default Temoignages