import React from 'react'

const Category = (props) => {
  return (
    <h1>Category page: {props.match.params.category}</h1>
  )
}

export default Category
