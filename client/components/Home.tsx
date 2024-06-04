import MultiStepForm  from "./MultiStepForm";
import SignUp from "./SignUp";
import UploadAvatar from "./Avatar";

function Home() {
    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = MultiStepForm([
        <SignUp />,
        <div>What's your pet's name?</div>,
        <UploadAvatar />
    ])
   
    return (
    <div className = "landing">
        <form>
            <div style={{ position: "absolute", top: ".5rem", right: ".5rem"}}>
                {currentStepIndex + 1} / {steps.length}
            </div>
            {step}
            <div style={{ marginTop: "1rem", display: "flex", gap: ".5rem", justifyContent: "flex-end"}}>
                {!isFirstStep && <button type="button" onClick={back}>Back</button>}
                <button type="button" onClick={next}>{isLastStep ? "Finish" : "Next"}</button>
            </div>
        </form>
    </div>
    )
}

export default Home