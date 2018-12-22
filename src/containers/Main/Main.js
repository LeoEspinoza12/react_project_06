import React, { Component } from 'react'
import Input from '../../components/input/Input'
import Lists from '../../components/list/Lists'
import Fragments from '../../UI/Fragments';
import axios from 'axios'

import './Main.css'

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputSwitch: false,
      addDescTitle: '',
      addDescContent: '',
      update: false,
      lists: null,
      loading: false
    }
  }

  click = (input) =>{
    if(input === 'inputSwitch'){
      this.setState(prevState => {
        return {
          inputSwitch: !prevState.inputSwitch,
          addDescTitle: '',
          addDescContent: ''
        }}
      )}
  }

  onChange =(e) =>{
      this.setState({[e.target.name]: e.target.value})
  }

  onUpdate = (data) => {
    this.setState({loading: true})
    if(data === 200){
      axios.get('https://my-project-03-57762.firebaseio.com/lists.json')
        .then(response => {
          this.setState({lists: response.data, loading: false})
        })
    }
  }

  render() {
    return (
      <Fragments>
        <div className='container'>
          <div className="row">
            <Input  
              switch={this.state.inputSwitch}
              change={this.onChange}
              descTitle={this.state.addDescTitle}
              descContent={this.state.addDescContent}
              click={this.click}
              update={this.onUpdate}/>
            <Lists
              loading={this.state.loading}
              lists={this.state.lists}
              update={this.onUpdate}/>
          </div>
        </div>
      </Fragments>

    )
  }
}


export default Main