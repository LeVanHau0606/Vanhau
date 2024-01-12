import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CartContext } from '../CartProvider/CartContext';

const PaymentButton = () => {
  const { cartItems, clearCart } = useContext(CartContext);

  const handlePayment = () => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    clearCart();
  };

  return (
    <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
      <Text style={styles.buttonText}>Proceed to Payment</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  paymentButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PaymentButton;