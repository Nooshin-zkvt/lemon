function Nav() {
    return (
      <nav className="navigation">
        <img src="/logo.jpg" alt="Little Lemon Logo" className="logo" />
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations" className="highlight">Reservation</a></li>
          <li><a href="/order">Online orders</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    );
  }
  
  export default Nav;