import React from 'react'

const AboutSharek = () => {
  return (
    <section className={`grid lg:grid-cols-2 md:grid-cols-1 place-content-center place-items-start gap-x-14 gap-y-2 my-6 min-[600px]:my-[100px]  px-3`}>

    <div className="p-0 -mt-1 welcome-in-sharek">
        <div className={`sharek-title textColor text-[2em] max-[600px]:text-[1.5em] p-0 font-bold`}>مرحبا بك في <span className='sharek-subtitle text-[1em] max-[600px]:text-[1.2em]'>شارك</span> </div>
        <div style={{textAlign: 'justify'}} className={`max-[600px]:leading-[35px] leading-[40px] text-[1.5em] max-[600px]:text-[1.2em] font-semibold mt-2`}>
        منصة تعرض العديد من المشروعات العقارية للاستثمار في شكل حصص عقارية مفرزة ، حيث يتم تقسيم الوحدة السكنية او التجارية الي حصص كل حصة لها قيمة ثابتة مقدارها 50 الف للسكني و 60 الف للتجاري ولكل حصة ما يقابلها من ملكية امتار في المساحة الكلية للوحدة و يتم التعاقد علي حصة او اكثر بتعاقد ملزم بإعادة البيع يحدد فيه المدة والعائد الربحي</div>
    </div>

    <iframe title='شارك فيديو sharek' className='project-video min-[600px]:h-[400px] w-[100%] h-[230px] mx-auto' src="https://www.youtube.com/embed/mj9tKYrvTo4">
</iframe>
    
</section>
  )
}

export default AboutSharek