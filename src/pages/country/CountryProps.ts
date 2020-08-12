import { ICountry } from "../../types"

export interface ICountryStateProps {
    loading: boolean,
    country: ICountry,
}

export interface ICountryDispatchProps {
    getCountryThunk: (countryName: string) => Promise<void>,
}