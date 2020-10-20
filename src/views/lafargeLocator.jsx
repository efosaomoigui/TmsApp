import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import { Card, FormGroup} from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";


class lafargeLocator extends Component {

  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.findLocationByDriver = this.findLocationByDriver.bind(this);
    this.findLocationByAsset = this.findLocationByAsset.bind(this);
    this.findDistance = this.findDistance.bind(this);

    this.state = {
      dAssetId: '',
      dLongitude: '',
      dLatitude: '',
      xDriver:'',
      xAssetId:'',
      address:'',
      point:'',
      Timestamp:'',
      distance:''
    };

  }

  handleChange(event) 
  {
    this.setState({value: event.target.value});
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  findLocationByDriver()
  {
    const requestOptions = {
      method: 'POST',
      headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer my-token',
          'My-Custom-Header': ''
      },
      body: JSON.stringify({ DriverId:this.state.xDriver, AssetId: this.state.xAssetId})
  };
  fetch('http://localhost/TmsId.Api/api/LafargeTms/getTruckLocationByDriver', requestOptions)
      .then(async response => {
          const data = await response.json();

          // check for error response
          if (!response.ok) {
              // get error message from body or default to response status
              const error = (data && data.result) || response.status;
              return Promise.reject(error);
          }
          
          if(data.result != null){
            this.setState({ address: data.result.currentAddress, point: data.result.longitude+','+data.result.latitude, Timestamp: data.result.timeStamp });
          }else{
            this.setState({ address: "Not Found!", point: "Not Found!", Timestamp: "Not Found!" });
          }
      })
      .catch(error => {
          this.setState({ errorMessage: error.toString() });
          console.error('There was an error!', error);
      });
  }

  findLocationByAsset()
  {
    const requestOptions = {
      method: 'POST',
      headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer my-token',
          'My-Custom-Header': 'foobar'
      },
      body: JSON.stringify({ DriverId:this.state.xDriver, AssetId: this.state.xAssetId})
  };
  fetch('http://localhost/TmsId.Api/api/LafargeTms/getTruckLocationByAsset', requestOptions)
      .then(async response => {
          const data = await response.json();

          // check for error response
          if (!response.ok) {
              // get error message from body or default to response status
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
          }

          if(data.result != null){
            this.setState({ address: data.result.currentAddress, point: data.result.longitude+','+data.result.latitude, Timestamp: data.result.timeStamp });
          }else{
            this.setState({ address: "Not Found!", point: "Not Found!", Timestamp: "Not Found!" });
          }
      })
      .catch(error => {
          this.setState({ errorMessage: error.toString() });
          console.error('There was an error!', error);
      });
  }

  findDistance()
  {
    const requestOptions = {
      method: 'POST',
      headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer my-token',
          'My-Custom-Header': ''
      },
      body: JSON.stringify({ Longitute:parseFloat(this.state.dLongitude), Latitude: parseFloat(this.state.dLatitude), AssetId: this.state.dAssetId})
  };
  fetch('http://localhost/TmsId.Api/api/LafargeTms/distanceInKm', requestOptions)
      .then(async response => {
          const data = await response.json();

          // check for error response
          if (!response.ok) {
              // get error message from body or default to response status
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
          }

          this.setState({ distance: data.toFixed(2)+"Km"})
      })
      .catch(error => {
          this.setState({ errorMessage: error.toString() });
          console.error('There was an error!', error);
      });
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={5}>
              <Card
                title="Locate Distance"
                category="Find distance by using point (Long, Lat)"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <div className="content">
                  <form>
                    <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Longitude",
                          type: "text",
                          name:"dLongitude",
                          bsClass: "form-control",
                          onChange:this.handleChange
                        }
                      ]}
                    />

<FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Latitude",
                          type: "text",
                          name:"dLatitude",
                          bsClass: "form-control",
                          onChange:this.handleChange
                        }
                      ]}
                    />

<FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Asset ID",
                          type: "text",
                          name:"dAssetId",
                          bsClass: "form-control",
                          onChange: this.handleChange
                        }
                      ]}
                    />
                    
                    <Button name="bot3" bsStyle="danger" pullRight fill type="button" onClick={this.findDistance}>
                      Get Distance
                    </Button>
					
                    <div className="clearfix" />
                    
                  </form>
                  </div>
                }
              />
            </Col>
            <Col md={6}>
            <Card
                title={`Distance of Truck Asset ID: (${this.state.dAssetId}) from Point (${this.state.dLongitude},${this.state.dLatitude})`}
                category=""
                ctTableFullWidth
                ctTableResponsive
                onChange={this.handleChange}
                content={
                  <Table hover>
                    <thead>
                      <tr>
                          <th>Distance From (Long/lat)</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                <td>{this.state.distance}</td>
                      </tr>
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>

          <Row>
            <Col md={5}>
              <Card
                title="Find Location"
                category="Location by Asset & Driver"
                ctTableFullWidth
                ctTableResponsive
                  content={
                    <div className="content">
                    <form>
                      <FormInputs
                        ncols={["col-md-12"]}
                        properties={[
                          {
                            label: "Truck/Asset",
                            name:"xAssetId",
                            type: "text",
                            id:"xDriver",
                            bsClass: "form-control",
                            onChange:this.handleChange
                          }
                        ]}
                      />
  
  <FormInputs
                        ncols={["col-md-12"]}
                        properties={[
                          {
                            label: "driver",
                            name:"xDriver",
                            id:"xDriver",
                            type: "text",
                            bsClass: "form-control",
                            onChange:this.handleChange
                          }
                        ]}
                      />

                      <Button name="Bot1" bsStyle="success" pullRight fill type="button" onClick={this.findLocationByAsset}>
                        Find Location By Asset
                      </Button>
                      &nbsp;
                      <Button name="Bot2" bsStyle="danger"  fill type="button" onClick={this.findLocationByDriver}>
                        Find Location By Driver
                      </Button>
            
                      <div className="clearfix" />
                      
                    </form>
                    </div>
                  }
              />
            </Col>
            <Col md={6}>
              <Card
                title="Location"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table hover>
                    <thead>
                      <tr>
                          <th>Address</th>
                          <th>Point (Long,Lat)</th>
                          <th>Timestamp</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                <td>{this.state.address}</td>
                <td>{this.state.point}</td>
                <td>{this.state.Timestamp}</td>
                      </tr>
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>

        </Grid>
      </div>
    );
  }
}

export default lafargeLocator;
