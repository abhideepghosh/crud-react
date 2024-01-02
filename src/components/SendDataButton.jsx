import React from "react";
import { useSelector } from "react-redux";

const SendDataButton = () => {
  const finalisedUserDetails = useSelector((state) => state.user);
  const finaliseDetails = async () => {
    console.log(finalisedUserDetails);
    try {
      const response = await fetch("api-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //prettier-ignore
          "Accept": "application/json",
        },
        body: JSON.stringify(finalisedUserDetails),
      });
      const data = response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <button
      onClick={finaliseDetails}
      type="button"
      className="container btn btn-dark"
    >
      Finalise Details
    </button>
  );
};

export default SendDataButton;
