import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrumbs({breadCrumbsTitle}) {
    return (
        <div className="page-titles">
            <ol className="breadcrumb">
                {/* <li><h5 className="bc-title">PayPanda</h5></li> */}
                <li className="breadcrumb-item"><Link to={"/"}>
                    Home
                </Link>
                </li>
                {breadCrumbsTitle.title_1 && 
                <li className="breadcrumb-item"><Link to={breadCrumbsTitle.path_1}>
                {` ${breadCrumbsTitle.title_1}`}
                </Link>
                </li>}
                {breadCrumbsTitle.title_2 && 
                <li className="breadcrumb-item"><Link to={breadCrumbsTitle.path_2}>
                {` ${breadCrumbsTitle.title_2}`}
                </Link>
                </li>}
                {breadCrumbsTitle.title_3 && 
                <li className="breadcrumb-item"><Link to={breadCrumbsTitle.path_3}>
                {` ${breadCrumbsTitle.title_3}`}
                </Link>
                </li>}
                
            </ol>
        </div>
    )
}

export default Breadcrumbs
