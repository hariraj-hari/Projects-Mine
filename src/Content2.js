import LineItem from './LineItem.js';


const Content2 = ({items, handleCheck, trashDelete}) => {
    
  return (
    <div className='para' style={{minHeight:'50vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <LineItem
        items={items}
        key={items && items.id}
        handleCheck={handleCheck}
        trashDelete={trashDelete}
      />
    </div>
  )
}

export default Content2
