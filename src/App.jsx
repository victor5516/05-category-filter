import { useState } from 'react'
import categories from './assets/categories.json'
import './App.css'

function App() {
  const  categoryList = [
    'All',
    'Women',
    'Men',
    'Kids',
  ]
  const [filteredData, setFilteredData] = useState(categories)

  return (
    <div className="App">
    {
      filteredData.map((category, index) => {
        return (
          <div key={index}>
            <span>{category.category}</span>

            <span>{category.price}</span>

          </div>
        )
      }
      )
    }

    </div>
  )
}

export default App
