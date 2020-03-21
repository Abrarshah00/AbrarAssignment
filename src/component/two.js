import React, { Component } from "react";
import { Notification } from '../image';
import { Icon } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

class Two extends Component {
  render() {
    return (
      <React.Fragment>
        <div style = {{ display : 'flex' , flexDirection : 'row' , justifyContent : 'space-between' , height : '60px' , paddingTop : '12px' , paddingLeft : '18px ', paddingRight : "22px"}}>
            <div>
                <div style={{ fontSize :'26px',fontWeight : 'bold'}}>Photoshoot</div>
                <div style={{ fontSize :'19px',color : '#8D8D8D' ,  }}>Home > Dashboard > Photoshoot</div>
            </div>
            <div style={{ flexDirection : 'row' , display : 'flex'}}>
                <div style = {{ height : '39px', width: '39px' ,borderRadius : '20px' , backgroundColor : '#F2F2F2' , display : 'flex' , justifyContent : 'center' , alignItems : 'center', marginRight : '15px'}}>
                    <img src = { Notification() } style= {{ height : '14px' , width : '11px'}}></img>       
                </div>
                <div style = {{ height : '39px' , width :'39px' , borderRadius : '20px' , backgroundColor : '#F2F2F2' , display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}>
                    <PersonIcon></PersonIcon>
                </div>
                <div style = {{display : 'flex' , flexDirection: 'row', justifyContent : 'center' , alignItems : 'center' , height : '39px' , marginLeft : '12px' }}>
                    <div>{this.props.data.user_name}</div>
                    <ArrowDropDownIcon></ArrowDropDownIcon>
                </div>
            </div>
        </div>
        <hr style={{ color : 'grey' ,opacity : '0.4'}}></hr>
      </React.Fragment>
    );
  }
}

export default Two;
