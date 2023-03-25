

import React from 'react';
import { Link, Outlet } from 'react-router-dom';



const DashboardLayout = () => {


    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div className="w-full navbar bg-base-300">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className=" drawer-overlay btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">DASHBOARD</div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {/* <!-- Navbar menu content here --> */}
                            <li><Link to="/">Home</Link></li>

                            <li><Link to="/dashboard/myorders">My Orders</Link></li>

                            <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                            <li> <Link to='/dashboard/allbuyers'>All Buyers</Link></li>


                            <li> <Link to='/dashboard/addproduct'>Add A Product</Link></li>
                            <li>  <Link to='/dashboard/mywishlist'>My WishList</Link></li>
                            <li>  <Link to='/dashboard/myproducts'>My Products</Link></li>


                        </ul>
                    </div>
                </div>
                {/* <!-- Page content here --> */}
                {/* Content */}
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay btn btn-ghost btn-square"></label>
                <ul className="menu p-4 w-80 bg-base-100">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                    <li> <Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                    <li> <Link to='/dashboard/addproduct'>Add A Product</Link></li>
                    <li>  <Link to='/dashboard/mywishlist'>My WishList</Link></li>

                </ul>

            </div>
        </div >
    );
};

export default DashboardLayout;