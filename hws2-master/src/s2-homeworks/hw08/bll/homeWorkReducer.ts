import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            return state
            // return state // need to fix
        }
        case 'check': {

            return state.filter(u => u.age > action.payload )
            // return state // need to fix
        }
        default:
            return state
    }
}
