import { useState } from "react";
import UserForm from "../components/UserForm";
import AddressForm from "../components/AddressForm";
import BankForm from "../components/BankForm";
import SendDataButton from "../components/SendDataButton";

const Dashboard = () => {
  const [userDetailsVisibility, setUserDetailsVisibility] = useState(true);
  const [addressDetailsVisibility, setAddressDetailsVisibility] =
    useState(false);
  const [bankDetailsVisibility, setBankDetailsVisibility] = useState(false);

  const handleUserDetails = () => {
    setUserDetailsVisibility(true);
    setAddressDetailsVisibility(false);
    setBankDetailsVisibility(false);
  };
  const handleAddressDetails = () => {
    setUserDetailsVisibility(false);
    setAddressDetailsVisibility(true);
    setBankDetailsVisibility(false);
  };
  const handleBankDetails = () => {
    setUserDetailsVisibility(false);
    setAddressDetailsVisibility(false);
    setBankDetailsVisibility(true);
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleUserDetails}
      >
        User Details
      </button>
      <button
        type="button"
        onClick={handleAddressDetails}
        className="btn btn-secondary"
      >
        Address Details
      </button>
      <button
        type="button"
        onClick={handleBankDetails}
        className="btn btn-success"
      >
        Bank Details
      </button>
      {userDetailsVisibility && <UserForm />}
      {addressDetailsVisibility && <AddressForm />}
      {bankDetailsVisibility && <BankForm />}
      <SendDataButton />
    </div>
  );
};

export default Dashboard;
