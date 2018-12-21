import React, { Component } from "react";
import FlowerItem from "./FlowerItem";

import axios from "axios";

class FlowerItemList extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: []
  };

  componentDidMount() {
    // this.fetchPostInfo();
    const vm = this;
    axios
      .get("http://localhost/jj_tutorial/showFlowerItem.php")
      .then(function(response) {
        // handle success
        console.log(response.data.items);

        vm.setState({
          isLoaded: true,
          items: response.data.items
        });
      });
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {items.map(item => (
            <FlowerItem key={item.flowerId} item={item} />
          ))}
        </div>
      );
    }
  }
}

export default FlowerItemList;
