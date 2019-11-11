import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Main = () => {
  return (
    <div className="main">
      <Switch>
        <Route exact path='/' render={() => <h1>Home</h1>} />
        <Route exact path='/UK' render={() => <h1>UK</h1>} />
        <Route exact path='/US' render={() => <h1>US</h1>} />
      </Switch>
    </div>
  )
}


export default Main;
