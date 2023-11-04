import React from 'react';
import { Icon } from '@iconify/react';
import '../css/contact.css';

const Contact = () => (
  <div id="my-contacts" className="contact-section">
    <div className="d-flex flex-column justify-content-center align-items-center mt-4">
      <p className="headline">Contact</p>
      <h3>
        Let&apos;s Discuss Your
        <span className="text-success">Project</span>
      </h3>
      <p className="contact-message">
        <em>
          Let&apos;s make something new, different and meaningful or make things visual
          and conceptual
          {' '}
        </em>
      </p>
    </div>
    <div className="contact-info">
      <div className="personal-contacts">
        <div className="call">
          <Icon className="icon2" icon="solar:phone-broken" />
          <div>
            <p>Call me</p>
            <p>+256 706661852</p>
          </div>
        </div>
        <div className="call">
          <Icon className="icon2" icon="mi:email" />
          <div>
            <p>Email me</p>
            <p>bronnie313@gmail.com</p>
          </div>
        </div>
        <div className="call">
          <Icon className="icon2" icon="mdi:address-marker-outline" />
          <div>
            <p>Address</p>
            <p>Kitintale, Kampala UG</p>
          </div>
        </div>
      </div>
      <form className="d-flex flex-column justify-content-between" id="contact-form" action="https://formspree.io/f/xgebvgaq" method="post">
        <div className="inputs">
          <input type="text" name="username" placeholder="Full name" required />
          <input type="email" name="UserEmail" required placeholder="Email" />
          <input type="number" name="UserNumber" required placeholder="Phone number" />
          <input type="text" name="userBudget" required placeholder="Budget" />
        </div>
        <textarea name="message" placeholder="Write me a message" />
        <button type="submit" className="btn btn-sm btn-success submit-btn">submit Message</button>
      </form>
    </div>
  </div>
);

export default Contact;
