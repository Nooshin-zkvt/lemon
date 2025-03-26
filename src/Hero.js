function Hero() {
    return (
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We offer authentic Mediterranean cuisine with a modern twist.</p>
            <a href="/reservations" className="reserve-button">Reservar a Table</a>
          </div>
          <div className="hero-image">
            <img src="images/restaurant.jpg" alt="Little Lemon Restaurant" />
          </div>
        </div>
      </section>
    );
  }
  
  export default Hero;