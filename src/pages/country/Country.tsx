import React, {  useEffect, useCallback } from 'react'

import { ICountryStateProps, ICountryDispatchProps } from "./CountryProps"
import Loading from "../../components/Loading"

type Props = ICountryStateProps & ICountryDispatchProps & any;

const Country: React.FC = (props: Props) => {
    const { loading, match, country, getCountryThunk } = props
    const { 
        name, capital, population, area,
        timezones, flag, translations, borders
    } = country
    const countryName = match.params.countryName

    const countryCallback = useCallback((countryName: string)=> {
		getCountryThunk(countryName)
    },[getCountryThunk])

    useEffect(()=>{
        countryCallback(countryName)
    },[countryCallback, countryName])

    return (
        <div>
            {loading ? <Loading />: (
                <div className="currentCountry">
                    <img src={flag} alt={name}/>
                    <h1>Name: {name}</h1>
                    <h2>Capital: {capital}</h2>
                    <p>Population: {population}</p>
                    <p>Area: {area}</p>
                    <div>
                        Borders: {borders && borders.map((b: string)=>{
                            return <span key={b}>{b}; </span>
                        })}
                    </div>
                    <div>
                        Timezones: {timezones && timezones.map((z: string)=>{
                            return <span key={z}>{z}; </span>
                        })}
                    </div>
                    <div className="translations">
                        <h4>Translations:</h4>
                        {translations && Object.keys(translations).map((t: any, k: number)=>{
                            const tr = Object.values(translations)[k]
                            return (
                                <div key={k}>
                                    {t}: {tr}
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Country