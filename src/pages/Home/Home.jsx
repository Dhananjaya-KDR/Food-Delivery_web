import React,{useState} from 'react'
import './Home.css'
import Header from '../../componets/Header/Header'
import ExploreMenu from '../../componets/ExploreMenu/ExploreMenu'
import foodDisplay from '../../componets/foodDisplay/foodDisplay'


function Home() {
  const [category, setCategory] = useState("All")
  return (
    <div>
      <Header />

      <ExploreMenu category={category} setCategory={setCategory} />
      <foodDisplay category={category} />

    </div>
  )
}

export default Home
