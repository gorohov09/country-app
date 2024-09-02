import { SWITCH_THEME } from "./theme-actions";

export const themeReducer = (state = 'light', action) => {
    switch (action.type) {
        case SWITCH_THEME: {
            return state === 'light' ? 'dark' : 'light'
        }
        default: {
            return state;
        }
    }
}