import React, { useEffect, useState } from 'react'
import Header from './Componets/Layout/Header'
import NavBar from './Componets/Layout/NavBar'
import Footer from './Componets/Layout/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Componets/Home'
import Newpost from './Componets/Newpost'
import Postpage from './Componets/Postpage'
import About from './Componets/About'
import PageNotFound from './Componets/PageNotFound'
import {DataProvider} from './Context/context'






const App = () => {
 
  return(
    <div className="app" >
      <DataProvider>
        <Header/>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/newpost' element={<Newpost/>}/>
          <Route path='/about'   element={<About/>}  />
          <Route path="/postpage/:id" element={<Postpage/>}/>
          <Route path='*'   element={<PageNotFound/>}  />

        </Routes>
       </DataProvider>
    </div>
  )
}

export default App