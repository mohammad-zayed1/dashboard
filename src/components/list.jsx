import React from 'react';

import { FaWallet } from "react-icons/fa";
import { BiTrip } from "react-icons/bi";
import { AiFillSetting, AiFillHome } from "react-icons/ai";
import { MdOutlineHelp } from "react-icons/md";


let List = ()=>{
    let liText = ["Home","Trips", "Walet", "Setting", "Help"];
    let icon = [<AiFillHome/>,<BiTrip />, <FaWallet />, <AiFillSetting />, <MdOutlineHelp />];
    let listItems = liText.map((text , index) => {
    return (
      <li key={text}>
        <i>{icon[index]}</i>
        <a href={`#${text}`}>{text}</a>
      </li>
    ); 
});
return(
    <ul>
    {
listItems
    }
    </ul>
);
}

export default List;