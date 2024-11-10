import React from 'react';
import './App.scss';
import { Navbar } from './components';
import { About, Footer, Header, Skills, Testimonials, Work } from './container';
import Journals from './container/Journals/Journals';
import PreLoader from './components/PreLoader/PreLoader';
const App = () => {
  return (
    <>
      <PreLoader/>
      
      <div className='app'>
          <Navbar/>
          <Header/>
          <Skills/>
          <About/>
          <Work/>
          {/* <Journals/> */}
          <Testimonials/>
          <Footer/>
      </div>
    </>
  )
}

export default App