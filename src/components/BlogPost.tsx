'use client'

import React, { useEffect, useState } from "react";

import CardFeatured from "./atom/Card";
import { FaArrowsUpDown } from "react-icons/fa6";
import { contentfulClient } from "@/utils/contentfulClient";

export default function BlogPost() {

  const [search, setSearch] = useState<string>('')
  const [article, setArticle] = useState<any[]>([]);

  const getArticles = async () => {
    try {
      const data = await contentfulClient.getEntries();
      setArticle(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);
  

  // const handlesearch = (e:any) => {
  //   const searchInput = e.target.value
  //   console.log(searchInput)
  //   setSearch(searchInput)
  // }

  // useEffect(()=> {
    
  // }, [search])

  return (
    <div className="mx-auto max-w-[80%] py-5 space-y-5">
      {/* <h1>Newest Articles</h1> */}
      <div className="flex gap-2">
        {/* sidebar */}
        <div className="w-[40%]">
            <p className="p-2 font-bold text-xl">Search</p>
            <hr />

            {/* <input type="text" value={search} placeholder="search here" className="mt-1 mb-5 rounded-lg w-full mx-auto p-3 m bg-white shadow-lg text-black placeholder:text-gray-600"/> */}

            <p className="p-2 font-bold text-xl">Categories</p>
            <hr />
            <ul className="space-y-2 mb-5 mt-1">
                <li className="bg-gray-50 rounded-lg p-2 hover:cursor-pointer hover:scale-105 transition-all"><a href="">All</a></li>
                <li className="bg-gray-50 rounded-lg p-2 hover:cursor-pointer hover:scale-105 transition-all"><a href="">Sport</a></li>
                <li className="bg-gray-50 rounded-lg p-2 hover:cursor-pointer hover:scale-105 transition-all"><a href="">Tech</a></li>
            </ul>

            <p className="p-2 font-bold text-xl">Filter</p>
            <hr />
            <div className="mt-1">
                <input type="text" placeholder="From Date" className="mb-2 rounded-lg w-full mx-auto p-3 m bg-white shadow-lg text-black placeholder:text-gray-600 placeholder:text-xs"/>
                <center><FaArrowsUpDown/> </center>
                <input type="text" placeholder="Until Date" className="rounded-lg w-full mx-auto p-3 m bg-white shadow-lg text-black placeholder:text-gray-600  placeholder:text-xs"/>
            </div>
            
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {
          article && article.map((el, index) => 
            <CardFeatured key={index} image={el.fields.img.fields.file.url} title={el.fields.title}/>
          )
        }
      </div>
      </div>
    </div>
  );
}
