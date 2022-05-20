import React from 'react'
import { Route, Routes } from 'react-router'
import Apropos from './Apropos'
import Psyco from './Psyco'

const Aboutt = () => {
  return (
    
    <div >
      <Routes>
      <Route exact path="/" element={< Psyco/>} />
      </Routes>
      <h1 className="desh">Who belongs to this page?</h1>
      <h1 className="desh">What can it help you?</h1>
      
      <h1 className="desparagg">This is a page for psychologists created to help you solve psychological problems. You can also consult them about how to deal with children and adolescents and how to encourage them to study.</h1>
      <Apropos />
  
</div>

  )}
export default Aboutt
