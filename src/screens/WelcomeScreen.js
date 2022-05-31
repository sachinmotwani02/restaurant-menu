import React from 'react'
import {TextField, Button} from '@mui/material'

const WelcomeScreen = () => {
    return (
        <div className="contain">
      <div className="image-con">
      </div>
      <div className="container-fluid d-flex flex-column justify-content-between con">
        <div>
        <h2 className="welcome-text">WELCOME TO FARZI</h2>
        <p className="para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        <div>
          <p className="enter">Enter your phone number to continue</p>
          <TextField sx={{width: '83%'}} id="outlined-basic" label="Phone Number" size="medium" variant="outlined" />
        </div>
        </div>
        <Button 
        fullWidth 
        disableElevation 
        variant="contained"
        className="continue-button"
        >CONTINUE</Button>
      </div>
    </div>
    )
}

export default WelcomeScreen
