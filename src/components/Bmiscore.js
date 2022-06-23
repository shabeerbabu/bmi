import React from "react";

function Bmiscore({ bmiType, bmiNo, changeWeight }) {
  return (
    <div className="text-center shadow rounded p-4">
      <div>Your BMI Score</div>
      <div className="row justify-content-md-center">
      {(bmiType === "Obesity Class I" ||
        bmiType === "Over Weight" ||
        bmiType === "Obesity Class II" ||
        bmiType === "Obesity Class III") && (
        <div className="p-3 my-2 alert fs-1 alert-danger col-sm-4">{bmiNo}</div>
      )}
      {bmiType === "Normal" && (
        <div className="p-3 my-2 alert fs-1 alert-success col-sm-4">{bmiNo}</div>
      )}
      {bmiType === "Underweight" && (
        <div className="p-3 my-2 alert fs-1 alert-warning col-sm-4">{bmiNo}</div>
      )}


        {/* <div className="p-3 my-2 alert fs-1 alert-primary col-sm-4">
          {bmiNo}
        </div> */}
      </div>
      
      {(bmiType === "Obesity Class I" ||
        bmiType === "Over Weight" ||
        bmiType === "Obesity Class II" ||
        bmiType === "Obesity Class III") && (
        <div className="fs-3 fw-bold text-danger">{bmiType}</div>
      )}
      {bmiType === "Normal" && (
        <div className="fs-3 fw-bold text-success">{bmiType}</div>
      )}
      {bmiType === "Underweight" && (
        <div className="fs-3 fw-bold text-warning">{bmiType}</div>
      )}

      {changeWeight.type === "positive" && (
        <div className="fs-4">
          "You need lose{" "}
          <span className="fw-bold">{changeWeight.wight} kg"</span>{" "}
        </div>
      )}
      {changeWeight.type === "negative" && (
        <div className="fs-4">
          "You need gain{" "}
          <span className="fw-bold">{changeWeight.wight} kg"</span>{" "}
        </div>
      )}
      {changeWeight.type === "normal" && (
        <div className="fs-4">"You weight is Normal,Good for you" </div>
      )}
    </div>
  );
}

export default Bmiscore;
