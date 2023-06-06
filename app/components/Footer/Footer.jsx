import Link from 'next/link'
import React from 'react'

const Footer = () => {

    const linksMap = [
        { id: 1, name: 'الرئيسية', linkTxt: "/" },
        { id: 2, name: 'مقالات', linkTxt: "/blogs" },
        { id: 4, name: 'مشاريعنا', linkTxt: "/sharekProjects" },
        { id: 5, name: 'حق السعي', linkTxt: "/earnMoney" },    
        { id: 3, name: 'أسئلة وأجوبة', linkTxt: "/quastionsAndAnswers" },
        { id: 7, name: 'سياسة الاستخدام', linkTxt: "/" },    
      ];

      
  return (
    <section id='footer'  className={`baseBg mt-5 py-3`}>
    <div dir="rtl" className="container grid gap-5 footerHeader lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
    <div className="logo px-3 flex flex-col text-white justify-start max-[600px]:justify-end items-start h-full w-full">
        <img loading="lazy" className={`w-[100px]`} src={`/assets/imgs/whiteLogo.png`} alt="" />
        <div className="text-[1em] "> للاستثمار العقاري التشاركي</div>
      </div>

      <div className={` px-3 contactUs flex flex-col items-start gap-3 w-full justify-start max-[600px]:justify-start h-full`}>
        <div className={`text-[1.1em] font-semibold w-full text-white `}>تواصل معنا</div>
        <div className={`text-[1em] flex items-center gap-2 w-full text-white`}>
          <span><img src={`/assets/icons/location.svg`} alt="" /></span>
          <span>حي الجامعة، برج المثلث اعلي شركة we </span>
        </div>
        <div className={`text-[1em] flex items-center gap-2 w-full text-white`}>
          <span><img src={`/assets/icons/email.svg`} alt="" /></span>
          <span>Contact@sharek.com</span>
        </div>
        <div className={`text-[1em] flex items-center gap-2 w-full text-white`}>
          <span><img src={`/assets/icons/phone.svg`} alt="" /></span>
          <span>01095665809</span>
        </div>
      </div>
      
      <div className="siteMap px-3 flex flex-col items-start justify-between max-[600px]:justify-end max-[600px]:items-start gap-3 w-full">
        <div className={`text-[1.1em] font-semibold text-white `}>خريطة الموقع</div>
        <div className="grid grid-cols-3 footerlinksmap gap-y-6 gap-x-1">
          {linksMap.map(link=>(
            <Link  key={link.id} href={`${link.linkTxt}`} className={`block whitespace-nowrap text-[1.1em] max-[600px]:text-[1em] text-white`}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>




    </div>

    <div id='pageBottom' className="border-t-[1px] mt-3 text-white text-[1em] border-white py-3 text-center">© 2023 sharek, Inc. .جميع الحقوق محفوظة</div>
  </section>
  )
}

export default Footer