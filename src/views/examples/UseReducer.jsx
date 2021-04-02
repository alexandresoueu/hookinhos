import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'addTwo': 
      return { ...state, number: state.number + 2 }
    case 'numberMultiSeven':
      return { ...state, number: state.number * 7 }
    case 'numberDivTwentyFive':
      return { ...state, number: state.number / 25 }
    case 'numberInt':
      return { ...state, number: parseInt(state.number)}
    case 'numberAddN':
      return { ...state, number: state.number + action.payload}
    case 'login':
      return { ...state, user: { name: action.payload } }
    default:
      return state
  }
}

const UsingReducer = (props) => {

  const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
              {state.user ? (
                <span className="text">{state.user.name}</span>
              ) : (
                <span className="text">Don't have a name</span>
              )}
              <span className="text">{state.number}</span>
              <div>
                <button className="btn" onClick={() => dispatch({type: 'login', payload: 'Nemo'})}>Login</button>
                <button className="btn" onClick={() => dispatch({type: 'addTwo'}) }>+ 2</button>
                <button className="btn" onClick={() => dispatch({type: 'numberMultiSeven'}) }>* 7</button>
                <button className="btn" onClick={() => dispatch({type: 'numberDivTwentyFive'}) }>/ 25</button>
                <button className="btn" onClick={() => dispatch({type: 'numberInt'}) }>INT</button>
                <button className="btn" onClick={() => dispatch({type: 'numberAddN', payload: -9 }) }>-9</button>
                <button className="btn" onClick={() => dispatch({type: 'numberAddN', payload: 11 }) }>+11</button>
              </div>
            </div>
        </div>
    )
}

export default UsingReducer
