import React from "react";
import UserDetail from "./UserDetail";

export default class ListOfUsers extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      visible: true,
      buttonText: 'Hide',
      searchText: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleSearchText = this.handleSearchText.bind(this);
  }

  handleClick() {
    this.setState({
      visible: this.state.visible ? false : true,
      buttonText: this.state.visible ? 'Show' : 'Hide'
    });
  }

  handleSearchText(e) {
    this.setState({
      searchText: e.target.value
    });
  }

  render() {
    const isVisible = this.state.visible;
    let list = null;
    if (isVisible) {
      list = this.props.users.map((user, i) => {
        return (
          <div><UserDetail key={i} users={this.props.users[i]} /></div>
        );
      });
    } else {
      list = <div />
    }

    return (
      <div>
        <input type='text' placeholder='Search' onChange={this.handleSearchText} value={this.state.searchText} />
        <br />
        <br />
        <button onClick={this.handleClick}>{this.state.buttonText}</button>
        <br />
        <div className='addressList'>
          {list}
        </div>
      </div>
    );
  }
}
