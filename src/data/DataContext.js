import React from 'react'

export const data = {
  number: 123456,
  text: 'Landinho e Zaira'
}

const DataContext = React.createContext(data)

export default DataContext
