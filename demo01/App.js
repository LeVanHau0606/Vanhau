import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './component/HomeScreen';
import Header from './component/Header';
import Product_detial from './component/Product_detail';
import HomeBar from './component/HomeBar';
import Login from './component/Login';
import Cart from './component/Cart';
import { CartProvider } from './CartProvider/CartContext';
import Search from './component/Search';
import Payment from './component/Payment';

const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
    <View style={{ flex: 1, paddingHorizontal: 15 }}>
      <Header></Header>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerTitle: 'Trang chủ' }} // Thay đổi tiêu đề hiển thị
          />
          <Stack.Screen name="SingleProduct" component={Product_detial} options={{ headerTitle: 'Chi tiết sản phẩm' }} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Payment" component={Payment} />

        </Stack.Navigator>
        <HomeBar/>
      </NavigationContainer>
    </View>
    </CartProvider>
  );
};