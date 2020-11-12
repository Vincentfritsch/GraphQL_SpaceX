import React from 'react';
import { render } from 'react-dom';

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Launches from './GetLaunches';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});



function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
      </div>
        <Launches />
    </ApolloProvider>
  );
}

render(<App />, document.getElementById('root'));
export default App;
