Which action dispatch would correctly increment the count in the reducer setup?
A. dispatch({ type: 'add' });
B. dispatch({ action: 'increment' });
C. dispatch({ type: 'increment' });
D. dispatch({ command: 'increment' });
C

Which component is typically used in conjunction with React.lazy to handle the loading state?
A. <ErrorBoundary>
B. <Suspense>
C. <LoadingComponent>
D. <Provider>
B

Which component is used to create a submit button in React-Bootstrap?
A. <Button.Submit>
B. <Form.Submit>
C. <Form.Button>
D. <Button>
C

Which component is used to create an input field in React-Bootstrap?
A. <Form.Text>
B. <Form.Control>
C. <Form.Caption>
D. <Form.Title>
B

How do you dispatch an action using the dispatch function?
A. dispatch('increment');
B. dispatch({ action: 'increment' });
C. dispatch({ 'increment' });
D. dispatch({ type: 'increment' });
D

How do you access props in a functional component in React?
A. const Child = (props) => { return <div>{props.name}</div>; };
B. const Child = () => { return <div>{this.props.name}</div>; };
C. const Child = (prop) => { return <div>{prop.name}</div>; };
D. const Child = () => { return <div>{props.name}</div>; };
A

How do you define a lazy component in React?
A. const MyComponent = React.lazy(() => import("./MyComponent"));
B. const MyComponent = lazy(() => import("./MyComponent"));
C. const MyComponent = import("./MyComponent").lazy();
D. const MyComponent = React.importLazy("./MyComponent");
A

How do you create navigation links in React Router?
A. Using the <Switch> component
B. Using the <Link> component
C. Using the <Route> component
D. Using the <Navigate> component
B

How can you define a route with multiple parameters, such as userId and postId?
A. <Route path="/user/userId/post/postId" component={UserPost} />
B. <Route path="/user/:userId/:postId" component={UserPost} />
C. <Route path="/user/:userId/post/:postId" component={UserPost} />
D. <Route path="/user?userId?post?postId" component={UserPost} />
C

How do you define a dynamic route parameter in React Router?
A. <Route path="/users/:userId" component={UserDetail} />
B. <Route path="/users" component={UserDetail} />
C. <Route path="/users/{userId}" component={UserDetail} />
D. <Route path="/users?userId=:userId" component={UserDetail} />
A

How do you create active navigation links in React Router?
A. Using the <Link> component
B. Using the <Route> component
C. Using the <NavLink> component
D. Using the <Switch> component
C

How can you access the state and dispatch from Context in a child component?
A. const [state, dispatch] = useContext(CountContext);
B. const { state, dispatch } = CountContext;
C. const { state, dispatch } = useContext(CountContext);
D. const state = CountContext.state;
C

How can you declare PropTypes for a prop that is an array of integers?
A. prop: PropTypes.arrayOf(PropTypes.number)
B. prop: PropTypes.arrayOf(PropTypes.integer)
C. prop: PropTypes.array(PropTypes.number)
D. prop: PropTypes.array(PropTypes.integer)
A

How would you use the useEffect Hook to fetch data from an API in a React component?
A. useEffect(fetchData, []);
B. useEffect(() => fetchData(), [fetchData]);
C. useEffect(() => fetchData());
D. useEffect(() => fetchData(), []);
D

How would you use the useState Hook to manage a counter in a React component?
A. const [count, setCount] = useState(0);
B. const count = useState(0);
C. const count = useState()[0];
D. const [count, setCount] = useState();
A

How would you use the useContext Hook to access a shared theme in a React component?
A. const theme = useContext(ThemeContext);
B. const { theme } = useContext(ThemeContext);
C. const { theme } = useContext(ThemeContext.Provider);
D. const theme = useContext(ThemeContext.Provider);
A

How do you define a route that matches /users/123 and passes 123 as a parameter to the component?
A. <Route path="/users?id" element={<User />} />
B. <Route path="/users/:id" element={<User />} />
C. <Route path="/users/{id}" element={<User />} />
D. <Route path="/users/#id" element={<User />} />
B

How would you extract and display multiple parameters, userId and postId, in a component?
A. const { userId, postId } = useParams();
B. const userId = useParams("userId"); const postId = useParams("postId");
C. const userId = route.params.userId; const postId = route.params.postId;
D. const { userId } = useParams(); const { postId } = useParams();
A

How would you navigate back to the previous page using the useNavigate hook?
A. navigate("/back");
B. navigate("back");
C. navigate(-1);
D. navigate("/previous");
C

Can you provide an example of a custom property validator in React that checks if a prop is a positive number?
A. value: PropTypes.positiveNumber
B. value: function (props, propName, componentName) { /* custom check */ }
C. value: PropTypes.number && value > 0
D. value: PropTypes.number && value >= 0
B

Write a custom property validator in React for a prop called "email" that should be a valid email address.
A. email: PropTypes.string
B. email: PropTypes.email
C. email: PropTypes.string.isRequired
D. email: function (props, propName, componentName) { /* validate email */ }
D

What is the first step in migrating from useState to useReducer with this code? const [count, setCount] = useState(0); function increment() { setCount(count + 1); }
A. Replace setCount with dispatch in the existing code.
B. Move all state update logic into a reducer function.
C. Define the reducer function and use dispatch to replace setCount.
D. Import useReducer without changing any code.
B

What is the correct way to define default props in a functional component?
A. const Child = ({ name }) => { name = name || "Default Name"; return <div>{name}</div>; };
B. const Child = ({ name }) => { return <div>{name ? name : "Default Name"}</div>; };
C. const Child = ({ name }) => { return <div>{name || "Default Name"}</div>; };
D. const Child = ({ name = "Default Name" }) => { return <div>{name}</div>; };
D

What will be the output of the following code? const obj = { name: "Alice", greet: () => { console.log(this.name); } }; obj.greet();
A. Alice
B. undefined
C. this
D. this.name
B

Which of the following is a valid JSON object?
A. { "name": "John Doe", "age": 30, "city": "New York" }
B. { name: "John Doe", age: "30", city: "New York" }
C. { name: "John Doe", age: 30, city: "New York" }
D. { "name" = "John Doe", "age" = 30, "city" = "New York" }
A

Which of the following is the correct syntax to use useDispatch in a functional component?
A. const MyComponent = () => { const dispatch = useDispatch(); return <div>My Component</div>; };
B. const MyComponent = () => { const dispatch = useDispatch; return <div>My Component</div>; };
C. const MyComponent = () => { const dispatch = dispatch(); return <div>My Component</div>; };
D. const MyComponent = () => { const dispatch = useDispatch(); return <div>My Component with {dispatch}</div>; };
A

Which of the following correctly passes an object as a prop to a child component?
A. return <ChildComponent user={user.toString()} />;
B. return <ChildComponent user="user" />;
C. return <ChildComponent user="{user}" />;
D. return <ChildComponent user={user} />;
D

Which of the following is a correct way to initialize multiple state variables using useState?
A. const [value1, setValue1, value2, setValue2] = useState(0, 0);
B. const [value1, setValue1] = useState(); const [value2, setValue2] = useState();
C. const [state, setState] = useState({ value1: 0, value2: 0 });
D. const [value1, value2, setValues] = useState(0, 0);
B

Which method is commonly used to transform an array of data into a list of components in React?
A. items.filter(item => <li>{item}</li>)
B. items.map(item => <li>{item}</li>)
C. items.forEach(item => <li>{item}</li>)
D. items.reduce(item => <li>{item}</li>)
B

Which method can help ensure that updates in a function depend on the previous state in React?
A. setCount(count + 1);
B. setCount(count + 1); // without functional updater
C. setCount(prevCount => prevCount + 1);
D. setCount(count - 1);
C

How would you handle errors in a fetch request to ensure that the error is caught and logged to the console?
A. fetch(url).then((response) => { return response.json(); }).catch(error => console.log(error));
B. fetch(url).then(response => response.catch(error => console.log(error)));
C. fetch(url).catch(error => { console.log(error); });
D. fetch(url).then(response => { throw new Error(); }).catch(error => console.log(error));
A

How do you pass multiple props to a child component in React?
A. <Child props={{ name: "John", age: 30 }} />
B. <Child name="John" age={30} />
C. <Child name="John" age="30" />
D. <Child name="John" age=30 />
B

