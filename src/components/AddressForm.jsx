import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserAddress } from "../features/userSlice";

const AddressForm = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.name);
  const userAddress = useSelector((state) => state.user.address);
  const userPincode = useSelector((state) => state.user.pincode);
  const [address, setAddress] = useState(userAddress);
  const [pincode, setPincode] = useState(userPincode);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      getUserAddress({
        address,
        pincode,
      })
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Greetings {userName ? userName : "Guest"}!</h1>
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          className="form-control"
          id="address"
          name="address"
          required
        />
        <div className="invalid-feedback">Please enter your address.</div>
      </div>

      <div className="form-group">
        <label htmlFor="pincode">Pincode:</label>
        <input
          value={pincode}
          onChange={(e) => {
            setPincode(e.target.value);
          }}
          type="text"
          className="form-control"
          id="pincode"
          name="pincode"
          required
          pattern="[0-9]{6}"
        />
        <div className="invalid-feedback">
          Please enter a valid 6-digit pin code.
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="state">State:</label>
        <select className="form-control" id="state" name="state" required>
          <option defaultValue={`Select your state`}>Select your state</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Himachal Pradesh">Himachal Pradesh</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kerala">Kerala</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Manipur">Manipur</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Mizoram">Mizoram</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Odisha">Odisha</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Telangana">Telangana</option>
          <option value="Tripura">Tripura</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Uttarakhand">Uttarakhand</option>
          <option value="West Bengal">West Bengal</option>
        </select>
        <div className="invalid-feedback">Please select your state.</div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default AddressForm;
