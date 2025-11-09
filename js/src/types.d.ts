import Topology from 'topojson-specification'

export type IconsData = {
    size: number
    type: string
    position: [number, undefined, number]
}

export type Planet = {
    start_locations?: {
        [key: string]: [number, number]
    }
    [key: string]: Topology
    mining?: Topology
    names?: Topology
    poi?: Topology
    features?: []
}

export type ExtendedTopology = Topology & {
    geometry: {
        coordinates: [number, number][]
    }
    properties: {
        color_hex: string
        name?: string
    }
}