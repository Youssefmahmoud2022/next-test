import React from 'react'

import styl from './unitDetailsStyle.scss';
import WhatsAndPhone from './WhatsAndPhone';

const UnitDetailsComponent = ({unit}) => {
  return (
    <div  className={`mt-[40px]`}>
        
          <div
          dir='ltr'
            className={`${styl.unitInfoBoxOne} border-2 p-2 pb-4 pt-6 relative mt-4 grid gap-3 lg:grid-cols-2 sm:grid-cols-1`}
          >
            <div className={`${styl.infoBoxOne} absolute -top-5 -right-1 bg-[#EBEBEB] w-fit p-2 rounded-md`}>معلومات عن الوحدة</div>
            <div
              className={`max-w-[400px] px-9 max-[600px]:px-1 max-[600px]:h-[200px] max-[600px]:-mt-[10px]`}
            >
              <img
                className={`max-[600px]:w-[85%] mt-5 max-[600px]:mx-auto`}
                loading="lazy"
                src={unit.img}
                alt="unit img صورة الوحدة"
              />
            </div>
            <div dir="rtl" className="mt-8 unitTextInfo">
              <div className="grid grid-cols-2 gap-y-3 w-[80%] mb-4">
                <div
                  className={`text-[2vw] font-semibold max-[600px]:text-[15px] text-[#444444]`}
                >
                  {" "}
                  رقم الوحدة : {unit.name}
                </div>

                <div
                  className={`text-[2vw] font-semibold max-[600px]:text-[15px] text-[#444444]`}
                >
                  {" "}
                  المساحة : {unit.space} م{" "}
                  <span>
                    <sup> 2</sup>
                  </span>
                </div>

                <div
                  className={`text-[2vw] font-semibold max-[600px]:text-[15px] text-[#444444]`}
                >
                  {" "}

                  {unit.project_id.name == 'سيتي سنتر' ?'دور الالكترونيات' : unit.level_id.name}
                  {}
                </div>

                <div
                  className={`text-[2vw] whitespace-nowrap font-semibold max-[600px]:text-[15px] text-[#444444]`}
                >
                  سعر الوحدة : {unit.price} جنية
                </div>
              </div>
            </div>
          </div>
          <div
            dir="rtl"
            className={`${styl.unitInfoBoxTwo} p-4 relative inset-0 border-2`}
            style={{ borderBottom: "1px solid #777777" }}
          >
            <div className={`${styl.infoBoxTwo}  absolute -top-5 -right-1 bg-[#EBEBEB] w-fit p-2 rounded-md`}>تفاصيل الاستثمار</div>

            <table
              className={`${styl.tableContainer} border-collapse table-container mx-auto mt-4`}
            >
              <thead>
                <tr className="grid grid-cols-2">
                  <th className="text-center border-l-[2px] border-[#E0E0E0] textColor bg-[#EBEBEB] text-[2em] max-[600px]:text-[1em] p-3">
                    قيمة الحصة
                  </th>
                  <th className="text-center textColor bg-[#EBEBEB] text-[2em] max-[600px]:text-[1em] p-3">
                    عدد الحصص المتاحة
                  </th>
                  <th className="text-center border-l-[2px] border-[#E0E0E0] border-b-2 border-r-2 text-[1.8em] max-[600px]:text-[1em] text-[#444444] p-3">
                    {unit.value_share} الف جنية
                  </th>
                  <th className="text-center border-l-[2px] border-b-2 border-[#E0E0E0] text-[1.8em] max-[600px]:text-[1em] text-[#444444] p-3">
                    {unit.available_shares}
                  </th>
                </tr>
                <tr className="grid grid-cols-2 mt-3">
                  <th className="text-center border-l-[2px] border-[#E0E0E0] textColor text-[2em] max-[600px]:text-[1em] bg-[#EBEBEB] p-3">
                    عدد الامتار في الحصة
                  </th>
                  <th className="text-center textColor text-[2em] max-[600px]:text-[1em] bg-[#EBEBEB] p-3">
                    {unit.rent == 1 &&
                    'العائد الايجارى للحصة'}
                    {unit.sale == 1 &&
                    'عائد اعادة البيع للحصة'}
                    
                  </th>
                  <th className="text-center border-l-[2px] border-[#E0E0E0] border-b-2 border-r-2 text-[1.8em] max-[600px]:text-[1em] text-[#444444] p-3">
                    <span>{unit.meter_number_share} م</span>
                    <span>
                      <sup> 2 </sup>
                    </span>
                  </th>
                  <th className="text-center border-l-[2px] border-b-2 border-[#E0E0E0] text-[1.8em] max-[600px]:text-[1em] text-[#444444] p-3">
                    {unit.earnings_resale_share} جنية
                  </th>
                </tr>
              </thead>
            </table>

            {/* <div className="flex justify-center">
              <ContractImgs imgsArray={unit.project_id.contract} title='عرض أوراق المشروع' />
            </div> */}
          </div>
        
            <WhatsAndPhone />

    </div>
  )
}

export default UnitDetailsComponent