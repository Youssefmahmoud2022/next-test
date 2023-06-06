'use client'
import React, { useRef } from 'react'

const WhatsAndPhone = () => {
    const elementRef = useRef()
    
  window.onscroll = () => {
    if (window.scrollY > 500) {
      if(elementRef?.current?.classList?.contains('fixed')){
        elementRef.current.classList.remove('fixed')
        elementRef.current.classList.add('relative')
      }
    }
    if (window.scrollY < 500) {
      if(elementRef?.current?.classList?.contains('relative')) {
        elementRef.current.classList.add('fixed')
        elementRef.current.classList.remove('relative')
      }
    }
  };

  return (
    <div ref={elementRef} className="fixed bottom-0 left-0 flex items-center w-full p-2 mt-4 bg-white">
    <a
       href="tel:+201095665809" onClick={()=> "alert('Click OK to call +1 (234) 567-890')"}
      className="w-fit flex items-center gap-1 mx-auto p-3 rounded-md text-black bg-[#EBEBEB]"
    >
      <img width={20} height={20} src={`/assets/icons/call.svg`} alt="" />
      <span>اتصل بنا</span>
    </a>

    <a
      href={`http://wa.me/+201095665809`}
      target="_blank"
      className="w-fit flex items-center gap-1 mx-auto p-3 rounded-md text-white bg-[#1FAF38]"
    >
      <img width={20} height={20} src={`/assets/icons/whatsIcon.svg`} alt="" />
      <span>تواصل مع المبيعات</span>
    </a>
  </div>
  )
}

export default WhatsAndPhone