interface IOnboardingState {
    activeStep: number;
    skipped: Set<number>;
}

export default IOnboardingState;