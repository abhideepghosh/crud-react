import React from "react";

const BankForm = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="bankDetails">Bank Details:</label>
        <input
          type="text"
          className="form-control"
          id="bankDetails"
          name="bankDetails"
          required
        />
        <div className="invalid-feedback">Please enter your bank details.</div>
      </div>

      <div className="form-group">
        <label htmlFor="ifscCode">IFSC Code:</label>
        <input
          type="text"
          className="form-control"
          id="ifscCode"
          name="ifscCode"
          required
        />
        <div className="invalid-feedback">Please enter a valid IFSC code.</div>
      </div>

      <div className="form-group">
        <label htmlFor="branchName">Bank Branch Name:</label>
        <input
          type="text"
          className="form-control"
          id="branchName"
          name="branchName"
          required
        />
        <div className="invalid-feedback">
          Please enter the bank branch name.
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="otherDetails">Other Details:</label>
        <textarea
          className="form-control"
          id="otherDetails"
          name="otherDetails"
          rows="2"
          required
        ></textarea>
        <div className="invalid-feedback">
          Please provide any other necessary details.
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default BankForm;
