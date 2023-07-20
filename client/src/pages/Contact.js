import React from "react";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import LayoutHome from "../components/shared/Layout/LayoutHome";
import img1 from "../images/contact.jpg"

const Contact = () => {
  return (
    <LayoutHome title={"Contact us"}>
      <div className="row contactus p-5">
        <div className="col-md-6 mt-3">
          <img
            src={img1}
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-primary p-2 text-white text-center mt-3">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query and info about product feel free to call anytime we 24X7
            Available
          </p>
          <p className="mt-3">
            <BiMailSend /> : adityaranjan2515@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : +91 7479535799
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </LayoutHome>
  );
};

export default Contact;