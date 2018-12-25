

import React, {Component} from 'react'
import axios from 'axios'
import './Update.css'

import Fragment from '../../UI/Fragments'

class Update extends Component {

  state = {
    title: '',
    desc: '',
    createdTime: ''
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  update = (reference) => {
    
    axios.put('https://my-project-03-57762.firebaseio.com/lists/' + reference + '.json',{title: this.state.title, desc: this.state.desc, createdTime: this.state.createdTime})
      .then(response => {
        this.props.formReverse()
        this.props.update(response.status, 'info')
        // console.log(response)
      })
  }

  render(){
    if(this.state.title === '' && this.props.itemFormUpdate){
      axios.get('https://my-project-03-57762.firebaseio.com/lists/' + this.props.itemFormUpdate + '.json')
          .then(response => {
            this.setState({
              title: response.data.title,
              desc: response.data.desc,
              createdTime: response.data.createdTime
            })
      })
  }
    
  return (
    <Fragment className='FormUpdate'>
      <form>
        <label>Title</label>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              name='title'
              placeholder="Enter Title"
              value={this.state.title}
              onChange={this.changeHandler} />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea 
              className="form-control"
              name='desc'
              rows="15"
              onChange={this.changeHandler}
              value={this.state.desc}></textarea>
            </div>
          <button 
            type="button"
            className="btn-sm btn-primary"
            onClick={()=>this.update(this.props.itemFormUpdate)}>Update</button>
        </form>
    </Fragment>
  )
}

}
export default Update