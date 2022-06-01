import React, { useEffect, useState } from "react";
import GifList from "./GifList";

function GifListContainer() {

  // const [gif1, gif2, gif3] = gifArr
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=gAiYh9cOxs6wQMLBfmkd3Vb82LRezEP2&rating=g')
      .then(res => res.json())
      .then(gifData => {
        let picData = []
        for(let i=0; i < 4; i++) {
          picData.push(gifData.data[i].images.original.url)
        }
        setGifs(picData);
      })
  }, [])

  // console.log("Gifs:", gifs);
  return <GifList gifs={gifs}/>
}

export default GifListContainer