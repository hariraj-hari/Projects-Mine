import React from 'react'

const Header = (props) => {
  return (
    
      <header style={{height:'70px'}}>{props.title}</header>
      
  
  )
}
Header.defaultProps={
  title: "Hariraj K"
}
export default Header
