import React from 'react'
import  Button  from '@mui/material/Button';
function Tabs({filterCategory, tabsData}){
    return(
        <>
 <div className="text-center my-4" >
 {
 tabsData.map((category, index)=>{
      return (
        <Button onClick={()=> filterCategory(category)} key={index} style={{color:"",marginight:"80",border:"red",paddingLeft:"180px"}}>{category}</Button>
      )
 })
 }
</div>
        </>
    )
}
export default Tabs;