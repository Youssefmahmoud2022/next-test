import axios from 'axios'
import React from 'react'
import NavBar from '../components/NavBar'
import Link from 'next/link'

const page = async () => {
    let fetchData = async ()=> {
        const res = await axios.get('https://back.sharek-eg.com/api/projects')
        return res.data.data;
    }
    let data = await fetchData()
    console.log(data)
  return (
    <>
    <NavBar />
    <section className={`pt-[90px]`}>
        {data.map(el=>(
          <div className="project-card">
            <div>{el.name}</div>
            <img src={el.img[0].img} alt="project img" />
            <Link href={`/eStateProjects/${el.id}?unit-type-name=${el.units_types[0].type == 'وحدات سكنية' ? 'housing' : 'commerical'}`}>تفاصيل</Link>
          </div>
        ))}
    </section>
        
    </>
  )
}

export default page