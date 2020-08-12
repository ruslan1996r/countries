import axios from "axios"
import { ICountry } from "../../types"

export class Axios {
    static getAllRegions = async (): Promise<string[]> => {
        const res = await axios.get('https://restcountries.eu/rest/v2/all?fields=region')
        const regions: string[] = res.data.map((r: { region: string }) => {
            return r.region
        })
        return regions.filter((r: string) => r)
    }
    static getCountriesByRegion = async (region: string): Promise<ICountry[]> => {
        const res = await axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
        return res.data
    }
    static getCountryByName = async (country: string): Promise<ICountry> => {
        const res = await axios.get(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
        return res.data[0]
    }
}