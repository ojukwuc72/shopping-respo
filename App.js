import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './Screen/HomeScreen'
import ProductScreen from './Screen/ProductScreen'
import CartScreen from './Screen/CartScreen'
import LoginScreen from './Screen/LoginScreen'
import RegisterScreen from './Screen/RegisterScreen'
import ProfileScreen from './Screen/ProfileScreen'
import ShippingScreen from './Screen/ShippingScreen'
import PaymentScreen from './Screen/PaymentScreen'
import PlaceorderScreen from './Screen/PlaceorderScreen'
import OrderScreen from './Screen/OrderScreen'
import UserListScreen from './Screen/UserLIstScreen'
import UserEditScreen from './Screen/UserEditScreen'
import ProductListScreen from './Screen/ProductListScreen'
import ProductEditScreen from './Screen/ProductEditScreen'
import OrderListScreen from './Screen/OrderListScreen'





function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/placorder' component={PlaceorderScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route Path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userslist' component={UserListScreen} />
          <Route path='/admin/users/:id/edit' component={UserEditScreen} />
          <Rout path='/admin/productlist' component={ProductListScreen} />
          <Rout path='/admin/product:id/edit' component={ProductEditScreen} />
          <Rout path='/admin/orderlist' component={OrderListScreen} />
          <Route path='/' component={HomeScreen} exact />
        </Container>

      </main>
      <Footer />
    </Router>
  );
}

export default App;
