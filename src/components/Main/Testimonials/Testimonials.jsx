import React from "react";
import { AppWrap } from "../../../wrapper";
import { images } from "../../../constants";
import "./Testimonials.css";
import { AiFillStar } from "react-icons/ai";
import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";

const Pulse = styled.div`
  animation: 5s ${keyframes`${pulse}`} infinite;
`;

const reviews = [
  {
    image: images.iqsf,
    name: "Katrina",
    reviewText:
      "I loved the experience at the restaurant! The food was delicious and the service was exceptional. I will definitely be back more often!",
  },
  {
    image: images.sajal,
    name: "Shraddha",
    reviewText:
      "I went to the restaurant with my family and we were very pleased with everything. The food was wonderful and the atmosphere was very cozy. I highly recommend it!",
  },
  {
    image: images.ramsha,
    name: "Alia",
    reviewText:
      "I have been to many restaurants, but this one certainly stood out. The quality of the ingredients and the preparation of the dishes were impeccable. Not to mention the presentation, which was ...",
  },
  {
    image: images.mawra,
    name: "Disha",
    reviewText:
      "The restaurant has a great variety of dishes and all the ones I tried were excellent. In addition, the price is fair and the service is very attentive. I will definitely recommend it to my friends.",
  },
];

const ReviewCard = ({ props }) => {
  return (
    <div className="app__testimonials-review">
      <div className="app__testimonials-stars">
        <AiFillStar className="app__testimonials-review-stars-icon" />
        <AiFillStar className="app__testimonials-review-stars-icon" />
        <AiFillStar className="app__testimonials-review-stars-icon" />
        <AiFillStar className="app__testimonials-review-stars-icon" />
        <AiFillStar className="app__testimonials-review-stars-icon" />
      </div>
      <div className="app__testimonials-name-image">
        <img
          className="app__testimonial-review-image"
          src={props.image}
          alt={props.name}
        />
        <h6 className="app__testimonials-review-name">{props.name}</h6>
      </div>
      <p className="app__testimonials-review-text">{props.reviewText}</p>
    </div>
  );
};
const Testimonials = () => {
  return (
    <div className="app__testimonials-content">
      <h1 className="app__testimonals-title">Testimonials</h1>
      {/* <ReviewCard /> */}
      <div className="app__testimonial-review-card">
        {reviews.map((review) => {
          return (
            <Pulse>
              <ReviewCard props={review} />
            </Pulse>
          );
        })}
      </div>
    </div>
  );
};

export default AppWrap(
  Testimonials,
  "testimonials-section",
  "app__testimonials"
);
