export default function numberReducer(state, action) {
  switch(action.type) {
    case 'numberAddTwo': 
      return { ...state, number: state.number + 2 }
    case 'numberMultiSeven':
      return { ...state, number: state.number * 7 }
    case 'numberDivTwentyFive':
      return { ...state, number: state.number / 25 }
    case 'numberInt':
      return { ...state, number: parseInt(state.number)}
    case 'numberAddN':
      return { ...state, number: state.number + action.payload}
       default:
      return state
  }
}
