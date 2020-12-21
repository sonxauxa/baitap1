import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import {Container} from "@material-ui/core";
import ShowChartIcon from '@material-ui/icons/ShowChart';
import axios from "axios";
import MyTable from "./my_table";
// import ChartSale from "./sales_chart2";

const URL2 = "http://127.0.0.1:8000/item1/";
const URL = "http://127.0.0.1:8000/item123/";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dateStyle: {
        display: "flex",
        direction: "row",
    },
    dateColorStyle: {
        backgroundColor: "white",
    }
}));

export default function DatePickers() {
    const classes = useStyles();
    const [items, setItems] = useState([]);
    const [date1, setDate1] = useState("")
    const [date2, setDate2] = useState("")

    const handleDate = (event) => {
        setDate1(event.target.value)
        console.log(date1)
    }
    const handleDate2 = (event) => {
        setDate2(event.target.value)
        console.log(date2)
    }
    const data = {
        'date1': date1,
        'date2': date2
    }
    const fetchItem = async () => {
        const item = await fetch(URL);
        const data = await item.json();
        setItems(data);
        console.log(data)
    }
    useEffect(() => {
        fetchItem(URL).then(res => {
            console.log(res)
        })
    }, []);
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post(URL2, data).then(res => {
                setItems(res.data)
                console.log(res.data);
            }
        ).catch((error) => {
                console.error('error', error.data)
            }
        )
    };
    return (
        <div className={classes.dateColorStyle}>
            <h1><span><ShowChartIcon color="black"/></span>Report: Sale by Time Period</h1>
            <div className={classes.dateStyle}>
                <div>
                    <span>Starting Order Date</span>
                    <form className={classes.container} noValidate>
                        <TextField
                            id="date1"
                            type="date"
                            defaultValue="2017-05-24"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handleDate}
                        />
                        <TextField
                            id="date2"
                            type="date"
                            defaultValue="2017-05-24"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handleDate2}
                        />
                    </form>
                    <button onClick={handleSubmit}
                    >click
                    </button>
                </div>
            </div>
            <div>
                <MyTable items={items}/>
            </div>
            {/*<div>*/}
            {/*    <ChartSale items={items}/>*/}
            {/*</div>*/}
        </div>
    );
}
