import React from "react";
import { Link } from "react-router-dom";

function BreadCrumb({ path, pathName='', currentPage }){
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to='/'>Home</Link></li>

                {pathName !== '' ? 
                 <li className="breadcrumb-item"><Link to={path}>{pathName}</Link></li>
                 : ''
                }
                
                <li className="breadcrumb-item active" aria-current="page">{currentPage}</li>
            </ol>
        </nav>
    )
}

export default BreadCrumb;