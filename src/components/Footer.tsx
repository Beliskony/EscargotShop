import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <section className="flex flex-row w-full bg-gray-400 max-sm:flex-col">

        {/*Partie gauche*/}
        <div className="flex flex-col w-1/3 justify-cente text-white items-start p-5 gap-y-3 bg-gray-600 mx-5 max-sm:w-full max-sm:mx-0">
           <img src="" sizes="" alt="logo"/>

           <p className="text-xs text-wrap text-left w-[90%]">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi 
            ut aliquid ex ea commodi consequatur.</p>

            <div className="flex flex-col justify-center items-start gap-y-2">
              {/*icon Localisation*/}
              <a target="_blank" rel="noopener noreferrer"><div className="flex flex-row justify-center items-center gap-x-2">

                   <div className="h-12 w-12 bg-gray-200 rounded-xl flex justify-center items-center">
                      <img src="/icons/location.png" className="h-7 w-7"/>
                   </div>

                   <div className="flex flex-col text-left justify-around items-start">
                       <h3>Position</h3>
                       <h4>Abidjan, Cocody</h4>
                   </div>
                </div></a>

                 {/*icon appel*/}
              <a href="#" target="_blank" rel="noopener noreferrer"><div className="flex flex-row justify-center items-center gap-x-2">

                   <div className="h-12 w-12 bg-gray-200 rounded-xl flex justify-center items-center">
                      <img src="/icons/call.png" className="h-7 w-7"/>
                   </div>

                   <div className="flex flex-col text-left justify-around items-start">
                       <h3>Call Us</h3>
                       <h4>+225 07-07-07-07-07</h4>
                   </div>
                </div></a>

                 {/*icon mail*/}
              <a href="#" target="_blank" rel="noopener noreferrer"><div className="flex flex-row justify-center items-center gap-x-2">

                   <div className="h-12 w-12 bg-gray-200 rounded-xl flex justify-center items-center">
                      <img src="/icons/mail.png" className="h-7 w-7"/>
                   </div>

                   <div className="flex flex-col text-left justify-around items-start">
                       <h3>Mail Us</h3>
                       <h4>infos@gmail.com</h4>
                   </div>
                </div></a>

            </div>
        </div>
  
        {/*Partie droite en double ligne*/}
        <div className="flex flex-col w-2/3 justify-start items-start p-5 gap-y-3 max-sm:w-full max-sm:flex-col-reverse">
        {/*ligne une*/}
          <div className="flex flex-row w-full justify-start py-3 border-b max-sm:justify-center">

            <div className="flex flex-col gap-y-2 max-sm:flex-row max-sm:gap-x-3 max-sm:items-center">
                <h4>Follow Us</h4>
                <div className="flex flex-row gap-x-1">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <img src="/icons/x.png" className="h-5 w-5"/>
                    </a>

                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <img src="/icons/fb.png" className="h-5 w-5"/>
                    </a>

                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <img src="/icons/insta.png" className="h-5 w-5"/>
                    </a>

                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <img src="/icons/linkedin.png" className="h-5 w-5"/>
                    </a>

                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <img src="/icons/tiktok.png" className="h-5 w-5"/>
                    </a>
                </div>
            </div>

          </div>

          {/*ligne deux*/}

          <div className="flex flex-row w-full justify-between max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-y-3">

            <div className="flex flex-col justify-start items-center gap-y-3 w-1/3">
              <h2 className="text-2xl font-bold">Navigation</h2>
            <div className="flex flex-col gap-y-2 justify-start items-center">

              <Link to="/Apropos">
                <h5 className="font-light text-xs hover:underline hover:font-bold hover:transition-all hover:duration-100">Apropos</h5>
              </Link>

              <Link to="/Projets">
                <h5 className="font-light text-xs hover:underline hover:font-bold hover:transition-all hover:duration-100">Projets</h5>
              </Link>

              <Link to="/Services">
                <h5 className="font-light text-xs hover:underline hover:font-bold hover:transition-all hover:duration-100">Services</h5>
              </Link>

              <Link to="/Contacts">
                <h5 className="font-light text-xs hover:underline hover:font-bold hover:transition-all hover:duration-100">Contacts</h5>
              </Link>
              </div>
            </div>


            <div className="flex flex-col justify-around items-center gap-y-2 w-1/3">
              <h2 className="text-2xl font-bold">Produits</h2>

              <Link to="/">
                <h5 className="font-light text-xs hover:underline hover:font-bold hover:transition-all hover:duration-100">Escargots</h5>
              </Link>

              <Link to="/">
                <h5 className="font-light text-xs hover:underline hover:font-bold hover:transition-all hover:duration-100">Vollailes</h5>
              </Link>

            </div>


            <div className="flex flex-col justify-around items-center gap-y-2 w-1/3">
              <h2 className="text-2xl font-bold">Support</h2>

              <Link to="/">
                <h5 className="font-light text-xs hover:underline hover:font-bold hover:transition-all hover:duration-100">Support Client</h5>
              </Link>

              <Link to="/">
                <h5 className="font-light text-xs hover:underline hover:font-bold hover:transition-all hover:duration-100">Terms Et Servces</h5>
              </Link>

              <Link to="/">
                <h5 className="font-light text-xs hover:underline hover:font-bold hover:transition-all hover:duration-100">Refound</h5>
              </Link>

            </div>

          </div>

        </div>

    </section>
  )
}

export default Footer