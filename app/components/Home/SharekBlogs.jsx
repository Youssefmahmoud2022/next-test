import axios from 'axios';
import Link from 'next/link';
import React from 'react'

const SharekBlogs = async () => {

  // return '... blogs'
    let fetchData = async () => {
        const res = await axios.get("https://back.sharek-eg.com/api/blogs");
        return res.data.data;
      };
      let data = await fetchData();
  return (
    <section className={`sharek-blogs px-3 mx-auto container`}>
        <div className={`blogs grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3`}>
            {data.map(blog=>(
              <Link  key={blog.id} href={`/blogDetails/${blog.id}`} dir='rtl' className="relative inset-0 block w-full text-white shadow-md how-to-win rounded-2xl">
                <p style={{background:'linear-gradient(rgba(0, 0, 0, 0) 35%, rgb(0, 0, 0) 115%)'}} className='flex flex-col justify-end absolute m-0 rounded-2xl text-[2em] max-[600px]:text-[1.2em] font-bold txtwhite p-3 left-0 top-0 w-full h-full overflow-hidden'>
                  <span className={`absolute bottom-2 left-0 w-full text-[21px] p-2`}>{blog.title}</span>
                </p>
                <img loading='lazy' className='w-full h-full rounded-2xl' src={blog.img} alt="...Loading" />
              </Link>

            ))}
          </div>

    </section>
  )
}

export default SharekBlogs