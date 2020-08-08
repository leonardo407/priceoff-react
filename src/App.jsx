import React from 'react'
import classes from './App.module.scss'
import { Route, Switch } from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import Main from './pages/Main/Main'
import AddProduct from './pages/AddProduct/AddProduct'

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/add-product" component={AddProduct}/>
        </Switch>
      </Layout>
    </div>
  )
}

export default App
