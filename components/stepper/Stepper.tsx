"use client";
import React from "react";
/* eslint-disable @next/next/no-img-element */

interface StepperProps {
  step?: number;
}

const Stepper = ({ step = 1 }: StepperProps) => {
  const steps: string[] = [
    "Customer Info",
    "Shipping Info",
    "Payment",
    "Step 4",
  ];

  return (
    <>
      <div className="flex">
        <div className="flex justify-between flex-col w-fit">
          {steps?.map((ste, i) => (
            <div key={i} className={`step-item ${step === i && "active"} `}>
              <div className="step"></div>
            </div>
          ))}
        </div>
      </div>

      {/* 
      {!complete && (
        <button
          className="btn"
          onClick={() => {
            step === steps.length
              ? setComplete(true)
              : setstep((prev) => prev + 1);
          }}
        >
          {step === steps.length ? "Finish" : "Next"}
        </button>
      )} */}
    </>
  );
};

export default Stepper;
