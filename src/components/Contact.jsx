const Contact = () => {
    return (
      <section className="py-12 bg-gray-100 text-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Contact</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Info */}
            <div className="space-y-4">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a href="mailto:sridharmahadev18@gmail.com" className="text-blue-600 underline">
                  sridharmahadev18@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Mobile:</span>{" "}
                <a href="tel:+919842216237" className="text-blue-600 underline">
                  +91 98422 16237
                </a>
              </p>
              <p>
                <span className="font-semibold">LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com/in/sridhar-ananth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  linkedin.com/in/sridhar-ananth
                </a>
              </p>
              <p>
                <span className="font-semibold">GitHub:</span>{" "}
                <a
                  href="https://github.com/Sridev-97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Sridhar-Ananth
                </a>
              </p>
            </div>
  
            {/* Map */}
            <div>         
              <iframe
                title="My Location - Chennai"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31103.086720510288!2d80.1808027528516!3d12.979152820785812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d9ff2065a3b%3A0x66435015604038cc!2sVelachery%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1744472796213!5m2!1sen!2sin"               
                width="100%"
                height="250"
                className="rounded-lg shadow"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  