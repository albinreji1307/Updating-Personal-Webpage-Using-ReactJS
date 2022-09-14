import Tabs from "./Tabs";
import Items from "./Items";
import Data from "./Data";
import React from 'react';
import Sidebar1 from "./Sidebar1";


import { useState } from "react";
function Gallery(){
    const [data, setData] = useState(Data);
    const categoryData = Data.map((value)=>{
          return value.category
     });
    const tabsData= ["Photography", ...new Set(categoryData)];
    
    const filterCategory=(category) =>{
        if(category==="Photography"){
            setData(Data);
            return;
        }
       const filteredData =  Data.filter((value)=>{
           return value.category === category;
       })
       setData(filteredData);
    }
    return(
     <div style={{marginTop:"0px", backgroundColor:""}}>
       <Sidebar1/>
        <div className=" b1243567" >
      <div className="column bokkkk"><br/><br/><br/><br/>
        <h2 style={{marginLeft:'70px',fontFamily:"sans-serif"}}>Gallery</h2> 
       
            <div >
            </div>
            <div >
            <Tabs filterCategory={filterCategory} tabsData={tabsData}/>
            <Items data={data} />
            </div>
            <div >
            </div>
        </div>
           
       </div>
       </div>
    
    )
}
export default Gallery;
