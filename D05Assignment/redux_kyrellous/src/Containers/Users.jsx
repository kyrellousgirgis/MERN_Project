// @flow
import * as React from "react";
import { getAllUsers } from "../Actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useEffect } from "react";
import UserItem from "../Components/UserItem";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { TextField } from "@material-ui/core";
import{getUserByName} from"../Actions"

const Users = (props) => {
  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
  useEffect(() => {

    props.getUserByName();
  }, []);
  const renderUsers = (users) => {
    if (users.length)
      return users.map((user) => {
        return <UserItem key={user._id} userInfo={user} />;
      });
    return (
      <h1 className="alert alert-danger text-center">No Available users yet</h1>
    );
  };
  var search = false;
  const onSearchChange = (e)=>{
    
      props.getUserByName(e.target.value);

  }

  return (
    <ThemeProvider theme={theme} >
      <div className="text-center">
      <TextField 
      onChange = {(e)=>{onSearchChange(e)}}
      style={{ backgroundColor: "transparent" }}
      label="Search"
      className="form-control col-11 mx-auto mt-3 mb-4 " variant="outlined"></TextField>
      </div>
      <div className="d-flex flex-wrap mt-4  justify-content-around">
          {renderUsers(props.filtered)} 

      </div>
      );
    </ThemeProvider>
  );
};
const mapStateToProps = (state) => {
  return {
    users: state.UsersReducer.users,
    filtered: state.UsersReducer.filtered
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getAllUsers,getUserByName }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
