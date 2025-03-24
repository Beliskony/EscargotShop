import Lorum from "../components/acceuil/Lorum"
import Point from "../components/acceuil/Point"
import PresentationText from "../components/acceuil/PresentationText"
import ProdSwitch from "../components/acceuil/ProdSwitch"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"


function Acceuil() {
  return (
    <section className="flex flex-col w-full h-full">
      <div style={{backgroundImage: 'url(/images/bgAcceuil.webp)', backgroundSize:"cover"}} className="h-[600px] flex flex-col">
        <NavBar/>

        <PresentationText titre="Entree 2025"
                          paragraphe="Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio 
                          non explicabo odit sit minima quasi ut voluptatem Quis! Aut exercitationem accusantium et aperiam enim est dignissimos Quis.
                          Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio non explicabo odit sit minima
                           quasi ut voluptatem Quis! Aut exercitationem accusantium et aperiam enim est dignissimos Quis. Aut exercitationem accusantium et aperiam enim est dignissimos Quis.
                          Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio non explicabo odit sit minima
                           quasi ut voluptatem Quis! Aut exercitationem accusantium et aperiam enim est dignissimos Quis. Aut exercitationem accusantium et aperiam enim est dignissimos Quis.
                          Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio non explicabo odit sit minima
                           quasi ut voluptatem Quis! Aut exercitationem accusantium et aperiam enim est dignissimos Quis."/>
      </div>
       
       {/*section 2 */}
      <div className="w-full h-[500px] flex flex-row justify-around mt-10 mb-5 p-10 max-sm:flex-col max-sm:px-2 md:p-4 max-sm:mt-3">
        <div className="w-1/2 flex flex-col justify-center items-center max-sm:w-full">
             <Lorum titre="Lorum 1"
                    contenu="Sit galisum distinctio non explicabo odit sit minima
                           quasi ut voluptatem Quis! Aut exercitationem accusantium et aperiam enim est dignissimos Quis."/>
            
            <Lorum titre="Lorum 1"
                    contenu="Sit galisum distinctio non explicabo odit sit minima
                           quasi ut voluptatem Quis! Aut exercitationem accusantium et aperiam enim est dignissimos Quis."/>

            <Lorum titre="Lorum 1"
                    contenu="Sit galisum distinctio non explicabo odit sit minima
                           quasi ut voluptatem Quis! Aut exercitationem accusantium et aperiam enim est dignissimos Quis."/>
        </div>

        {/*<div className="w-1/3 flex justify-center items-center">
             <img src="/images/img1.webp" className="w-full h-full object-contain" />
        </div>*/}

        <div className="w-1/2 flex flex-col justify-center items-center gap-y-16 max-sm:w-full">
           <h1 className="font-bold text-4xl">Title</h1>
           <div className="space-y-5" >
                <h3 className="text-2xl underline uppercase text-center">Pouvoir d'achat</h3>
                <p className="text-wrap text-xs font-medium font-serif text-left">quasi ut voluptatem Quis! Aut exercitationem accusantium et aperiam enim est dignissimos Quis. Aut exercitationem accusantium et aperiam enim est dignissimos Quis.
            Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus. Sit galisum distinctio non explicabo odit sit minima
            quasi ut voluptatem Quis! Aut exercitationem accusantium et aperiam enim est dignissimos Quis. Aut exercitationem accusantium et aperiam enim est dignissimos Quis.
            Qui fuga dolor sed enim sunt aut neque sunt sit impedit nihil sed tempora doloribus.</p>
            </div>
        </div>
      </div>

      {/*separation*/}
      <div className="w-full flex justify-center my-5">
         <hr className="w-[90%]"/>
      </div>

      {/*section 3*/}

      <div className="w-full px-10 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold my-5 text-center">Other</h1>

        <div className="w-full px-5 flex flex-row my-5 gap-x-5 justify-center max-sm:flex-col max-sm:gap-x-0 max-sm:gap-y-4 max-sm:px-0
        max-md:grid-cols-2 max-md:grid-rows-2 max-md:grid max-sm:flex">
          <Point imagesPoint="https://i.pinimg.com/474x/03/14/20/03142067e464ff265387c7f0fb464c37.jpg"
                 titre="point"
                 contenu="quasi ut voluptatem Quis! Aut exercitationem accusantium et aperiam enim est dignissimos Quis."/>

          <Point imagesPoint="https://i.pinimg.com/474x/03/14/20/03142067e464ff265387c7f0fb464c37.jpg"
                 titre="point"
                 contenu="quasi ut voluptatem Quis! Aut exercitationem accusantium et aperiam enim est dignissimos Quis."/>

          <Point imagesPoint="https://i.pinimg.com/474x/03/14/20/03142067e464ff265387c7f0fb464c37.jpg"
                 titre="point"
                 contenu="quasi ut voluptatem Quis! Aut exercitationem accusantium et aperiam enim est dignissimos Quis."/>

          <Point imagesPoint="https://i.pinimg.com/474x/03/14/20/03142067e464ff265387c7f0fb464c37.jpg"
                 titre="point"
                 contenu="quasi ut voluptatem Quis! Aut exercitationem accusantium et aperiam enim est dignissimos Quis."/>

        </div>
      </div>

      {/*section 3 prod switch*/}

      <section id="offreAcceuil" className="mb-10 w-full h-[750px]">
        <div  className="flex h-[450px] flex-col w-full justify-start items-center pt-20 bg-gray-400">
          <h1 className="text-3xl font-medium my-3 max-sm:text-xl">Quelques une de nos productions</h1>
          <p className="text-wrap text-center text-xs mx-28 max-sm:mx-2">
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. 
          </p>

          <ProdSwitch/>

        </div>

      </section>


      {/*separation*/}
      <div className="w-full flex justify-center my-5">
         <hr className="w-[90%]"/>
      </div>

      {/*Section 4 texte handling*/}
      <section className="flex flex-row w-full justify-center items-center px-5 max-sm:flex-col max-sm:gap-y-10 max-sm:px-0.5">
        <div className="flex w-1/2 justify-end px-10 max-sm:w-full max-sm:px-0">
          <img src="/images/portraitUn.webp" alt="image montrant deux entrepreneurs" className="h-[500px] w-[400px] max-sm:w-full"/>
        </div>

        <div className="flex flex-col w-1/2 justify-center items-center text-left gap-y-4 px-5 max-sm:w-full">
            <h1 className="text-3xl font-bold flex w-full text-wrap ">The title text</h1>

            <p className="text-xs">
              Ab quae quibusdam hic nemo atque sed omnis dolores est illo exercitationem qui suscipit temporibus et nobis 
              laudantium et molestias distinctio. Sit dolorem veritatis et tempore internos aut error eveniet At quaerat voluptas 
              eum quos sint aut ducimus debitis. Et voluptate provident non vitae voluptas et dolorum officia et quasi sunt a voluptas 
              facere sed nihil nesciunt. Ut amet magnam aut mollitia natus vel minima odit non dicta excepturi et ducimus nisi eum dignissimos 
              veritatis? Ab quae quibusdam hic nemo atque sed omnis dolores est illo exercitationem qui suscipit temporibus et nobis 
              laudantium et molestias distinctio. Sit dolorem veritatis et tempore internos aut error eveniet At quaerat voluptas 
              eum quos sint aut ducimus debitis. Et voluptate provident non vitae voluptas et dolorum officia et quasi sunt a voluptas 
              facere sed nihil nesciunt. Ut amet magnam aut mollitia natus vel minima odit non dicta excepturi et ducimus nisi eum dignissimos 
              veritatis?<br/> <br/>

              Ab quae quibusdam hic nemo atque sed omnis dolores est illo exercitationem qui suscipit temporibus et nobis 
              laudantium et molestias distinctio. Sit dolorem veritatis et tempore internos aut error eveniet At quaerat voluptas 
              eum quos sint aut ducimus debitis.
            </p>

        </div>

      </section>
      
      {/*le Footer*/}
      <section className="w-full mt-10">
        <Footer/>
      </section>
    </section>
  )
}

export default Acceuil
