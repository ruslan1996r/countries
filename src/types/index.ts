export interface IBlock {
    acronym: string,
    name: string,
    otherAcronyms: any[],
    otherNames: any[]
}

export interface ILanguages {
    iso639_1: string,
    iso639_2: string,
    name: string,
    nativeName: string
}

export interface ICountry {
    name: string,
    topLevelDomain: string[],
    alpha2Code: string,
    alpha3Code: string,
    callingCodes: string[],
    capital: string,
    altSpellings: string[],
    region: string,
    subregion: string,
    population: number,
    latlng: number[],
    demonym: string,
    area: number,
    gini: number,
    timezones: string[],
    borders: string[],
    nativeName: string,
    numericCode: string,
    currencies: string[],
    languages: ILanguages[],
    translations: string[],
    flag: string,
    regionalBlocs: IBlock[],
    cioc: string,
}