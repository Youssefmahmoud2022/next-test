import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const linksList = [
    { id: 1, linkName: "/", linkTxt: "الرئيسية" },
    { id: 2, linkName: "/eStateProjects", linkTxt: "المشاريع" },
    { id: 3, linkName: "/eStateBlogs", linkTxt: "المقالات" },
  ];
  return (
    <nav
      className={`fixed inset-0 h-fit flex p-3 bg-slate-600 shadow-md justify-between items-start`}
    >
      <div className="flex justify-start flex-1 gap-5 p-3 nav-links">
        {linksList.map((link) => (
          <Link className={`text-white`} key={link.id} href={link.linkName}>
            {link.linkTxt}
          </Link>
        ))}
      </div>
        <Image
          src="/next.svg"
          width={200}
          height={50}
          alt="Picture of the author"
        />
    </nav>
  );
};

export default NavBar;
