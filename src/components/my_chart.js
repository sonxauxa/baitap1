import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    LineSeries,
    Title,
    Legend,
    ScatterSeries,
} from '@devexpress/dx-react-chart-material-ui';
import {
    symbol,
    symbolSquare,
    symbolDiamond,
    symbolCircle,
} from 'd3-shape'
import {withStyles} from '@material-ui/core/styles';
import {makeStyles} from "@material-ui/core";

const format = () => tick => tick;
const legendStyles = () => ({
    root: {
        display: 'flex',
        margin: 'auto',
        flexDirection: 'column',
    },
});
const legendLabelStyles = theme => ({
    label: {
        paddingTop: theme.spacing(1),
        whiteSpace: 'nowrap',
    },
});
const legendItemStyles = () => ({
    item: {
        flexDirection: 'row',
    },
});
const legendRootBase = ({classes, ...restProps}) => (
    <Legend.Root {...restProps} className={classes.root}/>
);
const legendLabelBase = ({classes, ...restProps}) => (
    <Legend.Label className={classes.label} {...restProps} />
);
const legendItemBase = ({classes, ...restProps}) => (
    <Legend.Item className={classes.item} {...restProps} />
);
const Root = withStyles(legendStyles, {name: 'LegendRoot'})(legendRootBase);
const Label = withStyles(legendLabelStyles, {name: 'LegendLabel'})(legendLabelBase);
const Item = withStyles(legendItemStyles, {name: 'LegendItem'})(legendItemBase);

const Point = (type, styles) => (props) => {
    const {
        arg, val, color,
    } = props;
    return (
        <path
            fill={color}
            transform={`translate(${arg} ${val})`}
            d={symbol().size([10 ** 2]).type(type)()}
            style={styles}
        />
    );
};
const DiamondPoint = Point(symbolDiamond, {
    stroke: 'white',
    strokeWidth: '1px',
});

const CrossPoint = Point(symbolSquare, {
    stroke: 'white',
    strokeWidth: '1px',
});

const StarPoint = Point(symbolCircle, {
    stroke: 'white',
    strokeWidth: '1px',
});

const LineWithDiamondPoint = props => (
    <React.Fragment>
        <LineSeries.Path {...props} />
        <ScatterSeries.Path {...props} pointComponent={DiamondPoint}/>
    </React.Fragment>
);

const LineWithCrossPoint = props => (
    <React.Fragment>
        <LineSeries.Path {...props} />
        <ScatterSeries.Path {...props} pointComponent={CrossPoint}/>
    </React.Fragment>
);

const LineWithStarPoint = (props) => {
    const {coordinates} = props;
    return (
        <React.Fragment>
            <LineSeries.Path {...props} coordinates={coordinates}/>
            <ScatterSeries.Path {...props} pointComponent={StarPoint}/>
        </React.Fragment>
    );
};

const ValueLabel = (props) => {
    const {text} = props;
    return (
        <ValueAxis.Label
            {...props}
            text={`${text}`}
        />
    );
};

const titleStyles = {
    title: {
        whiteSpace: 'pre',
    },
};
const TitleText = withStyles(titleStyles)(({classes, ...props}) => (
    <Title.Text {...props} className={classes.title}/>
));
const useStyles = makeStyles({
    root: {
        width: "100%",
        textAlign: "center"
    }
});
const useStyles1 = makeStyles(
    {
        root: {
        display: "flex",
        height: "100%",
        textAlign: "center",
        direction: "column",
        alignItems: "center",
        marginRight: '5px',
    }
});
const RootWithTitle = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h4>Date</h4>
        </div>
    );
};
const RootWithTitle1 = () => {
    const classes = useStyles1();
    return (
        <div className={classes.root}>
            <h4>Sales</h4>
        </div>
    );
};

export default function Demo1({items}) {
    const classes = useStyles();
    return (
        <Paper>
            <Chart
                data={items}
                className={classes.chart}
            >
                <ArgumentAxis tickFormat={format}/>
                <Legend position="left" rootComponent={RootWithTitle1}/>
                <ValueAxis
                    max={60}
                    labelComponent={ValueLabel}
                />
                <LineSeries
                    name="MyAmazon CA"
                    valueField="amazonCA"
                    argumentField="date"
                    seriesComponent={LineWithCrossPoint}
                    color="#6a1b9a"

                />
                <LineSeries
                    name="my shopify"
                    valueField="shopify"
                    argumentField="date"
                    seriesComponent={LineWithDiamondPoint}
                    color="#1565c0"
                />
                <LineSeries
                    name="test"
                    valueField="test"
                    argumentField="date"
                    seriesComponent={LineWithStarPoint}
                    color="#e65100"
                />
                <Legend position="bottom" rootComponent={RootWithTitle}/>
                <Legend position="right" rootComponent={Root} itemComponent={Item} labelComponent={Label}/>

                <Title
                    text={`My Chart`}
                    textComponent={TitleText}
                />
                {/*<Animation/>*/}
            </Chart>
        </Paper>
    );
}
