import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Library from "./lecture03_book/Library";
import Clock from "./lecture04_clock/Clock";
import CommentList from "./lecture05_comment/CommentList";
import NotificationList from "./lecture06reservedNotifications/NotificationList";
import Accommodate from "./lecture07CustomHook/Accommodate";
import ConfirmButtonClass from "./lecture08ClickEvent/ConfirmButtonClass";
import ConfirmButtonFunction from "./lecture08ClickEvent/ConfirmButtonFunction";
import LandingPage from "./lecture09loginStateToolbar/LandingPage";
import AttendanceBook from "./lecture10useMapContent/AttendanceBook";
import Reservation from "./etc/Reservation";

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
);*/
/*

// button click event function component test
ReactDOM.render(
  <React.StrictMode>
    <ConfirmButtonFunction />
  </React.StrictMode>,
  document.getElementById("root")
);
*/

//식사 예약 및 방문객 수 체크
ReactDOM.render(
  <React.StrictMode>
    <Reservation />
  </React.StrictMode>,
  document.getElementById("root")
);

/*// map list output test
ReactDOM.render(
  <React.StrictMode>
    <AttendanceBook/>
  </React.StrictMode>,
  document.getElementById("root")
)*/


/*// login state toolbar test
ReactDOM.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
  document.getElementById("root")
);*/

/*// button event class component test
ReactDOM.render(
    <React.StrictMode>
      <ConfirmButtonClass />
    </React.StrictMode>,
    document.getElementById('root')
)*/

/*// 입장 인원 상태 관리  - 커스텀 훅
ReactDOM.render(
  <React.StrictMode>
    <Accommodate />
  </React.StrictMode>,
    document.getElementById('root')
)*/

/*//알림 메시지 출력
ReactDOM.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>,
  document.getElementById("root")
);*/

/*// 댓글 사용자 및 리스트 출력
ReactDOM.render(
    <React.StrictMode>
      <CommentList />
    </React.StrictMode>
    , document.getElementById('root')
)*/

/*// 1초 마다 Clock 컴포넌트를 업데이트
setInterval(() => {
  ReactDOM.render(
      <React.StrictMode>
        <Clock />
      </React.StrictMode>
      , document.getElementById('root')
  )
}, 1000)*/

 /*//lecture 03
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
