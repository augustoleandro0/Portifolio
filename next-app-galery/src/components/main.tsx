import Image from 'next/image'
import grid from '../styles/grid.module.css';
export default function Main() {
    return (
        <main className={`md:ml-52 sm:m-0 h-full text-center md:relative `}>
            <div className={grid.template}>
                <div className={`${grid.item} w-50 col-span-1 -mt-12`}>
                    <Image src="/img/138328337_202273134929366_108562379215393360_n.jpg" className={` ${grid.image} rounded-md m-10  `} width={1080} height={1080} alt="" />
                </div>
                <div className={`${grid.item} w-50 col-span-1`}>
                    <Image src="/img/165228981_100419958805714_7902501772632978167_n.jpg" className={` ${grid.image} rounded-md m-10  `} width={1080} height={1080} alt="" />
                </div>
                <div  className={`${grid.item} w-70 col-span-1 -mt-12`}>
                    <Image src="/img/170825126_291047542605173_1545437167555651856_n.jpg" className={` ${grid.image} rounded-md m-10  `} width={1080} height={1080} alt="" />
                </div>
                <div className={`${grid.item} w-50 col-span-1 -mt-12 `}>
                    <Image src="/img/182386768_115598850670310_2657243640799190920_n.jpg" className={` ${grid.image} rounded-md m-10  `} width={1080} height={1080} alt="" />
                </div>
                <div className={`${grid.item} w-50 col-span-1 `}>
                    <Image src="/img/186414076_474031750377903_2541735733717719832_n.jpg" className={` ${grid.image} rounded-md m-10  `} width={1080} height={1080} alt="" />
                </div>
                <div className={`${grid.item} w-50 col-span-1 -mt-12 `}>
                    <Image src="/img/202390865_520938199259106_6918037592758873334_n.jpg" className={` ${grid.image} rounded-md m-10  `} width={1080} height={1080} alt="" />
                </div>
                <div className={`${grid.item} w-50 col-span-1 -mt-12`}>
                    <Image src="/img/222088411_1455196834814095_7117442560177645079_n.jpg" className={` ${grid.image} rounded-md m-10  `} width={1080} height={1080} alt="" />
                </div>
                <div className={`${grid.item} w-50 col-span-1 `}>
                    <Image src="/img/239282995_562318105120253_3589837325122782827_n.jpg" className={` ${grid.image} rounded-md m-10  `} width={1080} height={1080} alt="" />
                </div>
                <div className={`${grid.item} w-50 col-span-1 -mt-12 `}>
                    <Image src="/img/242033015_577040130311931_5667553264922264221_n.jpg" className={` ${grid.image} rounded-md m-10  `} width={1080} height={1080} alt="" />
                </div>
                <div className={`${grid.item} w-50 col-span-1 -mt-12 `}>
                    <Image src="/img/237418891_130437955960128_487537249666410206_n.jpg" className={` ${grid.image} rounded-md m-10  `} width={1080} height={1080} alt="" />
                </div>
                <div className={`${grid.item} w-50 col-span-1  `}>
                    <Image src="/img/141891407_232636985071005_1539540386976007434_n.jpg" className={` ${grid.image} rounded-md m-10  `} width={1080} height={1080} alt="" />
                </div>
                <div className={`${grid.item} w-50 col-span-1 -mt-12`}>
                    <Image src="/img/245243972_359713842562017_3739771231445624418_n.jpg" className={` ${grid.image} rounded-md m-10  `} width={1080} height={1080} alt="" />
                </div>

            </div>
        </main>
    )
}