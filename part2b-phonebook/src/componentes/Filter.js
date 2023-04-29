import React from 'react'

export const Filter = ({filter, handleInputFilter}) =>{

    return (
        <div>
          Filter Shown with: <input value={filter} onChange={handleInputFilter}/>
      </div>
    )
}