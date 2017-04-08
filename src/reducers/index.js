import { combineReducers } from 'redux'
import { single } from '../constants/RuneMap'

const spacing = (state = single, action) => {
  switch (action.type) {
    case 'SET_SPACING':
      return action.spacing
    default:
      return state
  }
}

const runes = (state = 'elder', action) => {
  switch (action.type) {
    case 'SET_RUNES':
      return action.runes
    default:
      return state
  }
}

const value = (state = '', action) => {
  switch (action.type) {
    case 'SET_VALUE':
      return action.value
    default:
      return state
  }
}

const translation = (state = '', action) => {
  switch (action.type) {
    case 'SET_TRANSLATION':
      return action.translation
    default:
      return state
  }
}

const rootReducer = combineReducers({
  spacing,
  runes,
  value,
  translation
});

export default rootReducer;
