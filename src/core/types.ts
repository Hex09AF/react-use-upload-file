export enum LoadingStates {
  Init = "init",
  End = "end",
  Loading = "loading",
  Finishing = "finishing",
}

export interface LoadingState {
  status: LoadingStates;
}

export type LoadingAction =
  | { type: LoadingStates.Init }
  | { type: LoadingStates.End }
  | { type: LoadingStates.Loading }
  | { type: LoadingStates.Finishing };