import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

function Contact() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4" style={{ color: '#0d6efd' }}>Contact Me</h1>
      <div className="row justify-content-center">

        {/* Email */}
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-white h-100 text-center p-3">
            <FaEnvelope size={50} className="mb-3" />
            <div className="card-body">
              <h5 className="card-title">Email</h5>
              <p className="card-text">My Email</p>
              <a href="mailto:husdfdf@gmail.com" className="btn btn-outline-primary">Send Email</a>
            </div>
          </div>
        </div>

        {/* GitHub */}
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-white h-100 text-center p-3">
            <FaGithub size={50} className="mb-3" />
            <div className="card-body">
              <h5 className="card-title">GitHub</h5>
              <p className="card-text">My GitHub</p>
              <a href="https://github.com/Darkness947" target="_blank" rel="noreferrer" className="btn btn-outline-primary">Visit GitHub</a>
            </div>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-white h-100 text-center p-3">
            <FaLinkedin size={50} className="mb-3" />
            <div className="card-body">
              <h5 className="card-title">LinkedIn</h5>
              <p className="card-text">My LinkedIn</p>
              <a href="https://www.linkedin.com/in/hussain-alhumaidi-6726b334a/" target="_blank" rel="noreferrer" className="btn btn-outline-primary">Visit LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Location (Optional) */}
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-white h-100 text-center p-3">
            <FaMapMarkerAlt size={50} className="mb-3" />
            <div className="card-body">
              <h5 className="card-title">Location</h5>
              <p className="card-text">Eastern Province, Saudi Arabia</p>
            </div>
          </div>
        </div>

        {/* External Link (Optional) */}
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-white h-100 text-center p-3">
            <FaExternalLinkAlt size={50} className="mb-3" />
            <div className="card-body">
              <h5 className="card-title">My Portfolio Web App</h5>
              <p className="card-text">My Portfolio</p>
              <a href="https://hussain-portfolio-dev.netlify.app" target="_blank" rel="noreferrer" className="btn btn-outline-primary">Visit My Portfolio</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
// This code defines a Contact component that displays contact information including email, GitHub, LinkedIn, and Location.
// It uses React Icons for icons and Bootstrap for styling.
