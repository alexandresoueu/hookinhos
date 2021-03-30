import React, { useState } from 'react'

const initialState = {
  number: 10,
  text: 'Maradona',
}

export const AppContext = React.createContext(initialState)

const Store = props => {

  const [ state, setState ] = useState(initialState)

  const updateState = (key, value) => {
    setState({
      ...state,
      [key]: value
    })
  }

  return (
    <AppContext.Provider value={{
      number: state.number,
      text: state.text,
      setNumber: num => updateState('number', num),
      setText: tex => updateState('text', tex),
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default Store
