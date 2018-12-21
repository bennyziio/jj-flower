import React, { Component } from "react";

class FlowerItem extends Component {
  static defaultProps = {
    item: {
      flowerId: 0,
      flowerTitle: "",
      flowerPrice: "",
      flowerDetail: ""
    }
  };

  render() {
    const { flowerTitle, flowerPrice, flowerDetail } = this.props.item;

    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px"
    };

    return (
      <div style={style}>
        <div>이름 : {flowerTitle}</div>
        <div>가격 : ₩ {flowerPrice}원</div>
        <div>상세 : {flowerDetail}</div>
      </div>
    );
  }
}

export default FlowerItem;
