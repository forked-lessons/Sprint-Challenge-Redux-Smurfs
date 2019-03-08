1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.filter, .map and .reduce produce no side effects. Map allows us to create a new object and extend properties of another.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: are payloads of information that send data from the store.
Reducers: Specify how the app state changes in response to actions.
Store: Is the single source of truth because it contains the state for the whole application, if you want to change state you have to go through the store.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global while component state is local to that component. Component state may be good on something like hahandling form. While app state would be good to control the state across many containers.

1.  What is middleware?

Extensions that add functionality to redux. They intercept actions before it goes to a reducer.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk allows us to dispatch multiple actions from a single action creator.It allows action creators to return functions w/ access to the dispatch method.

1.  Which `react-redux` method links up our `components` with our `redux store`?

The provider component.
