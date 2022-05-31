import React from "react";

function GifSearch() {
  return (
    <div>
      <label>Enter a Search Term:</label>
      <form>
        <input></input>
        <break/>
        <button style={{background: "green", color: "white"}}>Find Gifs</button>
      </form>
    </div>
  )
}

export default GifSearch