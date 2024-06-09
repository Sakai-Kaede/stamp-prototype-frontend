import React, { useContext, useEffect, useState } from 'react'
import './TimeLine.css'
import Share from '../share/Share'
import Post from '../post/Post'
import axios from "axios"
import { AuthContext } from '../../state/AuthContext'
// import {Posts} from "../../dummyData"

export default function TimeLine({ username }) {
  const [posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext);
  useEffect(() => {
    // 無名関数にasyncはつけられない
    const fetchPosts = async() => {
      const response = username 
        ? await axios.get(`/posts/profile/${username}`) 
        : await axios.get(`/posts/timeline/${user._id}`);
      // console.log(response);
      setPosts(response.data);
    };
    fetchPosts();
  }, [username, user._id]);

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

