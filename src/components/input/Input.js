import React, {Component} from 'react'
import axios from 'axios'
import MsgAlert from './msgAlert/MsgAlert'
import Fragment from '../../UI/Fragments'
import './Input.css'

class Input extends Component {

switchHandler = () => {
  let list = {
    title: this.props.descTitle,
    desc: this.props.descContent,
    createdTime: new Date()
  }
  axios.post('https://my-project-03-57762.firebaseio.com/lists.json', list)
    .then(response => {
      // console.log(response.status)
      this.props.click('inputSwitch')
      this.props.update(response.status, 'success')
    })
  }

render(){
  
  let msgAlert = null;
  if(this.props.messageAlert !== false){
    msgAlert =<MsgAlert 
                msg={this.props.messageAlert}
                msgHandler={this.props.msgHandler}
                />
  }

let disabled = true
  if(this.props.descTitle.length >= 1 && this.props.descContent.length >= 1){
    disabled = false
  } 

let inputBtn = <Fragment>
                  <div className='Button'>
                    <button 
                      type="button" 
                      className="btn-sm float-left btn-primary"
                      onClick={()=>this.props.click('inputSwitch')}>
                      Add New</button>
                  </div>
                  {msgAlert}
                </Fragment>

let inputForm = <div className='Form'>
                  <div className="form-group">
                  <label>Title</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name='addDescTitle'
                      placeholder="Enter Title"
                      value={this.props.descTitle}
                      onChange={this.props.change} />
                  </div>
                  <div className="form-group">
                  <label>Description</label>
                    <textarea 
                      className="form-control" 
                      rows="15" 
                      name='addDescContent'
                      onChange={this.props.change}
                      placeholder='Enter Description'
                      value={this.props.descContent}></textarea>
                    </div>
                  <button 
                    type="button" 
                    disabled={disabled}
                    className="btn-sm btn-primary"
                    onClick={this.switchHandler}>
                      Add List</button>
                </div>
          
    return(
         <div className="col-sm-4 Left-Side">
          {this.props.switch ? inputForm : inputBtn}
          <div className='Brand'>
            <p className=''><i>&copy;</i> aimanski.com</p>
          </div>
        </div>
    )
  }
}





export default Input