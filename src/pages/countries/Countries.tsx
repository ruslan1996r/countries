import React, {  useEffect, useCallback } from 'react'

import { ICountry } from "../../types"
import { ICountriesStateProps, ICountriesDispatchProps } from "./CountriesProps"
import Loading from "../../components/Loading"

type Props = ICountriesStateProps & ICountriesDispatchProps & any;

const Countries: React.FC = (props: Props) => {
    const { 
        loading, 
        match, 
        history, 
        countries, 
        getCountriesThunk, 
        sortByDensityThunk,
    } = props
    const region = match.params.region

    const countriesCallback = useCallback((region: string)=> {
		getCountriesThunk(region)
    },[getCountriesThunk])

    const sortByDensityCallback = useCallback((param: boolean)=> {
        sortByDensityThunk(param)
    },[sortByDensityThunk])

    useEffect(()=>{
        countriesCallback(region)
    },[countriesCallback, region])

    return (
        <React.Fragment>
            <div className="button-group">
                <button onClick={()=>sortByDensityCallback(false)}>Sort by max</button>
                <button onClick={()=>sortByDensityCallback(true)}>Sort by min</button>
            </div>
            <div className="container">
                {loading ? <Loading /> : countries.map((country: ICountry)=>{
                    return (
                    <div 
                        className="country"
                        key={country.name} 
                        onClick={()=> history.push(`/country/${country.name}`)}>
                        <img src={country.flag} alt={country.name} />
                        <p>{country.name}</p>
                    </div>
                        )
                })}
            </div>
        </React.Fragment>
    )
}

export default Countries
