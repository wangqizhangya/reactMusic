export default function skip(state = { cur: 0 }, action) {
	console.log(action)
  const cur = state.cur
  switch (action.type){
    case 'add':
      return { cur: cur + 3 }
    default:
      return state
  }
}