import { Link } from "react-router-dom";

function BreadCrumb({ path, pathName='', currentPage }){
    return (
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to='/'>Home</Link></li>

                {pathName !== '' ? 
                 <li class="breadcrumb-item"><Link to={path}>{pathName}</Link></li>
                 : ''
                }
                
                <li class="breadcrumb-item active" aria-current="page">{currentPage}</li>
            </ol>
        </nav>
    )
}

export default BreadCrumb;