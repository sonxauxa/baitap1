import {makeStyles} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import React, {useState} from "react";
import TablePagination from "@material-ui/core/TablePagination";

const usePaperStyle = makeStyles(theme => ({
    root: {
        margin: theme.spacing(2)
    }
}));

export default function MyTable({items}) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRows] = useState(5);
    const handleChangePage = (event, new_page) => {
        setPage(new_page)
    }
    const handleChangeRowsPerPage = (event) => {
        setRows(+event.target.value);
        setPage(0);
    };
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
                    {items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(item => {
                        const total = item.test + item.shopify + item.amazonCA;
                        return (
                            <TableRow key={item.id}>
                                <TableCell>{item.date.toLocaleString()}</TableCell>
                                <TableCell>${item.amazonCA}</TableCell>
                                <TableCell>${item.shopify}</TableCell>
                                <TableCell>${item.test}</TableCell>
                                <TableCell>${total}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 20]}
                component="div"
                count={items.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
};