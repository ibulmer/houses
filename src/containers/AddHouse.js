import React from 'react'
import { connect } from 'react-redux'
import { addHouse } from '../actions'

const AddHouse = ({ dispatch }) => {
    let id
    let name
    let location
    let price

  return (
    <div>
      <form onSubmit={e => {
          console.log(id);
        e.preventDefault()
        if (!id.value.trim() || 
            !name.value.trim() || 
            !location.value.trim() || 
            !price.value.trim()) {
          return
        }
        dispatch(addHouse(id.value, name.value, location.value, price.value))
        id.value = ''
      }}>
        <input ref={node => id = node} />
        <input ref={node => name = node} />
        <input ref={node => location = node} />
        <input ref={node => price = node} />
        <button type="submit">
          Add House
        </button>
      </form>
    </div>
  )
}

export default connect()(AddHouse)