'use client';

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={()=> setCount( count => count + 1)}>Click me</button>
    </div>
  )
}

export default Counter;

// whenever utilizing react states and hooks in react or other client side  management solutions it is important to declare component as client side component.
// state management in react primarily used in client side components. because it sis managed in browser.

// when to use server side components vs. client side components
  