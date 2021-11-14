interface IOnboardingState {
    activeStep: number;
    completed: Set<number>;
}

export default IOnboardingState;