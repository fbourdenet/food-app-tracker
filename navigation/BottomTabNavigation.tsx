import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import JournalScreen from "../pages/JournalScreen";
import ProfileScreen from "../pages/ProfileScreen";

type bottomTabNavigatorLists = {
    Journal: undefined,
    Profile: undefined
}

const bottomTabNavigator = createBottomTabNavigator<bottomTabNavigatorLists>();

function BottomTabNavigation() {
    return (
        <NavigationContainer>
            <bottomTabNavigator.Navigator screenOptions={{ headerShown: false}}>
                <bottomTabNavigator.Screen name="Journal" component={JournalScreen} options={{
                    tabBarIcon: () => <MaterialCommunityIcons name='book-open' size={30} color='black' />
                }} />
                <bottomTabNavigator.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarIcon: () => <MaterialCommunityIcons name='account' size={30} color='black' />
                }} />
            </bottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}

export default BottomTabNavigation