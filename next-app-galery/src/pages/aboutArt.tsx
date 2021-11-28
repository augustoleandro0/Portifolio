import Image from "next/image"
import Sidebar from '../components/sidebar'
import MenuMobile from '../components/menuMobile'
import Carousel  from '../components/carousel'
export default function AboutUS() {
    return (
        <>
            <MenuMobile />
            <Sidebar />
            <h1 className={`md:ml-80 md:mt-10 text-green-500 text-6xl`}>Sobre Artes</h1>
            <article className={`md:ml-52 sm:m-0 h-full flex xs:flex-col md:relative p-20`}>
              
                <div className={`w-full mr-10 xs:mx-28`}>
                    <Image  className={`rounded-md`} src="/img/202889356_783010355692131_4716505675495174429_n.jpg" width={300} height={400} alt="" />
                </div>
                <div>
                    <h1 className={`font-bold`}>  What is Lorem Ipsum?</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et cursus tellus. Morbi nec lacus molestie diam faucibus aliquet. Vivamus eros eros, ornare ut nulla et, euismod blandit tellus. Suspendisse vel metus eu velit consequat placerat vitae quis orci. Proin mollis commodo mollis. Nunc tincidunt diam eget felis tempor placerat. Mauris mattis, nibh nec molestie lacinia, ligula mauris eleifend arcu, ut imperdiet ex eros id est. Nulla vel sollicitudin urna. Nam ut leo purus. Fusce tortor mauris, vehicula eu hendrerit in, rutrum quis felis. Donec vulputate felis leo, vitae scelerisque risus accumsan nec. Fusce at metus lobortis, consequat turpis eget, porta ex. Aliquam sagittis imperdiet lectus, at commodo nisi maximus eget. Etiam id neque ante. Duis auctor a odio a tempus. Nunc ac eros porta, malesuada ligula in, commodo metus.
                    </p>
                </div>
             </article>
            <div className={`md:ml-52 sm:m-0 h-full flex xs:flex-col md:relative p-20`}>
                <div className={`bg-green-300 p-6 rounded m-4`}>
                    <h2>PONTILHISMO</h2>
                    <p>
                        Criada na França no século 19, a técnica é conhecida originalmente como dotwork lá no exterior. Apesar de parecer simples, não é nada fácil manter a precisão nos pequenos pontos que formam o desenho! O cuidado com os detalhes é um dos pontos fortes nas tatuagens de pontilhismo.
                     </p>
                </div>
                <div className={`bg-green-300 p-6 rounded m-4`}>
                    <h2>OLD SCHOOL</h2>
                    <p>
                       O estilo old school nada mais é do que um culto à cultura vintage, trazendo desenhos de pin-ups, sereias e âncoras. Os desenhos trazem muitas cores vivas, traços retos e bem definidos - além de poucas firulas. Os amantes do retrô com certeza vão se apaixonar!
                     </p>
                </div>
                <div  className={`bg-green-300 p-6 rounded m-4`}>
                    <h2>GEOMÉTRICO</h2>
                    <p>
                        A técnica do desenho geométrico pode ir de uma simples arte até algo mais complexo e preciso. Mas, independente do nível de dificuldade, todas têm um ar sofisticado com suas retas e círculos em conjunto. Tatuagens geométricas exalam delicadeza e são sinônimo de precisão. Uma ótima sugestão pra quem tem um lado mais racional :)
                     </p>
                </div>
            </div>
           
            <div className={`md:ml-36 md:m-10 mb-10 text-center text-green-500 text-6xl`}>
                <h1>Criações</h1>
            </div>
            
            <Carousel/>
        </>
    )
}