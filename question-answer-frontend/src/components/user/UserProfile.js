import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../../css/styles/main/User/userProfile.css";
import { getUserProfile } from "../../redux/actions/userActions"; // Doğru dosya yolunu kontrol edin

const UserProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (id) {
      dispatch(getUserProfile(id));
    }
  }, [dispatch, id]);

  return (
    <div className="userprofile-main">
      <div className="container userprofile-div" style={{ height: "900px" }}>
        <div className="row justify-content-start">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header text-center">
                <h1>User Profile</h1>
              </div>
              <div className="card-body">
                {userProfile ? (
                  <div>
                    <div className="text-center mb-4">
                      <img
                        src={userProfile.profile_image}
                        alt="Profile"
                        className="rounded-circle"
                        width="150"
                        height="150"
                      />
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <strong>Email:</strong> {userProfile.email}
                      </li>
                      <li className="list-group-item">
                        <strong>Name:</strong> {userProfile.name}
                      </li>
                      <li className="list-group-item">
                        <strong>Role:</strong> {userProfile.role}
                      </li>
                      <li className="list-group-item">
                        <strong>Joined:</strong>{" "}
                        {new Date(userProfile.createdAt).toLocaleDateString()}
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
