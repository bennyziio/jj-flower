import React, { Component } from "react";
import axios from "axios";
// import * as service from "../get";

// Make a request for a user with a given ID
class List extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     error: null,
  //     isLoaded: false,
  //     users: []
  //   };
  // }

  state = {
    error: null,
    isLoaded: false,
    users: []
  };

  //   fetchPostInfo = async => {
  //     const aaa = await Promise.all([service.getData()]);
  //   };

  componentDidMount() {
    // this.fetchPostInfo();
    const vm = this;
    axios
      .get("http://localhost/jj_tutorial/showUser.php")
      .then(function(response) {
        // handle success
        console.log(response.data.users);

        vm.setState({
          isLoaded: true,
          users: response.data.users
        });
      });
  }

  render() {
    const { error, isLoaded, users } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.firstname} {user.lastname} {user.age}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default List;
