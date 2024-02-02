import React from 'react';
import Itemlist from './Itemlist';
const LineItem=({items, trashDelete, handleCheck})=>{
    return(
        (items && items.length)?(
          <div style={{display:'flex', justifyContent:"center", alignItems:"center", flexDirection:'column', minHeight:'inherit'}}>
            <h3 className="yourlist" style={{position:'sticky', top:'0', width:'100%'}}>Your's List</h3>
            <Itemlist
              items={items}
              handleCheck={handleCheck}
              trashDelete={trashDelete}/>
          </div>
          
          ):(
            <p style={{border:'2px solid black', backgroundColor:'aliceblue', boxShadow:'3px 3px 20px black', width:'50%', borderRadius:'12px'}}>Your's Lists Empty!!</p>
          )
          
    )
}
export default LineItem