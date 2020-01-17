import React, { Component } from "react";

class Database extends Component {
  state = {
    studentList: [],
    studentId: "",
    studentName: "",
    studentSearchId: "",
  };

  componentDidMount() {
  }

  studentSearch = async (e) => {
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
  
  stateChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

  studentSubmit = (e) => {
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
    const {studentId, studentName, studentSearchId} = this.state;
    return (
      
          <div>
            <br />
            <div>추가 : 학번 8자리 숫자 유효성 테스트</div>
            <br />
              <div>excel to json n firestore 등록 - 기능완료</div>
              <form action="/convert" method="post" encType="multipart/form-data">
                  <input type="file" name="xlsx" />
                  <input type="submit" />
              </form>
              <br />
              <div>student 등록하기 - 기능완료</div>
              <form onSubmit={this.studentSubmit} method='post'>
                <input type="text" value={studentId} name="studentId" placeholder="studentId" onChange={this.stateChange} required/>
                <input type="text" value={studentName} name="studentName" placeholder="studentName" onChange={this.stateChange} required/>
                <button className="submitBtn" type="submit">등록</button>
              </form>
              <br />
              <div>student 검색하기 - 기능완료</div>
              <form onSubmit={this.studentSearch} method='get'>
              <input type="text" value={studentSearchId} name="studentSearchId" placeholder="studentSearchId" onChange={this.stateChange} required/>
              <button className="submitBtn" type="submit">검색</button>
              </form>    
             <div>
               {this.state.studentList
              ? this.state.studentList
              .map(c => {
                  return (
                    <div key={c.studentId}>
                      <div>{c.college} {c.department} {c.studentName}</div>
                      <div>{c.studentId} {c.phoneNumber}</div>
                    </div>
                  )})
              : "찾으시는 학생이 없습니다.(등록폼 보이게)"}</div>
          </div>
    );
  }
}


Database.defaultProps = {
  yearId: new Date().getFullYear()
}

export default Database;
