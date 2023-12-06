import React, {useEffect, useState} from "react";
import {StepTransition} from "./StepTransition";
import {Button, Form} from "react-bootstrap";
import classNames from "classnames";
import styles from "./stepstyles.module.scss";

function handleClearStorage() {
    window.sessionStorage.clear();
}

export const StepThree = () => {
    const [state, setState] = useState<{
        [key: string]: string | undefined;
    } | undefined>(undefined);

    useEffect(() => {
        const email = window.sessionStorage.getItem("email") || undefined;
        const phone = window.sessionStorage.getItem("phone") || undefined;
        const firstName = window.sessionStorage.getItem("firstName") || undefined;
        const lastName = window.sessionStorage.getItem("lastName") || undefined;
        const income = window.sessionStorage.getItem("income") || undefined;

        setState({Email: email, Phone: phone, ["First name"]: firstName, ["Last name"]: lastName, Income: income});
    }, []);


    return (
        <StepTransition>
            <Form onSubmit={handleClearStorage}>
                <Form.Text className="text-muted">
                    Please ensure we have the correct information
                </Form.Text>

                {state && Object.entries(state).map(entry => {
                    const [entryName, value] = entry;
                    return <Form.Group className="mb-3 ml-1">
                        <Form.Text>{entryName}</Form.Text><br/>
                        <Form.Label>{value}</Form.Label>

                    </Form.Group>
                })}
                <SubmitElements/>
            </Form>
        </StepTransition>
    )
};
const SubmitElements = () => {
    const [disabled, setDisabled] = useState(true);

    return <>
        <Form.Group className={classNames("mb-3", styles.formSubmit)} controlId="formBasicCheckbox">
            <Form.Check className={styles.submitCheck} checked={!disabled} type="checkbox" onChange={() => setDisabled(!disabled)}
                        label="The information is correct"/>
        </Form.Group>
        <Button disabled={disabled} className={classNames("mb-2", styles.submitButton)} type={"submit"}>Submit</Button>
    </>
}