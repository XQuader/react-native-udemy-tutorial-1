import React, { Component } from 'react';
import firebase from 'firebase';
import { Scene, Router, ActionConst, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

class RouterComponent extends Component {
    constructor(props) {
        super(props);

        firebase.auth().onAuthStateChanged(user => (user ? Actions.employeeList() : Actions.login()));
    }
    render() {
        return (
            <Router
                sceneStyle={{ backgroundColor: '#fff' }}
                navigationBarStyle={{ backgroundColor: '#ddd' }}
                titleStyle={{ alignSelf: 'center' }}
            >
                <Scene key="root" hideNavBar>
                    <Scene key="auth" initial title="Please Login">
                        <Scene key="login" component={LoginForm} />
                    </Scene>
                    <Scene key="main" panHandlers={null}>
                        <Scene
                            key="employeeList"
                            component={EmployeeList}
                            title="Employees"
                            rightTitle=" Add"
                            onRight={() => Actions.employeeCreate()}
                            type={ActionConst.REPLACE}
                            initial
                        />
                        <Scene
                            key="employeeCreate"
                            component={EmployeeCreate}
                            title="Employee"
                            back
                        />
                    </Scene>
                </Scene>
            </Router>
        );
    }
}

export default RouterComponent;
