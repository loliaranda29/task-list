import { ChakraProvider, Input, Button, VStack, Center, Text, ColorModeScript} from '@chakra-ui/react';
import React from 'react';
import './App.css';
import TaskList from './components/TaskList';
import Title from './components/Header';
import UseTaskManager from './hooks/hooks'; 
import theme from './theme'

const App = () => {
  const {
    tasks,
    newTask,
    setNewTask,
    addTask,
    editTask,
    deleteTask,
  } = UseTaskManager();

  const handleTaskSubmission = (event) => {
    event.preventDefault();
    addTask();
  };

  return (
    <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Center w="1300px" h='800'>
      <VStack spacing={6} w="600px">
        <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize='2xl' fontWeight='bold'>
          <Title />
        </Text>
        <form onSubmit={handleTaskSubmission}>
            <VStack spacing={2} w="100%">
              <Input
                placeholder="New task"
                value={newTask.name}
                onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
              />
              <Button colorScheme='blue' type="submit" leftIcon="Add">
              </Button>
            </VStack>
            </form>
          <VStack spacing={6} w="600px" mt={8}>
            <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
          </VStack>
        </VStack>
      </Center>
    </ChakraProvider>
  );
};

export default App;