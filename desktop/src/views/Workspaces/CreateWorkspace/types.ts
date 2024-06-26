import { RECOMMENDED_PROVIDER_SOURCES } from "../../../constants"
import { Routes } from "../../../routes"
import { TNamedProvider, TProviderID, TWorkspaceID } from "../../../types"

export const FieldName = {
  SOURCE: "source",
  ID: "id",
  DEFAULT_IDE: "defaultIDE",
  PROVIDER: "provider",
  PREBUILD_REPOSITORY: "prebuildRepository",
  DEVCONTAINER_PATH: "devcontainerPath",
  GIT_BRANCH: "gitBranch",
  GIT_COMMIT: "gitCommit",
} as const

export type TFormValues = {
  [FieldName.SOURCE]: string
  [FieldName.DEFAULT_IDE]: string
  [FieldName.PROVIDER]: TProviderID
  [FieldName.ID]: string
  [FieldName.PREBUILD_REPOSITORY]: string
  [FieldName.DEVCONTAINER_PATH]?: string
  [FieldName.GIT_BRANCH]?: string
  [FieldName.GIT_COMMIT]?: string
}

export type TCreateWorkspaceSearchParams = ReturnType<
  typeof Routes.getWorkspaceCreateParamsFromSearchParams
>
export type TCreateWorkspaceArgs = Readonly<{
  workspaceID: TWorkspaceID
  providerID: TProviderID
  prebuildRepositories: string[]
  defaultIDE: string
  workspaceSource: string
  devcontainerPath: string | undefined
  gitBranch: string | undefined
  gitCommit: string | undefined
}>
export type TSelectProviderOptions = Readonly<{
  installed: readonly TNamedProvider[]
  recommended: typeof RECOMMENDED_PROVIDER_SOURCES
}>
