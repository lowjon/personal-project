import React from 'react';
import {Link} from 'react-router';
import '../styles/cartItem.css';
import {Button, Dropdown, NavItem} from 'react-materialize';
class CartItem extends React.Component {
  constructor(props){
    super(props);
  }
  Clicked = (e) => {
    let price = this.props.price
    console.log(e.target.value, 'this is the target value');
    this.props.increaseQty(this.props.itemId, e.target.value);
  }

  handleDelete = () =>{
    this.props.delete(this.props.itemId)
  }

  render(){
    return(
        <div className="">
          <div className="productbox">
            <img className="productImg" src={this.props.image} />
              <div className="productTitle">{this.props.name}</div>
              <div className="productInfo">
              <div className="productPrice">${this.props.subtotal}.00</div>
              <div className="quantityContain">
                <input type="number" id='qty' className="inputQty" value={this.props.qty} onChange={this.Clicked}></input>
              </div>
            <div className="trash" onClick={this.handleDelete}><i className="material-icons">delete</i></div>
          </div>
        </div>
      </div>
      )
  }
}

export default CartItem;
