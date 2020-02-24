- [ ] Why would you use class component over function components (removing hooks from the question)?

Class components can also contain state as well as methods for use throughout your project so it can come down to personal preference.

- [ ] Name three lifecycle methods and their purposes.

componentWillMount: It’s invoked once and immediately before the initial rendering occurs and before React inserts the component into the DOM.

componentDidMount: The second is the mounting phase, just one time and immediately after React inserts the component into the DOM.

componentDidUpdate: Is after React updates the DOM. We can use this method to interact with the updated DOM or perform any action post-render.

- [ ] What is the purpose of a custom hook?

For repeatable scripts you can use a custom hook that will execute code that handles a specific task. This helps keep our code DRY and clean.


- [ ] Why is it important to test our apps?

Automated testing minimizes the risk of bugs finding their way into production code. Testing is NOT optional, it should be a part of every developer’s workflow.