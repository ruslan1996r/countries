import {
    SET_LOADING,
    GET_REGIONS,
    SET_COUNTRIES,
    GET_COUNTRY,
    ActionTypes
} from '../actionTypes/actions';

const initialState: any = {
    loading: false,
    regions: [],
    countries: [],
    country: {}
};

const countryReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        case GET_REGIONS:
            return {
                ...state,
                regions: action.regions
            }
        case SET_COUNTRIES:
            return {
                ...state,
                countries: action.countries
            }
        case GET_COUNTRY:
            return {
                ...state,
                country: action.country
            }
        default:
            return state;
    }
}

export { countryReducer };