function Highlights() {
    return (
      <section className="highlights">
        <div className="container">
          <h2>Our Specials</h2>
          <div className="specials-container">
            {[1, 2, 3].map(item => (
              <article key={item} className="special-item">
                <div className="special-image">
                  <img src={`/dish-${item}.jpg`} alt={`Plato especial ${item}`} />
                </div>
                <h3>Dish Name</h3>
                <p>Description of the special dish</p>
                <p className="price">$XX.XX</p>
              </article>
            ))}
          </div>
          <a href="/menu" className="menu-button">See Full Menu</a>
        </div>
      </section>
    );
  }
  
  export default Highlights;