import React from 'react'
import {ToggleButtonGroup, ToggleButton, Button} from '@mui/material'
import Header from '../components/Header';

const Seating = () => {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

    return (
        <div className="container">
        <Header />
        <div className="d-flex justify-content-center align-items-center where-seated">
            <h3 className="white-text">Hey there! Where are you seated?</h3>
        </div>
        <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            className="container d-flex flex-wrap"
            style={{padding:20, marginBottom: 130}}
        >
            <ToggleButton size="large" value="web">1</ToggleButton>
            <ToggleButton value="android">2</ToggleButton>
            <ToggleButton value="ios">3</ToggleButton>
            <ToggleButton value="eb">4</ToggleButton>
            <ToggleButton value="anroi">5</ToggleButton>
            <ToggleButton value="is">6</ToggleButton>
            <ToggleButton value="wb">7</ToggleButton>
            <ToggleButton value="anroid">8</ToggleButton>
            <ToggleButton value="io">9</ToggleButton>
            <ToggleButton value="iof">10</ToggleButton>
        </ToggleButtonGroup>
        <Button 
            fullWidth 
            disableElevation 
            variant="contained"
            className="continue-button"
            >CONTINUE</Button>
        </div>
    )
}

export default Seating
