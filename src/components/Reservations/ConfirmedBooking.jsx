import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ConfirmedBooking.css";

const ConfirmedBooking = () => {
  const navigate = useNavigate();
  const [booking, setBooking] = useState({
    date: null,
    time: null,
    guests: null,
    occasion: null,
  });

  useEffect(() => {
    const b = localStorage.getItem("Bookings");
    if (booking) {
      setBooking(JSON.parse(b));
    }
  }, [booking]);
  return (
    <div>
      <div className="booking-confirmed">
        <div className="booking-confirmed-heading">
          <h1>Thank you for your reservation!</h1>
          <h3 className="lead-txt">
            We look forward to seeing you at Little Lemon.
          </h3>
        </div>
        {booking && (
          <div className="Confirmation">
            <h2>Confirmation details</h2>
            <span>
              <strong>Occasion:</strong> {booking.occasion}
            </span>
            <span>
              <strong>Guests:</strong> {booking.guests}
            </span>
            <span>
              <strong>Date:</strong> {booking.date}
            </span>
            <span>
              <strong>Time:</strong> {booking.time}
            </span>
          </div>
        )}

        <button
          className="goHome"
          aria-label="Go back to the home page"
          onClick={() => navigate("/")}
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
