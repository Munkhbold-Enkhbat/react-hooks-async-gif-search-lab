import React, { useEffect, useState } from "react";
import GifList from "./GifList";

function GifListContainer() {

  // const [gif1, gif2, gif3] = gifArr
  const [gifs, setGifs] = useState([gifArr])

  useEffect(() => {
    fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=gAiYh9cOxs6wQMLBfmkd3Vb82LRezEP2&rating=g')
      .then(res => res.json())
      .then(gifData => setGifs(gifData))
  }, [])

  // console.log("Gifs:", gifs);
  return <GifList gifs={gifs}/>
}

export default GifListContainer