
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function Produits() {
  return (
    <section className="flex flex-col w-full h-full bg-[#7AA95C]">
        {/*le header*/}
        <div style={{backgroundImage: 'url(/images/bgApropos.webp)', backgroundSize:"cover"}} className="h-[300px] flex flex-col">
            <NavBar/>
        </div>

        {/*Nos produits*/}
        <section className='w-full flex flex-col text-[#E2E9C0]'>
          {/*Volailles*/}
          <div id='volailles' className='w-full flex flex-row justify-around items-center p-10 bg-[#1E0F1C] max-sm:flex-col max-sm:p-5 max-sm:gap-y-3'>
             <div className='w-1/2 flex flex-col gap-y-7 px-20 max-sm:w-full max-sm:px-3'>

                <h1 className='text-5xl font-bold text-left'>Nos Volailles</h1>

                <div className='flex flex-row justify-between items-center px-4 w-full max-sm:justify-around max-sm:px-0.5'>
                    <div className='flex flex-col gap-y-2 w-2/3'>
                       <h1 className='text-xl font-bold'>Poulet a teinte noir</h1>
                       <p className='text-xs w-[80%] text-wrap px-5 max-sm:px-1 max-sm:w-full'>Lorem ipsum dolor sit amet. Ut eius ipsum id inventore voluptatem quo expedita saepe quo cupiditate fuga.</p>
                    </div>

                    <div className='flex justify-end w-1/3 max-sm:w-full'>
                       <h3 className='text-xl font-bold'>45$</h3>
                    </div>
                </div>

                <div className='flex flex-row justify-between items-center px-4 w-full max-sm:justify-around max-sm:px-0.5'>
                    <div className='flex flex-col gap-y-2 w-2/3'>
                       <h1 className='text-xl font-bold'>Poulet afrcain</h1>
                       <p className='text-xs w-[80%] text-wrap px-5 max-sm:px-1 max-sm:w-full'>Lorem ipsum dolor sit amet. Ut eius ipsum id inventore voluptatem quo expedita saepe quo cupiditate fuga.</p>
                    </div>

                    <div className='flex justify-end w-1/3'>
                       <h3 className='text-xl font-bold'>12$</h3>
                    </div>
                </div>

                <div className='flex flex-row justify-between items-center px-4 w-full max-sm:justify-around max-sm:px-0.5'>
                    <div className='flex flex-col gap-y-2 w-2/3'>
                       <h1 className='text-xl font-bold'>Pondeuse</h1>
                       <p className='text-xs w-[80%] text-wrap px-5 max-sm:px-1 max-sm:w-full'>Lorem ipsum dolor sit amet. Ut eius ipsum id inventore voluptatem quo expedita saepe quo cupiditate fuga.</p>
                    </div>

                    <div className='flex justify-end w-1/3'>
                       <h3 className='text-xl font-bold'>25$</h3>
                    </div>
                </div>

                <div className='flex flex-row justify-between items-center px-4 w-full max-sm:justify-around max-sm:px-0.5'>
                    <div className='flex flex-col gap-y-2 w-2/3'>
                       <h1 className='text-xl font-bold'>cailles</h1>
                       <p className='text-xs w-[80%] text-wrap px-5 max-sm:px-1 max-sm:w-full'>Lorem ipsum dolor sit amet. Ut eius ipsum id inventore voluptatem quo expedita saepe quo cupiditate fuga.</p>
                    </div>

                    <div className='flex justify-end w-1/3'>
                       <h3 className='text-xl font-bold'>5$</h3>
                    </div>
                </div>

                <div className='flex flex-row justify-between items-center px-4 w-full max-sm:justify-around max-sm:px-0.5'>
                    <div className='flex flex-col gap-y-2 w-2/3'>
                       <h1 className='text-xl font-bold'>Poussin de race</h1>
                       <p className='text-xs w-[80%] text-wrap px-5 max-sm:px-1 max-sm:w-full'>Lorem ipsum dolor sit amet. Ut eius ipsum id inventore voluptatem quo expedita saepe quo cupiditate fuga.</p>
                    </div>

                    <div className='flex justify-end w-1/3'>
                       <h3 className='text-xl font-bold'>5$ ~ 28$</h3>
                    </div>
                </div>

             </div>


             {/*imsges*/}
             <div className='w-1/2 flex flex-col p-10 justify-center items-center max-sm:p-5 max-sm:w-full'>
                <div>
                  <img src='https://i.pinimg.com/474x/16/9f/4f/169f4f930526bb33bd0ca700a3b7f93a.jpg' alt='volailles' className='rounded-t-full object-cover h-[700px] w-full'/>
                </div>

             </div>

          </div>



          {/*Escargots*/}
          <div id='escargots' className='w-full flex flex-row-reverse justify-around items-center p-10 bg-[#7AA95C] max-sm:flex-col max-sm:p-5 max-sm:gap-y-3'>
             <div className='w-1/2 flex flex-col gap-y-7 px-20 max-sm:w-full max-sm:px-3'>

                <h1 className='text-5xl font-bold text-left'>Nos Mollusques</h1>

                <div className='flex flex-row justify-between items-center px-4 w-full max-sm:justify-around max-sm:px-0.5'>
                    <div className='flex flex-col gap-y-2 w-2/3'>
                       <h1 className='text-xl font-bold'>Escargot Geant D'Afrique "Par Kilo"</h1>
                       <p className='text-xs w-[80%] text-wrap px-5 max-sm:px-1 max-sm:w-full'>Lorem ipsum dolor sit amet. Ut eius ipsum id inventore voluptatem quo expedita saepe quo cupiditate fuga.</p>
                    </div>

                    <div className='flex justify-end w-1/3'>
                       <h3 className='text-xl font-bold'>12$</h3>
                    </div>
                </div>

                <div className='flex flex-row justify-between items-center px-4 w-full max-sm:justify-around max-sm:px-0.5'>
                    <div className='flex flex-col gap-y-2 w-2/3'>
                       <h1 className='text-xl font-bold'>Pourdre D'Escargots</h1>
                       <p className='text-xs w-[80%] text-wrap px-5 max-sm:px-1 max-sm:w-full'>Lorem ipsum dolor sit amet. Ut eius ipsum id inventore voluptatem quo expedita saepe quo cupiditate fuga.</p>
                    </div>

                    <div className='flex justify-end w-1/3'>
                       <h3 className='text-xl font-bold'>20$</h3>
                    </div>
                </div>

                <div className='flex flex-row justify-between items-center px-4 w-full max-sm:justify-around max-sm:px-0.5'>
                    <div className='flex flex-col gap-y-2 w-2/3'>
                       <h1 className='text-xl font-bold'>Escargots seche</h1>
                       <p className='text-xs w-[80%] text-wrap px-5 max-sm:px-1 max-sm:w-full'>Lorem ipsum dolor sit amet. Ut eius ipsum id inventore voluptatem quo expedita saepe quo cupiditate fuga.</p>
                    </div>

                    <div className='flex justify-end w-1/3'>
                       <h3 className='text-xl font-bold'>30$</h3>
                    </div>
                </div>

             </div>


             {/*imsges*/}
             <div className='w-1/2 flex flex-col p-10 justify-center items-center max-sm:p-5 max-sm:w-full'>
                <div>
                  <img src='https://i.pinimg.com/736x/c7/08/0b/c7080b7135f7f9098331b8827f1cbd07.jpg' alt='volailles' className='rounded-t-full object-cover h-[700px] w-full'/>
                </div>

             </div>

          </div>

        </section>






        {/*le footer*/}
        <section>
           <Footer/> 
        </section>

    </section>
  )
}

export default Produits
