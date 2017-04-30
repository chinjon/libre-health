import React, {Component} from 'react';

import Radium from 'radium';

let styles = {
  base: {
    height: '30px'
  }
}

class Footer extends Component {
  render() {
    return (
      <footer className="footer" style={styles.base}>
        <div className="container">
          <div className="content has-text-centered">
            <p>
              <a href="#">Libre Health</a>
            </p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Radium(Footer);
