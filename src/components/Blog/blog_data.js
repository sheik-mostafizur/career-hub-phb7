export default [
  {
    id: 1,
    question: "When should you use context API?",
    answer:
      "Context API in React is used for passing data or state down the component tree without having to pass props down explicitly at every level. You should use the Context API when you have data that needs to be accessed by multiple components at different levels of the component tree. You can share state between lot's of components with a lot of nesting.",
  },
  {
    id: 2,
    question: "What is a custom hook?",
    answer:
      'A custom hook in React is a JavaScript function that starts with the word "use" and allows you to reuse logic across multiple components. Custom hooks allow you to abstract away complex logic and state management into a reusable function that can be shared between components. ',
  },
  {
    id: 3,
    question: "What is useRef?",
    answer:
      '"useRef" is a hook in React that allows you to create a mutable reference that persists across re-renders of a component. It returns a mutable object that you can use to store any value, similar to an instance variable in a class component.',
  },
  {
    id: 4,
    question: "What is useMemo?",
    answer:
      '"useMemo" is a hook in React that allows you to memoize the result of a function so that it is only re-computed when its dependencies change. It is used to optimize the performance of expensive calculations or computations that don\'t need to be re-run on every render.',
  },
];
