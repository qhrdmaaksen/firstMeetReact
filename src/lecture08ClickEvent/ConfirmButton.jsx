import React from "react";

class ConfirmButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConfirmed: false,
    };
		/*// arrow function 사용 시 this 가 ConfirmButton 을 가리킴 그래서 bind 를 사용하지 않아도 됨
		this.handleConfirm = this.handleConfirm.bind(this)*/
  }
  handleConfirm = () => {
    this.setState((prevState) => ({
      isConfirmed: !prevState.isConfirmed,
    }));
  }
  render() {
    return (
      <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
        {this.state.isConfirmed ? "확인됨" : "확인하기"}
      </button>
    );
  }
}
export default ConfirmButton;