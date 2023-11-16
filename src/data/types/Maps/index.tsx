export interface IMap {
  uuid: string;
  displayName: string;
  narrativeDescription: string;
  tacticalDescription: string;
  coordinates: string;
  displayIcon: string;
  listViewIcon: string;
  splash: string;
  assetPath: string;
  mapUrl: string;
  xMultiplier: number;
  yMultiplier: number;
  xScalarToAdd: number;
  yScalarToAdd: number;
  callouts: ICallout[];
}

interface ICallout {
  regionName: string;
  superRegionName: string;
  location: ILocation;
}

interface ILocation {
  x: number;
  y: number;
}
