import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Main = () => {
  const handler = () => document.querySelector('.drawerMenu').classList.toggle('active');
  return (
    <div onClick={handler} className="main">
      <Switch>
        <Route exact path='/' render={() => <h1>Home</h1>} />
        <Route exact path='/UK' render={() => <h1>UK</h1>} />
        <Route exact path='/US' render={() => <h1>US</h1>} />
      </Switch>
    </div>
  )
}


export default Main;
