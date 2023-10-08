import React from "react";

function Contact({ contactData }) {

  return (
    <div className="contact">
      {contactData.motivation} <br />
      <span className="small blue">{contactData.phoneTitle}</span>
      <br />
      {contactData.phone}
      <br />
      <span className="small blue">{contactData.emailTitle}</span>
      <br />
      {contactData.email}
      <br />
      <br />
      <span className="blue">{contactData.goodBye}</span>
    </div>
  );
}

export default Contact;