How would you combine filter() and map() to display only fruits with names longer than 5 characters and transform them into uppercase?
A. items.filter(item => item.length > 5).map(item => <li>{item}</li>)
B. items.filter(item => item.length > 5).map(item => <li key={item}>{item.toUpperCase()}</li>)
C. items.map(item => <li key={item}>{item}</li>).filter(item => item.length > 5)
D. items.map(item => item.toUpperCase()).filter(item => item.length > 5)
B

How can you avoid contradictions in state with isOpen and buttonText derived from isOpen?
A. The code keeping both in state is fine as it is.
B. Remove buttonText from state and calculate it dynamically in the render method based on isOpen.
C. Keep both isOpen and buttonText in state but update them separately.
D. Use useEffect to sync buttonText with isOpen.
B

How do you use the Grid system in React-Bootstrap?
A. <Row><Container><Col xs={6}>2 of 3 (wider)</Col></Container></Row>
B. <Row><Container><Column>1 of 3</Column></Container></Row>
C. <Container><Row><Col xs={6}>2 of 3 (wider)</Col></Row></Container>
D. <Container><Column><Row xs={6}>2 of 3 (wider)</Row></Column></Container>
C

How would you access the message prop inside the ChildComponent? function ChildComponent(props) { return <h1>{props.message}</h1>; }
A. props.message
B. this.props.message
C. props("message")
D. props.getMessage()
A

How do you define a dynamic route parameter in React Router (path style)?
A. <Route path="/user/id" component={UserProfile} />
B. <Route path="/user.:id" component={UserProfile} />
C. <Route path="/user=?id" component={UserProfile} />
D. <Route path="/user/:id" component={UserProfile} />
D

How do you configure a Redux store using Redux Toolkit?
A. import { createStore } from "redux"; const store = createStore({ reducer: { counter: counterReducer } });
B. import { createStore } from "redux"; const store = createStore({ counter: counterReducer });
C. import { configureStore } from "@reduxjs/toolkit"; const store = configureStore({ counter: counterReducer });
D. import { configureStore } from "@reduxjs/toolkit"; const store = configureStore({ reducer: { counter: counterReducer } });
D

How do you dispatch an action when a button is clicked?
A. const handleClick = () => { dispatch({ type: "BUTTON_CLICKED" }); }; <button onClick={handleClick}>Click me</button>
B. const handleClick = () => { dispatch({ type: "BUTTON_CLICKED" }); }; <button onClick={() => handleClick()}>Click me</button>
C. const handleClick = () => { dispatch({ type: "BUTTON_CLICKED" }); }; <button onClick={handleClick()}>Click me</button>
D. const handleClick = () => { dispatch({ action: "BUTTON_CLICKED" }); }; <button onClick={handleClick}>Click me</button>
A

How can you render only specific items from an array (names starting with "A")?
A. items.map(item => item.startsWith("A"))
B. items.reduce(item => item.startsWith("A"))
C. items.filter(item => item.startsWith("A")).map((item, index) => <li key={index}>{item}</li>)
D. items.find(item => item.startsWith("A"))
C

How do you wrap a lazy-loaded component with a fallback in React?
A. <Suspense loader={<div>Loading...</div>}><LazyComponent /></Suspense>
B. <Suspense fallback={<div>Loading...</div>}><LazyComponent /></Suspense>
C. <Await fallback={<div>Loading...</div>}><LazyComponent /></Await>
D. <Loading fallback={<div>Loading...</div>}><LazyComponent /></Loading>
B

Create a responsive grid layout using React-Bootstrap with three columns that stack vertically on small screens. Which approach is correct?
A. <Col>1 of 3</Col> without breakpoints
B. <Col sm={4}> for all columns (side-by-side from sm up)
C. <Col md={12}> for all columns
D. <Col sm={12} md={4}> for each column (stack on small, 3 columns from md)
D

Create a React component that uses the Suspense component to display a fallback while loading a lazily loaded component. Which approach is correct?
A. const MyComponent = lazy(() => import("./MyComponent")); return <Suspense fallback={<div>Loading...</div>}><MyComponent /></Suspense>;
B. const MyComponent = import("./MyComponent"); return <Suspense fallback={<div>Loading...</div>}><MyComponent /></Suspense>;
C. const MyComponent = lazy("/MyComponent"); return <div>Loading...</div>;
D. const MyComponent = React.lazy(() => import("./MyComponent")); return <React.Suspense><MyComponent /></React.Suspense>;
A

What is the json-server setup (jsonServer.create + router + listen) used for?
A. Create a dynamic server to serve JSON data.
B. Create a dynamic web application using JSON data.
C. Create a JSON file based on data from the server.
D. Configure the development environment for the project using JSON.
A

Which process in React corresponds to "send order to kitchen" (triggering an update)?
A. Triggering a render
B. Rendering the component
C. Committing to the DOM
D. Placing the order on the table
A

How many columns will the code below display on a mobile screen? <Col sm={6} md={4} /> and <Col sm={6} md={8} />
A. 1
B. 2
C. 3
D. 4
B

Create a React component that uses composition to include a header, main content, and footer. Which snippet is correct?
A. function App() { return (<div><Header /><MainContent /><Footer /></div>); }
B. function App() { return (<div><Header /><Footer /><MainContent /></div>); }
C. function App() { return (<div><MainContent /><Header /><Footer /></div>); }
D. function App() { return (<div><Footer /><Header /><MainContent /></div>); }
A

Find the bug: const [items, setItems] = useState([]); const addItem = () => { items.push("new"); setItems(items); };
A. useState should be useReducer
B. use setItems([...items, "new"])
C. push is not a valid method
D. setItems must take a string
B

After git init, commit, branch new-feature, add file, commit, checkout main, merge new-feature — what is the result?
A. The repository has a new branch called new-feature with new-file.js added.
B. The main branch has new-file.js added.
C. The new-feature branch is merged into main without new-file.js.
D. The repository remains unchanged.
B

In a class Counter component, how can we increase count by 1 when clicking Increment?
A. Call this.setState({ count: this.state.count + 1 }) inside incrementCount
B. Assign count with = inside incrementCount
C. Call this.state.count + 1 inside incrementCount
D. Use this.setState(count + 1) inside incrementCount
A

In a class Form with name/email inputs sharing handleInputChange, how do we update state from user input?
A. this.setState({ [event.target.name]: event.target.value }) (or set name/email from event.target.value)
B. Assign name/email with = inside handleInputChange
C. Mutate this.state.name / this.state.email directly
D. Use this.setState(event.target.value)
A

What happens when the "Toggle Message" button is clicked? (useState showMessage toggled)
A. The message is displayed.
B. The message is hidden.
C. The state of the component is updated.
D. The component is re-rendered.
C

What type of component is: const Greeting = ({ name }) => { return <h1>Hello, {name}!</h1>; };
A. Class component
B. Functional component
C. Container component
D. Higher-order component
B

Which process in React corresponds to "putting orders on the table"?
A. Triggering a render
B. Rendering the component
C. Committing to the DOM
D. Placing the order on the table
C

In React-Bootstrap, select the JSX to create a button with a blue background and white text color.
A. <Button variant="primary" className="btn-primary">My Button</Button>
B. <Button variant="primary" className="bg-primary text-white">My Button</Button>
C. <Button variant="primary" className="btn btn-primary">My Button</Button>
D. <Button className="btn btn-primary">My Button</Button>
B

What components does this code display? import { Button, Checkbox, Listbox } from "react-bootstrap"; then render Button, Checkbox, Listbox
A. Grid, Button, ListBox
B. Button, Radiobox, Listbox
C. Checkbox, Listbox, Button
D. Button, Checkbox, Tabs
C

Select the code snippet that correctly defines a Class Component in React.
A. class MyComponent extends React.Component { render() { return <div>Hello, World!</div>; } }
B. function MyComponent() { return <div>Hello, World!</div>; }
C. const MyComponent = () => { return <div>Hello, World!</div>; };
D. const MyComponent = React.createClass({ render() { return <div>Hello, World!</div>; } });
A

Select the code snippet that correctly defines a component with state in React.
A. React.createClass with getInitialState
B. function MyComponent() { const [count, setCount] = React.useState(0); return <div>{count}</div>; }
C. class with this.state only in constructor (incomplete options)
D. const MyComponent() => { const [count, setCount] = React.useState(0); ... } (invalid syntax)
B

