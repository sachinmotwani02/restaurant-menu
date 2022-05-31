import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/farziLogo.png'
import {Badge, ButtonGroup, Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { connect } from 'react-redux'
import { addItem, subtractItem, addToCart } from '../components/cartActions'


const Home = (props) => {

    const [count, setCount] = useState(0) 


    function add(id) {
        props.addItem(id)
    }

    function subtract(id) {
        props.subtractItem(id)
    }

    function addToCart(items){
        props.addToCart(items)
    }

    const itemList = props.items.map(item => {
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
                        setCount(count + 1);
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
                        setCount(Math.max(count - 1, 0));
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


    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center">
                <img src={logo} alt="farzi" />
                <Link className="link" to="/cart" onClick={() => addToCart(props.addedItems)}>
                <Badge badgeContent={count} color="primary">
                    <ShoppingCartOutlinedIcon color="black" />
                </Badge>
                </Link>
            </div>
            <p className= "para">This project is made on react with redux used for state management. Don't forget to enjoy your food :{')'}</p>
            {itemList}
    </div>
    )
}

const mapStateToProps = (state)=>{
    return {
      items: state.items,
      addedItems: state.addedItems,
      quantity: state.quantity
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addItem: (id)=>{dispatch(addItem(id))},
        subtractItem: (id)=>{dispatch(subtractItem(id))},
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
