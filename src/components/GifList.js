import React from "react";

function GifList ({ gifs }) {
  console.log("Gifs:", gifs);

  const renderGifs = () => {
    return gifs.data.map(gif => {
      return (
        <li key={gif.id}>
          <img src={gif.url} alt="Your gif is coming..."/>
        </li>
      )
    })
  }

  return (
    <ul>
      {renderGifs()}
    </ul>
  )

}

export default GifList