Select the code snippet that correctly defines a Higher-Order Component in React using an arrow function.
A. function withLogger(WrappedComponent) { return class extends React.Component { ... }; }
B. const withLogger = (WrappedComponent) => { return class extends React.Component { ... }; };
C. const withLogger = (WrappedComponent) => { return function HOC() { ... }; };
D. function withLogger(WrappedComponent) { return function HOC() { ... }; }
C

How can you pass parameters to an event handler in React?
A. Using the bind() method.
B. Using arrow functions.
C. Using the addEventListener() method.
D. Using the this keyword.
ABD

What is the correct way to wrap a lazy component with Suspense in React?
A. <Suspense loading={<Loading />}><MyComponent /></Suspense>
B. <Suspense fallback={<Loading />}><MyComponent /></Suspense>
C. <Suspense wait={<Loading />}><MyComponent /></Suspense>
D. <Suspense fallback={<Loading />} loading={<MyComponent />} />
B

What is the correct way to declare PropTypes for a component in React?
A. Component.propTypes = { ... }
B. Component.typeCheck = { ... }
C. Component.props = { ... }
D. Component.checkProps = { ... }
A

What is the correct way to update the state when it depends on the previous state?
A. setValue(value + 1);
B. setValue(prevValue => prevValue + 1);
C. setValue(() => value + 1);
D. setValue(value => value + 1);
B

Which of the following will navigate to the root path ("/") using the useNavigate hook?
A. navigate("");
B. navigate("home");
C. navigate("/");
D. navigate("root");
C

Which of the following is the correct way to dispatch an action using the useDispatch hook?
A. const dispatch = useDispatch(); dispatch("ACTION_TYPE");
B. const dispatch = useDispatch(); dispatch(() => { type: "ACTION_TYPE" });
C. const dispatch = useDispatch(); dispatch({ type: "ACTION_TYPE" });
D. const dispatch = useDispatch(); dispatch({ action: "ACTION_TYPE" });
C

Which code snippet demonstrates how to handle a route parameter in React Router?
A. <Route path="/users/:id" component={UserDetail} />
B. <Link to="/users">Users</Link>
C. import { BrowserRouter as Router, Route } from "react-router-dom";
D. import { Link, Route } from "react-router-dom";
A

Which code snippet demonstrates how to declare a basic route in React Router?
A. <Route path="/about" component={About} />
B. <Link to="/about">About</Link>
C. import { BrowserRouter as Router, Route } from "react-router-dom";
D. import { Link, Route } from "react-router-dom";
A

Which of the following is the correct way to render a React-Bootstrap Button with a primary style?
A. <Button className="btn btn-primary">Click Me</Button>
B. <button class="btn btn-primary">Click Me</button>
C. <Button variant="primary">Click Me</Button>
D. <PrimaryButton>Click Me</PrimaryButton>
C

Which of the following is the correct way to pass a function as a prop in React?
A. <Child onClick={handleClick()} />
B. <Child handleClick={handleClick} />
C. <Child onClick={handleClick} />
D. <Child handleClick={handleClick()} />
C

Which component is used to define a route in React Router?
A. <Route>
B. <Router>
C. <Link>
D. <Navigation>
A

Which class is used to create a button in Bootstrap 5?
A. .btn
B. .button
C. .btn-primary
D. .btn-default
A

Which pair of Git commands is used to create a new branch and then switch to it?
A. git new branch-name; git change branch-name
B. git branch branch-name; git checkout branch-name
C. git make branch-name; git switch branch-name
D. git create branch-name; git select branch-name
B

Describe the Redux flow process when an action is dispatched.
A. Action is dispatched → Middleware → Reducer → Store → Component.
B. Component dispatches action → Reducer → Middleware → Store.
C. Middleware dispatches action → Reducer → Store → Component.
D. Reducer dispatches action → Middleware → Component → Store.
A

Analyze the benefits of using synthetic events in React. Which of the following is NOT a benefit?
A. Provides a consistent event interface across different browsers.
B. Contains information necessary for event propagation.
C. Reduces the need for garbage collection.
D. Normalizes browser inconsistencies.
C

Evaluate the benefits of using Redux Thunk middleware in a Redux application. Which of the following is NOT a benefit?
A. Allows for handling asynchronous actions.
B. Simplifies the process of making API calls within action creators.
C. Ensures that all actions are synchronous.
D. Enables conditional dispatching of actions.
C

Evaluate the benefits of using the React.lazy API for code splitting in a React application. Which of the following is NOT a benefit?
A. Reduces the initial load time by splitting code into bundles.
B. Ensures that all components are loaded upfront.
C. Provides a better user experience by loading components only when needed.
D. Allows for dynamic imports and lazy loading of components.
B

Which method is used to perform enhanced array manipulation in ES6?
A. map()
B. forEach()
C. reduce()
D. filter()
A

Which two recent additions to React allow the complete integration of code splitting into applications?
A. useState() and useEffect()
B. React.memo() and useCallback()
C. lazy() API and Suspense components
D. ReactDOM.createRoot() and BrowserRouter
C

After making a successful fetch request, how would you retrieve the JSON data from the response object?
A. response.data()
B. response.json()
C. response.jsonText()
D. response.body.json()
B

What is a core feature of Next.js that enhances SEO?
A. Real-time data fetching.
B. Client-side routing.
C. Automatic code splitting.
D. Server-side rendering.
D

What is the typical file extension for a React component?
A. .html
B. .css
C. .js or .jsx
D. .php
C

What is the command to start json-server and specify the JSON file to be served?
A. npm start
B. json-server start
C. npx json-server --watch data.json
D. node server.js
C

What is the primary architectural style used in designing web services that follow REST principles?
A. SOAP (Simple Object Access Protocol)
B. RPC (Remote Procedure Call)
C. MVC (Model-View-Controller)
D. RESTful (Representational State Transfer)
D

What is the initial state of a promise?
A. Fulfilled
B. Rejected
C. Pending
D. Resolved
C

What is the main concept behind Tailwind CSS?
A. Component-based architecture.
B. Object-oriented programming.
C. Utility classes.
D. Modular CSS.
C

What is a Component in React?
A. It is a single UI element.
B. It is a JavaScript function.
C. It is an HTML framework.
D. It is a Python class.
B

What is Node.js?
A. A web browser.
B. A programming language.
C. A JavaScript runtime.
D. A CSS framework.
C

What are Higher-Order Components in React?
A. Advanced components.
B. Components written in JavaScript.
C. Components with multiple props.
D. Components with multiple states.
A

What are the key features of React?
A. Two-way data binding.
B. Virtual DOM.
C. SQL database integration.
D. Automatic styling.
B

What does the HTTP response code 404 indicate?
A. OK.
B. Created.
C. Not Found.
D. Internal Server Error.
C

What does REST stand for in the context of web services?
A. Representational State Transfer
B. Remote Execution and State Transfer
C. Resourceful Endpoint and Service Tools
D. Responsive Event-driven Server Technologies
A

What are the three possible states of a Promise as described in the sources?
A. Initial, Running, Completed
B. Starting, Paused, Finished
C. Pending, Fulfilled, Rejected
D. Waiting, Processing, Error
C

What protocol is commonly used for client-server communication over the web?
A. HTTP
B. FTP
C. SMTP
D. SSH
A

What command is used to create a new Next.js project?
A. npx create-react-app
B. npm install next
C. npx create-next-app
D. git clone next.js
C

Which of the following is a utility-first CSS framework that is often used with Next.js?
A. Bootstrap
B. Material-UI
C. Tailwind CSS
D. Bulma
C

Which of the following components can be used to create a slideshow in Bootstrap?
A. .popover
B. .modal
C. .carousel
D. .nav-pills
C

Which Bootstrap component is used for creating a navigation bar?
A. .navbar
B. .navigation
C. .nav
D. .menu
A

Which command is used to install the required dependencies for a React project?
A. npm install
B. git clone
C. create-react-app
D. npm start
A

Which class is used to create a collapsible accordion component in Bootstrap 5?
A. .collapse
B. .accordion
C. .collapsible
D. .collapse-accordion
B

Which class is used to create a form input with a validation state in Bootstrap 5?
A. .form-control
B. .input-group
C. .form-check
D. .form-validation
C

