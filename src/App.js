import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './validation/validation';
import CharComponent from './CharComponent/charComponent';

class App extends Component {
  state = {
    text: '',
    size: 0
  };

  checkLength = (event) => {
    var inputContent = event.target.value;
    var lengthOfInput = inputContent.length;
    this.setState({
      text: inputContent,
      size: lengthOfInput
    })
  }

  removeCharHandler = (charchter, index) => {
    var userInput = this.state.text.split('');
    userInput.splice(index, 1);
    var updatedText = userInput.join('');
    this.setState({text: updatedText, size: updatedText.length});
  }

  render() {
    const style = {
      display: 'inline-block', 
      padding: '16px', 
      textAlign: 'center', 
      margin: '16px', 
      border: '1px solid black',
      boxShadow: '2px 2px 5px 2px #c5eaf7',
      cursor: 'pointer'
    };
    let textContent = !!this.state.text ? this.state.text.slice() : '';

    return (
      <div className="App">
        <input type="text" onChange={this.checkLength} value={this.state.text}/>
        <div className="output">
          Text Size : {this.state.size}
          <ValidationComponent textSize={this.state.size} />
        </div>
        <div>
          {
            textContent.split('').map((text, index) => {
              return <CharComponent enteredChar={text} style={style} click={() => this.removeCharHandler(text, index)} key={index}/>;
            })
          }
          
        </div>
      </div>
    );
  }
}

export default App;
