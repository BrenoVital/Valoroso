export interface IWeapon {
  uuid: string;
  displayName: string;
  category: string;
  defaultSkinUuid: string;
  displayIcon: string;
  killStreamIcon: string;
  assetPath: string;
  weaponStats: IWeaponStats;
  skins: ISkin[];
}

interface IWeaponStats {
  fireRate: number;
  magazineSize: number;
  runSpeedMultiplier: number;
  equipTimeSeconds: number;
  reloadTimeSeconds: number;
  firstBulletAccuracy: number;
  shotgunPelletCount: number;
  wallPenetration: string;
  feature: string;
  fireMode: string;
  altFireType: string;
}

interface ISkin {
  uuid: string;
  displayName: string;
  themeUuid: string;
  contentTierUuid: string;
  displayIcon: string;
  assetPath: string;
  wallpaper: string;
  chromas: IChroma[];
  levels: ILevel[];
}

interface IChroma {
  uuid: string;
  displayName: string;
  displayIcon: string;
  fullRender: string;
  swatch: string;
  streamedVideo: string;
  assetPath: string;
}

interface ILevel {
  uuid: string;
  displayName: string;
  levelItem: string;
  displayIcon: string;
  streamedVideo: string;
  assetPath: string;
}
