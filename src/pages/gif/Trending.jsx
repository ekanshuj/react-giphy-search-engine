import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TrendingData from '../../components/TrendingData';
import './Trending.css';

function Trending() {
  const [trending, setTrending] = useState([]);
  const getTrending = async () => {
    const { data } = await axios.get('https://api.giphy.com/v1/gifs/trending?api_key=BKW082Zov3URJSUoF5UWPmGvQgoT2XZL&limit=50&rating=g');
    // console.log(data.data);
    setTrending(data.data);
  }
  useEffect(() => {
    getTrending();
  }, [])

  return (
    <>
      <h1 style={{ background: '#E95420' }}>Trending Giphy's</h1>
      <div className='trending'>
        {
          trending.map((elem, i) =>
            <TrendingData key={i} id={elem.id} url={elem.url} title={elem.title} rate={elem.rating} src={elem.images.original.url} />
          )
        }
      </div>
    </>
  )
}

export default Trending