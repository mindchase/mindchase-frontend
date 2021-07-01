import React from 'react'
import {useForm} from 'react-hook-form'
import {Grid , Paper,TextField,Typography ,Button,Avatar,Link} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const Registration=()=>{

    const { register, formState: { errors },handleSubmit , watch } = useForm()

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

                <TextField label='Username' placeholder='Enter username' fullWidth required
                    {...register("user", {required: true})}   />

                <TextField label='your Email please' placeholder='Enter Email' 
                {...register("email", {required: true, pattern: /^\S+@\S+$/i})}
                fullWidth required/>

                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required
                {...register("password", {required: true, minLength: 8})} />
                {errors.password && <div>Password is required</div>}

                <TextField label='Password repeat' placeholder='rPassword repeat' type='password' fullWidth required
               {...register("password_repeat", {validate: (value) => {
                return value === watch('password'); // value is from password_repeat and watch will return value from password
                }})} />
                  {errors.password_repeat && <div>Password is not the same</div>}
                <FormControlLabel control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                }
                label="Remember me" />
                
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>

                <Typography > Do you have an account ? 
                    <Link href="Register" type="submit" > Sign Up  </Link>
                </Typography>
            </Paper>
    </Grid>
    )
}

export default Registration
