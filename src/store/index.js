export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState')

    if (serializedState === null) {
      return undefined
    }

    return JSON.parse(serializedState)
  } catch (e) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('reduxState', serializedState)
  } catch (e) {
    console.log(e) // eslint-disable-line
  }
}
