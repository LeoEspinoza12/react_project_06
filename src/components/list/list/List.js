


import React from 'react'
import moment from 'moment'
import Fragment from '../../../UI/Fragments'

const List = (props) => {

  
   const fetchList = []
      for (let key in props.lists) {
        fetchList.push({
          ...props.lists[key], key
        })
      }
      fetchList.reverse()


    let list = fetchList.map((newList, index) => {
      return (<li 
                className='list-group-item' 
                key={newList.key}
                onClick={()=>props.formUpdate(newList.key)}>
                  <div className="media">
                    <div className="media-body">
                      <button 
                        type="button" 
                        className="close"
                        onClick={(e)=>props.delete(e, newList.key)}>
                        <span>&times;</span>
                      </button>
                      <h5 className="mt-0 mb-1 float-left">{newList.title}</h5>
                        <p className='text-sm-left float-left'>
                          {newList.desc}
                        </p>
                        <p className='text-sm-right float-left timer'>
                          {moment(newList.createdTime).format('h:mm a')} 
                        </p>
                    </div>
                  </div>
              </li>
      )
    })

    return (
    <Fragment>
      <ul className='list-group'>
        {list}
      </ul>
    </Fragment>
  )
}

export default List