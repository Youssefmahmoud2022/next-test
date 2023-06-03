import axios from "axios";
import Link from "next/link";
import React from "react";

const ProjectDetails = async (params ) => {
  let prId = params.params.projectId;
  let unitTypeName = params?.searchParams['unit-type-name']

  const getProjectDetails = async () => {
    let fetchData = await axios.get(
      `https://back.sharek-eg.com/api/projects/${prId}`
    );
    return fetchData.data.data;
  };


//   (`${basUrl}/api/${unitTypeName}?paginate&count=200&project_id=${projectId}&table&status&${revType}`)
  const getUnitsInTable = async () => {
    let fetchData = await axios.get(
      `https://back.sharek-eg.com/api/${unitTypeName}?paginate&count=200&project_id=${prId}&table&status&sale=1`
    );
    return fetchData?.data;
  };

  let prDetails = await getProjectDetails();
  let unitsList = await getUnitsInTable();
  console.log(unitsList)


  return (
    <div>
      <div>
        project id : {prId}
      </div>

      <h3>prject Name : {prDetails.name}</h3>

        <div className="flex gap-2 mt-4 unit-type-btns">
          {prDetails.units_types.map((el) => (
            <Link
            href={`/eStateProjects/${prId}?unit-type-id=${el.id}&unit-type-name=${el.type == 'وحدات سكنية' ? 'housing' : 'commerical'}`}
              className={`bg-white p-2 px-3 rounded-md lg:btn-lg sm:btn-sm`}
              key={el.id}
            >
              {el.type}
            </Link>
          ))}
        </div>
        
        {/* <Link href={`/eStateProjects/${prId}?unit-type-id=${el.id}&unit-type-name=${el.type == 'وحدات سكنية' ? 'housing' : 'commerical'}`} className={`bg-slate-500 text-white p-2 rounded-md`}>
            وحدات ايجار 
        </Link>

        <Link href={`/eStateProjects/${prId}?unit-type-id=${el.id}&unit-type-name=${el.type == 'وحدات سكنية' ? 'housing' : 'commerical'}`} className={`bg-slate-500 text-white p-2 rounded-md`}>
            وحدات بيع 
        </Link> */}

        <h1>{unitsList.path}</h1>


      {/* <div className="units-list">
            {unitsList.map(unit=>(
                <div key={unit.id}>
                    <h3>{unit.name}</h3>
                </div>
            ))}
      </div> */}


    </div>
  );
};

export default ProjectDetails;
