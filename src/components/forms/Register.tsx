import { useState } from 'react';
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import { Logo } from '../ui/Logo';

const Wrapper = styled.div`
display: flex;
width: 75vw;
min-width:300px;
max-width:600px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const styles = makeStyles({
    input: {
        marginBottom: '10px',
    },
    button: {
        fontSize: '1.1rem',
        marginBottom: '10px'
    }
})

const RegisterNewUser = (data: any) => {
    alert(data.fullName)
}

function Register() {

    const classes = styles();

    return (
        <Wrapper>
            <Logo/>

            <h2>Sign up</h2>

            <TextField className={classes.input}
                id="outlined-basic" 
                label="Full Name" 
                variant="outlined" 
                fullWidth
            />

            <TextField className={classes.input}
                id="outlined-basic" 
                label="Email Address" 
                variant="outlined" 
                fullWidth
            />
            <TextField className={classes.input}
                id="outlined-basic" 
                label="Password" 
                variant="outlined"
                type="password"
                fullWidth
            />

            <Button className={classes.button}
                variant="outlined" 
                fullWidth
                size="large"
            >
                Sign Up
            </Button>

            <div>
                <Link to="/login">Alredy signed up? Login!</Link>
            </div>
            <div>
                <Link to="/">Home</Link>
            </div>
                
        </Wrapper>
    );
}

export default Register;