import { useState } from "react"
import {motion} from "framer-motion"
import { Link } from "react-router-dom"


const NavBar = () => {
    const [isOpen, SetIsOpen] = useState(false)
  return (
    <section className="bg-transparent w-full h-16 backdrop-blur-lg flex items-center">
        <nav className="px-10 sm:px-6 lg:px-8 w-full justify-between flex flex-row absolute">
            <div className="flex item-center text-3xl text-gray-500 font bold w-1/5 justify-center">logo</div>

            <div className="max-sm:hidden flex flex-row w-4/5 items-center justify-end">
                <Link to="/" className="block py-2 px-4 text-gray-500 text-sm hover:text-2xl hover:text-white hover:font-bold">
                    Acceuil</Link>

                <Link to="/Services" className="block py-2 px-4 text-gray-500 hover:text-2xl hover:text-white hover:font-bold">
                    Servcice</Link>

                <Link to="/Apropos" className="block py-2 px-4 text-gray-500 hover:text-2xl hover:text-white hover:font-bold">
                    A propos</Link>

                <Link to="/Contacts" className="block py-2 px-4 text-gray-500 hover:text-2xl hover:text-white hover:font-bold">
                   Contacts</Link>
                    
                <Link to="/Projets" className="block py-2 px-4 text-gray-500 hover:text-2xl hover:text-white hover:font-bold">
                    Projets</Link>

            </div>
            
            {/*Menu mobile*/}
            <button className="flex flex-col lg:hidden md:hidden text-white z-50" onClick={() => SetIsOpen(!isOpen)}> 
                {isOpen ? <img src="/icons/close.png" className=" absolute right-2 w-20 h-20 z-50"/> : <img src="/icons/menuWhite.png" className="w-8 h-8"/>}
            

            {isOpen && (
                <motion.div initial={{opacity: 0, y: -10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -10}} className="md:hidden bg-white shadow-md fixed top-0 left-0
                w-screen h-screen flex flex-col pt-28 z-40">
                    <Link to="/" className="block py-2 px-4 text-gray-500 hover:text-2xl hover:text-white hover:font-bold">
                        Acceuil</Link>

                    <Link to="/Services" className="block py-2 px-4 text-gray-500 hover:text-2xl hover:text-white hover:font-bold">
                        Servcice</Link>

                    <Link to="/Apropos" className="block py-2 px-4 text-gray-500 hover:text-2xl hover:text-white hover:font-bold">
                        A propos</Link>

                    <Link to="/Contacts" className="block py-2 px-4 text-gray-500 hover:text-2xl hover:text-white hover:font-bold">
                        Contacts</Link>
                    
                    <Link to="/Projets" className="block py-2 px-4 text-gray-500 hover:text-2xl hover:text-white hover:font-bold">
                        Projets</Link>
                </motion.div>
            )} </button>
        </nav>
    </section>
  )
}

export default NavBar