import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../styles/carousel.module.css"
import {useState} from 'react'
import Image from 'next/image'

export default function carousel (props) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })

  return (
    <>
      <div className="navigation-wrapper md:ml-52 sm:m-0  ">
        <div ref={sliderRef} className="keen-slider mx-48 ">
          <div className="keen-slider__slide number-slide1 w-10">
              <Image src="/img/244017590_845709679477616_3343649655721522695_n.webp.jpg" className={``} width={680} height={680} alt="" />  
          </div>
          <div className="keen-slider__slide number-slide2  w-10">
              <Image src="/img/245026008_1261180884325685_3455123230548338168_n.jpg" className={``} width={680} height={680} alt="" />
            </div>
          <div className="keen-slider__slide number-slide3 w-10">
               <Image src="/img/223846136_959526734885645_3420157076400070630_n.jpg" className={``} width={680} height={680} alt="" />
          </div>
          <div className="keen-slider__slide number-slide4  w-10">
              <Image src="/img/246510611_1292740537819490_9175842838829529589_n.jpg" className={``} width={680} height={680} alt="" />
          </div>
          <div className="keen-slider__slide number-slide5  w-10">
              <Image src="/img/246852698_676838806619508_1673640363086366049_n.jpg" className={``} width={680} height={680} alt="" />
          </div>
        </div>
        {slider && (
          <>
            <ArrowLeft
              onClick={(e) => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
            />
            <ArrowRight
              onClick={(e) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
      </div>
      {slider && (
        <div className="dots">
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              />
            )
          })}
        </div>
      )}
    </>
  )
}

function ArrowLeft(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`${"arrow arrow--left" + disabeld} w-10 -mt-32 z-999`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  )
}

function ArrowRight(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`${"arrow arrow--right" + disabeld} w-10  -mt-10 z-999 float-right `}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  )
}