Which feature of ES6 is used to iterate over the elements of an array?
A. Spread syntax
B. Destructuring assignment
C. Arrow functions
D. for...of loop
D

Which ES6 feature allows you to extract values from arrays or objects and assign them to variables?
A. Template literals
B. Arrow functions
C. Destructuring assignment
D. Promises
C

Which HTTP status code indicates a successful response from a server?
A. 200 OK
B. 404 Not Found
C. 500 Internal Server Error
D. 302 Found
A

Which HTTP method is typically used to retrieve data from a server?
A. POST
B. DELETE
C. PUT
D. GET
D

Which method is used to update the state in a class component?
A. setState
B. useState
C. updateState
D. changeState
A

Which React hook is used to manage state in functional components?
A. useEffect
B. useContext
C. useState
D. useReducer
C

Which React-Bootstrap component is used to display a popup dialog with customizable content?
A. Modal
B. Checkbox
C. Button
D. Card
A

Which React concept is used to pass data from a parent component to a child component?
A. State
B. Props
C. Context
D. Ref
B

Which React Router component is commonly used to perform client-side navigation without triggering a full page reload?
A. <Router>
B. <Routes>
C. <Link>
D. <Route>
C

Which prop is used to define default values for props in a functional component in React 18?
A. initialProps
B. props
C. defaultProps
D. defaultValue
C

Which prop is used to provide a unique identifier for elements in a list rendered by a component in React 18?
A. key
B. id
C. index
D. ref
A

Which package can be used to set up a simple JSON-based server in Node.js?
A. express
B. json-server
C. axios
D. nodemon
B

Which is the correct way to consume context in a functional component using the useContext hook?
A. const value = MyContext();
B. const value = useContext(MyContext);
C. const value = this.context(MyContext);
D. <MyContext.Provider useContext={value} />
B

Which Bootstrap class is commonly used to create a responsive navigation bar?
A. .navbar-static
B. .nav-horizontal
C. .navbar
D. .navigation-block
C

Which Bootstrap class provides a fluid container that adapts to all breakpoints?
A. .container-fluid
B. .container
C. .container-lg
D. .container-xs
A

Why would a React developer choose to use Axios?
A. To render React components faster
B. To manage component state globally
C. To make HTTP requests to APIs
D. To build reusable hooks
C

Which hook is typically used alongside useSelector to modify the Redux state?
A. useState
B. useEffect
C. useDispatch
D. useContext
C

Which of the following is NOT considered a popular front-end framework?
A. React
B. Angular
C. Django
D. Vue.js
C

Which method is most commonly used in a React app to fetch data from a server?
A. WebSockets
B. useState()
C. fetch() or axios inside useEffect()
D. console.log() inside render()
C

How do you define a Type validator in PropTypes for a prop called "age" that should be a number?
A. age: PropTypes.string
B. age: PropTypes.number
C. age: PropTypes.bool
D. age: PropTypes.object
B

How can you ensure that a prop is passed as an array with at least one element?
A. By using PropTypes.array.isRequired
B. By creating a custom PropType validator
C. By using PropTypes.arrayOf()
D. By using PropTypes.objectOf()
B

How would you navigate programmatically to a route with a parameter using useNavigate in React Router?
A. navigate("/user.id");
B. navigate("/user?id=123");
C. navigate("/user/123");
D. navigate({ path: "/user/123" });
C

How can you import functions or variables from an ES6 module?
A. By using the import keyword
B. By using the require function
C. By using the export keyword
D. By using the include directive
A

How would you write an arrow function in ES6 that adds two numbers?
A. const add = function(a, b) { return a + b; }
B. const add = (a, b) => { return a + b; }
C. const add = a + b
D. function add(a, b) { return a + b; }
B

How are Class Components written in React?
A. function
B. class
C. const
D. component
B

Fill in the blank in this Bootstrap CSS code to apply a primary button style using React-Bootstrap: <Button ___="primary">Click me</Button>
A. color
B. variant
C. style
D. theme
B

In JSX, how can you embed a JavaScript expression?
A. By adding js: before it
B. By wrapping it in {}
C. By using () only
D. By using {$}
B

In the useEffect hook, how many milliseconds would you wait using setTimeout to perform a side effect after 2 seconds?
A. 2
B. 200
C. 2000
D. 20000
C

In a React function component, how do you access a prop named "name" that is passed from a parent component?
A. this.props.name
B. props.name
C. useState.name
D. getProps().name
B

JSX in React stands for:
A. JavaScript XML
B. Java Syntax Extension
C. JavaScript Executive Extension
D. JSON Extension
A

Suppose a React component renders 50 items in a list. If the component re-renders and adds 10 new items, how many total list items will be displayed?
A. 40
B. 50
C. 60
D. 70
C

Which of the following are true characteristics of React components? Select all that apply.
A. Can be reused across different parts of the application.
B. Manage their own state.
C. Use JSX syntax.
D. Directly manage routing.
ABC

Which of the following are valid ways to initialize and manage state in a functional React component? Choose 2 correct answers.
A. Using the useState hook.
B. Using the useReducer hook.
C. Using a Provider component.
D. Using the useRef hook.
AB

How do you include Tailwind CSS in a project?
A. Link the Tailwind CSS stylesheet in the HTML file.
B. Import the Tailwind CSS file in the JavaScript code.
C. Use the @import rule in a CSS file to import Tailwind CSS.
D. Add Tailwind CSS as a dependency in the package.json file.
CD

How do you import and initialize the useReducer hook in a React component? Select all that apply.
A. const [state, dispatch] = useReducer(reducer, initialState);
B. const [state, setState] = useReducer(reducer, initialState);
C. import React, { useReducer } from "react";
D. import { useReducer } from "react-redux";
AC

Select the code snippet that correctly defines a Functional Component in React. Choose 2 answers.
A. function MyComponent() { return <div>Hello, World!</div>; }
B. const MyComponent = () => { return <div>Hello, World!</div>; }
C. class MyComponent extends React.Component { render() { return <div>Hello, World!</div>; } }
D. const MyComponent = React.createClass({ render() { return <div>Hello, World!</div>; } });
AB

Select the benefits of using React.memo and useMemo in React applications. Choose 2 correct answers.
A. Prevent unnecessary component re-renders
B. Automatically synchronize component state with global state
C. Guarantee object references don't change during re-rendering
D. Simplify the process of context management
AC

What are the key features of Next.js?
A. Server-side rendering, Static Site Generation, Image Optimization, Built-in Routing.
B. Database integration, code debugging, and form validation.
C. CSS styling, version control, and error handling.
D. Package management, command-line interface, and testing framework.
A

Which methods are part of the Lifecycle in Class Components?
A. componentDidMount, componentDidUpdate, componentWillUnmount.
B. render, setState, forceUpdate.
C. constructor, render, componentWillUpdate.
D. componentWillReceiveProps, shouldComponentUpdate, componentDidCatch.
A

Which React-Bootstrap components are used to create navigation menus?
A. Navbars, Navs, Tabs.
B. Alert, Card.
C. Button, Checkbox.
D. Modal, Listbox.
A

What is the purpose of the className attribute in JSX?
A. To define a CSS class for the JSX element
B. To specify the component's class name
C. To define a unique identifier for the element
D. To add inline styles to the element
A

What is event pooling in React?
A. The process of reusing event objects for performance optimization.
B. The process of creating multiple event objects for each event.
C. The process of cleaning up event objects after they are used.
D. The process of handling events in a pool of event handlers.
A

What is Tailwind CSS?
A. A JavaScript framework for building single-page applications.
B. A programming language used for backend development.
C. A utility-first CSS framework for building responsive web interfaces.
D. A database management system for storing CSS styles.
C

What is the purpose of PropTypes?
A. To ensure type safety in React components.
B. To improve performance in React applications.
C. To handle asynchronous operations in React.
D. To enable code reusability in React components.
A

What is the purpose of the initial state parameter in a Redux reducer function?
A. To define the structure of the Redux store
B. To specify the actions that can be dispatched
C. To handle asynchronous operations
D. To define the initial state of the reducer
D

What is the purpose of json-server in the context of setting up a server?
A. To handle user input and interactions.
B. To display the website content.
C. To provide a static web server for serving JSON data.
D. To generate dynamic server responses.
C

