// @flow 
import * as React from 'react';
import {useEffect} from "react"; 
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { TextField } from '@material-ui/core';

const UserItem = ({userInfo}) => {
    const theme = createMuiTheme({
        palette: {
          type: "dark",
        },
      });
    useEffect(() => {
        
    }, [])
    console.log(userInfo)
    return (
      <ThemeProvider theme={theme}>
       <a className="text-center cardDiv col-3 mx-1  mb-4 border  rounded" href={`Users/${userInfo._id}`}> 
           <div >
            <img src={`http://localhost:3000/${userInfo.img}`} className="rounded-circle col-8 mt-2 avatars " alt = {userInfo.name} />
            <h1 className="text-white">{userInfo.name}</h1>
            <h3 className="text-primary">{userInfo.email}</h3>
        </div>
        </a>
        </ThemeProvider>
    );
};
export default UserItem;