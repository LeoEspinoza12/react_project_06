import React from 'react'
import './Header.css'
import moment from 'moment'

const Header = (props) => {
  const timer = new Date()
  const listNumber = []
    for (let key in props.lists) {
      listNumber.push({
        ...props.lists[key]
      })
    }
    
  return (
     <div className='container Header'>
      <span>{moment(timer).format('dddd')}
        <i> {moment(timer).format('Do')}</i>
        <i> {moment(timer).format('MMMM')}</i></span>
      <span>{listNumber.length}<i> Task</i><i>{listNumber.length > 1 ? 's': ''} </i></span>
     </div>
  )
}
export default Header