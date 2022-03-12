import App from './App';
import React from 'react';

export default class ClassComponent extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.state.count % 2 === 1
    }

    // componentDidUpdate(lastProps) {
    //     // lastProps = { user: 'sean', color:'blue' }
    //     // this.props = { user: 'nick', color:'red' }
    //     if(lastProps.user !== this.props) {
    //         //make api call
    //     }
    //     this.props
    //     lastProps
    // }

    increment() {
        this.setState({
            count: this.state.count + 1
        });
    }

    temp() {
        const minecraftPromise = fetch(`http://localhost:8080/api/http-test/minecraft`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                return response.json()
                    .then(json => {
                        this.setState({
                            online: json.online
                        })
                    })
            })
    }

    render() {
        const { count } = this.state;

        return (
            <div>
                Class
                <button type="button" onClick={() => this.increment()}>
                    count is: {count}
                </button>
                <App value1={count} />
                <App value1={count} />
            </div>
        );
    }
}