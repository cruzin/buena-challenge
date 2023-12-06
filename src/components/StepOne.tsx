import React, {useEffect, useState} from "react";
import {StepTransition} from "./StepTransition";
import {Form} from "react-bootstrap";
import styles from "../app.module.scss";

export const StepOne = () => {
    const [email, setEmail] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");

    useEffect(() => {
        setEmail(window.sessionStorage.getItem("email") || "");
        setFirstName(window.sessionStorage.getItem("firstName") || "");
        setLastName(window.sessionStorage.getItem("lastName") || "");
    }, []);


    return (
        <StepTransition>
            <Form onChange={(e) => {
                // @ts-ignore
                window.sessionStorage.setItem(e.target.id, e.target.value);

            }}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control defaultValue={email !== "" ? email : undefined} type="email" placeholder="Enter email"
                                  className={styles.formInput}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>Your first name</Form.Label>
                    <Form.Control defaultValue={firstName !== "" ? firstName : undefined} type="firstName"
                                  placeholder="Ex: Max" className={styles.formInput}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Your surname</Form.Label>
                    <Form.Control defaultValue={lastName !== "" ? lastName : undefined} type="lastName"
                                  placeholder="Ex: Musterman" className={styles.formInput}/>
                </Form.Group>
            </Form>
        </StepTransition>
    )
}