import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import JournalScreen from "../pages/JournalScreen";
import ProfileScreen from "../pages/ProfileScreen";
import { colors } from "../constants/colors";

type bottomTabNavigatorLists = {
    Journal: undefined,
    Profil: undefined
}

const bottomTabNavigator = createBottomTabNavigator<bottomTabNavigatorLists>();

function BottomTabNavigation() {
    return (
        <NavigationContainer>
            <bottomTabNavigator.Navigator screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    borderTopColor: colors.darkgray,
                    backgroundColor: colors.darkgray,
                },
            }}>
                <bottomTabNavigator.Screen name="Journal" component={JournalScreen} options={{
                    tabBarActiveTintColor: colors.green,
                    tabBarInactiveTintColor: colors.lightgray,
                    tabBarIcon: ({ focused }) => <MaterialCommunityIcons name='book-open' size={30} color={focused ? colors.green : colors.lightgray} />
                }} />
                <bottomTabNavigator.Screen name="Profil" component={ProfileScreen} options={{
                    tabBarActiveTintColor: colors.green,
                    tabBarInactiveTintColor: colors.lightgray,
                    tabBarIcon: ({ focused }) => <MaterialCommunityIcons name='account' size={30} color={focused ? colors.green : colors.lightgray} />
                }} />
            </bottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}

export default BottomTabNavigation