What is the purpose of the next/link module in Next.js?
A. It is used for handling form submissions.
B. It provides client-side routing capabilities.
C. It is responsible for server-side rendering.
D. It enables serverless function deployment.
B

What is the purpose of package.json in a Node.js project?
A. It defines the project's dependencies and scripts
B. It contains the source code of the project
C. It configures the Node.js environment
D. It manages the project's build process
A

What is the primary purpose of the tailwind.config.js file in a Tailwind CSS project?
A. To define custom utility classes for HTML elements.
B. To configure and customize the default Tailwind CSS settings.
C. To handle CSS minification for production.
D. To install third-party plugins automatically.
B

What is the role of HTTP response codes in client-server communication?
A. To indicate the status of the HTTP request
B. To manage state within a component
C. To handle server-side logic
D. To manage routing in a React application
A

What is a prop in React used for?
A. It defines the internal state of a component.
B. It specifies the visual appearance of a component.
C. It enables communication and data transfer between components.
D. It handles user interactions and events.
C

What is the purpose of a router in web development?
A. To handle database operations
B. To manage user authentication
C. To handle navigation between different pages
D. To style the user interface
C

What is the purpose of a server in a client-server architecture?
A. To handle user input and interactions.
B. To display the website content.
C. To provide data and resources to clients.
D. To style the user interface.
C

What is React?
A. A programming language
B. A JavaScript library for building user interfaces
C. A database management system
D. A web browser
B

What is the purpose of Code Splitting in web development?
A. To combine multiple code files into a single bundle
B. To improve web performance by loading only necessary code
C. To obfuscate code for security purposes
D. To enhance cross-browser compatibility
B

What is the purpose of a container component in React?
A. To handle UI rendering and user interactions
B. To fetch the data and passing to child component
C. To provide a visual representation of data
D. To encapsulate reusable UI components
B

What is the purpose of the Redux middleware in React applications?
A. To handle asynchronous actions and side effects
B. To define the structure of the Redux store
C. To connect React components to the Redux store
D. To manage component hierarchy
A

What is the purpose of arrow functions in ES6?
A. To bind the value of this inside a function
B. To create self-executing functions
C. To declare asynchronous functions
D. To define functions with a shorter syntax
D

What are PropTypes in React?
A. They are used for creating component classes.
B. They are used for defining the types of component props.
C. They are used for handling events in React.
D. They are used for manipulating the component's state.
B

What does the fallback prop in Suspense represent?
A. The component to display while the lazy component is loading.
B. The component to display when an error occurs during loading
C. The component to display when the lazy component is rendered
D. The component to display when Suspense is not supported
A

What does the npx create-next-app command do?
A. It creates a new React application
B. It creates a new Next.js application
C. It installs Tailwind CSS
D. It creates a new package.json in NextJS
B

What does the catch method do in a promise chain?
A. It handles the resolved value
B. It handles errors
C. It pauses the execution
D. It converts the promise to a synchronous function
B

What does the render method in a React component do?
A. It manages state updates
B. It handles side effects
C. It returns the JSX that describes the UI
D. It fetches data from an API
C

What does the default case in the reducer function do?
A. Resets the state
B. Handles unknown actions
C. Throws an error for unknown actions
D. Returns the current state
D

What happens during the render phase of React's rendering process?
A. The DOM is updated immediately
B. React calculates what to render but doesn't change the DOM yet
C. Side effects like useEffect are executed
D. Event listeners are removed
B

What happens if a prop fails the validation defined by a simple property validator?
A. An error will be thrown during runtime.
B. The prop will be automatically converted to the expected type.
C. The component will continue to function normally.
D. The validation will be bypassed, and the prop will be accepted.
A

What happens when you declare a function with the "async" keyword?
A. It makes the function execute immediately
B. It tells the function to pause until all variables are declared
C. It makes the function return a Promise
D. It prevents any asynchronous code from running
C

What happens if you forget to add key to items in a list rendered with map()?
A. React will not render the list at all.
B. React will display a warning in the console about missing keys.
C. React will automatically assign keys to each item.
D. React will throw an error and stop rendering the component.
B

What would happen if you didn't include the class="form-control" in your <input> element?
A. The input would not be submitted with the form
B. The input would fail client-side validation
C. The input field would revert to the browser's default styles
D. The input field would become non-responsive
C

Which of the following is a feature of Next.js?
A. A CSS framework for styling web applications.
B. A server-side rendering framework for React.
C. A state management library for React applications.
D. A testing framework for JavaScript applications.
B

Which of the following best explains the purpose of the tailwind.config.js file?
A. To configure server-side rendering
B. To define custom utility classes and paths to template files
C. To manage JavaScript dependencies
D. To set up routing for the application
B

Which of the following best describes Lazy Components?
A. Components that are slow to render
B. Components that are loaded asynchronously
C. Components that are reusable across multiple projects
D. Components that are optimized for mobile devices
B

Which of the following is a common use case for using Redux in a React application?
A. Managing authentication and user sessions
B. Styling and layout of React components
C. Handling form validation and input tracking
D. Implementing server-side rendering in React
A

Which of the following is the best use case for React Context?
A. Passing props from a parent to a single child component.
B. Passing data to a component at the same level in the tree.
C. Sharing a theme setting across multiple nested components.
D. Updating a component's local state.
C

Which of the following is used to pass a function from a parent component to a child component?
A. Passing a function as a prop to the child component.
B. Using useState hook in the child component.
C. Using useContext in both parent and child components.
D. Directly accessing the child component's state.
A

Which of the following could cause an Effect to run too frequently?
A. Including all state variables in the dependency array.
B. Not using a dependency array.
C. Including a variable like data that changes often in the dependency array.
D. Omitting the dependency array altogether.
BCD

Which of the following is the correct way to use useSelector to access a value from the Redux store?
A. const value = useSelector((store) => store.value);
B. const value = useSelector((state) => state.value);
C. const value = useSelector((context) => context.value);
D. const value = useSelector((redux) => redux.value);
B

How do you declare multiple routes in React Router?
A. By nesting <Route> components inside each other.
B. By using the <Routes> component instead of <Route>
C. By using the path prop with multiple values in a single <Route> component.
D. By using an array of Route components inside the Routes component.
A

How do you import the useNavigate hook from React Router?
A. import { useNavigate } from "react-router";
B. import { useNavigate } from "react-router-dom";
C. import { useNavigate } from "react-router-native";
D. import { useNavigate } from "react-navigation";
B

How do you create a modal in Bootstrap?
A. By using the <modal> HTML element.
B. By applying the modal class to the container element.
C. By using the .modal class along with the data-bs-toggle="modal" attribute.
D. By using JavaScript to dynamically create and show modal elements.
C

How do you create a new Next.js project?
A. Use the create-next-app command-line tool.
B. Install the Next.js package globally with npm.
C. Clone the Next.js starter template from GitHub.
D. Use the npm init command and manually configure the project.
A

How do you create a responsive grid layout using Bootstrap?
A. By using the <div class="grid"> element.
B. By applying the .responsive-grid class to the container element.
C. By using the .row and .col-* classes to create rows and columns.
D. By manually specifying the width of each element using CSS.
C

How do you install Tailwind CSS in a project?
A. Use the npm install tailwindcss command.
B. Include the Tailwind CSS CDN in the HTML file.
C. Install Tailwind CSS globally with npm.
D. Use the npx tailwindcss init command.
A

How can you access Chrome DevTools?
A. By pressing F12 or right-clicking and selecting "Inspect"
B. By installing a Chrome extension.
C. By typing "chrome://devtools" in the address bar.
D. By opening the Chrome menu and selecting "DevTools."
A

How can you conditionally render content in JSX?
A. By using the if statement
B. By using the for loop
C. By using the ternary operator (condition ? trueContent : falseContent)
D. By using the switch statement
C

How can you create a new Git repository?
A. By running "git init" in the project directory
B. By adding a remote repository URL
C. By cloning an existing repository
D. By committing changes using "git commit -m"
A

How can you set up Git for version control?
A. By running "npm install git"
B. By downloading Git from the official website
C. By using a Git GUI client
D. By configuring Git settings in Visual Studio Code
B

How can you configure Tailwind CSS in a Next.js project?
A. By importing a CSS file directly in the component
B. By installing the Tailwind CSS package and creating a configuration file
C. By using a CDN link in the HTML file
D. By installing a Tailwind CSS plugin for Next.js
B

