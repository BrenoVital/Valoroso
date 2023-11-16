export interface IElo {
  uuid: string;
  assetObjectName: string;
  tiers: ITier[];
  assetPath: string;
}

interface ITier {
  tier: number;
  tierName: string;
  division: string;
  divisionName: string;
  color: string;
  backgroundColor: string;
  smallIcon: string;
  largeIcon: string;
  rankTriangleDownIcon: string;
  rankTriangleUpIcon: string;
}
