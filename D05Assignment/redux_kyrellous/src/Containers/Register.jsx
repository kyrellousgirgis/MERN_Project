// @flow
import * as React from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { TextField, Button } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import $ from "jquery";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {addUser} from "../Actions"
const Register = (props) => {
  
  
  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  useEffect(() => {
    $("#imgInp").on("change",function(){
      readURL(this);
    });
    $("#blah").css("display","none");
    // $("#MyForm").clearQueue();
    $("#MyForm").on("submit", function (e) {
      e.preventDefault(); // avoid to execute the actual submit of the form.
      console.log(e);
      var form = $(this);
      var url = form.attr("action");
      console.log(form.serialize());
      var formData = new FormData(this);
      console.log(formData);

      var user = $('#MyForm').serializeArray().reduce(function(obj, item) {
        obj[item.name] = item.value;
        return obj;
    }, {});
      console.log(user);
      $.ajax({
        processData: false,
        contentType: false,
        type: "POST",
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
  },[]);

  function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
        }
    $("#blah").css("display","inline");


        reader.readAsDataURL(input.files[0]);
    }
}



  return (
    <ThemeProvider theme={theme}>
      <div className="mt-5">
        <Form
          id="MyForm"
          method="post"
          action="http://localhost:3000/addUser"
          className="col-5 mx-auto mb-5"
        >
          <FormGroup>
            <Label className="label" >
              Email
            </Label>
            <TextField
              style={{ backgroundColor: "transparent" }}
              id="name"
              name="name"
              variant="outlined"
              type="text"
              className="form-control mb-2 dark"
              placeholder="Username"
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
            <Label className="label" >
              Password
            </Label>
            <TextField
              style={{ backgroundColor: "transparent" }}
              id="pass"
              name="pass"
              label="Password"
              variant="outlined"
              type="password"
              className="mb-2 form-control"
              placeholder="Password"
              required
            />{" "}
          </FormGroup>

          <FormGroup>
            <Label className="label">
              Email
            </Label>
            <TextField
              style={{ backgroundColor: "transparent" }}
              id="Email"
              name="email"
              label="Email"
              variant="outlined"
              type="email"
              className="mb-2 form-control dark"
              placeholder="email"
              required
            />{" "}
          </FormGroup>

            <FormGroup>
               <Label className="label">
              Country
            </Label>
               <TextField
              style={{ backgroundColor: "transparent" }}
              id="Country"
              name="country"
              label="Country"
              variant="outlined"
              type="text"
              className="mb-2 form-control dark"
              placeholder="email"
              required
            />
            </FormGroup>
          <FormGroup>
            <Label className="custom-file-upload">
              File
            </Label>
            <Button
              variant="contained"
              color="secondary"
              name="file"
              id="exampleFile"
              className="d-block text-center"
              component="label"
            >
              Choose Image
              <input id="imgInp" type="file" name="img" encType="multipart/form-data" accept="image/*" hidden />
              <img id="blah" src="#" alt="your_image" className="ml-3 img-fluid col-4 rounded-circle"/>
            </Button>
            <FormText color="muted">
              This is only for ITI React Project to be submitted on Sunday 6th
              of April at 11:59
            </FormText>
          </FormGroup>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="btn btn-primary btn-lg btn-block login-btn"
          >
            Submit
          </Button>
        </Form>
      </div>
    </ThemeProvider>
  );
   
};
const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({addUser} ,dispatch)
}

export default connect(null,mapDispatchToProps)(Register)
