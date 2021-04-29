// @flow
import * as React from "react";
import {
  Button,
  FormGroup,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import { bindActionCreators } from "redux";
import { getDetails } from "../Actions";
import { connect } from "react-redux";
import { Form, Label } from "reactstrap";
import { AccountCircle } from "@material-ui/icons";
import { useEffect } from "react";
import $ from "jquery";
const EditModal = (props) => {
    useEffect(() => {
        const loadUSer = async()=>{
        console.log("'FEEhhhh")
        await props.getDetails(props.match.params.id)
        $("#input").on("change",function(){
            readURL(this);
          });
          // $("#MyForm").clearQueue();
          $("#EditForm").on("submit", function (e) {
            e.preventDefault(); // avoid to execute the actual submit of the form.
            console.log(e);
            var form = $(this);
            var url = form.attr("action");
            console.log(form.serialize());
            var formData = new FormData(this);
            console.log(formData);
      
            var user = $('#EditForm').serializeArray().reduce(function(obj, item) {
              obj[item.name] = item.value;
              return obj;
          }, {});
            console.log(user);
            $.ajax({
              processData: false,
              contentType: false,
              type: "PUT",
              url: url,
              data: formData, // serializes the form's elements.
              success: function (data) {
                if (data.message) {
                  alert(data.message);
                } else {//SUCCESS
                  props.addUser(data);
                  props.history.push("/Users");
                }
              },
              error: (err) => {
                alert(err);
                console.log(err);
              },
            });
          });
        
        }
        loadUSer();
   
    }, [])
    var confirmPressed = (pressed)=>{
        console.log("pressed")
      }
  function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#img').attr('src', e.target.result);
        }
    $("#img").css("display","inline");


        reader.readAsDataURL(input.files[0]);
    }
}
  if(!props.user) 
  return <img src="/assets/imgs/loading.gif" alt="loading..."></img>;

  return (
    <div id="EditModal">
      <div className="modal-dialog modal-login">
        <div className="modal-content">
        <div className="form-group">
                <form
                  id="EditForm"
                  
                  action={`http://localhost:3000/editUser/${props.user._id}`}
                  className="col-12 mx-auto mb-5"
                >
          <div className="modal-header">
            <div
                
              className="avatar"
              style={{
                // backgroundImage: `url(http://localhost:3000/${props.user.img})`,
                // backgroundPosition: "center",
              }}
            >
              {/* <img id="blah" src="#" alt="your_image" className="ml-3 img-fluid col-4 rounded-circle"/> */}
              <img
              id="#img"
                className="rounded-circle"
                src={`http://localhost:3000/${props.user.img}`}
                alt="Avatar"
            /> 
              <Button component="label" color="secondary" >
                Upload
                <input
                  id="input"
                  type="file"
                  name="img"
                  encType="multipart/form-data"
                  accept="image/*"
                  hidden
                />
              </Button>
              
            </div>
            <h1 className="modal-title mt-5">Edit User</h1>
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
            
              <div className="form-group">
                <h4 className="mb-2">
                  You are about to Edit {props.user.name}'s Profile..
                </h4>
                <h3>Are You Sure?!</h3>
              </div>
              
                  <FormGroup>
                    <Label className="label">Email</Label>
                    <TextField
                      id="EditName"
                      name="editname"
                      variant="outlined"
                      type="text"
                      className="form-control mb-2"
                      placeholder="Username"
                      defaultValue={props.user.name}
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                    />{" "}
                  </FormGroup>
                  <FormGroup>
                    <Label className="label">Password</Label>
                    <TextField
                      defaultValue={props.user.password}
                      id="EditPass"
                      name="editpass"
                      label="Password"
                      variant="outlined"
                      type="password"
                      className="mb-2 form-control"
                      placeholder="Password"
                      required
                    />{" "}
                  </FormGroup>

                  <FormGroup>
                    <Label className="label">Email</Label>
                    <TextField
                      defaultValue={props.user.email}
                      id="Email"
                      name="email"
                      label="Email"
                      variant="outlined"
                      type="email"
                      className="  form-control "
                      placeholder="email"
                      required
                    />{" "}
                  </FormGroup>

                  <FormGroup>
                    <Label className="label">Country</Label>
                    <TextField
                      defaultValue={props.user.country}
                      id="Country"
                      name="country"
                      label="Country"
                      variant="outlined"
                      type="text"
                      className="mb-5 form-control dark"
                      placeholder="email"
                      color="primary"
                    />
                  </FormGroup>
                <FormGroup className="mb-3">
                <Button
                type="submit"
                onClick = {confirmPressed}
                  color="primary"
                  variant="contained"
                  className="form-control"
                  data-dismiss="modal"
                >
                  Confirm
                </Button>
                </FormGroup>
              <FormGroup>
                <Button
                  variant="contained"
                  color="secondary"
                  className="btn btn-lg btn-block "
                  data-dismiss="modal"
                >
                  Cancel
                </Button>
                </FormGroup>
              
              
          </div>
          <div className="modal-footer"></div>
          </form>
              </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.UsersReducer.CurrentUser,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getDetails }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
