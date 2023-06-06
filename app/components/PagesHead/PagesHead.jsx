import React from 'react'

const PagesHead = ({title}) => {
  return (
    <section className={`pt-[90px] relative inset-0`}>
                <img loading="lazy" src={`/assets/imgs/hero.jpeg`} alt="" />
        <div style={{background: 'rgba(42, 40, 57, 0.65)'}} className={`text-[30px] flex justify-center items-center absolute left-0 top-0 w-full h-full `}>
            <span className={`text-white max-[600px]:text-[1em] font-bold`}>{title}</span>
        </div>
    </section>
  )
}

export default PagesHead