Why should you avoid using too many lazy components in your application?
A. Because it results in multiple HTTP requests, slowing down the application.
B. Because it decreases the performance by loading everything upfront.
C. Because it makes the code difficult to debug.
D. Because it affects the layout and styling of components.
A

How can the useEffect hook be optimized for cleanup actions?
A. By passing an empty array as the second argument
B. By using a class-based component
C. By calling it after every render
D. By returning a cleanup function that removes event listeners
D

How do you declare a route in React Router?
A. Using <Link path="/" element={<Home />} />
B. Using <Route path="/" element={<Home />} />
C. Using <Routes path="/" element={<Home />} />
D. Using <Context path="/"></Context>
B

How can you optimize performance when using Hooks in React?
A. By using the useMemo and useCallback Hooks.
B. By avoiding unnecessary re-renders with the memo Hook.
C. By using the useLayoutEffect Hook instead of useEffect.
D. By using the useDebugValue Hook for debugging purposes.
A

How can you install React-Bootstrap in your ReactJS project?
A. By using npm or yarn to install the package.
B. By downloading the React-Bootstrap files from a website.
C. By copying and pasting the React-Bootstrap code into your project.
D. By using a CDN link to include React-Bootstrap in your HTML file.
A

How can you create a new React application using Create React App?
A. By running "npx create-react-app my-app"
B. By downloading a ZIP file from the official website
C. By using an online code editor
D. By cloning a Git repository
A

How can route parameters be defined in React Router?
A. By using the params prop in the <Route> component
B. By accessing them directly from the URL
C. By using the path prop with placeholders in the <Route> component
D. By using the match object passed to the component
C

How would you create a custom Hook in React?
A. By defining a function that uses other built-in Hooks.
B. By extending the React.Component class.
C. By wrapping a class component with a functional component.
D. By using the createCustomHook() function.
A

Why use React-Bootstrap?
A. It is easier to manage the state as updates are made using React's state.
B. It is faster and more efficient than other UI libraries.
C. It is compatible with all browsers and devices.
D. It is developed by Facebook and has a large community support.
A

Why are frameworks like React, Angular, or Vue popular among developers?
A. They only work with static content
B. They allow building dynamic, responsive, and efficient web applications
C. They focus on database management
D. They are used exclusively for creating server-side logic
B

In Next.js, what mechanism primarily determines the routes in an application?
A. Explicit configuration in a central routes.json file.
B. File-system routing, where routes are determined by the structure of files
C. Dynamic route declarations using React Router
D. Server-side API endpoints only
B

In JSX, which of the following is correct?
A. You must always wrap JSX in a single root element
B. You can use multiple root elements without any wrapping
C. JSX tags can be self-closing only for non-void elements
D. JSX does not support attributes like className
A

Compare the use of Redux and Flux for state management. Which statement is true?
A. Redux uses multiple stores, while Flux uses a single store.
B. Flux uses multiple stores, while Redux uses a single store.
C. Both Redux and Flux use multiple stores.
D. Both Redux and Flux use a single store.
B

Compare the use of Container and Container fluid in React-Bootstrap. Which statement is accurate?
A. Container is always 100% wide.
B. Container fluid is fixed-width at all breakpoints.
C. Container fluid is 100% wide at all breakpoints.
D. Container is 100% wide at all breakpoints.
C

To specify that a property must be provided and must have a specific type in PropTypes, what is appended to the type validator?
A. .optional
B. .default
C. .isRequired
D. .mustExist
C

What is the purpose of the fluid prop in React-Bootstrap's Container component?
A. It makes the container take up the entire width of the viewport.
B. It enables the container to display text.
C. It changes the container's background color.
D. It makes the container fixed width.
A

What is the main advantage of using Hooks in React?
A. Hooks allow React to maintain internal state without classes
B. Hooks simplify sharing functionality between components
C. Hooks remove the need for functional components
D. Hooks only support stateful components
A

What is the primary purpose of Next.js?
A. To enable server-side rendering and generate static websites.
B. To manage state in React applications.
C. To provide a UI component library.
D. To create database schemas.
A

What is the purpose of the rest parameter in ES6?
A. To declare variables in the global scope.
B. To accept an indefinite number of arguments as an array.
C. To handle asynchronous tasks.
D. To destructure arrays.
B

What is the purpose of json-server in client-server communication?
A. To set up a simple static web server that serves data to clients.
B. To encrypt data during transmission between client and server.
C. To manage client authentication and session data.
D. To provide a full-featured backend for the React application.
A

What is the purpose of a package.json file in a Node.js project?
A. To store application data
B. To define routes for the web application
C. To serve as documentation for project dependencies and their versions
D. To compile JavaScript code
C

What is the primary purpose of event handlers in React?
A. To manage state within a component
B. To respond to user interactions like clicking, hovering, and focusing
C. To handle server-side logic
D. To manage routing in a React application
B

What is Redux Thunk used for?
A. To manage asynchronous actions in Redux.
B. To log every action dispatched to the Redux store.
C. To split reducers into simpler functions.
D. To handle side effects in React components.
A

What is the benefit of using Code Splitting and lazy components for web performance?
A. Enhanced security
B. Handle load-time User Experience (UX)
C. Smaller bundle sizes
D. Handle CORS
C

What is the main purpose of the Bootstrap framework in web development?
A. To manage back-end data
B. To provide pre-designed responsive layout components and styles for front-end development
C. To perform server-side scripting
D. To enable database management in web applications
B

What is a key differentiating characteristic of Tailwind CSS compared to traditional CSS frameworks like Bootstrap?
A. It provides a comprehensive set of pre-built components for rapid development
B. It enforces strict design patterns to maintain visual consistency
C. It offers a huge list of utility CSS classes, providing more freedom for custom designs
D. It relies heavily on JavaScript for styling and layout management
C

What is a Higher-Order Component (HOC) in React?
A. A component that has a higher visual hierarchy than others.
B. A function that takes a component as an argument and returns a new component with enhanced functionality.
C. A component that only renders other components without any logic of its own.
D. A built-in React component for advanced routing.
B

What is the primary goal of decoupling route declarations in a React Router application?
A. To improve the organization and maintainability of the code by separating routes into larger, more manageable modules.
B. To enhance the security of the application by separating sensitive routes from public routes.
C. To enable the use of dynamic routing and nested routes in the application.
D. To enhance code organization and maintainability by separating routes into smaller, more manageable modules.
D

What is JSX in React primarily used for?
A. Defining server-side logic and database queries
B. Describing the user interface structure and embedding HTML-like markup directly within JavaScript code.
C. Managing application-wide state using a global store
D. Optimizing image loading and asset management
B

What is async/await in JavaScript?
A. It is a JavaScript feature that makes asynchronous code look and behave like synchronous code.
B. It is used to send data to a server without blocking the UI.
C. It is a way to handle callback functions.
D. It is a method to manage state in React components.
A

What is the main feature of Tailwind CSS compared to other CSS frameworks?
A. It provides pre-designed UI components and themes
B. It uses a utility-first approach, allowing developers to build custom designs using small utility classes
C. It provides pre-built JavaScript components
D. It is a framework specifically for mobile development
B

What is the role of the BrowserRouter component in React Router?
A. To define a route in the application
B. To wrap the entire application and enable routing using the HTML5 History API
C. To handle form submissions
D. To manage state within a component
B

What is React-Bootstrap?
A. It combines the flexibility and power of the Bootstrap framework with the dynamic nature of React.
B. It is a programming language used for back-end development.
C. It is a database management system for React applications.
D. It is a version control system for React projects.
A

What is the difference between the render() method and the commit() method in React?
A. The render() method defines the component's structure, while the commit() method handles side effects.
B. The render() method handles events, while the commit() method defines the component's structure.
C. The render() method is called before the component is mounted, while the commit() method is called after the component is mounted.
D. There is no commit() method in React.
A

What is the purpose of React Hooks?
A. Hooks are functions that are part of the React library.
B. React didn't have a simple way to share reusable functionality between components.
C. Solutions such as higher-order components and render props.
D. Using classes to be unnecessarily confusing and verbose.
B

