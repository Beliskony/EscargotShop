import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import BoxService from "../components/sevices/BoxService"

function Services() {
  return (
    <section className="flex flex-col w-full h-full justify-center">
        {/*le header*/}
        <div style={{backgroundImage: 'url(/images/bgService.webp)', backgroundSize:"cover"}} className="h-[300px] flex flex-col">
            <NavBar/>

            <div className="flex h-full w-full justify-center items-center">
                <h1 className="text-5xl text-white font-bold underline">Nos Services</h1>
            </div>
        </div>

        {/*Corps*/}
        <section className="flex flex-col justify-center items-center my-10">

            <div className="flex w-full justify-center my-5">
                <h1 className="text-5xl font-bold underline text-center">Des servives divers</h1>
            </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-x-5 gap-y-5 my-5 p-10">
           <div className="justify-center items-center flex">
            <div className="h-56 w-60 justify-center items-left flex flex-col rounded bg-gray-400 p-5 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                <h5 className="text-xs text-[#A7001E] text-left flex">Que fesons nous?</h5>
                <h1 className="text-xl font-extrabold text-black text-wrap flex text-left">
                    un elevage de qualite et varie</h1>
            </div></div>

                <BoxService icone="/icons/farm.png"
                            titre="Cultivation ouverte"
                            texte="Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio 
                          non explicabo odit sit minima quasi"/>

                <BoxService icone="/icons/farm.png"
                            titre="Cultivation ouverte"
                            texte="Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio 
                          non explicabo odit sit minima quasi"/>

                <BoxService icone="/icons/farm.png"
                            titre="Cultivation ouverte"
                            texte="Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio 
                          non explicabo odit sit minima quasi"/>

                <BoxService icone="/icons/farm.png"
                            titre="Cultivation ouverte"
                            texte="Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio 
                          non explicabo odit sit minima quasi"/>

                <BoxService icone="/icons/farm.png"
                            titre="Cultivation ouverte"
                            texte="Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio 
                          non explicabo odit sit minima quasi"/>

        </div></section>

        {/*le footer*/}
        <section>
           <Footer/> 
        </section>

    </section>
  )
}

export default Services
