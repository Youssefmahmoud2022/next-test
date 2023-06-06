import axios from "axios";
import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Link from "next/link";
import Container from "../components/CustomComponents/Container";
import PagesHead from "../components/PagesHead/PagesHead";

import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Footer from "../components/Footer/Footer";

const Projects = async () => {
  let fetchData = async () => {
    const res = await axios.get(
      "https://back.sharek-eg.com/api/projects?paginate&count=10"
    );
    return res.data.data;
  };
  let data = await fetchData();

  return (
    <>
      <NavBar />
      <PagesHead title={"مشاريعنا"} />
      <Container pt={"80"} container={true}>
        {data.map((el) => (
          <div  className="pb-2 mt-5 rounded-md shadow-md project-card">
            <img src={el.img[0].img} alt="project img" />

            <div
              className={`text-[2em] px-2 textColor max-[600px]:text-[1.3em] font-bold`}
            >
              {el.name}
            </div>

            <div className="investReturn px-2 mt-2 text-[1.5em] max-[600px]:text-[1em] text-[#1FAF38] font-bold">
              عائد استثماري يبدأ من {el.project_revenue}٪
            </div>

            <div
              style={{ textAlign: "justify" }}
              className={`mt-3 px-2 text-[1.5em] max-[600px]:text-[1em] `}
            >
              {el.description}
            </div>

            <div className="adress px-2 flex items-center gap-3 mt-2 text-[1.5em] max-[600px]:text-[1em]">
              <span>
                <IoLocationSharp />
              </span>
              <span className={``}>{el.address}</span>
            </div>

            <div className="meterPrice px-2 flex items-center gap-3 text-[1.5em] max-[600px]:text-[1em] mt-3">
              <span>
                {/* <img loading="lazy" className={`max-[800px]:w-[25px] `} src={money} alt="" /> */}
              </span>
              <span>حصص استثمارية تبدأ من {el.investment_shares} الف جنية</span>
            </div>

            <Link className={`border-2 flex gap-3 items-center border-[#484868] mt-3 w-fit rounded-sm p-2 mx-2 text-[1.5em] max-[700px]:text-[1em]`}
              href={`/eStateProjects/${el.id}/${el.units_types[0].id}/${
                el.units_types[0].type == "وحدات سكنية"
                  ? "housing"
                  : "commerical"
              }/sale/1`}
            >
              <span>تفاصيل</span>
              <span><AiOutlineArrowLeft className={`textColor `} /></span>
            </Link>
          </div>
        ))}
      </Container>
      <Footer />

    </>
  );
};

export default Projects;
