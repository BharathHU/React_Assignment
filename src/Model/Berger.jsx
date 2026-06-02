import "./Berger.css";
import menu from "../assets/menu-bar.png";
import img4 from "../assets/icons8-arrow-30.png";
import img1 from "../assets/pexels-eva-bronzini-6141651.jpg";
import img2 from "../assets/pexels-rachel-claire-6752433.jpg";
import img3 from "../assets/pexels-robin-stickel-70497.jpg";

function Berger() {
  return (
    <>
      <nav>
        <ul>
          <li>Home</li>
          <li>Order</li>
          <li>Food</li>
          <li>Restaurant</li>
          <li>Testimonials</li>
          <li>Contact Us</li>
        </ul>

        <img src={menu} alt="" className="menu" />
      </nav>

      <section className="hero">

        <div className="content">
          <h1>Burger</h1>

          <p>Welcome to Burger Restaurant, where every bite is packed with flavor and freshness. We serve delicious burgers made with premium ingredients, freshly baked buns, and mouth-watering toppings. Whether you're craving a classic cheeseburger, a spicy special, or a loaded burger feast, we have something for everyone. Visit us today and enjoy great food, a friendly atmosphere, and an unforgettable dining experience.</p>

          <button>Click Me</button>
        </div>

        <div className="image">
          <img src={img3} alt="" />
        </div>

      </section>

      <section className="gallery-section">

        <div className="gallery">

          <div className="left">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
          </div>

          <div className="right">
            <img src={img3} alt="" />
          </div>

        </div>

        <div className="card">
          <h4>Burger King</h4>

          <h1>
            Looking For Something To Satisfy Your Hunger?
            <br />
            More Offers
          </h1>

<button>
            Click Me <img src={img4} alt="" className="arrow" />
          </button>
        </div>

      </section>
    </>
  );
}

export default Berger;