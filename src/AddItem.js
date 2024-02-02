import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from 'react'

const AddItem = ({newItem, setNewItem, handleSubmit})=>{
    const inputRef = useRef()
    return(
        <form className="addForm" onSubmit={handleSubmit}  style={{display:'flex', justifyContent:"center", alignItems:"center", height:'80px'}}>
            {/* <label htmlFor="addItem" className="addForm1">Add Item</label> */}
            <div className="addForm2">
                <input 
                    type="text" 
                    ref={inputRef}
                    autoFocus
                    required
                    id="AddItem"
                    placeholder="Add Item"
                    value ={newItem}
                    onChange={(e)=> setNewItem(e.target.value)}
                />
            <button type="submit" aria-label="Add Item" id="buttu" onClick = {()=> inputRef.current.focus()}>
                <FaPlus/>
            </button></div>
        </form>
    )
}
export default AddItem