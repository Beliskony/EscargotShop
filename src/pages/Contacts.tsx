
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Formulaire from '@/components/contact/Formulaire'

function Contacts() {
  return (
    <section className="flex flex-col w-full h-full bg-[#7AA95C]">
        {/*le header*/}
        <div style={{backgroundImage: 'url(/images/bgApropos.webp)', backgroundSize:"cover"}} className="h-[300px] flex flex-col">
            <NavBar/>
        </div>

       {/*corp section 1*/}
        <section className='w-full h-[650px] flex flex-row justify-center items-center p-10 my-10 bg-[#E2E9C0] max-sm:w-full max-sm:h-full max-sm:p-1 max-sm:flex-col'>
          <div className='w-3/5 h-full justify-center items-center flex flex-col p-4 max-sm:w-full max-sm:p-1'>
            <div className='flex flex-col gap-y-2'>
              <h1 className='text-4xl font-bold text-wrap max-sm:text-2xl'>Nous somme pret a vous ecoutez et vous satisfaire cher clients</h1>
              <p>Faites vous entendre, un formlaire est mis a votre disposition pour toute commande ou reclamation</p>
            </div>

            <div className='grid grid-cols-2 grid-rows-2 w-[65%] gap-y-1.5 my-5 max-sm:w-full max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center'>

              <div className='flex flex-col w-52 h-32 justify-center items-center p-3 rounded shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
                <h1 className='font-bold text-2xl'>Call Us</h1>
                <a href='tel:+2250707070707'>
                  <h3 className='text-lg font-light'>+225 07-07-07-07-07</h3>
                </a>
              </div>

              <div className='flex flex-col w-52 h-32 justify-center items-center p-3 rounded shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
                <h1 className='font-bold text-2xl'>Position</h1>
                <a href='https://maps.app.goo.gl/TjZAvT8ms7CDe6rL9'>
                  <h3 className='text-lg font-light'>Abidjan, Koumassi</h3>
                </a>
              </div>

              <div className='flex flex-col w-52 h-32 justify-center items-center p-3 rounded shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
                <h1 className='font-bold text-2xl'>Mail Us</h1>
                <a href='mailto:info@gmail.com'>
                  <h3 className='text-lg font-light'>info@gmail.com</h3>
                </a>
              </div>

            <div className='flex flex-col w-52 h-32 justify-center items-center p-3 rounded shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
              <h4 className='font-bold text-2xl'>Follow Us</h4>
                <div className="flex flex-row gap-1">
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
          
          </div>

          <div className='w-2/5 h-full p-5 max-sm:w-full max-sm:p-1'>
            <Formulaire/>
          
          </div>

        </section>

        {/*la map*/}
        <section className='w-full h-80 my-5 max-sm:h-52 '>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63564.26572624499!2d-3.9781658804714035!3d5.299072554980033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1edd59f2ceba5%3A0x1d277795b2626983!2sKoumassi%2C%20Abidjan!5e0!3m2!1sfr!2sci!4v1743004165648!5m2!1sfr!2sci"
          style={{ width:"100%", height:"100%", border:0}}  loading="lazy">
          </iframe>
        </section>

        {/*le footer*/}
        <section>
           <Footer/> 
        </section>

    </section>
  )
}

export default Contacts
