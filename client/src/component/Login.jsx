import React, { Component } from 'react'

class Login extends Component {
    state = {
        loginInfo: '',
        userCheck:[],
        studentIdPw:'',
        psCheck:[]
      };
      stateChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

      
      loginInfoSearch = async (e) => {
        e.preventDefault();
        let loginInfo = this.state.loginInfo
        await fetch("/userCheck/"+loginInfo)
                .then(response => {
                  response.json()
                        //   .then((res) => this.setState({ userCheck: [res] }))
                        .then(res=> console.log(res))
            })
      };

      setPassword = (e) => {
        e.preventDefault();
        const studentIdPw= this.state.studentIdPw
        const studentInfo = JSON.stringify(studentIdPw)
        console.log(studentIdPw)
        
        fetch("/setPassword/"+studentInfo, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
        }).then(
            function(res) {
            if (res.status >= 400) {
              throw new Error("Bad response from server");
            }
            return console.log(res)
        }).catch(function(err) {
            console.log(err)
        });
    }

    render() {
        const {loginInfo, userCheck, studentIdPw} = this.state;
        return (
            <div>
                userCheck
                <br/>
                20200001_1000000001
                <br/>
                <form onSubmit={this.loginInfoSearch} method='get'>
                    <input type="text" value={loginInfo} name="loginInfo" placeholder="loginInfo" onChange={this.stateChange} required/>
                    <button className="submitBtn" type="submit">검색</button>
                </form> 
                <br />
                {userCheck
              ? userCheck
              .map(c => {
                  return (
                    <div key={c.msg}>
                      <div>{c.msg} </div>
                       
                    </div>
                  )})
              : "서버통신 에러"}
                <br/>
                비밀번호설정 20200001_1012345678
                        <br/>
                <form onSubmit={this.setPassword} method='post'>
                    <input type="text" value={studentIdPw} name="studentIdPw" placeholder="studentIdPw" onChange={this.stateChange} required/>
                    <button className="submitBtn" type="submit">검색</button>
                </form>
            </div>
        )
    }
}
export default Login
