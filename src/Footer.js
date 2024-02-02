import React from 'react'

const Footer = ({length}) => {
    
  return (
    <div>
      <footer>CopyRight &copy; <div>The list size is {length} {length<2?"item":"items"}</div></footer>
    </div>
  )
}

export default Footer
