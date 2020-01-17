import React, {useState} from 'react';
import "./App.css";
import Database from './component/Database'
import Login from './component/Login'

const App = () => {
  const year = new Date().getFullYear()
  const [yearId, setyear] = useState(year)
  // year 설정메뉴, 설정하고 데이터 변경 버튼 추가해야함 or props 변경시에만 reset하는 lifecyle을 자식컴포넌트에 추가?
  return (
    <div>
        <h2>웹 전용은 props 전달</h2>
        <Database yearId={yearId}/>
        <h2>앱 전용은 year을 현재 year로 처리</h2>
        <Login />
    </div>
  );
};

export default App;

