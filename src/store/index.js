export const loadState = () => {
  try {
    const serializedState = window.localStorage.getItem('reduxState')

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
    const { favoriteItems } = state
    const serializedState = JSON.stringify({ favoriteItems })
    window.localStorage.setItem('reduxState', serializedState)
  } catch (e) {
    console.log(e) // eslint-disable-line
  }
}
