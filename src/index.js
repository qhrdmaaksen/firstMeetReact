import React from "react";
import ReactDOM from "react-dom/client";
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
import FruitSelect from "./etc/FruitSelect";
import RequestForm from "./etc/RequestForm";
import SignUp from "./lecture11useInfoInput/SignUp";
import TemperatureInput from "./lecture12temperatureWater/TemperatureInput";
import CalculatorTemperature from "./lecture12temperatureWater/CalculatorTemperature";
import SignUpDialog from "./etc/children_dialog/SignUpDialog";
import ProfileCard from "./lecture13Card/ProfileCard";
import DarkOrLight from "./lecture14Context/DarkOrLight";
import StyledComponentPropsButtonColorChange from "./etc/StyledComponentPropsButtonColorChange";
import Blocks from "./lecture15styledComponent/Blocks";

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

// styled component blocks test
const root = document.getElementById('root')
ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Blocks />
    </React.StrictMode>
)

/*// theme change test
const root = document.getElementById('root')
ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <StyledComponentPropsButtonColorChange />
    </React.StrictMode>
)*/

/*// theme change test
const root = document.getElementById('root')
ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <DarkOrLight />
    </React.StrictMode>
)*/


/*// Context ????????? ?????? ??????
ReactDOM.render(
    <React.StrictMode>
      <DarkOrLight />
    </React.StrictMode>
    , document.getElementById('root')
)*/

/*// ?????? ???????????????
ReactDOM.render(
    <React.StrictMode>
      <ProfileCard/>
    </React.StrictMode>
    , document.getElementById('root')
)*/

/*// props chain children dialog
ReactDOM.render(
  <React.StrictMode>
    <SignUpDialog/>
  </React.StrictMode>,
  document.getElementById("root")
);*/

/*// ????????? ????????? ?????? ?????? ?????? ????????? ???????????? ????????????
ReactDOM.render(
    <React.StrictMode>
      <CalculatorTemperature />
    </React.StrictMode>
    , document.getElementById('root')
)*/

/*// ????????? ?????? ?????? ????????????
ReactDOM.render(
    <React.StrictMode>
      <SignUp />
    </React.StrictMode>
    , document.getElementById('root')
)*/

/*// ???????????? ????????? ?????? ????????????
ReactDOM.render(
    <React.StrictMode>
      <RequestForm />
    </React.StrictMode>
    , document.getElementById('root')
)*/

/*// ?????? ?????? ????????????
ReactDOM.render(
    <React.StrictMode>
      <FruitSelect />
    </React.StrictMode>
    , document.getElementById("root")
)*/

/*//?????? ?????? ??? ????????? ??? ??????
ReactDOM.render(
  <React.StrictMode>
    <Reservation />
  </React.StrictMode>,
  document.getElementById("root")
);*/

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

/*// ?????? ?????? ?????? ??????  - ????????? ???
ReactDOM.render(
  <React.StrictMode>
    <Accommodate />
  </React.StrictMode>,
    document.getElementById('root')
)*/

/*//?????? ????????? ??????
ReactDOM.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>,
  document.getElementById("root")
);*/

/*// ?????? ????????? ??? ????????? ??????
ReactDOM.render(
    <React.StrictMode>
      <CommentList />
    </React.StrictMode>
    , document.getElementById('root')
)*/

/*// 1??? ?????? Clock ??????????????? ????????????
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
