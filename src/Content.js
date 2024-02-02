import React from 'react'


const Content = ({name,
  ContenChange, title}) => {
  
  return (
    <main >
        <div >
        <button onClick={ContenChange}>{title}</button>
        </div>
        <p>Let's {name} Money !!</p>
    </main>
  )
}

export default Content
