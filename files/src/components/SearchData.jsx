import React from 'react';

function SearchData({ id, url, src }) {
  return (
    <div className="searchData">
      <a href={url} target="_blank"><img style={{ height: '210px', width: '210px', border: '1px solid ghostwhite' }} src={src} /></a>
    </div>
  )
}

export default SearchData