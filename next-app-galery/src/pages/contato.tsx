import Sidebar from '../components/sidebar'
import MenuMobile from '../components/menuMobile'

export default function Contato(){
    return(
        <>
           <MenuMobile />
            <Sidebar />
            <div  className={`md:ml-52 sm:m-0 h-full flex xs:flex-col md:relative p-20`}>
                <div className={`bg-green-300 p-6 rounded m-4`}>
                    <h1>Tatoo by Eric Guimaraes</h1>
                    <h2 className={`font-bold`}>Instagram</h2>
                    <p>@eric.guimaraes</p>
                    <h2 className={`font-bold`}>Whatsapp</h2>
                    <p>+55 21 97407-7423</p>
                </div>
                 <div className={`bg-green-300 p-6 rounded m-4`}>
                    <h1>Site by Pedro Leandro</h1>
                    <h2 className={`font-bold`}>Instagram</h2>
                    <p>@pedro_leandro021</p>
                    <h2  className={`font-bold`}>Linkdin</h2>
                    <p>Pedro Leandro</p>
                    <h2  className={`font-bold`}>Github</h2>
                    <p>augustoleandro0</p>
                </div>
            </div>
        </>
    )
}