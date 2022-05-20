import React from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Psyco from './Psyco'

const Solutionn = () => {
  return (
    <div >
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={< Psyco/>} />
      </Routes>
      </BrowserRouter>
      <div className="desvideo"></div>
        <iframe  className="desvideo" width="300" height="360" src="https://www.youtube.com/embed/l21sVOVK6Vo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="desvideo"  width="300" height="360" src="https://www.youtube.com/embed/MEJsNkC7hCc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="desvideo" width="300" height="360" src="https://www.youtube.com/embed/QwzykxVxiu4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="desvideo" width="300" height="360" src="https://www.youtube.com/embed/u1NmtSNu0zI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
   
  )
}

export default Solutionn