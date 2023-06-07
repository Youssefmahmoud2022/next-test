import Container from "@/app/components/CustomComponents/Container";
import NavBar from "@/app/components/NavBar/NavBar";
import ProjectImgs from "@/app/components/Sliders/ProjectImgs";
import axios from "axios";
import Link from "next/link";
import React from "react";

import { IoLocationSharp } from "react-icons/io5";
import Modal from "@/app/components/Modals/Modal";

import styl from "./tableStyle.scss";
import Footer from "@/app/components/Footer/Footer";

const ProjectDetails = async (params) => {
  let prId = params.params.projectId[0]; // project id
  let typeNum = params.params.projectId[1]; // unit type id
  let typeName = params.params.projectId[2]; // units type name = commercial or housing
  let saleOrRent = params.params.projectId[3]; // slae or rent text
  let saleOrRentNum = params.params.projectId[4]; // slae or rent number

  const getProjectDetails = async () => {
    let fetchData = await axios.get(
      `https://back.sharek-eg.com/api/projects/${prId}`
    );
    return fetchData.data.data;
  };
  let prDetails = await getProjectDetails();

  const getUnitsInTable = async () => {
    let fetchData = await axios.get(
      `https://back.sharek-eg.com/api/${typeName}?paginate&count=200&project_id=${prId}&table&status&${saleOrRent}=${saleOrRentNum}`
    );
    return fetchData.data.data;
  };
  let unitsList = await getUnitsInTable();

  return (
    <>
      <NavBar />
      <Container container={true} pt={`100`}>
        <div className="container">
          <div className="container">
            <div
              className={`text-[2em] textColor max-[600px]:text-[1.5em] font-bold mt-3`}
            >
              {prDetails.name}
            </div>
            <div
              className={`mt-3 flex items-center text-[2em] max-[600px]:text-[1em] font-semibold`}
            >
              <span>
                <IoLocationSharp />
              </span>
              {prDetails.address}
            </div>
            <div
              style={{ textAlign: "justify" }}
              className={`mt-3 text-[2em] max-[600px]:text-[1em] font-semibold`}
            >
              {prDetails.description}
            </div>
            <ProjectImgs data={prDetails.img} />

            <div className="flex justify-between gap-5">
              <Modal title={`عرض أوراق المشروع`}>
                {prDetails.contract.map((img) => (
                  <img src={img.contract} key={img.id} alt="" />
                ))}
              </Modal>

              <Modal
                title={`عرض  الفيديو`}
                btnIcon={`/assets/icons/video-icon.svg`}
              >
                <iframe
                  className="w-[100%] h-[230px] mx-auto"
                  src={`https://www.youtube.com/embed/${prDetails.video}`}
                ></iframe>
              </Modal>
            </div>

            <div
              style={{ textAlign: "justify" }}
              className="text-[2em] max-[600px]:text-[1em] mt-4"
            >
              <p>
                <span className="font-bold textColor">الشركة المالكة : </span>
                <span
                  style={{ textAlign: "justify" }}
                  className="font-semibold"
                >
                  {" "}
                  {prDetails.owner}
                </span>
              </p>
              <p>
                <span className="font-bold textColor">
                  المكتب الاستشارى والمطور :{" "}
                </span>
                <span style={{ textAlign: "justify" }}>
                  {" "}
                  {prDetails.office}
                </span>
              </p>
              <p>
                <span className="font-bold textColor">
                  لماذا تستثمر فى {prDetails.name} :{" "}
                </span>
                <span
                  style={{ textAlign: "justify" }}
                  className="font-semibold"
                >
                  {" "}
                  {prDetails.why_to_invest}
                </span>
              </p>
            </div>
          </div>
        </div>

        <h2
          className={`text-[1.5em] textColor max-[600px]:text-[1em] font-bold mt-5`}
        >
          إبدأ الاستثمار
        </h2>

        <div className="flex gap-2 mt-4 unit-type-btns">
          {prDetails.units_types.map((el) => (
            <Link
              href={`/eStateProjects/${prId}/${el.id}/${
                el.type == "وحدات سكنية" ? "housing" : "commerical"
              }/${saleOrRent}/${saleOrRentNum}`}
              className={`p-2 px-3 rounded-md lg:btn-lg sm:btn-sm  ${
                el.id == typeNum ? `baseBg text-white` : `border-2`
              }`}
              key={el.id}
            >
              {el.type}
            </Link>
          ))}
        </div>

        <div className="flex gap-5 mt-3 sale-rent-btns">
          <Link
            href={`/eStateProjects/${prId}/${typeNum}/${typeName}/rent/1`}
            className={`p-2 px-3 rounded-md lg:btn-lg sm:btn-sm ${
              saleOrRent == "rent" ? `baseBg text-white` : `border-2 text-black`
            }`}
          >
            إيجار
          </Link>
          <Link
            href={`/eStateProjects/${prId}/${typeNum}/${typeName}/sale/1`}
            className={`p-2 px-3 rounded-md lg:btn-lg sm:btn-sm ${
              saleOrRent == "sale" ? `baseBg text-white` : `border-2 text-black`
            }`}
          >
            بيع
          </Link>
        </div>

        {/* Table */}
        <div dir="ltr" className={`${styl.tableContainer} overflow-auto mt-1`}>
          <table
            dir="rtl"
            className="table-fixed w-[100%] max-[600px]:w-[600px] border-collapse border border-slate-500"
          >
            <thead>
              <tr className={`${styl.tableTr} bg-[#EBEBEB]`}>
                <th
                  scope="col"
                  className="p-1 textColor text-[#5B3D16] text-center border border-slate-600"
                >
                  رقم الوحدة
                </th>
                <th
                  scope="col"
                  className="p-1 textColor text-[#5B3D16] text-center border border-slate-600"
                >
                  المساحة
                </th>
                <th
                  scope="col"
                  className="p-1 textColor text-[#5B3D16] text-center border border-slate-600"
                >
                  عدد الحصص المباعة
                </th>
                <th
                  scope="col"
                  className="p-1 textColor text-[#5B3D16] text-center border border-slate-600"
                >
                  عدد الحصص المتاحة
                </th>
                <th
                  scope="col"
                  className="p-1 textColor text-[#5B3D16] text-center border border-slate-600"
                >
                  عدد الامتار في الحصة
                </th>
                <th
                  scope="col"
                  className="p-1 textColor text-[#5B3D16] text-center border border-slate-600"
                >
                  {/* text condition */}
                  {saleOrRent == "rent" && "عائد إيجارى"}
                  {saleOrRent == "sale" && "عائد اعادة البيع"}
                </th>
                <th
                  scope="col"
                  className="p-1 textColor text-[#5B3D16] text-center border border-slate-600"
                >
                  للمشاركة
                </th>
              </tr>
            </thead>
            <tbody className={`${styl.tableBody}`}>
              {unitsList.map((unit) => (
                <tr key={unit.id}>
                  <td  className="p-3 text-center border unitName border-slate-600">
                    {unit.name}
                  </td>
                  <td  className="p-3 text-center border unitName border-slate-600">
                    
                    <span> {unit.space} </span>
                    <span>
                      <sup> م2 </sup>
                    </span>
                  </td>
                  <td  className="p-3 text-center border unitName border-slate-600">
                    {unit.sold_shares}
                  </td>
                  <td  className="p-3 text-center border unitName border-slate-600">
                    {unit.available_shares}
                  </td>
                  <td  className="p-3 text-center border unitName border-slate-600">
                  <span>{unit.meter_number_share}</span>
                  <span>
                      <sup> م2 </sup>
                    </span>
                  </td>
                  <td  className="p-3 text-center border unitName border-slate-600">
                    {unit.earnings_resale_share}
                  </td>
                  
                  <td  className="p-3 text-center border unitName border-slate-600">
                    <Link className={`baseBg text-center text-white p-2 rounded-md max-[600px]:text-[1em]`} href={`/realEStateDetails/${typeName}/${unit.id}`}>التفاصيل</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
      <Footer />

    </>
  );
};

export default ProjectDetails;
