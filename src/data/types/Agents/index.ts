export interface IAgent {
  uuid: string;
  displayName: string;
  description: string;
  developerName: string;
  characterTags: string[];
  displayIcon: string;
  displayIconSmall: string;
  bustPortrait: string;
  fullPortrait: string;
  fullPortraitV2: string;
  killfeedPortrait: string;
  background: string;
  role: IRole[];
  abilities: IAbility[];
}

export interface IRole {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  assetPath: string;
}

interface IAbility {
  slot: string;
  displayName: string;
  description: string;
  displayIcon: string;
}
