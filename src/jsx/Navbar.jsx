// ...existing code...
import React, { useState } from "react";
import "../css/Navbar.css";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [isRegister, setIsRegister] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (isRegister) {
      if (!formData.name || !formData.email || !formData.password) {
        setError('All fields are required for registration.');
        return;
      }
      // Simulate registration success
      setSuccessMessage('Registration successful! You can now log in.');
    } else {
      if (!formData.email || !formData.password) {
        setError('Email and password are required for login.');
        return;
      }
      // Simulate login success
      setSuccessMessage('Login successful!');
    }
  };

  const handleLoginClick = () => {
    console.log("Login clicked ✅");
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">🏠 OLX Clone</div>

        <div className="search-box">
          <input type="text" placeholder="Search for houses, apartments..." />
          <button className="search-btn">🔍</button>
        </div>

        {/* Mobile menu toggle icon */}
        <button
          className="mobile-menu-toggle"
          aria-label={showMobileMenu ? 'Close menu' : 'Open menu'}
          onClick={() => setShowMobileMenu((v) => !v)}
        >
          {showMobileMenu ? '✖' : '+'}
        </button>

        <div className={`nav-actions${showMobileMenu ? ' show' : ''}`}>
          <button className="login-btn" onClick={handleLoginClick}>
            Login
          </button>
          <button className="sell-btn">+ Sell</button>
        </div>
      </nav>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="custom-modal">
            <button className="close-btn" onClick={handleClose}>
              ✖
            </button>

            <form onSubmit={handleSubmit}>
              {isRegister ? (
                <>
                  <h2>Register</h2>
                  {error && <p className="error" style={{color: 'red', fontSize: '14px'}}>{error}</p>}
                  {successMessage && <p className="success" style={{color: 'green', fontSize: '14px'}}>{successMessage}</p>}
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                  />
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                  />
                  <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={formData.password} 
                    onChange={handleInputChange} 
                  />
                  <button className="form-btn" type="submit">Register</button>
                  <p onClick={toggleForm} className="toggle-text">
                    Already have an account? Login
                  </p>
                </>
              ) : (
                <>
                  <h2>Login</h2>
                  {error && <p className="error" style={{color: 'red', fontSize: '14px'}}>{error}</p>}
                  {successMessage && <p className="success" style={{color: 'green', fontSize: '14px'}}>{successMessage}</p>}
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                  />
                  <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={formData.password} 
                    onChange={handleInputChange} 
                  />
                  <button className="form-btn" type="submit">Login</button>
                  <p onClick={toggleForm} className="toggle-text">
                    Don't have an account? Register
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
