import { FC } from 'react'

interface TexteEntree{
    titre?:string,
    paragraphe: string
}

const PresentationText:FC<TexteEntree> = ({titre,paragraphe}) => {
  return (
    <div className='w-3/5 text-wrap text-white flex flex-col gap-y-3 my-10 justify-center ml-10 mt-28 md:w-[80%] md:ml-6 max-sm:mx-0 max-sm:w-full max-sm:text-center'>
        <h1 className='underline text-5xl font-bold my-2 uppercase md:text-3xl max-sm:text-2xl'>{titre}</h1>
        <p className='text-left text-xs w-[85%] max-sm:w-full max-sm:text-center max-sm:mx-0.5'>{paragraphe}</p>
    </div>
  )
}

export default PresentationText