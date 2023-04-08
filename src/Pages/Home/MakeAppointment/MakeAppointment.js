import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      className="mt-32"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            alt=""
            className=" -mt-32 hidden md:block lg:w-1/2 rounded-lg shadow-2xl"
          />
          <div>
            <h2 className="text-lg text-primary font-bold">Appointment</h2>
            <h1 className="text-white text-4xl font-bold">
              Make an appointment Today
            </h1>
            <p className="py-6 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              ratione odit! Porro eaque consequuntur quod necessitatibus ratione
              dicta, sed temporibus, nostrum nemo ad tempore, et laudantium
              voluptatibus iusto! Aspernatur nesciunt laboriosam, perferendis
              voluptas consectetur praesentium dolore! Libero fugit soluta iure.
            </p>
            <PrimaryButton>Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
