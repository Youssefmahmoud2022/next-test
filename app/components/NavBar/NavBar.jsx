'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

import './navStyle.scss';

const NavBar = () => {

  const navRef = useRef()
  const backdropRef = useRef()

  const linksList = [
    { id: 1, linkName: "/", linkTxt: "الرئيسية", icon: '/assets/icons/navLinksIcons/homeicon.svg'},
    { id: 2, linkName: "/eStateProjects", linkTxt: "المشاريع", icon: '/assets/icons/navLinksIcons/projectsicon.svg'},
    { id: 3, linkName: "/eStateBlogs", linkTxt: "المقالات", icon: '/assets/icons/navLinksIcons/quastionicon.svg'},
    { id: 4, linkName: "/quastionsAndAnswers", linkTxt: "أسئلة وأجوبة", icon: '/assets/icons/navLinksIcons/blogicon.svg'},
    { id: 5, linkName: "/earnMoney", linkTxt: "حق السعي", icon: '/assets/icons/navLinksIcons/workwithusmoneyicon.svg'},
  ];

  
  const toButtom = () => {
    document.getElementById('footer').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
  }

  const showNav = () => { 
    navRef.current.classList.toggle("show-nav");
    backdropRef.current.classList.toggle("backdrop");
   }

  
const hideNav = (e) => {
  if(window.innerWidth < 1050 && document.getElementById('nav-links-id').classList.contains('show-nav') && e.target.id != 'imgid' ){
    document.getElementById('backdropid').classList.toggle("backdrop");
    document.getElementById('nav-links-id').classList.toggle("show-nav");
  }
}

  return (
    <nav
    
      className={`fixed z-50 inset-0 h-fit flex p-3 bg-white shadow-md justify-between items-center`}
    >
      <div
      onClick={hideNav}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.76)" }}
        id="backdropid"
        ref={backdropRef}
        className="fixed inset-0 z-50 hidden w-full h-full"
      ></div>
      <button id="imgid" onClick={showNav} className={`absolute w-[40px] rounded-md open-nav min-[750px]:hidden text-white z-10 top-[19px] right-[10px]`}>
        <img id="imgid" src="/assets/icons/navmenu.svg" alt="" />
      </button>
      <div id="nav-links-id" ref={navRef} className="flex justify-start flex-1 gap-5 p-3 nav-links">
        <button onClick={showNav} className="close-nav hidden max-[750px]:block border-2 border-white px-2">
          X
        </button>
        {linksList.map((link) => (
          <Link className={`textColor flex items-center gap-3 text-[1.5em]`} key={link.id} href={link.linkName}>
            <span>
              <img src={link.icon} alt="nav icon" />
            </span>
            <span>
              {link.linkTxt}
            </span>
          </Link>
        ))}
      <a href="/#footer" className={`textColor flex items-center gap-3 text-[1.5em]`} onClick={toButtom}>
          <img src={`/assets/icons/navLinksIcons/contactusicon.svg`} className={`w-10 h-10`} alt="" />
        <span>
         تواصل معنا
        </span>
      </a>
      </div>
      
        <Image
          src="/assets/imgs/blueLogo.png"
          width={60}
          height={60}
          alt="Picture of the author"
        />
    </nav>
  );
};

export default NavBar;
