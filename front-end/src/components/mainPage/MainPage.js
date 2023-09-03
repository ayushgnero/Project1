import React, { useState } from 'react';
import styles from './statics/MainPage.module.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartModal from './components/CartModal';
import FormComponent from './components/FormComponent';
const MainPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  
  return (
      <div className={styles.main}>
        <div className={`${styles.nameBox} ${styles.boxShadow}`}>
          <h1>OneAssure</h1>
          <p>No matter if you already have a health insurance plan or it is your first time, we have all the best insurance brands in the country on our platform. In your budget, for your needs and seamless experience for you</p>
        </div>
        <div className={`${styles.dataBox} ${styles.boxShadow}`}>
          <ShoppingCartIcon className={styles.shoppingCart} onClick={handleOpenModal} />   
          <CartModal open={modalOpen} onClose={handleCloseModal} />    
          <FormComponent/>
          <></>
        </div>
      </div>
    );
};

export default MainPage;
