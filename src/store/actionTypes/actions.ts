import { ICountry } from "../../types"

export const SET_LOADING = "SET_LOADING"
export const GET_REGIONS = "GET_REGIONS"
export const SET_COUNTRIES = "SET_COUNTRIES"
export const GET_COUNTRY = "GET_COUNTRY"

export interface ACTION_SetLoading {
    type: typeof SET_LOADING,
    loading: boolean
}
export interface ACTION_GetRegions {
    type: typeof GET_REGIONS,
    regions: string[]
}
export interface ACTION_SetCountries {
    type: typeof SET_COUNTRIES,
    countries: ICountry[]
}
export interface ACTION_GetCountry {
    type: typeof GET_COUNTRY,
    country: ICountry
}

export type ActionTypes = ACTION_SetLoading | ACTION_GetRegions | ACTION_SetCountries | ACTION_GetCountry
export type AppActions = ActionTypes