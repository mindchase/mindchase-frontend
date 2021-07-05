import React from 'react'
import {useForm} from 'react-hook-form'
import {Grid , Paper,TextField, Button,Avatar} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


const NewPassword = ()=>{

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
                    <h2>Type a unique password</h2>
                </Grid>

            
               
                <TextField label='Create New Password' placeholder='Enter password' type='password' fullWidth required
                {...register("password", {required: true, minLength: 8})} />
                {errors.password && <div>Create New Password</div>}

                <TextField label='Confirm the New Password' placeholder='Enter password' type='password' fullWidth required
                {...register("password", {required: true, minLength: 8})} />
                {errors.password && <div>Confirm the New Password</div>}

               
                               
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Creat New Password</Button>

               
            </Paper>
    </Grid>
    )
}

export default NewPassword
