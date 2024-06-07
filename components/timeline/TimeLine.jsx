import React, { useEffect, useState } from 'react'
import './TimeLine.css'
import Share from '../share/Share'
import Post from '../post/Post'
import axios from "axios"
// import {Posts} from "../../dummyData"

export default function TimeLine({ username }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // 無名関数にasyncはつけられない
    const fetchPosts = async() => {
      const response = username 
        ? await axios.get(`/posts/profile/${username}`) 
        : await axios.get("/posts/timeline/6642c21b9fe01f5810fcec38");
      // console.log(response);
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className='timeline'>
      <div className='timelineWrapper'>
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  )
}