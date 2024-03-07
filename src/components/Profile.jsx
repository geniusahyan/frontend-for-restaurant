import React from 'react'
import ProfileImg from '/icon.png';


const Profile = () => {
  return (
    <div>
        <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className="avatar">
                    <div className="w-10 mx-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={ProfileImg} />
                    </div>
                </label>
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu text-xl p-6 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <li><a>Profile</a></li>
                <li><a>Settings</a></li>
                <li><a>My Orders</a></li>
                <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Profile