import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import './heroStyle.scss'

const HeroSection = () => {
  return (
    <section
    aria-label="WelcomeToSharek"
    style={{ zIndex: "0" }}
    dir="rtl"
    className={`welcome-section relative max-[500px]:h-[50vh] min-[500px]:h-[90vh] overflow-hidden`}
  >
        <img
          src="/assets/imgs/hero.jpeg"
          className={`w-full h-full `}
          alt="welcome to sharek image"
        />
    <div className="welcomeBox pr-[50px] absolute w-[50%] h-full flex flex-col items-center justify-center gap-2 top-0 min-[600px]:pb-10 max-[600px]:p-8 text-white">
      <div
        className={`welcome-title text-center max-[600px]:mr-[40px] max-[600px]:text-center w-full text-[60px] max-[500px]:text-[2.5em] font-bold`}
      >
        شارك...
      </div>

      <div
        className={`welcome-subtitle max-[600px]:mr-[40px] text-center max-[600px]:text-center w-full text-[2.3em] max-[950px]:text-[1em] font-bold`}
      >
        <p>
          استثمار تشاركي بأعلي عائد ربحي{" "}<br />
          <br className={`min-[600px]:hidden`} /> للمستثمر ومزيد من الارباح و{" "}
          <br /> التدفقات النقدية للمطور
        </p>
      </div>

      <div
        className={`welcome-footer max-[600px]:mr-[40px] mt-8 w-full flex justify-start`}
      >
        <Link
          href={`/quastionsAndAnswers`}
          className={`border-2 mx-auto text-white px-3 border-white mt-1 min-[600px]:p-2 max-[600px]:p-3 rounded-md text-[1.7em] max-[600px]:text-[1em] font-bold`}
        >
          معرفة المزيد
        </Link>
      </div>
    </div>
  </section>
  )
}

export default HeroSection