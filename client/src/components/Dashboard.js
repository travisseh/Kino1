import React, { Component } from "react";
import axios from "axios";

import PackageList from "./Packagelist";

export class Dashboard extends Component {
    state = {
        packages: {}
    };

    async componentDidMount() {
        const packages = await axios.get("/dashboard");

        this.setState({
            packages
        });
    }

    render() {
        return (
            <div>
                dashboard component
                {this.packages.map(packages => {
                    return <PackageList packages={packages} />;
                })}
            </div>
        );
    }
}

export default Dashboard;
