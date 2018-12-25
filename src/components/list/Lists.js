import React, { Component } from 'react';
import Fragment from '../../UI/Fragments';
import ListItem from  './list/List';
import Update from '../update/Update'
import Header from './header/Header'
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
        this.props.update(response.status, 'warning')
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
        list = <Fragment>
                  <Spinner />
              </Fragment> 
    } else if (this.state.updateForm === true) {
        list = <Fragment>
                  <Header lists={this.props.lists}/>
                  <Update 
                    formReverse={this.formReverse}
                    update={this.props.update}
                    itemFormUpdate={this.state.itemFormUpdate} />
                </Fragment>
    } else if (this.props.lists){
        list = <Fragment>
                  <Header lists={this.props.lists}/>
                  <ListItem
                  lists={this.props.lists}
                    formUpdate={this.formUpdate}
                      delete={this.delete}/>
                </Fragment>
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