import { useCallback, useReducer } from "react"
import { type LoadingAction, type LoadingState, LoadingStates } from "../core"

const loadingReducer = (
  state: LoadingState,
  action: LoadingAction,
): LoadingState => {
  switch (action.type) {
    case LoadingStates.Init:
      return { status: LoadingStates.Init }
    case LoadingStates.End:
      return { status: LoadingStates.End }
    case LoadingStates.Loading:
      return { status: LoadingStates.Loading }
    case LoadingStates.Finishing:
      return { status: LoadingStates.Finishing }
    default:
      return state
  }
}

export const useLoadingState = () => {
  const [loadingState, dispatch] = useReducer(loadingReducer, {
    status: LoadingStates.Init,
  })

  const startLoading = useCallback(() => {
    dispatch({ type: LoadingStates.Loading })
  }, [])

  const finishLoading = useCallback(() => {
    dispatch({ type: LoadingStates.Finishing })
  }, [])

  const endLoading = useCallback(() => {
    dispatch({ type: LoadingStates.End })
  }, [])

  return {
    loadingState: loadingState.status,
    startLoading,
    finishLoading,
    endLoading,
  }
}
