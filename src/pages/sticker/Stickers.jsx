import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import StickersData from '../../components/StickersData';
import './Stickers.css';

function Stickers() {
  const [sticker, setSticker] = useState([]);
  const getStickers = async () => {
    const { data } = await axios.get('https://api.giphy.com/v1/stickers/trending?api_key=BKW082Zov3URJSUoF5UWPmGvQgoT2XZL&limit=25&rating=g');
    // console.log(data.data);
    setSticker(data.data);
  };

  useEffect(() => {
    getStickers();
  }, []);

  return (
    <>
      <h1 style={{ background: '#E95420' }}>Trending Stickers</h1>
      <div className="stickers">
        {
          sticker.map((elem) => <StickersData key={elem.id} id={elem.id} url={elem.url} title={elem.url} src={elem.images.original.url} />)
        }
      </div>
    </>
  )
}

export default Stickers