What is the purpose of the componentDidMount method in React?
A. It is called after the component's render method has been executed.
B. It is called before the component's render method is executed.
C. It is called when the component is about to be unmounted from the DOM.
D. It is called when the component is about to be updated and re-rendered.
A

What is the difference between controlled and uncontrolled components in React-Bootstrap?
A. Controlled components are stateless and rely on external state management, while uncontrolled components manage their own state internally.
B. Controlled components have predefined behavior and cannot be customized, while uncontrolled components offer more flexibility.
C. Controlled components are faster and more efficient than uncontrolled components.
D. Uncontrolled components are recommended for complex forms, while controlled components are suitable for simple forms.
A

What is the advantage of event pooling in React?
A. It reduces memory usage by reusing event objects.
B. It improves event handling performance by creating new event objects for each event.
C. It simplifies event handling by providing a pool of event handlers.
D. It allows for better management of event contexts.
A

What is the purpose of the exact prop in a Route component?
A. It specifies the component to render for a specific route.
B. It ensures that the route matches the URL exactly, without partial matching.
C. It defines a redirect to another route.
D. It enables code splitting for the route component.
B

What is the main purpose of the await keyword within an async function?
A. To return a new Promise object.
B. To immediately execute the next line of code without waiting.
C. To pause the execution of the async function until the Promise it's waiting for is resolved or rejected.
D. To define a synchronous block of code
C

What is the primary purpose of a router in a web application?
A. To manage state within a component
B. To respond to a URL based on a set of route handler declarations
C. To handle server-side logic
D. To manage routing in a React application
B

What is the advantage of using Axios over fetch?
A. Axios has better support for handling requests and responses.
B. Axios requires less boilerplate code.
C. Axios is faster than fetch for all types of HTTP requests.
D. Axios does not support promises.
B

What is the core principle of Redux?
A. Single source of truth and unidirectional data flow.
B. Multiple sources of truth for each component.
C. State is mutable and can be directly modified.
D. State is only updated using the useState hook.
A

What is the difference between the HTTP response codes 401 and 403?
A. 401 the request is missing valid authentication credentials, while 403 the server refuses to authorize.
B. 401 the server encountered an internal error, while 403 means the requested resource was not found.
C. 401 the request was successful, while 403 means the request was not modified.
D. 401 and 403 are interchangeable and have the same meaning.
A

What happens when you use the xs prop on a Col component in React-Bootstrap?
A. The column will only have its width defined on extra-large screens.
B. The column will only have its width defined on extra-small screens, and larger sizes will ignore it
C. The column will have its width defined on extra-small screens and will apply to larger sizes if no specific breakpoint is defined.
D. The xs prop does not exist in React-Bootstrap
C

What are the differences between useState and useReducer Hooks in React?
A. useState is used for managing simple state, while useReducer is used for complex state and state transitions.
B. useState is a built-in Hook, while useReducer is a custom Hook.
C. useState is used for class components, while useReducer is used for functional components.
D. useState is for local component state, while useReducer is for global application state.
A

What does the useNavigate hook return?
A. An object with navigation methods.
B. A navigate function that can be used to navigate to a new location
C. A boolean indicating navigation status
D. A string representing the current route.
B

What happens if a component tries to consume a context that has not been provided higher up in the component tree?
A. The component receives a default value specified in the context definition.
B. The component throws an error.
C. The component receives an empty object as the context value.
D. The component receives null as the context value.
A

What advantage does using a reducer function have over directly managing state with useState?
A. It makes code shorter and less complex for simple state updates.
B. It consolidates all state logic in one place, which is beneficial for components with complex state updates.
C. It automatically optimizes rendering performance.
D. It only works with global state, not local component state.
B

What unique capability does Redux Thunk middleware provide for action creators?
A. It allows action creators to return an immutable state object
B. It enables action creators to directly modify the global state
C. It allows action creators to return a function instead of a plain action object.
D. It automatically dispatches actions without needing a dispatch function.
C

Which of the following best describes a reducer in Redux?
A. A function that triggers actions in response to user interactions
B. A component that manages the application's state
C. A function that specifies how the application's state changes in response to actions.
D. A middleware that handles asynchronous operations in Redux
C

Which of the following statements about reducers in Redux is true?
A. Reducers can only be used with React class components, not functional components.
B. Reducers are responsible for dispatching actions.
C. Reducers should have side effects such as API calls or database interactions.
D. Reducers must be pure functions with no side effects.
D

Which of the following statements about Redux selectors is true?
A. Selectors are responsible for dispatching actions.
B. Selectors are used to modify the Redux store directly.
C. Selectors are pure functions that derive specific data from the Redux store.
D. Selectors are only used in React class components.
C

How are PropTypes typically integrated into a functional React component?
A. By declaring them within the component's return statement.
B. By installing react-proptypes and using this.props.propTypes inside the function.
C. By defining a propTypes property on the component function itself, usually after its declaration, to specify prop type definitions.
D. PropTypes cannot be used with functional components.
C

How can you render JSX in a React component?
A. By using the renderJSX() function.
B. By passing the JSX as a string to the ReactDOM.render() function.
C. By enclosing the JSX in curly braces () within the component's render() method.
D. By using the React.render() function.
C

How can you perform initialization and cleanup actions using the useEffect Hook?
A. By returning a cleanup function from the useEffect callback.
B. By passing an empty dependency array as the second parameter to useEffect.
C. By wrapping the useEffect callback in a try-catch block.
D. By using the useCleanupEffect Hook instead of useEffect.
A

How can you safely remove an unnecessary dependency from an Effect?
A. Remove all dependencies from the array.
B. Use an empty dependency array [] to ensure the Effect only runs once.
C. Keep all dependencies and accept performance issues.
D. Replace useEffect with useLayoutEffect.
B

How can you configure Git with your name and email address?
A. By running "git config --global user.name 'Your Name'" and "git config --global user.email 'Your Email'"
B. By creating a .gitignore file.
C. By committing changes using "git commit -m".
D. By pushing changes to a remote repository.
A

How can you use a fragment in JSX?
A. By wrapping the JSX elements with <div> tags.
B. By using the shorthand syntax <></> or <React.Fragment>...</React.Fragment>.
C. By creating a separate component for each element.
D. By using the fragment() function.
B

How do you create a dynamic route in Next.js?
A. By using useRouter() and manually specifying the route.
B. By creating a file with square brackets in the pages directory, e.g., [id].js.
C. By defining a route in the next.config.js file.
D. By using React Router's Route component.
B

How do you create a tooltip in Bootstrap?
A. By using the <tooltip> HTML element.
B. By applying the tooltip class to the container element.
C. By using the data-bs-toggle="tooltip" attribute along with the title attribute.
D. By using JavaScript to dynamically create and show tooltip elements.
C

How does the Grid component in React-Bootstrap help in creating a responsive layout?
A. Defines a flexible grid system with rows and columns that auto-adjust by screen size
B. Provides pre-built responsive layouts
C. Auto resizes and repositions elements
D. Aligns elements vertically and horizontally
A

How does using Suspense with lazy components enhance user experience?
A. Prevents interaction until all components load
B. Displays a loading indicator while lazy component loads
C. Improves responsiveness and perceived performance
D. Removes need for error handling in async rendering
B

How does Next.js's server-side rendering capability primarily benefit web applications?
A. By offloading all rendering tasks to the client's browser
B. By eliminating the need for any server infrastructure
C. By resulting in faster initial page load times and better search engine optimization (SEO)
D. By simplifying complex client-side state management.
C

How does the Bootstrap grid system help in designing responsive websites?
A. Provides pre-designed website templates
B. Auto-adjusts font sizes
C. Adapts layout to screen sizes using 12-column responsive grid
D. Optimizes website for search engines
C

How does Tailwind CSS's utility-first approach differ from traditional CSS frameworks that offer pre-designed components?
A. Tailwind CSS provides a set of pre-designed components that can be customized with utility classes, while traditional frameworks offer more flexibility in creating custom designs.
B. Tailwind CSS provides low-level utility classes for styling, while traditional frameworks offer pre-built components with limited customization.
C. Tailwind CSS relies on JavaScript to generate styles dynamically, while traditional frameworks use static CSS files.
D. Tailwind CSS is primarily used for server-side rendering, while traditional frameworks are better suited for client-side rendering.
B

