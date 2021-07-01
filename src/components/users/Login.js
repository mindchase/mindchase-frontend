import React from 'react'
import {useForm} from 'react-hook-form'
import {Grid , Paper,TextField,Typography ,Button,Avatar,Link} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const Login=()=>{

    const { register, formState: { errors },handleSubmit} = useForm()

    const submit = (data) => {
        // send data to backend
        console.log(data)
    }


    const paperStyle={padding :25,height:'78vh',width:310, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    return(
        <Grid >
            <Paper elevation={10} style={paperStyle}  onSubmit={handleSubmit(submit)}    >

                <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Welcome to digital campus</h2>
                </Grid>

            
                <TextField label='your Email please' placeholder='Enter Email' 
                {...register("email", {required: true, pattern: /^\S+@\S+$/i})}
                fullWidth required/>

                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required
                {...register("password", {required: true, minLength: 8})} />
                {errors.password && <div>Password is required</div>}

               
                <FormControlLabel control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                }
                label="Remember me" />
                
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Login</Button>

                <Typography > Do you have an account ? 
                    <Link href="Register" type="submit" > Sign Up  </Link>
                </Typography>
            </Paper>
    </Grid>
    )
}

export default Login
