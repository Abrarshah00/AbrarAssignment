import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import EditIcon from '@material-ui/icons/Edit';
import Link from '@material-ui/core/Link'
import { FileIcon } from '../image';
import Grid from '@material-ui/core/Grid';


class Four extends Component {
  constructor(props){
    super(props);
    this.state={
      showDetails: false
    }
  }
  componentDidMount(){
    console.log("google", this.props.data)
  } 

  render() {
    return (
      <React.Fragment>
                <Card style={{ marginTop: "20px", padding: "15px" }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div> 
                                <div style={{ fontSize: '16px', fontWeight: '700'}}>{this.props.data.title}</div>
                                <div  style={{ fontSize: '13px', color:"#8D8D8D"}}>{this.props.data.type}</div>
                            </div>
                            <div style={{ fontSize: '10px', backgroundColor:"#C1C1C1", height: "14px", marginLeft: '5px', padding: '3px'}}>{this.props.data.id}</div>
                        </div>
                        <div>
                            <EditIcon />
                        </div>
                    </div>
                    <Grid container style={{ marginTop: '20px'}}>
                        <Grid item xs={2}>
                            <div style={{ fontWeight: '600', fontSize:"14px"}}>$ {this.props.data.billingAmount}</div>
                            <div style={{ color:"#8D8D8D", fontSize:"14px"}}>Biiling Amount</div>
                        </Grid>
                        <Grid item xs={2}>
                            <div style={{ fontWeight: '600', fontSize:"14px"}}>{this.props.data.category}</div>
                            <div style={{ color:"#8D8D8D", fontSize:"14px"}}>category</div>
                        </Grid>
                        <Grid item xs={2}>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <div style={{ fontWeight: '600', fontSize:"14px"}}>{this.props.data.product.name}</div>
                                <div style={{ fontWeight: '600', fontSize:"14px", backgroundColor:"#F8C245", marginLeft: '8px', textAlign: 'center', padding: "2px" }}>{this.props.data.product.type}</div>
                            </div>
                            <div style={{ color:"#8D8D8D", fontSize:"14px"}}>Product</div>
                        </Grid>
                        <Grid item xs={2}>
                            <div style={{ fontWeight: '600', fontSize:"14px"}}>{this.props.data.shootDateAndTime}</div>
                            <div style={{ color:"#8D8D8D", fontSize:"14px"}}>Shoot Date And Time</div>
                        </Grid>
                        <Grid item xs={1}>
                            <div style={{ fontWeight: '600', fontSize:"14px"}}>{this.props.data.location}</div>
                            <div style={{ color:"#8D8D8D", fontSize:"14px"}}>Location</div>
                        </Grid>
                        <Grid item xs={1}>
                            <div style={{ fontWeight: '600', fontSize:"14px"}}>{this.props.data.status}</div>
                            <div style={{ color:"#8D8D8D", fontSize:"14px"}}>Status</div>
                        </Grid>
                        <Grid item xs={1}>
                            <div style={{ fontWeight: '600', fontSize:"14px"}}>{this.props.data.status}</div>
                            <div style={{ color:"#8D8D8D", fontSize:"14px"}}>Approval Status</div>
                        </Grid>
                        <Grid item xs={1}>
                            <div style={{ fontWeight: '600', fontSize:"14px"}}>{this.props.data.rating}/10</div>
                            <div style={{ color:"#8D8D8D", fontSize:"14px"}}>Rating</div>
                        </Grid>

                    </Grid>
                    {this.state.showDetails ?
                    <div style={{ marginTop: "40px"}}>
                      <Grid container spacing={2} >
                        <Grid item xs={4}>
                          <div style={{ fontSize:"14px", fontWeight:'600'}}>
                            POC Contact Details
                          </div>
                          <hr style={{ width: "70%", float: 'left'}}/>
                          <br></br>
                          <div style={{ fontSize:"14px", fontWeight:'600'}}>{this.props.data.pocContact.name}</div>
                          <div style={{ fontSize:"14px", fontWeight:'600', color: '#8D8D8D'}}>{this.props.data.pocContact.phone}</div>
                          <div style={{ marginTop: '5px', border: "1px solid #F1F1F1",width: '25%', textAlign: 'center', padding: "5px", backgroundColor: '#F1F1F1', color: "#8D8D8D"}}> Reimbusement</div>
                        </Grid>
                        <Grid item xs={4}>
                          <div style={{border: "1px solid #F1F1F1", backgroundColor: '#F1F1F1', padding: "30px 10px 40px 20px", marginRight: "20px"}}>
                            <div style={{ fontSize:"14px", fontWeight:'600'}}>Address</div>
                            <div style={{ fontSize:"14px", fontWeight:'600'}}>{this.props.data.address}</div>
                            <Link href="#">
                              View Google Map Location
                            </Link>
                          </div>
                        </Grid>
                        <Grid item xs={4}>
                          <div style={{border: "1px solid #F1F1F1", backgroundColor: '#F1F1F1', padding: "25px 10px 30px 20px", marginRight: "20px"}}>
                            <div style={{ display: "flex", flexDirection: 'row'}}>
                              <img src={FileIcon()} style={{ height: "80px", width: '100px' }}/>
                              <div style={{ padding: "20px"}}>
                                <div style={{ fontSize:"14px", fontWeight:'600'}}>All Photoshoot</div>
                                <Link href="#">
                                  Click here to open folder
                                </Link>
                              </div>
                            </div>
                          </div>

                        </Grid>
                      </Grid>
                      <div style={{ marginTop: "40px", marginBottom: "30px"}}>
                        <div style={{ fontSize: "14px", fontWeight: '600'}}>Comments</div>
                        <hr/>
                        <p style={{ fontSize: "12px",  fontWeight: '500'}}>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                      </div>
                      </div>
                      :
                      null
                    }
                    <hr style={{marginTop: "30px"}}/>
                    <div style={{ display: 'flex', justifyContent: "center"}}>
                        <div onClick={() => {this.setState({ showDetails: !this.state.showDetails})}} style={{ fontSize: '14px', color:'#8D8D8D', cursor: 'pointer'}}>
                            { this.state.showDetails ? "View Less" : "View More" }
                        </div>
                    </div>
                </Card>
            </React.Fragment>
    );
  }
}

export default Four;
