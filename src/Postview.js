import React, { useState } from 'react';
import { AiOutlineHeart, AiOutlineCamera } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";
import { FiInstagram } from "react-icons/fi";
import './Post.css';


function Postview() {
    const [Data , setData] = useState([]);
        fetch('http://localhost:3002/user')
        .then((response) => response.json())
        .then((data) => setData(data));
  return (
    <div>

        <section className={'header'}>
          <span className={'logo'}><FiInstagram/>Instaclone</span><span className={'cam'}><AiOutlineCamera/></span>
        </section>

        {Data.map((post) =>{
             return( 
      <div className={'container'}>

        <section className={'posthead'}>
          <span><b>{post.name}</b><br/>{post.location}</span><spna><b>...</b></spna>
        </section>

        <section>
          <img src={post.PostImage} alt="" ></img>
        </section>

        <section className={'likes'}>
        <span><AiOutlineHeart size={'1.5rem'}/> <TbBrandTelegram size={'1.5rem'}/></span><span>{post.date}</span>
        </section>

        <section className={'caption'}>
          <div>
            <span>{post.likes}Likes</span>
          </div>
          <div><b>{post.description}</b></div>
        </section>
      </div>

     )})}
    
    </div>
             
  )
}

export default Postview;