import React from "react";

const AppointmentOption = ({ appointmentOption }) => {
  const { name, slots } = appointmentOption;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center">
        <h2 className="card-title text-primary">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>{slots.length > 0}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
