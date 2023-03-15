import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import EventsMain from "./EventsMain";
import SavedEvents from "./SavedEvents";
import {BrowserRouter, Route} from 'react-router-dom';

import './../style.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Route path='/' component={Main} exact/>
        <Route path='/events' component={EventsMain} />
        <Route path='/saved-events' component={SavedEvents} />      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
