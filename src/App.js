import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"

//import Login from './components/loginPage'
import Registration from './pages/Registration'
import Login from './pages/Login'

import PersistentDrawerLeft from './components/Drawer'
import CreateNote from './components/CreateNote'
import GetAllNotes from './components/GetAllNotes';
import NoteCard from './components/NoteCard'
import ForgotPassword from './pages/ForgotPassword'
import Dashboard from './pages/Dashboard';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path='/registration' component={Registration}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/drawer' component={PersistentDrawerLeft}></Route>
          <Route path='/createnote' component={CreateNote}></Route>
          <Route path='/getAllNotes' component={GetAllNotes}></Route>
          <Route path='/newnote' component={NoteCard}></Route>
          <Route path='/forgotPassword' component={ForgotPassword}></Route>
          <Route path='/dashboard' component={Dashboard}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
