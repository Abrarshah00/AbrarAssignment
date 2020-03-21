import React, { Component } from 'react'
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import MomentUtils from '@date-io/moment';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Four from './four';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import TextField from '@material-ui/core/TextField';
import { Card } from '@material-ui/core';

function TabPanel(props) {
    const { data, children, value, index, ...other } = props;
    console.log('data List', data)
    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            style={{
                backgroundColor: '#F1F1F1',


            }}
        >

            <div style={{ display: 'flex', alignItems: 'center', paddingTop: '10px', marginLeft: '20px' }}>
                <SearchIcon fontSize='small' style={{ top: '5px' }} />
                <Input placeholder='Search by Product name..' style={{ width: '250px', marginLeft: '10px' }} />
            </div>

            {value === index && <Box p={3}>{data.map((item) => {
                return (
                    <Four data={item} />
                )
            })}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};



class Three extends Component {
    constructor(props) {
        super(props);
        console.log('google', this.props)
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            tab: 0,
        }
    }



    onChangeStartDate = (date) => {
        this.setState({
            startDate: date.format("YYYY-MM-DD"),
        })
    }

    onChangeEndDate = (date) => {
        this.setState({
            endDate: date.format("YYYY-MM-DD"),
        })
    }

    handleChange = (event, newValue) => {
        this.setState({
            tab: newValue
        })
    };

    handleDropdown = () => {

    }


    render() {
        return (

            <React.Fragment>
                    <div >
                        <Grid container spacing={3} style={{ marginLeft: "20px"}}>
                            <Grid item xs={2}>
                                <FormControl style={{ width: "100%", alignSelf: 'center', marginTop: "15px"}}>
                                    <InputLabel id="demo-simple-select-label">Photoshoot Phase</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={this.state.menu}
                                        onChange={this.handleDropdown()}
                                    >
                                    <MenuItem value={10}>Posted</MenuItem>
                                    <hr></hr>
                                    <MenuItem value={20}>Applied</MenuItem>
                                    <hr></hr>
                                    <MenuItem value={30}>Confirmed</MenuItem>
                                    <hr></hr>
                                    <MenuItem value={30}>Cancelled</MenuItem>
                                    <hr></hr>
                                    <MenuItem value={30}>Postponed</MenuItem>
                                    <hr></hr>
                                    <MenuItem value={30}>PhotoShoot Done</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <MuiPickersUtilsProvider utils={MomentUtils}>
                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <div style={{ width: '35%' }}>
                                            <KeyboardDatePicker
                                                disableToolbar
                                                variant="inline"
                                                format="YYYY-MM-DD"
                                                margin="normal"
                                                id="date-picker-inline"
                                                label="From Date"
                                                value={this.state.startDate}
                                                onChange={this.onChangeStartDate}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />
                                        </div>
                                        <div style={{ width: "10%", minWidth: '70px', marginTop: "20px", display: 'flex', height: "40px", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontSize: '10px', boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                                            <div>01</div>
                                            <div>Month</div>
                                        </div>
                                        <div style={{ width: '35%' }}>
                                            <KeyboardDatePicker
                                                disableToolbar
                                                variant="inline"
                                                format="YYYY-MM-DD"
                                                margin="normal"
                                                id="date-picker-inline"
                                                label="From Date"
                                                value={this.state.endDate}
                                                onChange={this.onChangeEndDate}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />
                                        </div>
                                    </div>
                                </MuiPickersUtilsProvider>
                            </Grid>
          
                        </Grid>
                        <div style={{ marginTop: "20px" }}>
                            <Tabs value={this.state.tab} onChange={this.handleChange} aria-label="simple tabs example">
                                <Tab label={`Product Photoshoot`} style={{ fontSize: '10px' }} />
                                <Tab label={`Product Videography`} style={{ fontSize: '10px' }} />
                            </Tabs>
                            <TabPanel value={this.state.tab} index={0} data={this.props.productPhotoShootData}>
                                Item One
                            </TabPanel>
                        </div>
                    </div>
                    
        

            </React.Fragment>
        )
    }
}

export default Three;