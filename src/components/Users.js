import {Component} from "react";
import {User} from "./User";
import {userService} from "../services/userService";

class Users extends Component {
    constructor(props) {
        console.log('constructor');
        super(props);
        this.state = {
            users: [],
            count: 5
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
        userService.getAll().then(({data}) => this.setState({users: data}))
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
        console.log(snapshot);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        console.log('render');
        return (
            <div>
                <h1>count: {this.state.count}</h1>
                {this.state.users.map(user => <User key={user.id} user={user}/>)}
            </div>
        )
    }
}


export {
    Users
}