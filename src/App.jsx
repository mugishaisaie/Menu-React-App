import React from 'react'
import { useState } from 'react'
import menu from './data'
import Title from './Title'
import Menu from './Menu'
import Categories from './Categories'

// const temmpCategories = menu.map((item)=>item.category);
// const tempSet = new Set(temmpCategories)
// const tempItems =['all', ...tempSet];
const allCategories = ['all', ...new Set(menu.map((item)=>item.category))];
console.log(allCategories)
function App() {

  const [menuItems, setMenu] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  console.log(categories)

  const filterItems = (category)=>{
    if(category === 'all'){
      setMenu(menu);
      return;
    }
    // console.log(category)
    const newItems = menu.filter((item)=> item.category === category);
    setMenu(newItems);

  }
 

  return (
    <main>
      <div className="menu">
        <Title text={'Our Menu'} />
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems} />
      </div>
    </main>
  )
}

export default App
