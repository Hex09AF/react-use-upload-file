import { describe, expect, test } from "bun:test"
import { LoadingStates } from "@/core"
import { useLoadingState } from "@/react/useLoadingState"
import { fireEvent, render, screen } from "@testing-library/react"

const TestComponent = () => {
  const { loadingState, startLoading, finishLoading, endLoading } = useLoadingState()

  return (
    <div>
      <div data-testid="status">{loadingState}</div>
      <button onClick={startLoading}>Start</button>
      <button onClick={finishLoading}>Finish</button>
      <button onClick={endLoading}>End</button>
    </div>
  )
}

describe("useLoadingState with render", () => {
  test("should show initial state", () => {
    render(<TestComponent />)
    expect(screen.getByTestId("status").textContent).toBe(LoadingStates.Init)
  })

  test("should switch to Loading state", () => {
    render(<TestComponent />)
    fireEvent.click(screen.getByText("Start"))
    expect(screen.getByTestId("status").textContent).toBe(LoadingStates.Loading)
  })

  test("should switch to Finishing state", () => {
    render(<TestComponent />)
    fireEvent.click(screen.getByText("Finish"))
    expect(screen.getByTestId("status").textContent).toBe(LoadingStates.Finishing)
  })

  test("should switch to End state", () => {
    render(<TestComponent />)
    fireEvent.click(screen.getByText("End"))
    expect(screen.getByTestId("status").textContent).toBe(LoadingStates.End)
  })
})
