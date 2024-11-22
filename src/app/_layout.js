import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>

      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="TodoApp" options={{
        headerStyle: {
            backgroundColor: 'green',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            
          },
          headerTitle:"Completed",
          headerShown: true,
      }} />
      <Stack.Screen name="completedTodos" options={{
        headerStyle: {
            backgroundColor: 'green',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            
          },
          headerTitle:"Completed",
          headerShown: true,
      }} />
    </Stack>
  );
}
