import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import { AuthContext } from './context/auth';
import Home from './screens/Home';
import HeaderTabs from './header/HeaderTabs';

const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
    const [state, setState] = useContext(AuthContext);
    const authenticated = state && state.token !== "" && state.user !== null;

    return (
        <Stack.Navigator initialRouteName='Home'>
            {authenticated ? 
                <Stack.Screen name="Home" component={Home} options={{headerRight: () => <HeaderTabs />}} /> : (
                    <>
                        <Stack.Screen name="SignIn" component={SignIn} />
                        <Stack.Screen name="SignUp" component={SignUp} />
                    </>
                )
            }
        </Stack.Navigator>
    )
}

export default NavigationScreen;