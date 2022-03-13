import React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';
import Pictures from './components/Pictures'
import HowEngaged from './components/HowEngaged'
import HowMet from './components/HowMet'
import Details from './components/Details'
import Registry from './components/Registry'

import './custom.css'

export default function App() {
  return (
    <Layout>
      <Route exact path='/' component={Home} />
      <Route path='/pictures' component={Pictures} />
      <Route path='/engagement-story' component={HowEngaged} />
      <Route path='/how-we-met' component={HowMet} />
      <Route path='/wedding-details' component={Details} />
      <Route path='/registry' component={Registry} />
    </Layout>
  );
}
