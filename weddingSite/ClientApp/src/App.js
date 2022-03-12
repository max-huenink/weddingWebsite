import React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';
import Pictures from './components/Pictures'
import Hotel from './components/Hotel'
import HowEngaged from './components/HowEngaged'
import HowMet from './components/HowMet'
import Itinerary from './components/Itinerary'
import Location from './components/Location'
import Registry from './components/Registry'

import './custom.css'

export default function App() {
  return (
    <Layout>
      <Route exact path='/' component={Home} />
      <Route path='/pics' component={Pictures} />
      <Route path='/hotel' component={Hotel} />
      <Route path='/engagement-story' component={HowEngaged} />
      <Route path='/how-we-met' component={HowMet} />
      <Route path='/itinerary' component={Itinerary} />
      <Route path='/location' component={Location} />
      <Route path='/registry' component={Registry} />
    </Layout>
  );
}
