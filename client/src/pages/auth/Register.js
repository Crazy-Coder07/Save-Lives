import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";
import LayoutHome from "../../components/shared/Layout/LayoutHome";
import img1 from "../../images/bld4.jpg"

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <LayoutHome>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-4 form-container">
            <Form
              formTitle={"Register"}
              submitBtn={"Register"}
              formType={"register"}
            />
          </div>
          <div className="col-md-8 form-banner ">
            <img src={img1} alt="registerImage" className="img-fluid custom-image mt-5" />
          </div>
        </div>
      )}
    </LayoutHome>
  );
};

export default Register;
