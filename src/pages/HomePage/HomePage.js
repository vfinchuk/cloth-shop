import React from 'react'
import './HomePage.scss'

function HomePage() {
  const menuItems = ['HATS', 'JACKETS', 'SNEAKERS', 'WOMENS', 'MENS']

  return (
    <div className="homepage">
      <div className="directory-menu">
        {
          menuItems.map((item, index) => (
            <div key={index} className="menu-item">
              <div className="content">
                <h1 className="title">{item}</h1>
                <span className="subtitle">SHOP NOW</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default HomePage
