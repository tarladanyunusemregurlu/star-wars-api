import React from 'react'
import Header from '../Header'
import StarshipsList from '../StarshipsList'
import style from "./index.module.css"
const Layout = () => {
  return (
    <div className={style.layout}>
        <Header/>
        <StarshipsList/>  
    </div>
  )
}

export default Layout