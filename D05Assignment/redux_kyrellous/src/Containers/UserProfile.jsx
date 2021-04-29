// @flow
import * as React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteUser,getDetails, clearDetails } from "../Actions";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import EditModal from "./EditModal"

const UserProfile = (props) => {
  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
  useEffect(() => {
    props.getDetails(props.match.params.id);
    return ()=>{                  //Will unmount hook
      console.log(props.CurrentUser)
      console.log("Cleared")
      console.log(props.CurrentUser);
    }
  }, []);

  const DeleteUser = async()=>{
       await props.deleteUser(props.user._id);
    props.history.push("/Users");
  }
const EditPressed = ()=>{
  props.history.push(`Edit/${props.user._id}`)
}
  const renderUserData = () => {
    /* <h1 className="text-white">{props.user.name}</h1>
        <h3 className="text-primary">{props.user.email}</h3> */
    if (props.user)
      return (
        <div
          className="bg-primary mt-5 
            text-center mx-auto  col-6 mx-1 
             mb-4 border  rounded "
        >
          <div className="d-flex justify-content-around align-items-center">
            <img
              src={`http://localhost:3000/${props.user.img}`}
              className="mb-5 rounded-circle col-5 mt-2 avatars"
              alt={props.user.name}
            />
            <h2 className="text-white">
              This is {props.user.name}'s Profile How Can we Help You ?!
            </h2>
          </div>
          <table className="table table-striped bg-transparent">
            <tr>
              <th>Name</th>
              <td>{props.user.name}</td>
            </tr>
            <tr>
              <th>E-mail</th>
              <td>{props.user.email}</td>
            </tr>
            <tr>
              <th>Country</th>
              <td>{props.user.country}</td>
            </tr>
          </table>
          <Button
            variant="contained"
            color="secondary"
            className="btn mb-1   btn-lg btn-block login-btn"
            data-toggle="modal"
            href="#myModal"
          >
            Delete
          </Button>
          <Button
          onClick = {EditPressed}
            variant="contained"
            color="primary"
            className="btn mb-3  btn-lg btn-block login-btn"
            data-toggle="modal"
            href="#EditModal"
          >
            Edit
          </Button>



       


          <div id="myModal" className="modal fade">
            <div className="modal-dialog modal-login">
              <div className="modal-content">
                <div className="modal-header">
                  <div className="avatar">
                    <img
                      className="rounded-circle"
                      src={`http://localhost:3000/${props.user.img}`}
                      alt="Avatar"
                    />
                  </div>
                  <h1 className="modal-title">Warning!!</h1>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <h4 className="mb-2">
                        You are about to permanantly delete {props.user.name}'s
                        Profile..
                      </h4>
                      <h3>Are You Sure?!</h3>
                    </div>
                    <div className="form-group">
                      <Button
                      onClick={DeleteUser}
                        color="primary"
                        variant="contained"
                        className="form-control"
                        data-dismiss = "modal"
                      >
                        Confirm
                      </Button>
                    </div>
                    <div>
                      <Button
                        variant="contained"
                        color="secondary"
                        className="btn btn-lg btn-block "
                        data-dismiss="modal"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    return <img src="/assets/imgs/loading.gif" alt="loading..."></img>;
  };

  return renderUserData();
};

const mapStateToProps = (state) => {
  return {
    user: state.UsersReducer.CurrentUser,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ deleteUser,clearDetails, getDetails }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
