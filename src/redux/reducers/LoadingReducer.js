import { DISPLAY_LOADING, HIDE_LOADING } from "../types/loadingType"

const stateDefault = {
    isLoading: false
}
const LoadingReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DISPLAY_LOADING: {
            state.isLoading = true
            return { ...state }
        }
        case HIDE_LOADING: {
            state.isLoading = false
            return { ...state }
        }
        default: return { ...state }
    }
}
export default LoadingReducer