How would you combine fluid and pixel widths behaviors in a grid layout using Bootstrap 5?
A. Use .container-fluid for entire layout
B. Combine .container with .col-fluid
C. Use fixed-width class with media query
D. Use .container-md to apply responsive container at md breakpoint
D

When writing a custom PropTypes validator function, what should it return upon successful validation and upon failure?
A. It should return true for success and false for failure.
B. It should return the validated value for success and undefined for failure.
C. It should return null for success and an Error object for failure.
D. It should return a success message string for success and an error message string for failure.
C

When should the useReducer() Hook be used instead of useState()?
A. When components require simple, independent state values.
B. When performing initialization and cleanup actions
C. When there is complex state logic, several sub-values, or when the upcoming state depends on the previous state
D. When sharing data across a component hierarchy without prop drilling
C

When declaring routes in React Router, what are Routes and Route components used for?
A. Routes is for styling, and Route is for defining event handlers.
B. Routes is for managing state, and Route is for rendering components.
C. Routes is used to wrap Route components and define the application's routes, while Route is used to define an individual route.
D. Routes is for client-side logic, and Route is for server-side logic
C

Analyze the differences between Flux and MVC architectures. Which statement is true?
A. Flux enforces unidirectional data flow, while MVC allows bidirectional data flow
B. MVC enforces unidirectional data flow, while Flux allows bidirectional
C. Both Flux and MVC enforce unidirectional
D. Both Flux and MVC allow bidirectional
A

Assess the impact of using inline event handlers in React components. Which statement is true?
A. Inline event handlers improve performance by reducing the number of function calls
B. Inline event handlers can lead to performance issues due to the creation of new functions on each render
C. Inline event handlers are the only way to handle events in React
D. Inline event handlers are more secure than named event handlers
B

Create a React component that displays a list of items passed as props. Which approach would you use?
A. Use a functional component with the map method.
B. Use a class component with componentDidMount.
C. Use a higher-order component.
D. Use a lifecycle method to fetch data.
A

Can you define multiple Type and Value validators for a single prop in PropTypes?
A. Yes, you can define multiple validators for a prop.
B. No, you can only define one validator for a prop.
C. Yes, but it's not recommended for code readability.
D. No, Type and Value validators cannot be used together.
A

In Redux, how do you update the state immutably?
A. By directly modifying the state object.
B. By using the setState() method.
C. By using the splice() method.
D. By creating a new copy of the state object.
D

In React, what is the role of Suspense?
A. To handle errors in asynchronous rendering.
B. To control the rendering of lazy components.
C. To manage state in functional components.
D. To handle network requests and API calls.
B

In React Router, how do you define a nested route structure within a parent component?
A. Utilize the <Switch> component to handle nested routes
B. Implement a routing table using an array of route objects
C. Use the <Route> component with nested <Route> components
D. Direct routes using query parameters in URL path names
C

In Redux, when should you use combineReducers?
A. When you want to connect the Redux store to a React component.
B. When you want to manage actions in the Redux application.
C. When you want to split a reducer into smaller reducers.
D. When you want to use Redux DevTools to track the state.
C

Next.js is primarily used for:
A. Styling static websites
B. Creating server-rendered or statically generated React applications
C. Managing back-end databases
D. Handling real-time communication
B

One of the main characteristics of React-Bootstrap is "Component-Based". What does this imply?
A. React-Bootstrap only provides components for CSS styling
B. It enables developers to create modular and reusable UI elements as React components.
C. It requires custom JavaScript to be written for each component.
D. Components can only be used once in the application
B

What is the main purpose of code splitting in a React application?
A. To make the code easier to read
B. To bundle all components into a single large file
C. To reduce the initial load time by loading parts of the app only when needed
D. To split CSS and JavaScript into separate files
C

What is the main purpose of React in modern web development, and what type of applications does it best support?
A. It is mainly designed for handling backend logic and database management
B. React helps build interactive user interfaces, especially for SPAs.
C. React primarily functions as a server-side rendering engine for web applications.
D. It is mainly a mobile development framework and not suitable for web applications.
B

What is one major benefit of using front-end frameworks like React or Vue.js?
A. They eliminate the need for HTML
B. They allow for faster development by providing pre-built components
C. They only work on mobile applications
D. They focus solely on server-side development
B

What is the purpose of React.Fragment or shorthand <> </> in React? (Select all that apply)
A. Fragments allow you to group multiple elements without adding an extra node to the DOM.
B. Fragments allow you to provide CSS styling to multiple elements.
C. Fragments allow you to handle state management in React.
D. Fragments are particularly useful for avoiding unnecessary <div> elements, which can clutter your markup.
AD

What is one of the primary benefits of using Promises in JavaScript for asynchronous operations?
A. It allows direct modification of the DOM
B. It makes synchronous code asynchronous.
C. It helps solve the "callback hell" problem by allowing chains of asynchronous operations.
D. It ensures data is always instantaneously available.
C

What is the primary purpose of Redux Thunk in a React-Redux application?
A. To connect React components directly to the Redux store without the need for action creators or reducers.
B. To provide a way to store and manage the application's state on the server-side, separate from the client-side state.
C. To enable creating action creators that return functions (for asynchronous operations like API calls) instead of plain action objects.
D. To automatically generate the code for action creators and reducers based on the application's data structure.
C

What is a key characteristic of network operations in client-server communication that developers must recognize?
A. Data is always instantaneously available.
B. Network operations inherently cause unexpected delays and are asynchronous
C. Communication is always synchronous and predictable.
D. Client-server communication primarily focuses on local data storage.
B

What is the main role of a reducer in Redux?
A. To fetch data from APIs
B. To dispatch actions to components
C. To update the store by returning the new state based on the action received
D. To create components dynamically
C

Evaluate differences between Fetch API and Axios. Which statement is true?
A. Fetch auto handles JSON, Axios requires manual parsing
B. Axios provides built-in support for request/response interception, Fetch does not
C. Fetch supports auto retries, Axios does not
D. Axios built into browsers, Fetch needs library
B

Explain the difference between using async/await and traditional Promises (.then and .catch) for handling asynchronous operations in JavaScript.
A. async/await makes async code more readable, while Promises use a callback-based approach.
B. async/await is used for synchronous operations, while Promises are used for asynchronous operations.
C. async/await can only be used with the window.fetch API, while Promises can be used with any asynchronous function.
D. async/await is a newer feature that completely replaces Promises in modern JavaScript.
A

In React 18, how can you pass additional arguments to an event handler?
A. Using event.target
B. Using event.data
C. Using bind method when binding the handler
D. Not supported
C

In React 19, how can you pass additional arguments to an event handler?
A. By using the event.target property
B. By using the event.data property
C. By using the bind method when binding the event handler
D. React 19 does not support passing additional arguments to event handlers
C

The purpose of JSX is to:
A. Make JavaScript code more readable by embedding HTML in JavaScript
B. Make JavaScript run faster
C. Encrypt HTML elements
D. Handle server-side logic
A

[Using Bootstrap] How does the for attribute in the <label> element work, and why is it important in forms?
A. It styles the label based on form control types
B. It links the label to the form control via the control's id, improving accessibility
C. It is used for adding inline form validation
D. It triggers JavaScript events when the form is submitted
B

Understand the role of the render method in JSX. Which of the following best explains its use?
A. The render method is used to compile JSX into JavaScript.
B. The render method is used to convert JSX into HTML and render it to the DOM.
C. The render method is used to manage state in React components.
D. The render method is used to handle routing in React applications.
B

According to Redux's main principles, how should changes to the application's state be made?
A. Directly by modifying the state object in any component.
B. Through setters that directly update the state.
C. Only through actions, with changes made by pure functions that return a new state without mutating the previous one.
D. By calling setState() on the Redux store directly.
C

Can PropTypes be used for both functional and class components?
A. Yes, PropTypes can be used in both types of components
B. No, only functional
C. No, only class
D. Yes, but syntax differs
A

Describe the concept of fragments in JSX. Which best explains their purpose?
A. Group multiple elements without adding extra nodes to the DOM
B. Used to style JSX elements
C. Used to manage state
D. Used to handle async ops
A

If you wanted to customize the size of the form controls, what would you do in Bootstrap 5?
A. Set width in inline CSS
B. Use the rows and cols attributes for all form elements
C. Use the size variants of the form-control class, like form-control-sm or form-control-lg
D. Apply custom JavaScript functions
C
