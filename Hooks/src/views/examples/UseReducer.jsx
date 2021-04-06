import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, allReducers } from '../../store'
import { numberAddTwo, login } from '../../store/actions'

const UsingReducer = (props) => {

  const [state, dispatch] = useReducer(allReducers, initialState)

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
                <button className="btn" onClick={() => login(dispatch, 'Landinho')}>Login</button>
                <button className="btn" onClick={() => numberAddTwo(dispatch) }>+ 2</button>
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
