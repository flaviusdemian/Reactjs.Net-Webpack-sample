import React from 'react';
import ReactDOM from 'react-dom';
//import { Button } from 'semantic-ui-react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };

        this.increhandler = this.increhandler.bind(this);
        this.decrehandler = this.decrehandler.bind(this);
        this.resethandler = this.resethandler.bind(this);
    }

    increhandler() {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrehandler() {
        this.setState({
            count: this.state.count - 1
        });
    }

    resethandler() {
        this.setState({
            count: 0
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.increhandler}>Incre++</button>
                <button onClick={this.decrehandler}>decre--</button>
                <button onClick={this.resethandler}>reset</button>
                <h2> Insert semantic ui code below</h2>
           
            </div>
        );
    }
}

//module.exports = Home;
export default Home;

//     <Button>Click Here</Button>
//<Button>Click Here</Button> semantic UI insert