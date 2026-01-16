export type HouseStep = {
  title: string;
  stage: string;
  parentsState?: string[];
  coreIdea: string;
  practical: string[];
  daily?: string[];
  exercise?: string[];
  effect?: string[];
  message?: string;
};