const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-main">
          <div className="contact-contents">
            <div className="contact-title">
              <h1>BİZİMLƏ ƏLAQƏ</h1>
            </div>
            <div className="contact-form">
              <div className="contact-items ">
                <div className="contact-item ">
                  <h3>Əlaqə nömrələri:</h3>
                  <span>
                    <p>(+994 12) 408-72-45</p>
                    <p>(+994 50) 213-20-63</p>
                    <p>(+994 70) 715-55-00</p>
                  </span>
                </div>
                <div className="contact-item">
                  <h3>Ünvan:</h3>
                  <p>
                    Binəqədi ray., Novxanı qəs., Dəniz sahili, Sarıqaya küç.
                    AZ0119
                  </p>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.7865340476906!2d49.79329908588075!3d40.56839102163245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403092441a15decf%3A0x81cb17ed6d57f5c9!2zRMmZbml6a8mZbmFyxLE!5e0!3m2!1saz!2saz!4v1714897724687!5m2!1saz!2saz"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
