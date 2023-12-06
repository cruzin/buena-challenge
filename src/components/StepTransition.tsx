import React, {ReactNode, useEffect, useState} from "react";
import classNames from "classnames";
import styles from "../app.module.scss";

export const StepTransition = ({children, ...rest}: { children?: ReactNode }) => {
    const [triggeredTransisiton, setTriggeredTransition] = useState(false);

    useEffect(() => { //TODO this is done to trigger the animation, as the react-multistep unmounts the step components
        setTriggeredTransition(true);
    }, [])
    return <div
        className={classNames(!triggeredTransisiton ? styles.doNotDisplay : styles.display, styles.stepWrapper)}
        {...rest} >
        {children}
    </div>
};