import React, { Component } from "react";
import styles from "./App.module.css";
import Menu from "./Menu";

class App extends Component {
    render () {
        return (
            <>
                <Menu />
                <div className={styles.text}>Hello there General Kenobi!</div>
            </>
        )
    }
}

export default App;