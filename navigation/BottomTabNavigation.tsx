import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import JournalScreen from "../pages/JournalScreen";
import ProfileScreen from "../pages/ProfileScreen";
import { colors } from "../constants/colors";

type BottomTabNavigatorParamList = {
    Journal: undefined,
    Profil: undefined
}

const bottomTabNavigator = createBottomTabNavigator<BottomTabNavigatorParamList>();

function BottomTabNavigation() {
    return (
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
                    tabBarIcon: ({ focused }) => <MaterialCommunityIcons name='book-open-outline' size={30} color={focused ? colors.green : colors.lightgray} />
                }} />
                <bottomTabNavigator.Screen name="Profil" component={ProfileScreen} options={{
                    tabBarActiveTintColor: colors.green,
                    tabBarInactiveTintColor: colors.lightgray,
                    tabBarIcon: ({ focused }) => <MaterialCommunityIcons name='account-outline' size={30} color={focused ? colors.green : colors.lightgray} />
                }} />
            </bottomTabNavigator.Navigator>
    )
}

export default BottomTabNavigation