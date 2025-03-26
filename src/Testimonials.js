function Testimonials() {
    const testimonials = [
      {
        id: 1,
        name: "Nooshin",
        rating: 5,
        comment: "The Best Restaurant Ever!"
      },
      {
        id: 2,
        name: "Radman",
        rating: 4,
        comment: "Good staff and professional chef"
      },
      {
        id: 3,
        name: "Nasim",
        rating: 5,
        comment: "Foods like Heaven."
      },
      {
        id: 4,
        name: "Navid",
        rating: 5,
        comment: "Perfect option in Chicago."
      }
    ];
  
    return (
      <section className="testimonials">
        <div className="container">
          <h2>Lo que dicen nuestros clientes</h2>
          <div className="testimonials-container">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial">
                <div className="testimonial-rating">
                  {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                </div>
                <p className="testimonial-comment">"{testimonial.comment}"</p>
                <p className="testimonial-name">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Testimonials;