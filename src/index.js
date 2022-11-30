import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from "./lecture03_book/Library";
import Clock from "./lecture04_clock/Clock";
import CommentList from "./lecture05_comment/CommentList";

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
);*/

ReactDOM.render(
    <React.StrictMode>
      <CommentList />
    </React.StrictMode>
    , document.getElementById('root')
)

/*// 1초 마다 Clock 컴포넌트를 업데이트
setInterval(() => {
  ReactDOM.render(
      <React.StrictMode>
        <Clock />
      </React.StrictMode>
      , document.getElementById('root')
  )
}, 1000)*/

/* lecture 03
ReactDOM.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
