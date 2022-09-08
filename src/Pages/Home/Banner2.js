import React from "react"; 
import banner2 from "../../assets/images/treatment.png"
import PrimaryButton from "../Shared/PrimaryButton";
const Banner2 = () => {
  return (
    <div className="hero min-h-screen lg:w-10/12 mx-auto">
      <div className="hero-content flex-col lg:flex-row lg:gap-12">
        <img
          src={banner2}
          className="max-w-sm rounded-lg shadow-2xl" alt="hero pic"
        />
        <div>
          <h1 className="text-5xl font-bold text-justify">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-6 text-justify">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
          </p>
          <PrimaryButton>get started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
