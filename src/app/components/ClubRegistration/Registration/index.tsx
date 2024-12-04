'use client';

import React, { useState } from 'react';
import {
    RegistrationFour,
    RegistrationOne,
    RegistrationSix,
    RegistrationThree,
    RegistrationTwo,
} from '..';
import ProgressBar from '../progressBar';

enum RegistrationSteps {
    StepOne = 1,
    StepTwo,
    StepThree,
    StepFour,
    StepSix,
}

const Registration: React.FC = () => {
    const [step, setStep] = useState<RegistrationSteps>(
        RegistrationSteps.StepOne
    );
    const [progress, setProgress] = useState<number>(20);

    const handleNextStep = (): void => {
        if (step < RegistrationSteps.StepSix) {
            setStep(prevStep => prevStep + 1);
            setProgress(prevProgress => prevProgress + 15);
        }
    };

    const handleBack = (): void => {
        if (step > RegistrationSteps.StepOne) {
            setStep(prevStep => prevStep - 1);
            setProgress(prevProgress => prevProgress - 15);
        }
    };

    const stepComponents: Record<RegistrationSteps, React.ReactElement> = {
        [RegistrationSteps.StepOne]: (
            <RegistrationOne onContinue={handleNextStep} />
        ),
        [RegistrationSteps.StepTwo]: (
            <RegistrationTwo onContinue={handleNextStep} onBack={handleBack} />
        ),
        [RegistrationSteps.StepThree]: (
            <RegistrationThree
                onContinue={handleNextStep}
                onBack={handleBack}
            />
        ),
        [RegistrationSteps.StepFour]: (
            <RegistrationFour onContinue={handleNextStep} onBack={handleBack} />
        ),
        [RegistrationSteps.StepSix]: (
            <RegistrationSix onContinue={handleNextStep} onBack={handleBack} />
        ),
    };

    return (
        <div className="container">
            <ProgressBar progress={progress} />
            <div className="w-full max-w-[534px] mx-auto pb-8 md:pb-16">
                {stepComponents[step]}
            </div>
        </div>
    );
};

export default Registration;
