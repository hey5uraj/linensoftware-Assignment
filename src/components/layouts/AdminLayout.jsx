import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import ContactPageIcon from '@mui/icons-material/ContactPage';


const AdminLayout = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li className='AdminNavList'><NavLink to="products" className={({ isActive }) => isActive ? 'active' : ''}><PersonIcon className='svg'/>Products</NavLink></li>
              <li className='AdminNavList'><NavLink to="productsDetails" className={({ isActive }) => isActive ? 'active' : ''}><ContactPageIcon  className='svg'/>Product Details</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className='PageContainer'>
        <Outlet />
      </div>
    </>
  )
}

export default AdminLayout
