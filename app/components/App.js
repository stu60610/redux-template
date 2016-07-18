import React, {
  Component
} from 'react';

import Header from './Header/Header.js';
import Button from './Button/Button.js';
import Footer from './Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Button />
        <Footer />
      </div>
    );
  }
};

export default App;
