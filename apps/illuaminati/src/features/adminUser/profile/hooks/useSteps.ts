import { useState } from 'react'

export const useSteps = (): {
  currentStep: number
  next: () => void
} => {
  const [currentStep, setCurrentStep] = useState<number>(1)

  const next = () => {
    setCurrentStep(currentStep + 1)
  }

  return { currentStep, next }
}
