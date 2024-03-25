import React from 'react';
/**
 * Answer
 * Problems:
 * 1 - There is no super method in the constructor
 * 2 - The clickHandler function is not binded 
 * 3 - The value of  the ref is a string not a reference
 * 
 * Solution:
 * 1 - Added super method in the constructor
 * 2 - bind the clickHandler in the constructor
 * 3 - Added the  myComponentDiv reference
 */
class App extends React.Component {
  constructor(props) {
    // set the default internal state
    super(props);
    this.state = {
      clicks: 0
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.myComponentDiv = React.createRef();
  }

  componentDidMount() {
    this.myComponentDiv.current.addEventListener('click', this.clickHandler);
  }

  componentWillUnmount() {
    this.myComponentDiv.current.removeEventListener('click', this.clickHandler);
  }

  clickHandler() {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  render() {
    return (
      <div className="my-component" ref={this.myComponentDiv}>
      <h2>My Component `{this.state.clicks}` clicks</h2>
    </div>
    );
  }
}

export default App;