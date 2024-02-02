import Footer from "./Footer.js";
import Header from "./Header.js";
import Content2 from "./Content2.js"
import React, { useState } from 'react'
import './index.css'
import "./App.css";
import AddItem from "./AddItem.js";
import { useEffect } from "react";
import API_request from "./API_request.js";
import Loading from "./Loading.jsx";


function App() {
  const dat = new Date();
  const API_URL = "http://localhost:3001/items"
  const [items, setItems] = useState([]);
  const [fetchError, setfetchError] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [newItem, setNewItem] = useState('')
  const [run, setRun]=useState(true)

  useEffect(()=>{
    if(run){
      const fetechItem = async ()=>{
        try{
          const response =  await fetch(API_URL);
          if(!response.ok) throw Error("Data Not found 404");
          const ListItems = await response.json();
          setItems(ListItems)
          setfetchError(null);
        }
        catch(err){
          setfetchError(err.message);
        }
        finally{
          setIsloading(false)
        }
      }
      setTimeout(()=>fetechItem(), 3000)
      console.log("call")
      setRun(false)
    }
    
   },[items ,run])


  const handleCheck = async (id) => {
    const updatedItem = items.map((item)=>(item.id===id ? {...item, checked:!item.checked}:item))
    setItems(updatedItem)
    setfetchError(null);
    const myItem = updatedItem.find((item)=>item.id===id)
    const updateOptions = {
      method :'PATCH',
      headers:{
        'Content-Type':'application/json'
      }, 
      body:JSON.stringify({checked:myItem.checked})
    }
    const requestId = `${API_URL}/${id}`
    const result = await API_request(requestId, updateOptions)
    if(result) setfetchError(result)
    setRun(true)
    return updatedItem
  }


  const trashDelete = async (id) => {
    const trash = items.filter((items) => items.id !== id)
    setItems(trash)
    const reqUrl = `${API_URL}/${id}`
    const deletOption ={
      method:'DELETE'
    }
    const result = await API_request(reqUrl, deletOption)  
    if(result) setfetchError(result)
  }
  
 
  const handleSubmit = (e) => {
    e.preventDefault()
    addItem(newItem)
    setNewItem('')


  }
  
  const addItem = async (item) => {
    const id = String(items.length ? (parseInt(items[items.length - 1].id) + 1) : 1);
    const addItem = { id, checked: false, item }

    const listItem = [...items, addItem]
    setItems(listItem)
    const postOptions ={
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(addItem)
    }
    const result = await API_request(API_URL, postOptions)
    
    if(result) setfetchError(result)
  }
  
  
   


  return (
    <div className="container">
    <div className="App">
      <Header title='Activities' />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        addItem={addItem}
      />
      <div>
        
      </div>
      <div className="MainContent">
        <div>
          <main>
            {isLoading && <Loading/>}
            {fetchError && <p>{`Error:${fetchError}`}</p>}
          </main>
        {!isLoading && !fetchError && 
          <Content2
            items={items}
            handleCheck={handleCheck}
            trashDelete={trashDelete}
          />}
          </div>
        </div>
      <Footer
        dat={dat}
        length={items.length}
      />
      
    </div>
  
    </div>
  )
}
export default App;
