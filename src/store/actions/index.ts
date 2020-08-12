import { Dispatch } from 'react';

import { AppState } from '../configureStore';
import {
    SET_LOADING,
    GET_REGIONS,
    SET_COUNTRIES,
    GET_COUNTRY,
    AppActions
} from '../actionTypes/actions';
import { Axios } from "../api"
import { ICountry } from "../../types"

// ACTION CREATORS
export const setLoadingAction = (loading: boolean): AppActions => ({
    type: SET_LOADING,
    loading
})

export const getRegionsAction = (regions: string[]): AppActions => ({
    type: GET_REGIONS,
    regions
})

export const setCountriesAction = (countries: ICountry[]): AppActions => ({
    type: SET_COUNTRIES,
    countries
})

export const getCountryAction = (country: ICountry): AppActions => ({
    type: GET_COUNTRY,
    country
})

// THUNKS
export const getRegionsThunk = () => {
    return async (dispatch: Dispatch<AppActions>): Promise<void> => {
        try {
            dispatch(setLoadingAction(true))
            const allRegions: string[] = await Axios.getAllRegions()
            const onlyUniqueRegions = new Set(allRegions)
            dispatch(getRegionsAction(Array.from(onlyUniqueRegions)))
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(setLoadingAction(false))
        }
    }
}

export const getCountriesThunk = (region: string) => {
    return async (dispatch: Dispatch<AppActions>): Promise<void> => {
        try {
            dispatch(setLoadingAction(true))
            const countries: ICountry[] = await Axios.getCountriesByRegion(region)
            dispatch(setCountriesAction(countries))
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(setLoadingAction(false))
        }
    }
}

export const getCountryThunk = (countryName: string) => {
    return async (dispatch: Dispatch<AppActions>): Promise<void> => {
        try {
            dispatch(setLoadingAction(true))
            const currentCountry: ICountry = await Axios.getCountryByName(countryName)
            dispatch(getCountryAction(currentCountry))
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(setLoadingAction(false))
        }
    }
}

export const sortByDensityThunk = (param: boolean) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState): void => {
        const countries: ICountry[] = getState().countries.countries
        const sortedCountries: ICountry[] = [...countries.sort((a: any, b: any) => {
            if ((a.population / a.area) > (b.population / b.area)) {
                return param ? 1 : -1;
            }
            if ((a.population / a.area) < (b.population / b.area)) {
                return param ? -1 : 1;
            }
            return 0;
        })]
        dispatch(setCountriesAction(sortedCountries))
    }
}