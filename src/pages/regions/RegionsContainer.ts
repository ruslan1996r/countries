import { connect } from 'react-redux';

import { AppState } from '../../store/configureStore';
import { getRegionsThunk } from "../../store/actions"
import { IRegionStateProps } from './RegionProps';
import Regions from './Regions';

const mapStateToProps = (state: AppState): IRegionStateProps => ({
    loading: state.countries.loading,
    regions: state.countries.regions
});

export default connect(mapStateToProps, { getRegionsThunk })(Regions)