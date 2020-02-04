import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//might have to import notifications at some point
import 'bulma'
import './styles/main.scss'


//import the components

import Home from './components/common/Home'
import WhiskyIndex from './components/whiskies/WhiskyIndex'
import WhiskyShow from './components/whiskies/WhiskyShow'
import Navbar from './components/common/Navbar'
import ErrorPage from './components/common/ErrorPage'
// import Age from './components/common/Age'




const App = () => (
  <BrowserRouter>
    <main>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/whiskies/:id" component={WhiskyShow} />
        <Route path="/whiskies" component={WhiskyIndex} />
        <Route path="/*" component={ErrorPage} />


      </Switch>
    </main>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)