import Container from '@/app/components/CustomComponents/Container';
import NavBar from '@/app/components/NavBar/NavBar';
import axios from 'axios';
import React from 'react'

import {IoIosArrowBack} from 'react-icons/io' 
import UnitDetailsComponent from './components/UnitDetailsComponent';
import Footer from '@/app/components/Footer/Footer';

const RealEstateDetails = async ({params}) => {
  let unitTypeName = params.reaEstateDetails[0];// unit type text = commerical or housing;
  let unitId = params.reaEstateDetails[1];// unit id

  const getUnitDetails = async () => {
    let fetchData = await axios.get(
      `https://back.sharek-eg.com/api/${unitTypeName}/${unitId}`
    );
    return fetchData.data.data;
  };
  let unitDetails = await getUnitDetails();
  console.log(unitDetails)

  return (
    <>
    <NavBar />
      <Container pt={`100`} container={true}>
      <div
            className={`text-[2em] textColor max-[600px]:text-[20px] text-center font-[700] mt-4`}
          >
            {unitTypeName == 'commerical' ? `وحدات تجارية`:`وحدات سكنية`}
          </div>
      {unitTypeName == "commerical" ? (
          <div className={`text-center mt-3`}>
            {unitDetails.project_id.name} <IoIosArrowBack className="inline" /> وحدات تجارية{" "}
            <IoIosArrowBack className="inline" /> {unitDetails.name}
          </div>
        ) : (
          <div className={`text-center mt-3`}>
            {unitDetails.project_id.name} <IoIosArrowBack className="inline" /> وحدات سكنية{" "}
            <IoIosArrowBack className="inline" /> {unitDetails.name}
          </div>
        )}

        <UnitDetailsComponent unit={unitDetails} />

      </Container>
      <Footer />
    </>
  )
}

export default RealEstateDetails