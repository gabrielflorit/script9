const key = 'script-9'

const loadState = () => {
  try {
    const serializedState = localStorage.getItem(key)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (error) {
    return undefined
  }
}

const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(key, serializedState)
  } catch (error) {
    console.error(error)
  }
}

export { loadState, saveState }
