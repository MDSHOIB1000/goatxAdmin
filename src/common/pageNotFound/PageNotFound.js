import React from 'react'
import pageNotFound from "../../assets/pagenotfound/page-not-found.png"
import { Link } from 'react-router-dom'
function PageNotFound() {
  return (
    <div>
      <Link to={"/"}><img src={pageNotFound} alt='page not found' width={100 + "%"} /></Link>
    </div>
  )
}

export default PageNotFound
