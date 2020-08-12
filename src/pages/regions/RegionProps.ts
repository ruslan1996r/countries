export interface IRegionStateProps {
    loading: boolean,
    regions: string[],
}

export interface IRegionDispatchProps {
    getRegionsThunk: () => Promise<void>,
}