
import React from "react";
import Layout from "./Hocs/Layout";
import Home from "./Containers/Home";
import {Route , BrowserRouter ,Routes } from "react-router-dom"
import {useLocation} from "react-router"

import Profile from "./Containers/Profile";
import Deplome from "./Containers/Deplome";
import { motion , AnimatePresence  } from 'framer-motion';
import Experiece from "./Containers/Experiece";
import Contact from "./Containers/Contact";
function App(props){
   const location=useLocation()
  return (
   
   
    <Layout>
     <AnimatePresence exitBeforeEnter>
    <Routes  key={location.pathname} location={location}>
     <Route exact path='/etude' element={<Home/>}></Route>
     <Route exact path='/experience' element={<Experiece/>}></Route>
     <Route exact path='/contact' element={<Contact/>}></Route>
    
    </Routes>
    </AnimatePresence>
    </Layout>
   

  );
}

export default App;
