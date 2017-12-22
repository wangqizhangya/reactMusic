export default function skipPage(state = { cur: 0 }, action) {
  const cur = state.cur
  switch (action.type){
    case 'add':
      return { cur: cur + 3 }
    default:
      return state
  }
}