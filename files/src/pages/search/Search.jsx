import React, { useState, useEffect } from 'react'
import SearchData from '../../components/SearchData';
import axios from 'axios';
import './Search.css';

function Search() {
  const [search, setSearch] = useState([]);
  const [searchTarget, setSearchTarget] = useState('');

  const getSearch = async () => {
    const { data } = await axios.get('https://api.giphy.com/v1/gifs/search?api_key=BKW082Zov3URJSUoF5UWPmGvQgoT2XZL&q=fish&limit=20&offset=0&rating=g&lang=en');
    console.log(data.data);
    setSearch(data.data);
  }
  useEffect(() => {
    getSearch();
  }, [])


  return (
    <>
      <input style={{ width: '100%', height: '7vh', outline: 'none', marginTop: '5px', marginBottom: '5px', fontSize: '1.755rem', textAlign: 'center', border: 'none', background: '#FFFFFF' }} type="search" id="giphySearch" placeholder='Search all the GIFs and Stickers' onChange={elem => setSearchTarget(elem.target.value.toLowerCase())} />
      <div className='search'>
        {
          search.filter(elem => elem.title.toLowerCase().includes(searchTarget.toLowerCase())).map((elem, i) =>
            <SearchData key={i} id={elem.id} url={elem.url} title={elem.title} src={elem.images && elem.images.original ? elem.images.original.url : undefined} />)
        }
      </div>
    </>
  )
}

export default Search