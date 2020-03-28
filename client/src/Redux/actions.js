import { createAction } from 'redux-starter-kit'

export const toggleFilter = createAction('toggleFilter')
export const changeLowerRange = createAction('changeLowerRange')
export const changeUpperRange = createAction('changeUpperRange')

export const sortRepos = createAction('sortRepos')
export const SORT_BY_STAR = "star"
export const SORT_BY_PUSH_AT = "push_at"
