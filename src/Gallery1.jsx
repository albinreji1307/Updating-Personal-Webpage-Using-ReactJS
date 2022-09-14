import Tabs from "./Tabs";
import Items from "./Items";
import Data from "./Data";
import React from 'react';



import { useState } from "react";
function Gallery1(){
    const [data, setData] = useState(Data);
    const categoryData = Data.map((value)=>{
          return value.category
     });
    const tabsData= ["all", ...new Set(categoryData)];
    
    const filterCategory=(category) =>{
        if(category==="all"){
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
       
        <div className="backg" >
      <div className="column bokkkk"><br/><br/>
        <h2 class="bokk">Gallery</h2> 
       <br/>
            <div>
            </div>
            <div>
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
export default Gallery1;
