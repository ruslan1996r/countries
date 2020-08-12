import { connect } from 'react-redux';

import { AppState } from '../../store/configureStore';
import { getCountriesThunk, sortByDensityThunk } from "../../store/actions"
import { ICountriesStateProps } from "./CountriesProps"
import Countries from "./Countries"

const mapStateToProps = (state: AppState): ICountriesStateProps => ({
    loading: state.countries.loading,
    countries: state.countries.countries
});

export default connect(mapStateToProps, { getCountriesThunk, sortByDensityThunk })(Countries)
