function Footer() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/Logo.jpg" alt="Little Lemon Logo" />
            </div>
            <nav className="footer-nav">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservation</a></li>
              </ul>
            </nav>
            <div className="contact-info">
              <p>123 Lemon Street, Chicago</p>
              <p>Tel: (123) 456-7890</p>
              <p>Hours: Monday-Sunday 11am-10pm</p>
            </div>
            <div className="social-media">
              <a href="#facebook">Facebook</a>
              <a href="#instagram">Instagram</a>
              <a href="#twitter">Twitter</a>
            </div>
          </div>
          <div className="copyright">
            <p>© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;