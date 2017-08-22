import React from 'react';
import { Scene, Router, ActionConst, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';


const RouterComponent = () => (
    <Router
        sceneStyle={{ backgroundColor: '#fff' }}
        navigationBarStyle={{ backgroundColor: '#ddd' }}
        titleStyle={{ alignSelf: 'center' }}
    >
        <Scene key="root" hideNavBar>
            <Scene key="auth" initial title="Please Login" >
                <Scene key="login" component={LoginForm} />
            </Scene>
            <Scene key="main" type={ActionConst.REPLACE} panHandlers={null}>
                <Scene
                    key="employeeList"
                    component={EmployeeList}
                    title="Employees"
                    rightTitle=" Add"
                    onRight={() => console.log('right')}
                />
            </Scene>
        </Scene>
    </Router>
);

export default RouterComponent;
