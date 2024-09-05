import "./hero.css";
import React, { useState, useEffect } from "react";
import Slide1 from "../../images/Hero/slider-12.jpg";
import Slide2 from "../../images/Hero/slider-2.png";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [Slide1, Slide2]; // Array of slides
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <>
      <section className="homeSlider">
        <div className="container-fluid position-relative">
          <div className="home_slider_Main">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`item ${index === currentSlide ? "active" : ""}`}
                style={{ display: index === currentSlide ? "block" : "none" }}
              >
                <img
                  src={slide}
                  className="w-100 h-[22vh] sm:h-[50vh] object-fill	"
                  alt={`Slide ${index + 1}`}
                />
                <div className="info">
                  {role === "farmer" && index === 0 ? (
                    <>
                      <h2 className="mb-4">
                        List Your Fresh
                        <br />
                        Vegetables
                      </h2>
                      {token ? (
                        <p>Make Profit</p>
                      ) : (
                        <p>Sign up for listing your product</p>
                      )}
                    </>
                  ) : (
                    <>
                      <h2 className="mb-3">
                        Fresh Vegetables
                        <br />
                        Big discount
                      </h2>
                      {token ? (
                        <p>Get some fresh food</p>
                      ) : (
                        <p>Sign up to get discount</p>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
