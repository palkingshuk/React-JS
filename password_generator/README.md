# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!-- useCallback -->
useCallback is a React Hook that lets you cache a function definition between re-renders.

const cachedFn = useCallback(fn, dependencies)

<!-- useEffect -->
useEffect
useEffect is a React Hook that lets you synchronize a component with an external system.

useEffect(setup, dependencies?)
Reference 
useEffect(setup, dependencies?) 
Call useEffect at the top level of your component to declare an Effect:
 
<!--    UseCase: 
import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);
}
 -->

 <!-- useRef -->
 useRef is a React Hook that lets you reference a value that’s not needed for rendering.

const ref = useRef(initialValue)

Reference 
useRef(initialValue) 
Call useRef at the top level of your component to declare a ref.

import { useRef } from 'react';

function MyComponent() {
  const intervalRef = useRef(0);
  const inputRef = useRef(null);
  // ...