import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";

class Trucks extends Component {

  constructor(){
    super()
    this.state = {
      heading:[],
      data:[]
    }
  }
  
  componentDidMount() {
    const apiUrl = 'http://localhost/TmsId.Api/api/LafargeTms/getTrucks';
    fetch(apiUrl, {
      method: 'GET',
      headers:{
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
      .then((response) => response.json())
      .then((a) => {

        const result = Object.values(a.result);
        const arr = [];

        for(var i =0; i < result.length; i++){
          var subarray = [];
          for (const prop in result[i]) {
            subarray.push(result[i][prop]);
          }
          arr.push(subarray);
        }

        this.setState({data:arr, heading:["ID", "Created At", "Updated At", "Site Id", "Asset Id", "Registration Number", "Last Position Timestamp", "Lattitude", "Longitute", "Current Address"]})
      });
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Lafarge Trucks"
                category="Trucks"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {this.state.heading.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.data.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
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

export default Trucks;
