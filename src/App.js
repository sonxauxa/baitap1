import React from "react";
import './App.css';
// import DatePickers from "./components/date_item";
import DatePickers from "./components/bai1_test";
import {Container} from "@material-ui/core";

// import LinearWithValueLabel from "./components/current_process";

function App() {
    return (
        <Container maxWidth='lg'>
            <DatePickers/>
        </Container>
    );
}

export default App;
