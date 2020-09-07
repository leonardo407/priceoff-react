import React from 'react'
import classes from './App.module.scss'
import { Route, Switch } from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import Main from './pages/Main/Main'
import AddProduct from './pages/AddProduct/AddProduct'
import Login from './pages/Login/Login'

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/add-product" component={AddProduct}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </Layout>
    </div>
  )
}

export default App
