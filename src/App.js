
import React from "react";
import Layout from "./Hocs/Layout";
import Home from "./Containers/Home";
import {Route , BrowserRouter ,Routes } from "react-router-dom"
import {useLocation} from "react-router"

import Profile from "./Containers/Profile";
import Deplome from "./Containers/Deplome";
import { motion , AnimatePresence  } from 'framer-motion';
function App(props){
   const location=useLocation()
  return (
   
   
    <Layout>
     <AnimatePresence exitBeforeEnter>
    <Routes  key={location.pathname} location={location}>
     <Route exact path='/etude' element={<Home/>}></Route>
     <Route exact path='/Profile' element={<Profile/>}></Route>
     <Route exact path='/Deplome' element={<Deplome/>}></Route>
    
    </Routes>
    </AnimatePresence>
    </Layout>
   

  );
}

export default App;
