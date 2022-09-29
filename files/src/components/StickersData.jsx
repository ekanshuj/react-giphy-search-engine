import React from 'react'

function StickersData({ id, url, src }) {
  return (
    <div className="stickersData">
      <a href={url} target="_blank"><img style={{ height: '210px', width: '210px', border: '1px solid ghostwhite' }} src={src} /></a>
    </div>
  )
}

export default StickersData