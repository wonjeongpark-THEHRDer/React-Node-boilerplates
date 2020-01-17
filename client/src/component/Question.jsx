import React, { Component, useState } from 'react'

class Question extends Component {
    state = {
        q1:'',
        q1c1:'',q1c2:'',q1c3:'',q1c4:'',
        q1a1:'',
      };
    
      componentDidMount() {
      }

    stateChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
        console.log(this.state)
      }

      
    questionSubmit = (e) => {
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
        }).then(function(data) {
            console.log(data)    
            if(data === "success"){
              console.log("Thanks for registering");  
            }
        }).catch(function(err) {
            console.log(err)
        });
    }

    render() {
        const {q1, q1c1, q1c2, q1c3, q1c4, q1a1} = this.state;
        return (
            <div>
                <h3>문제수정 - db연결 X, 문제 정해지면 유형 파악해서 진행</h3>
                <div>
                    <form onSubmit={this.questionSubmit} method='post'>
                        4지선다형<br />
                        <input type='text' value={q1} name='q1' onChange={this.stateChange} placeholder='문제'/>
                        <br />
                        보기
                        <br />
                        <input type='text' value={q1c1} name='q1c1' onChange={this.stateChange} placeholder='보기'/><input type='radio' value='q1c1' name='q1a1' onChange={this.stateChange}/>
                        <br />
                        <input type='text' value={q1c2} name='q1c2' onChange={this.stateChange} placeholder='보기'/><input type='radio' value='q1c2' name='q1a1' onChange={this.stateChange}/>
                        <br />
                        <input type='text' value={q1c3} name='q1c3' onChange={this.stateChange} placeholder='보기'/><input type='radio' value='q1c3' name='q1a1' onChange={this.stateChange}/>
                        <br />
                        <input type='text' value={q1c4} name='q1c4' onChange={this.stateChange} placeholder='보기'/><input type='radio' value='q1c4' name='q1a1' onChange={this.stateChange}/>
                    </form>
                </div>
            </div>
        )
    }
}



Question.defaultProps = {
    yearId: new Date().getFullYear()
  }

export default Question