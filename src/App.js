import React, { Component } from 'react';
import classNames from 'classnames';
import './App.scss';
import FileDropper from './components/FileDropper/FileDropper';

class App extends Component {

  state = {
    selected: false,
  }

  onDropped = (e) => {
    console.log(e);
  }

  onDragOver = () => {
    console.log('drag over');
  }

  onDragEnter = () => {
    console.log('enter');
    this.setState({
      selected: true
    });
  }

  onDragLeave = () => {
    console.log('leave');
    this.setState({
      selected: false
    });
  }

  render() {
    return (
      <div className='App'>
        <FileDropper
          onDropped={this.onDropped}
          onDragOver={this.onDragOver}
          onDragEnter={this.onDragEnter}
          onDragLeave={this.onDragLeave}
        >
          <div id='drop_zone' className={classNames({ selected: this.state.selected })}>
            <p>Drag one or more files to this Drop Zone ...</p>
          </div>
        </FileDropper>
      </div>
    );
  }
}

export default App;
