import React from 'react';
import ReactDOM from 'react-dom';


const fn=()=>{

}


export default class Deplome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }

  render() {
    return (
      <div>
        <button onClick={this._handleClick.bind(this)}>Radom</button>
       
      </div>
    );
  }

  _handleClick() {
    var num = Math.floor((Math.random() * 10) + 1);
    this.setState({
      active: num
    });
  }
};
