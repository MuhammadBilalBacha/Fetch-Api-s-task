import React from "react";
import image from "../Assets/KhwateenRozgar.jpeg";
// import loader from "../Assets/loader.gif";

const Card = (props) => {
  return (
    <div className="myCard">
      <img src={image} className="w-100" alt="" />

      <span className="card-companyName">{props.comanyName} </span>

      <span className="designation">{props.designation}</span>
      <span className="location">{props.cityName}</span>
      <button className="card-button">
        <a href="https://www.khawateenrozgar.com/job_listing?title=Senior%20Graphics%20Designer&city=Islamabad&type=Full%20Time&Sortby=&SalaryRange=&Skill=&industry=&page=1">
          {" "}
          Apply now
        </a>
      </button>
    </div>
  );
};

export default Card;
