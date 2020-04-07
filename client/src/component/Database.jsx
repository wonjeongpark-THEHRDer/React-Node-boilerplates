import React, { Component } from "react";

class Database extends Component {
  state = {
  };
  componentDidMount(){
    this.serverTest()
  }

  getFetchEX = async (e) => {
    e.preventDefault();
    let yearId = this.props.yearId
    let studentSearchId = this.state.studentSearchId
    let searchQuery = '?studentSearchId='+studentSearchId+'&yearId='+yearId
    await fetch("/userSearch"+searchQuery)
            .then(response => {
              response.json()
                      .then((res) => this.setState({ studentList: [res] }))
        })

  };
  
  serverTest(){
    fetch("/hello")
            .then(response => {
              response.json()
                      .then(res => console.log(res))
        })
  }

  stateChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

  postFetchEX = (e) => {
        e.preventDefault();
        const yearId= this.props.yearId
        const insertQuery = '?yearId='+yearId

        const data = 
            {
            studentId: this.state.studentId,
            studentName: this.state.studentName,
            } 
        console.log(data)
        
        fetch("/userInsert"+insertQuery, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(
            function(res) {
            if (res.status >= 400) {
              throw new Error("Bad response from server");
            }
            return res.json();
        }).catch(function(err) {
            console.log(err)
        });
    }

  render() {
    return (  
          <h3>fetch example</h3>
    );
  }
}


export default Database;
