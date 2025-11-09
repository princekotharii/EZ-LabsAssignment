import { useState } from "react"
import axios from "axios"
import "../styles/ContactUs.css"
import corner_bottom from "../assets/images/bottom_corner.png"
import corner_top from "../assets/images/top_corner.png"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("")

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus("Please fill in all fields.")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus("Please enter a valid email address.")
      return
    }
    
    setLoading(true)

    try {
      const res = await axios.post(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      if (res.status === 200 || res.status === 201) {
        setStatus("Form Submitted Successfully!")
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        setStatus("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Submission Error:", error)
      setStatus("Network error. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="contact-section">
      <img src={corner_top} alt="design" className="corner-design top-right" />
      <img src={corner_bottom} alt="design" className="corner-design bottom-left" />

      <div className="contact-container">
        <div className="contact-text">
          <p>
            Whether you have an idea, a question, or simply want to explore how
            we can work together — we're just a message away. <br />
            Great stories always begin with a good conversation.
          </p>
        </div>

        <div className="contact-form">
          <h2>Join the Story</h2>
          <p>Ready to bring your vision to life? Let's talk.</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? <span className="loader"></span> : "Submit"}
            </button>
          </form>

          {status && <p className="status">{status}</p>}
          <p className="contact-details">vernita@varnanfilms.co.in | +91 98736 84567</p>
        </div>
      </div>
    </section>
  )
}

export default ContactUs