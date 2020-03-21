import React, { Component } from "react";
import Three from "./three";
import One from "./one";
import Two from "./two";
import Four from "./four";
import { connect } from 'react-redux';
import  Grid from '@material-ui/core/Grid';

class Main extends Component {

  componentDidMount(){
    console.log("this.props" , this.props)
  }
  render() {
    return (
        <React.Fragment>
          <Grid container>
            <Grid item xs={3} style = {{ backgroundColor : '#282461' , width : '169px', position : 'absolute' , bottom : 0 , top : 0 , left : 0}}>
              <One></One>
            </Grid>
            <Grid item xs={12} style = {{ marginLeft : '169px'}}>
              <Two data={this.props.data.navBar}/>
              <Three parentData={this.props.data.parentData} productPhotoShootData={this.props.data.productPhotoShootData}/>
            </Grid>
          </Grid>
        </React.Fragment>
    );
  }
}

const mapStateToProps = state => (
  {data : state.data}
)

export default connect(mapStateToProps)(Main);
