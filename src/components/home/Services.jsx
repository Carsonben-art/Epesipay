import React from 'react';
import { FaCheck } from "react-icons/fa6";
import './Services.css';
import serviceimg from '../../assets/service-img.png'
const Services = () => {
  return (
    <section className="services">
      <div className="services-header">
        <p className='title'>Services</p>
        <h2>Redefining Payments For Modern Life</h2>
        <p>
          EpesiPay, a cutting-edge solution developed by Futurizac, reimagines financial
          transactions for the modern era. <br /> Our platform is meticulously crafted to deliver
          unparalleled simplicity and user-friendliness, empowering you to conduct transactions
          seamlessly, regardless of time or location.
        </p>
      </div>

      <div className="services-content">
        <div className="image-container">
          <img src={serviceimg} alt="Delivery interaction" />
        </div>

        <div className="services-details">
          <h3>We understand the frustrations of traditional financial services:</h3>
          <ul>
            <li><FaCheck className="icon" /> Exorbitant transaction fees</li>
            <li><FaCheck className="icon" /> Misdirected payments</li>
            <li><FaCheck className="icon" /> Aggravating processing delays</li>
            <li><FaCheck className="icon" /> Convoluted payment procedures</li>
          </ul>
          <p>
            EpesiPay addresses these pain points head-on. Our innovative approach streamlines your
            financial interactions, offering a robust, secure, and efficient alternative to
            conventional methods.
          </p>
        </div>
      </div>
          <p>
            By choosing EpesiPay, you're not just adopting a new payment system – you're embracing
            a forward-thinking financial <br /> ecosystem designed to enhance your daily transactions and
            overall financial management.
          </p>
    </section>
  );
};

export default Services;
