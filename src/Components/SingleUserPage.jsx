import { Link } from "react-router-dom";
import {
  ContactPhone,
  DateRange,
  Mail,
  Person,
  Publish,
} from "@material-ui/icons";
import React from "react";

const SingleUserPage = () => {
  return (
    <div className="user mt-3">
      <div className="userTitle d-flex  mt-2 justify-content-between mt-3">
        <h1 className="edit-user ">Edit User</h1>
        <Link to="/newuser">
          <button className="btn btn-secondary btn-sm ">Create User</button>
        </Link>
      </div>

      <div className="usercontainer d-flex mt-3">
        <div className="userinfo d-flex flex-column me-3">
          <div className="userInfoTop d-flex ">
            <img src="../images/pic2.jpg" alt="pic" />
            <span className="workInfo ms-3">
              <h4>Emmanuel</h4>
              <p>Software Engineer</p>
            </span>
          </div>

          <div className="userInfoDown ">
            <h4 className="mb-3 text-muted mt-3">Account Details</h4>
            <div className="userDetails d-flex">
              <Person className="detail-icon" />
              <span>emmanuelfoeh</span>
            </div>
            <div className="userDetails d-flex">
              <ContactPhone className="detail-icon" />
              <span>0235842</span>
            </div>
            <div className="userDetails d-flex">
              <Mail className="detail-icon" />
              <span>emmanuel@foeh</span>
            </div>
            <div className="userDetails d-flex">
              <DateRange className="detail-icon" />
              <span>emmanuelfoeh</span>
            </div>
          </div>
        </div>
        <div className="userform">
          <span className="editTitle ">Edit</span>
          <form className="form d-flex justify-content-between">
            <div className="updateformLeft">
              <div className="updateuserItem">
                <label>UserName</label>
                <input
                  type="text"
                  className="userinput"
                  placeholder="emmanuel"
                />
              </div>
              <div className="updateuserItem">
                <label>Full Name</label>
                <input
                  type="text"
                  className="userinput"
                  placeholder="emmanuel"
                />
              </div>
              <div className="updateuserItem">
                <label>Email</label>
                <input
                  type="text"
                  className="userinput"
                  placeholder="emmanuel"
                />
              </div>
              <div className="updateuserItem">
                <label>Address</label>
                <input
                  type="text"
                  className="userinput"
                  placeholder="emmanuel"
                />
              </div>
              <div className="updateuserItem">
                <label>Full name</label>
                <input
                  type="text"
                  className="userinput"
                  placeholder="emmanuel"
                />
              </div>
            </div>

            <div className="updateformRight d-flex justify-content-between flex-column me-3">
              <div>
                {" "}
                <img src="../images/pic2.jpg" className="img" alt="pic" />
                <label htmlFor="file">
                  <Publish />
                </label>
                <input
                  type="file"
                  name="file"
                  style={{ display: "none" }}
                  id="file"
                />
              </div>

              <button className="btn btn-primary">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
