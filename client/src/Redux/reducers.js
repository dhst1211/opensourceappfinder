import { combineReducers } from 'redux'
import { createReducer } from 'redux-starter-kit'
import {
  toggleFilter, changeLowerRange, changeUpperRange, sortRepos,
} from './actions'

const filterReducer = filterType => createReducer([], {
  [toggleFilter]: (state, action) => {
    if(action.payload.filterType !== filterType) return state

    const newState = state.filter(item => item !== action.payload.item)
    const isDeletion = state.length > newState.length
    return isDeletion ? newState : [...newState, action.payload.item]
  }
})

const rangeReducer = filterType => createReducer({},{
  [changeLowerRange]: (state, action) => {
    if(action.payload.filterType !== filterType) return state

    const { lowerLimit } = action.payload
    return { ...state, lowerLimit }
  },
  [changeUpperRange]: (state, action) => {
    if(action.payload.filterType !== filterType) return state

    const { upperLimit } = action.payload
    return { ...state, upperLimit }
  }
})

const sortReposReducer = createReducer({}, {
  [sortRepos]: (state, action) => action.payload,
})

const rootReducer = combineReducers({
  categories: filterReducer("category"),
  languages: filterReducer("language"),
  star: rangeReducer("star"),
  fork: rangeReducer("fork"),
  issue: rangeReducer("issue"),
  sortRepos: sortReposReducer,
})

export default rootReducer