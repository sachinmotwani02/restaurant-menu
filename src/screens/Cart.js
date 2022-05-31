import React from 'react'
import logo from '../assets/images/farziLogo.png'
import { connect } from 'react-redux'
import { addItem, subtractItem, subtractQuantity } from '../components/cartActions'
import {ButtonGroup, Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Cart = (props) => {
    
    function add(id) {
        props.addItem(id)
    }

    function subtract(id) {
        props.subtractQuantity(id)
    }

    const addedItems = props.addedItems ? (
    props.addedItems.map(item=>{
            return(
                <div className="dish-contain">
            
            <div className="d-flex ">
            <div style={{backgroundImage: `url(${item.img})`}} className="dish-img">
            </div>    

            <div className="dish-info">
                <h4 className="dish-title">{item.name}</h4>
                <p className="price">₹{item.price}</p>
            </div>
            </div>
            <div className="counter" style={{marginTop: 20, marginRight: 7}}>
            <span className="quan">{item.quantity}</span>
                <ButtonGroup
                variant="none"
                size="10"
                sx={{
                    border: 1,
                }}
                >
                    <Button
                    size="small"
                        sx={{width: 3}}
                        aria-label="increase"
                        onClick={() => {
                        add(item.id);
                        }}
                    >
                        <AddIcon fontSize="5" />
                    </Button>
                    <Button
                    size="small"
                    sx={{width: 3}}
                        aria-label="reduce"
                        onClick={() => {
                        subtract(item.id);
                        }}
                    >
                        <RemoveIcon fontSize="5" />
                    </Button>
                </ButtonGroup>
            </div>

        </div>
            )
        })
    ):
    (
        <p>nothing</p>
    )
        

    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center">
                <img src={logo} alt="farzi" />
            </div>
            {addedItems}
            <h2 className="total">Total: {props.total + props.total/20}₹ <h6>inclusive of tax</h6></h2>
            <Button 
            fullWidth 
            disableElevation 
            variant="contained"
            className="continue-button"
            >CHECKOUT</Button>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
      items: state.items,
      addedItems: state.addedItems,
      quantity: state.quantity,
      total: state.total
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addItem: (id)=>{dispatch(addItem(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)
