import React from "react";
import "./WhyChooseUs.css";
import boost from '../../assets/boost.png'
import user from '../../assets/userIcon.png'
import business from '../../assets/solution.png'
import quick from '../../assets/quick.png'
const WhyChooseUs = () => {
  const features = [
    {
      image: boost,
      title: "Boost Your Sales",
      description:
        "Offering EpesiPay as a payment option expands your customer base. With an increasing number of Kenyans adopting digital payments, you'll be poised to tap into this lucrative market."
    },
    {
      image: user,
      title: "User-Friendly Experience",
      description:
        "We've designed our platform to be intuitive and easy to navigate. No complex processes or technical jargon here - just a user-friendly experience for everyone."
    },
    {
      image: business,
      title: "Business Solutions",
      description:
        "EpesiPay caters to businesses of all sizes, from street vendors to large retailers. Our scalable solutions ensure that you can adapt to your business's evolving needs effortlessly."
    },
    {
      image: quick,
      title: "Quick Setup",
      description:
        "Getting started with EpesiPay is easy and fast. Our onboarding process is straightforward, allowing you to start accepting payments in no time."
    }
  ];

return (
    <section className="why-choose-us">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-container">
            {features.map((feature, index) => (
                <div className="feature-card" key={index}>
                    <div className="icon-container">
                        <img src={feature.image} alt={feature.title} />
                    </div>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                </div>
            ))}
        </div>
    </section>
);
};

export default WhyChooseUs;
