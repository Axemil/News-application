import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../screens/Home'
import USANews from '../screens/USANews'
import UkraineNews from '../screens/UkraineNews'
import AboutUs from '../screens/AboutUs'
import Searcher from '../screens/Searcher'

const Main = () => {
  const handler = () => document.querySelector('.drawerMenu').classList.remove('active');
  return (
    <div onClick={handler} className="main">
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/USANews' render={() => <USANews />} />
        <Route exact path='/UkraineNews' render={() => <UkraineNews />} />
        <Route exact path='/AboutUS' render={() => <AboutUs />} />
        <Route exact path='/Searcher' render={() => <Searcher />} />
      </Switch>
    </div>
  )
}


export default Main;
