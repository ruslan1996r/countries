import React, { useEffect, useCallback } from 'react'

import { IRegionStateProps, IRegionDispatchProps} from "./RegionProps"
import Loading from "../../components/Loading"

type Props = IRegionStateProps & IRegionDispatchProps & any;

const Regions: React.FC = (props: Props) => {
    const { regions, loading, getRegionsThunk, history } = props

    const regionsCallback = useCallback(()=>{
		getRegionsThunk()
    },[getRegionsThunk])
    
    useEffect(()=>{
        regionsCallback()
    },[regionsCallback])

    return (
        <div className="container">
            {loading ? <Loading />: regions.map((region:string)=>{
                return <div
                    className="region"
                    key={region}
                    onClick={()=> history.push(`/countries/${region}`)}
                    >
                        <h2>{region}</h2>
                    </div>
            })}
        </div>
    )
}

export default Regions