import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    title: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      title: '',
      message: ''
    })
  }

  return (
    <div className="contact-form-container animate-slide-in-right">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          submit
        </button>
      </form>

      <style jsx>{`
        .contact-form-container {
          background: rgba(255, 255, 255, 0.05);
          padding: 48px;
          border-radius: 16px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-group {
          position: relative;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 16px 20px;
          background: transparent;
          border: none;
          border-bottom: 2px solid rgba(255, 255, 255, 0.3);
          color: var(--text-white);
          font-size: 1rem;
          font-family: inherit;
          transition: all 0.3s ease;
          resize: none;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: var(--text-gray);
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-bottom-color: var(--accent-coral);
        }

        .form-textarea {
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 8px;
          padding: 16px 20px;
        }

        .form-textarea:focus {
          border-color: var(--accent-coral);
        }

        .btn {
          align-self: flex-start;
          margin-top: 16px;
        }

        @media (max-width: 768px) {
          .contact-form-container {
            padding: 32px 24px;
          }

          .contact-form {
            gap: 20px;
          }

          .form-input,
          .form-textarea {
            padding: 14px 16px;
            font-size: 0.9rem;
          }

          .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  )
}

export default ContactForm