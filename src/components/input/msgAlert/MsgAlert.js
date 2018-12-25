import React, {Component} from 'react'
import Fragment from '../../../UI/Fragments'
import './MsgAlert.css'

class MsgAlert extends Component {

  showMessage = (message) => {
    let text = `Message alert alert-${this.props.msg} ${this.display}`
    return <div className={text} role="alert">
                    {message}
                  </div>
  }

render(){

  let alertMsg = null
    if(this.props.msgHandler === true){
      if(this.props.msg){
        if(this.props.msg === 'success'){
          alertMsg = this.showMessage('Your message is added')
        } else if (this.props.msg === 'info'){
          alertMsg = this.showMessage('The message was updated')
        } else if (this.props.msg === 'warning'){
          alertMsg = this.showMessage('The message was deleted')
        }
      }
    }

    
  return (
    <Fragment>
      {alertMsg}
    </Fragment>
  )
}
}


export default MsgAlert