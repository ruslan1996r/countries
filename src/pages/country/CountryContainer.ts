import { connect } from 'react-redux';

import { AppState } from '../../store/configureStore';
import { getCountryThunk } from "../../store/actions"
import { ICountryStateProps } from "./CountryProps"
import Country from './Country';

const mapStateToProps = (state: AppState): ICountryStateProps => ({
    loading: state.countries.loading,
    country: state.countries.country
});

export default connect(mapStateToProps, { getCountryThunk })(Country)
