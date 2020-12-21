// import React from 'react';
import {makeStyles} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// import createPalette from "@material-ui/core/styles/createPalette";
// import DatePickers from "./date_item";


// const fetchData = () => new Promise(resolve => {
//     const items = [
//         {
//             id: 1,
//             date: new Date("2020-12-1"),
//             amazonCA: 10.0,
//             shopify: 20.0,
//             test: 19.0,
//         },
//         {
//             id: 2,
//             date: new Date("2020-12-2"),
//             amazonCA: 10.0,
//             shopify: 20.0,
//             test: 19.0,
//         },
//         {
//             id: 3,
//             date: new Date("2020-12-3"),
//             amazonCA: 10.0,
//             shopify: 20.0,
//             test: 19.0,
//         },
//         {
//             id: 4,
//             date: new Date("2020-12-1"),
//             amazonCA: 10.0,
//             shopify: 20.0,
//             test: 19.0,
//         },
//         {
//             id: 5,
//             date: new Date("2020-12-4"),
//             amazonCA: 10.0,
//             shopify: 20.0,
//             test: 19.0,
//         },
//         {
//             id: 6,
//             date: new Date("2020-12-5"),
//             amazonCA: 10.0,
//             shopify: 20.0,
//             test: 19.0,
//         }, {
//             id: 7,
//             date: new Date("2020-12-6"),
//             amazonCA: 10.0,
//             shopify: 20.0,
//             test: 19.0,
//         },
//         {
//             id: 8,
//             date: new Date("2020-12-7"),
//             amazonCA: 10.0,
//             shopify: 20.0,
//             test: 19.0,
//         },
//         {
//             id: 9,
//             date: new Date("2020-12-8"),
//             amazonCA: 10.0,
//             shopify: 20.0,
//             test: 19.0,
//         },
//         {
//             id: 10,
//             date: new Date("2020-12-9"),
//             amazonCA: 10.0,
//             shopify: 20.0,
//             test: 19.0,
//         }, {
//             id: 11,
//             date: new Date("2020-12-10"),
//             amazonCA: 10.0,
//             shopify: 20.0,
//             test: 19.0,
//         }, {
//             id: 12,
//             date: new Date("2020-12-11"),
//             amazonCA: 10.0,
//             shopify: 20.0,
//             test: 19.0,
//         }, {
//             id: 13,
//             date: new Date("2020-12-12"),
//             amazonCA: 10.0,
//             shopify: 20.0,
//             test: 19.0,
//         }, {
//             id: 14,
//             date: new Date("2020-12-13"),
//             amazonCA: 10.0,
//             shopify: 20.0,
//             test: 19.0,
//         },
//         {
//             id: 15,
//             date: new Date("2020-12-14"),
//             amazonCA: 10.0,
//             shopify: 20.0,
//             test: 19.0,
//         },
//         {
//             id: 16,
//             date: new Date("2020-12-15"),
//             amazonCA: 10.0,
//             shopify: 20.0,
//             test: 19.0,
//         },
//         {
//             id: 17,
//             date: new Date("2020-12-16"),
//             amazonCA: 10.0,
//             shopify: 20.0,
//             test: 19.0,
//         },
//     ];
//     setTimeout(() => resolve(items), 1000);
// });
const usePaperStyle = makeStyles(theme => ({
    root: {
        margin: theme.spacing(2)
    }
}));

export default function MyTable({items}) {
    const classes = usePaperStyle();
    return (
        <Paper className={classes.root}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Amazon Ca</TableCell>
                        <TableCell>Shopify</TableCell>
                        <TableCell>Test</TableCell>
                        <TableCell>Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map(item => {
                        const total = item.test + item.shopify + item.amazonCA;
                        return (
                            <TableRow key={item.id}>
                                <TableCell>{item.date.toLocaleString()}</TableCell>
                                <TableCell>{item.amazonCA}</TableCell>
                                <TableCell>{item.shopify}</TableCell>
                                <TableCell>{item.test}</TableCell>
                                <TableCell>{total}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
};