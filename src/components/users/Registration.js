import React from 'react'
import {useForm, Controller} from 'react-hook-form'
import { useHistory } from "react-router-dom";
import { useState } from "react";
import {Grid , Paper,TextField,Typography ,Button,Avatar,Link, } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close'

import axios from 'axios'

const Registration=()=>{
    //fun Sucsess Signup
    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    let history = useHistory();
    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const [wrongInput, setWrongInput] = useState(false);
      const submit = async (data) => {
       
        try {
          // const result = await axios.post("http://localhost:3001/users/", data);
          const result = await axios.post(`${process.env.REACT_APP_API}/users/`, data)

          if (result.status === 200) {
            setOpen(true);
            console.log(data);
          }
        } catch (e) {
          console.log("@", e);
          setWrongInput(e);
          // showMessage();
        }
      };

    const paperStyle={padding :25,height:'78vh',width:310, margin:"180px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0' ,color:'red'}

    return(
        <form onSubmit={handleSubmit(submit)} >
        <Grid >
            
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Welcome to digital campus</h2>
                </Grid>

                <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    display="inline"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="name"
                    autoComplete="name"
                    autoFocus
                  />
                )}
              />
              {errors.firstName && <span>First name is required</span>}
               <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    display="flex"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="Email Address"
                    autoComplete="email"
                    autoFocus
                  />
                )}
              />

              {errors.email && <span>{errors.email.message}</span>}

              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                    message:
                      "Password should contain small character,big character,special character,a number and needs to be at least 8 characters long",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    display="flex"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="Password"
                    type="password"
                    autoFocus
                  />
                )}
              />
              {errors.password && <span>{errors.password.message}</span>}

    

                 <Controller
                name="retype-password"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                    message:
                      "Password should contain small character,big character,special character,a number and needs to be at least 8 characters long",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    display="inline-flex"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="Retype-Password"
                    type="password"
                    autoFocus
                  />
                )}
              />
              {errors.password && <span>{errors.password.message}</span>}
              
                
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign Up</Button>

                <Typography > Do you have an account ? 
                    <Link href="" > Sign in  </Link>
                </Typography>
            </Paper>
            
    </Grid>
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Sucsses Signed Up Plz Log In"
        action={
          <React.Fragment>
            {/* <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button> */}
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
    </form>
    
    )
//fun Mess


}

export default Registration
