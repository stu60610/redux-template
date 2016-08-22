import React, {
  Component
} from 'react';

import Header from './Header/Header';
import Button from './Button/Button';
import Footer from './Footer/Footer';

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
}

export default App;
