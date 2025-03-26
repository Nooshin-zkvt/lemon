function About() {
    return (
      <section className="about">
        <div className="container">
          <div className="about-container">
            <div className="about-content">
              <h2>Our History</h2>
              <p>
              Founded in 2023, Little Lemon was born from the dream of two brothers passionate about Mediterranean cuisine.
              Our mission is to bring the authentic flavors of the region with a modern and innovative twist.
              </p>
              <p>
              Every dish on our menu tells a story, from traditional recipes inherited from our grandparents to contemporary creations that reflect the diversity of Chicago.
              </p>
              <p>
              All of our ingredients are carefully selected from local suppliers, ensuring freshness and quality in every bite.
              </p>
            </div>
            <div className="about-images">
              <div className="about-image about-image-1">
                <img src="/images/restaurant.jpg" alt="Inside Little Lemon Restaurant" />
              </div>
              <div className="about-image about-image-2">
                <img src="/images/restaurantfood.jpg" alt="Restaurant Food" />
              </div>
              <div className="about-image about-image-3">
                <img src="/images/restaurantchefB.jpg" alt="Little lemon Chef" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;