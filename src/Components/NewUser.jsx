import React from "react";

const NewUser = () => {
  return (
    <div className="newuser d-flex flex-column p-4 mt-4">
      <h2>New User</h2>
      <form className="newuserForm ">
        <div className="formGroup d-flex flex-row">
          <div className="newuserItem">
            <label htmlFor="username">UserName</label>
            <input
              className="form-input"
              type="text"
              placeholder="EmmanuelFoeh"
              required
            />
          </div>
          <div className="newuserItem">
            <label htmlFor="full name">Full Name</label>
            <input
              className="form-input"
              type="text"
              placeholder="Emmanuel Foeh"
            />
          </div>
          <div className="newuserItem">
            <label htmlFor="email">Email</label>
            <input
              className="form-input"
              type="email"
              placeholder="EmmanuelFoeh"
              required
            />
          </div>
          <div className="newuserItem">
            <label htmlFor="password">Password</label>
            <input
              className="form-input"
              type="password"
              placeholder="password"
              required
            />
          </div>
          <div className="newuserItem">
            <label htmlFor="username">Phone number</label>
            <input
              className="form-input"
              type="text"
              placeholder="+233 054 784 2651"
            />
          </div>
          <div className="newuserItem">
            <label htmlFor="password">Address</label>
            <input
              className="form-input"
              type="password"
              placeholder="C5 street tanto"
              required
            />
          </div>
          <div className="newuserItem">
            <label htmlFor="password">Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="sometimes">Sometimes</option>
            </select>
          </div>
          <div className="newuserItem ">
            <label>Gender</label>
            <div className="genderItem d-flex  align-items-center w-50 justify-content-between">
              <label htmlFor="gender">Male</label>
              <input type="radio" name="gender" id="male" value="Male" />
              <label htmlFor="gender">Female</label>
              <input type="radio" name="gender" id="male" value="Female" />
              <label htmlFor="gender">Other</label>
              <input type="radio" name="gender" id="female" value="Other" />
            </div>
          </div>
        </div>
        <button className="btn btn-primary d-flex mt-4 btn-lg justify-content-center align-items-center p-2">
          {" "}
          Create
        </button>
      </form>
    </div>
  );
};

export default NewUser;
