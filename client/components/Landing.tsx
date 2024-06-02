import MultiStepForm from "./MultiStepForm";

function Landing() {
    const { steps, currentStepIndex, step, isFirstStep, back, next } = MultiStepForm([
        <div>One</div>,
        <div>Two</div>,
    ])
   
    return (
    <div className = "signUpForm">
        <form>
            <div style={{ position: "absolute", top: ".5rem", right: ".5rem"}}>
                {currentStepIndex + 1} / {steps.length}
            </div>
            {step}
            <div style={{ marginTop: "1rem", display: "flex", gap: ".5rem", justifyContent: "flex-end"}}>
                {!isFirstStep && <button type="button" onClick={back}>Back</button>}
                <button type="button" onClick={next}>Next</button>
            </div>
        </form>
    </div>
    )
}

export default Landing