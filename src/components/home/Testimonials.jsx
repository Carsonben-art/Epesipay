import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar, FaRegStar } from "react-icons/fa";
import "./Testimonials.css";
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.png";

const testimonials = [
    {
      id: 1,
      name: "John Doe",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      image: user1,
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      image: user3,
      rating: 4,
    },
    {
      id: 3,
      name: "Michael Brown",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      image: user2,
      rating: 3,
    },
    {
      id: 4,
      name: "Emily Davis",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      image: user3,
      rating: 5,
    },
    {
      id: 5,
      name: "Chris Wilson",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      image: user1,
      rating: 4,
    },
    {
      id: 6,
      name: "Sarah Johnson",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      image: user3,
      rating: 3,
    },
  ];
  

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 3;

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - itemsToShow : prevIndex - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + itemsToShow >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + itemsToShow
  );

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, index) =>
        index < rating ? <FaStar key={index} color="#F5AA1B" /> : <FaRegStar key={index} color="#F5AA1B" />
      );
  };

  return (
    <div className="testimonials-container">
    <div className="testimonial-header">
        <h1>Testimonials</h1>
    </div>
    <div className="testimonials-wrapper">
        {visibleTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
                <div className="stars">{renderStars(testimonial.rating)}</div>
                <p>{testimonial.review}</p>
                <div className="testimonial-footer">
                    <img src={testimonial.image} alt={testimonial.name} />
                    <div>
                        <h4>{testimonial.name}</h4>
                    </div>
                </div>
            </div>
        ))}
    </div>
    <div className="controls">
        <button onClick={handlePrev}>
            <FaChevronLeft />
        </button>
        <button onClick={handleNext}>
            <FaChevronRight />
        </button>
    </div>
</div>
  );
};

export default Testimonials;
