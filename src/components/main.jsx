import React from 'react';
import Aside from "./aside-section";
// import Map from "./map";
import SettingPage from './setting-page';
import "./style.scss";
const Main = ()=>{
 return (
   <main>
     <Aside />
     {/* <Map /> */}
     <SettingPage/>
   </main>
 );
}

export default Main;