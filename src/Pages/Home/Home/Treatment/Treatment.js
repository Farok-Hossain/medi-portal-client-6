import React from "react";
import treatment from "../../../../assets/images/treatment.png";

const Treatment = () => {
  return (
    <div className="card card-side bg-base-100 shadow-xl mt-16">
      <figure className="w-2/5">
        <img className="" src={treatment} alt="Movie" />
      </figure>
      <div className="card-body w-3/5 ml-10 justify-center ">
        <h2 className="card-title text-4xl">
          Exceptional Dental Care, On Your Terms
        </h2>
        <div>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quas
            molestiae corporis cum sunt vel at quibusdam saepe blanditiis? Eos
            cum in architecto vitae error magnam culpa quisquam doloremque
            eligendi esse, id, illum, possimus explicabo mollitia. Aperiam
            doloribus eum saepe. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cumque
          </p>
        </div>
        <div className="card-actions mt-5 ">
          <button className="bg-gradient-to-r from-primary to-secondary card text-white p-6 md:card-side shadow-xl px-4 py-4 ">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
