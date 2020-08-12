import { ICountry } from "../../types"

export interface ICountriesStateProps {
    loading: boolean,
    countries: ICountry[],
}

export interface ICountriesDispatchProps {
    getCountriesThunk: (region: string) => Promise<void>,
    sortByDensityThunk: (param: boolean) => Promise<void>
}