import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { MainLogo , Photoshoot , Dashboard } from '../image';



class One extends Component {
  render() {
    return (
        <React.Fragment>
            <div style = {{ paddingLeft : '5px'}}>
              <div style = {{ paddingLeft : '20px',display: 'flex', flexDirection: 'row'}}>
                <div style={{fontSize: '20px' ,marginTop : '20px', marginBottom : '10px', marginRight: '15px', color: "white",  }} >P</div>
                <img src={MainLogo()} style={{height: '15px' , width : '80px' , marginTop : '30px'}}></img>
              </div>
              <div style = {{ paddingLeft : '20px',display: 'flex', flexDirection: 'row'}}>
                <img src={Dashboard()} style={{height: '20px' , width : '20px' ,marginTop : '20px' ,marginBottom : '20px' , marginRight: '15px'}}/>
                <div style={{height: '20px' , width : '20px' ,marginTop : '20px' ,marginBottom : '20px' , color: 'white' , textAlign : 'left' ,font: 'Medium 14px/19px Roboto' ,letterSpacing: 0,opacity: '1' }}>Dashboard</div>
              </div>
              <div style = {{ paddingLeft : '20px',display: 'flex', flexDirection: 'row'}}>
                <img src={Photoshoot()} style={{height: '20px' , width : '20px' ,marginTop : '20px', marginBottom : '20px', marginRight: '15px' }}/>
                <div style={{height: '20px' , width : '20px' ,marginTop : '20px', marginBottom : '20px' , color: 'white' , textAlign : 'left' ,font: 'Medium 14px/19px Roboto' ,letterSpacing: 0,opacity: '1' }}>Photoshoot</div>
              </div>
            </div>
        </React.Fragment>
    );
  }
}

export default One;
