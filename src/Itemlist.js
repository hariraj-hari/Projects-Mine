import React from "react";
import { FaTrashAlt } from 'react-icons/fa'

const Itemlist = ({ items, handleCheck, trashDelete }) => {
  const reversedItems = [...items].reverse()

  return (
    <ul>
      
      <div style={{display:'flex', justifyContent:"center", alignItems:"center", flexDirection:'column'}}>
      {reversedItems.map((it) => (
        <li id='item' key={it.id} style={{minWidth:'350px', borderRadius:'15px', backgroundColor:'rgb(111, 166, 232)'}}>
          <input
            type="checkbox"
            onChange={() => handleCheck(it.id)}
            checked={it.checked}
          />
          <label
            style={(it.checked) ? { textDecoration: 'line-through', fontSize: '18px', transition: '1s ease-in 0.5s', userSelect: 'none' } : { transition: '1s ease-in 0.5s', fontSize: '15px', userSelect: 'none' }

            }
            onDoubleClick={() => handleCheck(it.id)}
          >{it.item}</label>
          <FaTrashAlt
            role='button'
            tabIndex="0"
            onClick={() => trashDelete(it.id)}
          />
        </li>

      ))}
      </div>
    </ul>
  )
}
export default Itemlist