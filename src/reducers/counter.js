export default function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type){
    case 'increase':
      return { count: count + 1 }
    case 'reduce':
      return count==0?{ count: 0 }:{ count: count - 1 }
    default:
      return state
  }
}