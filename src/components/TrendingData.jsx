import React from 'react'

function TrendingData({ id, url, rate, src }) {
  return (
    <div className="trendingData">
      <a href={url} target="_blank"><img style={{ height: '210px', width: '210px', border: '1px solid ghostwhite' }} src={src} /></a>
    </div>
  )
}

export default TrendingData