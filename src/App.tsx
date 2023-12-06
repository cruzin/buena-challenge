import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./app.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import MultiStep from "react-multistep";
import classNames from "classnames";
import {StepOne} from "./components/StepOne";
import {StepTwo} from "./components/StepTwo";
import {StepThree} from "./components/StepThree";



function App() {
    return (
        <div className="App">
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col xs={12} md={8} className={classNames(styles.multiStepWrapper)}>
                        <MultiStep activeStep={0} prevButton={prevButton} nextButton={nextButton} showNavigation={true}>
                            <StepOne/>
                            <StepTwo/>
                            <StepThree/>
                        </MultiStep>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
const buttonStyleProps = {
    width: "clamp(6rem, 20%,8rem)",
    borderRadius: "var(--bs-border-radius)",
    border: "2px solid var(--bs-border-color)",
    fontSize: "1.25rem"

}

const prevButton = {
    title: "Previous", style: {
        marginLeft: "auto",
        marginRight: "2rem",
        ...buttonStyleProps
    },

}
const nextButton = {
    title: "Next",
    style: {
        marginRight: "auto",
        ...buttonStyleProps
    }
}
export default App;
