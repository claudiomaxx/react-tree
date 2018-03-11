import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

import { fetchNodes } from './actions';

import Node from './components/node';
import AddNodeForm from './components/add_node_form';

class App extends Component {

  componentDidMount() {
    this.props.fetchNodes();
  }

  render() {
    return (
      <div className="App">

        <AddNodeForm />
        <Node nodes={this.props.nodes} />        
      </div>
    );
  }
}

function mapStateToProps({ nodes }) {
  return { nodes };
}

export default connect(mapStateToProps, { fetchNodes })(App);
