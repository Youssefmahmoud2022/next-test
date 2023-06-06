import axios from "axios";
import Link from "next/link";
import React from "react";

import { IoLocationSharp } from "react-icons/io5";

const SharekProjectsList = async () => {

  // return 'projects'
  let fetchData = async () => {
    const res = await axios.get("https://back.sharek-eg.com/api/projects");
    return res.data.data;
  };
  let data = await fetchData();
  return (
    <section className="container grid gap-3 px-3 py-3 mx-auto mt-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {data.map((el) => (
        <div className="project-card p-3 bg-[#F8F8F8]">
          <div className="relative inset-0">
            <div className="w-full">
              <img
                src={el?.img[0]?.img}
                className={`min-[600px]:h-[200px] w-full max-[600px]:w-[440px] max-[600px]:h-[210px]`}
                alt="project image صورة المشروع"
              />
            </div>
            <div className="absolute p-2 rounded-sm right-2 top-2 w-fit">
              <div
                style={{ background: "rgba(68, 68, 68, 0.48)" }}
                className={`rounded-sm w-fit p-1 px-3 text-end text-[1em] max-[600px]:text-[0.8em] text-white font-bold`}
              >
                {el.name}
              </div>

              <div
                style={{ background: "rgba(68, 68, 68, 0.48)" }}
                className="adress rounded-sm p-1  mt-2 flex items-center gap-1 text-[1em] max-[600px]:text-[0.8em]"
              >
                <span>
                  <IoLocationSharp
                    className={`max-[600px]:text-[1em] text-white`}
                  />
                </span>
                <span className={`text-white`}>{el.address}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-2">
            <div className="text-[1.2em] textColor max-[600px]:text-[1em]">
              <p className="m-0 font-bold text-[#1FAF38]">
                عائد ربحى يبدأ من {el.project_revenue}٪
              </p>
              <p className="m-0 font-semibold text-[.9em] mt-2">
                حصص استثمارية تبدأ من {el.investment_shares} الف جنية
              </p>
            </div>

            <span
              className={`items-center text-white bgColor rounded-md px-[22px] py-[13px] text-[1em] max-[700px]:text-[0.8em]`}
            >
              التفاصيل
            </span>
          </div>

          <Link
            className={`baseBg text-white p-2 rounded-md`}
            href={`/eStateProjects/${el.id}/${el.units_types[0].id}/${
              el.units_types[0].type == "وحدات سكنية" ? "housing" : "commerical"
            }/sale/1`}
          >
            تفاصيل
          </Link>
        </div>
      ))}
    </section>
  );
};

export default SharekProjectsList;
