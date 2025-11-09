import hero_image from "../assets/images/hero_image.png"
import hero_logo from "../assets/images/logo.png"
import hero_head from "../assets/images/home_heading.png"
import "../styles/Home.css"

const Home = () => {
  return (
    <section className="home-container">
      <div className="hero-container">
        <div className="hero-image">
          <img src={hero_image} alt="Hero Background" className="main-img" />
          <img src={hero_logo} alt="Centered Logo" className="center-logo" />
        </div>
      </div>
      <div className="home-right">
        <img src={hero_head} alt="Welcome heading" className="heading1" />
        <p className="heading2  ">Films . Brands . Art</p>
        <p className="hero-text">
          Since 2009, V've been telling stories - stories of people, their journeys, and the places that shape them.
          Some begin in polished boardrooms, others in humble village squares. But every story starts the same way - by listening with intention. 
          V believes it takes trust, patience, and an eye for the extraordinary in the everyday.
          V doesn't just tell stories - V honors them.
        </p>
      </div>
    </section>
  )
}

export default Home