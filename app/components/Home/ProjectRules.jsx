import Link from 'next/link'
import React from 'react'



const ProjectRules = () => {
  return (
    <section className="relative container px-3 mx-auto overflow-hidden h-[555px] max-[600px]:h-[385px] mt-4">

    <img loading="lazy" className={`w-full h-full`} src={`/assets/imgs/specialbg.jpg`} alt="" />
      <div className={`text-[30px] px-4 flex justify-center items-center absolute left-0 top-0 w-full h-full `}>


      <div style={{background: 'rgba(255, 255, 255, 0.88)'}}
        className={`w-[90%] text-center mx-auto py-4 bg-[#FFFFFF] h-[320px] max-[600px]:h-[270px] my-2 max rounded-2xl px-4`}
      >
        <p className="text-[#1E1E1E] font-semibold text-[1.2em] max-[600px]:text-[18px]">
        نحن نتحقق من جودة  مشاريعنا وفقا لمعايير  مختارة وحرصا علي ضمان  حقوق المستثمرين لذا لا  تتردد في معرفة معايير  اختيار المشاريع علي شارك  

        </p>
        <div className="min-[600px]:mt-[45px] max-[600px]:mt-[10px]">
          <Link href={`/`}
          type="button"
            className={`text-[1em] max-[600px]:text-[15px] rounded-xl text-white p-2 px-5 border-[2px] baseBg`}
          >
            معرفة المزيد
          </Link>
        </div>
      </div>
      </div>
    </section>
  )
}

export default ProjectRules