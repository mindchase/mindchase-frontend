import React from 'react'
<<<<<<< HEAD
import {useForm} from 'react-hook-form'
import {Grid , Paper,TextField,Typography ,Button,Avatar,Link, Input} from '@material-ui/core'
=======
import {useForm, Controller} from 'react-hook-form'
import { useHistory } from "react-router-dom";
import { useState } from "react";
import {Grid , Paper,TextField,Typography ,Button,Avatar,Link, } from '@material-ui/core'
>>>>>>> 5925b23fe28777cc9a9f1b85c45714fde4d05218
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { hashPassword } from "./crypto";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close'

import axios from 'axios'

const Registration=()=>{
<<<<<<< HEAD
    const { register, handleSubmit, formState: { errors } , watch, control } = useForm()
    const submit = (data) => {
        console.log("submit")
        axios
        .post(`${process.env.REACT_APP_API}/users/register`, data)
        .then((response) => {
                    console.log(response)
        })
        .catch((error) => {
            console.log(errors)
        })   
    }
=======
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
>>>>>>> 5925b23fe28777cc9a9f1b85c45714fde4d05218

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

<<<<<<< HEAD
                <TextField
                    label="name"
                    placeholder='Enter username'
                    type='name'
                    fullWidth required
                    control={control}
                    defaultValue=""
                    rules={{required: true}}
                    render={({ field }) => <Input {...field} fullWidth />}
                />
                 {errors.password && <div>you forget hire</div>}
                 <TextField
                    label="email@example.example"
                    name="email"
                    type='email'
                    fullWidth required
                    control={control}
                    defaultValue=""
                    rules={{...register("email", {required: true, pattern: /^\S+@\S+$/i})}}
                    render={({ field }) => <Input {...field} fullWidth />}
                />
                 {errors.password && <div>you forget hire</div>}

                <TextField 
                    label='Enter password' 
                    placeholder='Password enter 8 character' 
                    type='password' 
                    fullWidth required
                    {...register("password", {required: true, minLength: 8})} 
                />
                 {errors.password && <div>Password is required</div>}

                <TextField label='confirm Password' 
                placeholder='rPassword repeat' 
                type='password' 
                fullWidth required
               {...register("password_repeat", {validate: (value) => {
                return value === watch('password'); // value is from password_repeat and watch will return value from password
                }})} 
                />
                  {errors.password_repeat && <div>Password is not the same</div>}

                <FormControlLabel control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                            type='checkbox'

                        />
                }
                label="Remember me" 
        
=======
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
              
>>>>>>> 5925b23fe28777cc9a9f1b85c45714fde4d05218
                
                /> 

                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign Up</Button>
                <Typography > Do you have an account ? 
                    <Link href="/register" > Sign in  </Link>
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
