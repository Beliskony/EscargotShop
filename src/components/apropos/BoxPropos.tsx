import { FC } from "react"

interface boxProposProps{
    icone: string
    titre: string
    contenue: string
}

const BoxPropos:FC<boxProposProps> = ({icone, titre, contenue}) => {
  return (
    <div className='flex flex-col w-72 h-36 bg-gray-300 p-5'>
      <div className='flex flex-row gap-x-2'>
        <img src={icone} className="h-5 w-5"/>
        <h1 className="text-xl font-medium">{titre}</h1>
      </div>

      <p className="text-left text-xs text-wrap flex">{contenue}</p>

    </div>
  )
}

export default BoxPropos