import React from 'react'
import './logo.css'

function Logo() {
  // Cada que el usuario haga clic en el boton se agregara o quitar la clase
  const handleToggleSidebar = () => {
    document.body.classList.toggle('toggle-sidebar');
  };

  return (
    <div className="d-flex align-items-center justify-content-between">
        <a href="/" className='logo d-flex align-items-center'>
            {/* Aqui va la imagen del logo - Un img */}
            <span className="d-none d-lg-block">Admin Dashboard</span>
        </a>
        <i className='bi bi-list toggle-sidebar-btn' onClick={handleToggleSidebar}></i>
    </div>
  )
}

export default Logo