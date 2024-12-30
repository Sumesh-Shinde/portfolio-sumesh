import React, { useState } from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import emailjs from "emailjs-com"; 
import '../contact/styles.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    emailjs
      .sendForm("service_1q5im47", "template_5ij5v7l", e.target, "RJVNdooOt67s5n_fN")
      .then(
        (result) => {
          alert("Message Sent Successfully");
          setFormData({
            name: "",
            email: "",
            description: "",
          }); 
        },
        (error) => {
          alert("Error sending message: " + error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)"
          }}
          end={{
            transform: "translateX(0px)"
          }}
        >
          <h3 className="contact__content__header-text">
            Let's Talk
          </h3>
        </Animate>

        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)"
          }}
          end={{
            transform: "translateX(0px)"
          }}
        >
          <form className="contact__content__form" onSubmit={handleSubmit}>
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  type="text"
                  name="name"
                  className="inputName"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name" className="nameLabel">Name</label>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  className="inputEmail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email" className="emailLabel">Email</label>
              </div>
              <div>
                <textarea
                  name="description"
                  className="inputDescription"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="5"
                />
                <label htmlFor="description" className="descriptionLabel">Description</label>
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </Animate>
      </div>
    </section>
  );
}

export default Contact;
