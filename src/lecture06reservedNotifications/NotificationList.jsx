import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
  {
    id: 1,
    message: "안녕하세요, 오늘 일정을 알려드립니다.",
  },
  {
    id:2,
    message: "오늘은 10시에 회의가 있습니다.",
  },
  {
    id:3,
    message: "이제 곧 미팅이 시작됩니다.",
  },
];

let timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

		// 생성자에서는 앞으로 사용할 데이터를 state 에 넣어 초기화함
    this.state = {
      notifications: [],
    };
  }
	// 컴포넌트가 화면에 나타난 직후에 호출되는 함수
  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);
				// state 를 업데이트하기위해 setState 사용
        this.setState({
          notifications: notifications,
        });
      } else {
        this.setState({
          notifications: []
        })
        clearInterval(timer);
      }
    }, 1000);
  }
  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return <Notification message={notification.message} key={notification.id} id={notification.id}/>;
        })}
      </div>
    );
  }
}
export default NotificationList;
