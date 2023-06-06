import Link from 'next/link'
import React from 'react'

import {IoIosArrowBack} from 'react-icons/io' 

const WeAreSpecial = () => {
  return (
    <section className="container grid gap-3 px-3 mx-auto mt-4 lg:grid-cols-2 sm:grid-col-1">
          <div>
        <h2 className="textColor text-[2em] max-[600px]:text-[1.5em] font-bold">
        لماذا نحن متميزون ؟
        </h2>
            <p style={{textAlign: 'justify'}} className="font-semibold mt-4 max-[600px]:leading-[35px] leading-[50px] text-[1.7em] max-[600px]:text-[1.2em]">
              ان اختيارنا للمشروعات المطروحة على شارك له معايير من الجودة تضمن للمستثمر اقصي درجات الحماية والامان لتحقيق اهدافه الاستثمارية ، كذلك تضمن للمطور العقاري نجاح مشروعة بدون مخاطر وتقلبات السوق العقاري ، وذلك من خلال فريق عمل يتميز بالخبرة والكفاءة.</p>

            <Link className="mx-2 mt-2 block w-fit text-[#484868] font-semibold border-b-[1px] border-[#484868] text-[1.7em] max-[600px]:text-[1.2em]" href={`/sharekTeam`}>
              
            معرفة المزيد عن فريق العمل
            <IoIosArrowBack className="inline text-lg m-2 max-[600px]:text-sm " />
            </Link>
          </div>

          <div className="relative">
            <div className="overlay absolute bottom-0 left-0 w-full h-[30px] bg-white">

            </div>
            <img src={`/assets/imgs/special1.png`} alt="" />
          </div>
        </section>
  )
}

export default WeAreSpecial