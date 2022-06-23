import React, { useState } from "react";
import "./Form1.css";

function Form1({getData}) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [alert, setAlert] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault();
    if(isNaN(weight)||isNaN(height)){
    setAlert(true);
    }else{
      getData(weight,height)
    setAlert(false);
    setHeight("");
    setWeight("");
    }
  };

  return (
    <div align="center" className="pt-2">
      <div className="col-sm-4 shadow  rounded px-5">
        <h1 className="text-center pt-3 text-secondary h2 text-light ">My Bmi Calculator</h1>
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col col-sm-6">
              <div className="my-3">
                <label className="form-label ">Weight(kg):</label>
                <input
                  type="text"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col col-sm-6">
              <div className="my-3">
                <label className="form-label">Height(m):</label>
                <input
                  type="text"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <button type="submit" class="btn btn-primary my-3">
              Get BMI
            </button>
          </div>
        </form>
        {alert && <div className="alert alert-danger" role="alert">Please enter a valid details</div> }
      </div>
    </div>
  );
}

export default Form1;
