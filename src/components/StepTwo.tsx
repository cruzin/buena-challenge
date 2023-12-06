import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import {StepTransition} from "./StepTransition";
import styles from "../app.module.scss";

const Phone = () => {
    const [phone, setPhone] = useState<string>("");
    useEffect(() => {
        setPhone(window.sessionStorage.getItem("phone") || "");
    }, []);

    return <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Phone number</Form.Label>
        <Form.Control defaultValue={phone !== "" ? phone : undefined} type="phone" placeholder="Enter phone number"
                      className={styles.formInput}/>
        <Form.Text className="text-muted">
            We'll never share your phone number with anyone else.
        </Form.Text>
    </Form.Group>

}
const IncomeRange = () => {
    const incomeRanges = ['0 -1000', "1000-2000", "2000-3000", "3000-4000", "mehr als 4000"];
    const [show, setShow] = useState<boolean>(false);
    const [income, setIncome] = useState<string>("");

    useEffect(() => {
        setIncome(window.sessionStorage.getItem("income") || "");
        setShow(true);
    }, []);


    return <Form.Group className="mb-3" controlId="income">
        <Form.Label><h4>Your income range</h4></Form.Label>
        {show &&
            <div className="mb-3">
                {incomeRanges.map((range) => {
                    return (
                        <Form.Check
                            key={`income-${range}`}
                            defaultChecked={income === range}
                            inline
                            name="group1"
                            type={"radio"}
                            id={`${range}`}
                            label={`${range}`}
                        />
                    )
                })}
            </div>
        }
    </Form.Group>
}
export const StepTwo = () => {

    return (
        <StepTransition>
            <Form onChange={(e) => {
                // @ts-ignore
                if (e.target.id === "phone") {
                    // @ts-ignore
                    window.sessionStorage.setItem("phone", e.target.value);
                } else {
                    // @ts-ignore
                    window.sessionStorage.setItem("income", e.target.id);
                }
            }}>
                <Phone/>
                <IncomeRange/>


            </Form>
        </StepTransition>
    )
};