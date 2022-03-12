import { memo } from 'react'
import logo from './logo.svg'
import './App.css'


export default memo(
    (props) => {
        let { value1 } = props;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>Hello Sean + React!</p>
                    <p>
                        count is: {value1}
                    </p>
                    <p>
                        Edit <code>App.jsx</code> and save to test HMR updates.
                    </p>
                    <p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                        {' | '}
                        <a
                            className="App-link"
                            href="https://vitejs.dev/guide/features.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Vite Docs
                        </a>
                    </p>
                </header>
            </div>
        )
    },
    (prevProps, nextProps) => {
        return nextProps.value1 % 2 === 1;
    }
);

