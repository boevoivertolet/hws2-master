const initState = {
    themeId: 1,
}

type StateType = typeof initState

type ActionType = ChangeThemeIdType

export const themeReducer = (state:StateType = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        // дописать

        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdType => ({ type: 'SET_THEME_ID', id } as const) // fix any

type ChangeThemeIdType = {
    type: 'SET_THEME_ID'
    id:number
}