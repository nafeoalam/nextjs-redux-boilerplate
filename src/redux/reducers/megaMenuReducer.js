import { FETCH_MEGA_MENU } from "../store-constants"

const megaMenuReducer = (state = { megaMenuData: null }, action) => {
    switch (action.type) {
        case FETCH_MEGA_MENU:
            return {
                megaMenuData: action.payload
            }
        default:
            return state
    }
}

export default megaMenuReducer