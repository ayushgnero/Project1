import React from 'react';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import styles from '../statics/Cart.module.css';
import CloseIcon from '@mui/icons-material/Close';
import { connect } from 'react-redux';
import { removeFromCart } from '../../../actions/cartAction'; // Import the action to remove items from the cart

const CartModal = ({ open, onClose, cartItems, removeFromCart }) => {
  let navigate = useNavigate();
  console.log(cartItems);
  const handleContinueToCheckout = () => {
    navigate('/404');
  };

  const handleRemoveItem = (index) => {
    // Dispatch the removeFromCart action to remove the item from the cart
    removeFromCart(index);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <h1 className={styles.heading}>Shopping Cart</h1>
      </DialogTitle>
      <DialogContent>
        {/* Display cart items here */}
        {cartItems && cartItems.length > 0 ? (
          <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <div>
                <p>Adults: {item.adultsValue}</p>
                <p>Adult Ages: {item.adultAges.join(', ')}</p>
                <p>Children: {item.childrenValue}</p>
                <p>Child Ages: {item.childAges.join(', ')}</p>
                <p>Insurance Amount: {item.insuranceAmount}</p>
                <p>Insurance Period: {item.insurancePeriod}</p>
                <p>City: Tier {item.city}</p>
                
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleRemoveItem(index)} // Call handleRemoveItem with the index
                >
                  Remove
                </Button>
              </div>
            </li>
          ))}
        </ul>        
        ) : (
          <p>Your cart is empty.</p>
        )}
      </DialogContent>
      <DialogActions>
        <CloseIcon className={styles.closeIcon} onClick={onClose} />
        <Button onClick={handleContinueToCheckout} color="primary" variant="contained">
          Checkout
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = {
  removeFromCart, // Include the removeFromCart action in mapDispatchToProps
};

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
