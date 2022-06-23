import { useState } from "react";
import BmiFile from "./components/BmiFile";
import Bmiscore from "./components/Bmiscore";
import Form1 from "./components/Form1";
import "./App.css";

function App() {
  const [changeWeight, setChangeweight] = useState({wight :"",type:""});
  const [show, setShow] = useState(false)
  const [bmi, setBmi] = useState(0);
  const [bmiType, setbmiType] = useState("Not Calculated");
  const [bmiRange, setbmiRange] = useState({
    underWeight: { low: "" },
    normal: { low: "", high: "" },
    overWeight: { low: "", high: "" },
    obesityOne: { low: "", high: "" },
    obesityTwo: { low: "", high: "" },
    obesityThree: { high: "" },
  });
  const onFormSub = (w, h) => {
    
    let b= calBmi(w,h)
    setBmi(b)
    setbmiType(weightType(b))
    const range = {
      underWeight: { low: calWeight(18.5, h) },
      normal: { low: calWeight(18.5, h), high: calWeight(24.9, h) },
      overWeight: { low: calWeight(25, h), high: calWeight(29.9, h) },
      obesityOne: { low: calWeight(30, h), high: calWeight(34.9, h) },
      obesityTwo: { low: calWeight(35, h), high: calWeight(39.9, h) },
      obesityThree: { high: calWeight(40, h) },
    };
  setbmiRange(range);
  setChangeweight(weightChange(b,w,range));
  setShow(true) 
  };

  
const calWeight = (b,h) => (b * h * h).toFixed(2);

const weightChange = (b, w, range) => {
  let changeObj;
  if (b > 24.9) {
    changeObj = {
      wight: (w - range.normal.high).toFixed(2),
      type: "positive",
    };
    return changeObj;
  } else if (b < 18.5) {
    changeObj = {
      wight: (range.normal.low - w).toFixed(2),
      type: "negative",
    };
    return changeObj;
  } else {
    changeObj = { wight: 0, type: "normal" };
    return changeObj;
  }
};

const calBmi = (w,h) => (w/(h * h)).toFixed(2);

const weightType = (bmi) => {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (18.5 < bmi && bmi < 24.9) {
    return "Normal";
  } else if (24.9 < bmi && bmi < 29.9) {
    return "Over Weight";
  } else if (29.9 < bmi && bmi < 34.9) {
    return "Obesity Class I";
  } else if (34.9 < bmi && bmi < 39.9) {
    return "Obesity Class II";
  } else if (bmi > 39.9) {
    return "Obesity Class III";
  }
};


  return (
    <div className="App">
      <Form1 getData={onFormSub} />
      {show && (
      <div className="row justify-content-center mt-5 mx-2">
        <div className="col-12 col-sm-6 mb-5">
          <Bmiscore bmiNo={bmi} bmiType={bmiType}  changeWeight={changeWeight}/>
        </div>
        <div className="col-12 col-sm-6">
        <BmiFile range={bmiRange} bmi={bmi} />
        </div> 
      </div>
      )}
    </div>
  );
}

export default App;
