import React, { Component } from 'react';
import Fragment from '../../UI/Fragments';
import ListItems from  './list/List';
import Update from '../update/Update'

import Spinner from '../../UI/Spinner/Spinner';

import axios from 'axios';
import './Lists.css';

class List extends Component {

  state={
    updateForm: false,
    itemFormUpdate: null
  }

  delete =(e, item)=>{
    e.stopPropagation()
    axios.delete('https://my-project-03-57762.firebaseio.com/lists/' + item + '.json')
      .then(response => {
        this.props.update(response.status)
      })
  }

  formUpdate = (item) => {
    this.setState({updateForm: true, itemFormUpdate: item})
  }
  
  formReverse = () => {
    this.setState({updateForm: false})
  }
  
  render() {
    
    let list = null
      if(this.props.loading){
          list = <Spinner />
      } else if (this.state.updateForm === true) {
          list = <Update 
                  formReverse={this.formReverse}
                  update={this.props.update}
                  itemFormUpdate={this.state.itemFormUpdate} />
      } else if (this.props.lists){
          list = <ListItems 
            lists={this.props.lists}
              formUpdate={this.formUpdate}
                delete={this.delete}/>
      } else if (!this.props.lists) {
          list = <h1 className="display-4">You don't have any list!</h1> 
      }

    return (
      <Fragment>
        <div className = "col-sm-8 Right-Side">
          {list}
        </div>
      </Fragment>
    )
  }
}

export default List  