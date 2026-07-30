/** Ngân hàng câu hỏi: FER (287 câu) — load on demand */
(function (global) {
    const bank = [
        {
            "id": 1,
            "text": "Which action dispatch would correctly increment the count in the reducer setup?",
            "options": [
                "dispatch({ type: 'add' });",
                "dispatch({ action: 'increment' });",
                "dispatch({ type: 'increment' });",
                "dispatch({ command: 'increment' });"
            ],
            "answer": 2,
            "explanation": "dispatch({ type: 'increment' });",
            "keywords": "Q: Which action dispatch would correctly increment the count | A: dispatch({ type: 'increment' });"
        },
        {
            "id": 2,
            "text": "Which component is typically used in conjunction with React.lazy to handle the loading state?",
            "options": [
                "<ErrorBoundary>",
                "<Suspense>",
                "<LoadingComponent>",
                "<Provider>"
            ],
            "answer": 1,
            "explanation": "<Suspense>",
            "keywords": "Q: Which component is typically used in conjunction with | A: <Suspense>"
        },
        {
            "id": 3,
            "text": "Which component is used to create a submit button in React-Bootstrap?",
            "options": [
                "<Button.Submit>",
                "<Form.Submit>",
                "<Form.Button>",
                "<Button>"
            ],
            "answer": 2,
            "explanation": "<Form.Button>",
            "keywords": "Q: Which component is used to create a submit | A: <Form.Button>"
        },
        {
            "id": 4,
            "text": "Which component is used to create an input field in React-Bootstrap?",
            "options": [
                "<Form.Text>",
                "<Form.Control>",
                "<Form.Caption>",
                "<Form.Title>"
            ],
            "answer": 1,
            "explanation": "<Form.Control>",
            "keywords": "Q: Which component is used to create an input | A: <Form.Control>"
        },
        {
            "id": 5,
            "text": "How do you dispatch an action using the dispatch function?",
            "options": [
                "dispatch('increment');",
                "dispatch({ action: 'increment' });",
                "dispatch({ 'increment' });",
                "dispatch({ type: 'increment' });"
            ],
            "answer": 3,
            "explanation": "dispatch({ type: 'increment' });",
            "keywords": "Q: you dispatch an action using the dispatch function? | A: dispatch({ type: 'increment' });"
        },
        {
            "id": 6,
            "text": "How do you access props in a functional component in React?",
            "options": [
                "const Child = (props) => { return <div>{props.name}</div>; };",
                "const Child = () => { return <div>{this.props.name}</div>; };",
                "const Child = (prop) => { return <div>{prop.name}</div>; };",
                "const Child = () => { return <div>{props.name}</div>; };"
            ],
            "answer": 0,
            "explanation": "const Child = (props) => { return <div>{props.name}</div>; };",
            "keywords": "Q: you access props in a functional component in | A: const Child = (props) =>"
        },
        {
            "id": 7,
            "text": "How do you define a lazy component in React?",
            "options": [
                "const MyComponent = React.lazy(() => import(\"./MyComponent\"));",
                "const MyComponent = lazy(() => import(\"./MyComponent\"));",
                "const MyComponent = import(\"./MyComponent\").lazy();",
                "const MyComponent = React.importLazy(\"./MyComponent\");"
            ],
            "answer": 0,
            "explanation": "const MyComponent = React.lazy(() => import(\"./MyComponent\"));",
            "keywords": "Q: you define a lazy component in React? | A: const MyComponent = React.lazy(() => import(\"./MyComponent\"));"
        },
        {
            "id": 8,
            "text": "How do you create navigation links in React Router?",
            "options": [
                "Using the <Switch> component",
                "Using the <Link> component",
                "Using the <Route> component",
                "Using the <Navigate> component"
            ],
            "answer": 1,
            "explanation": "Using the <Link> component",
            "keywords": "Q: you create navigation links in React Router? | A: Using the <Link> component"
        },
        {
            "id": 9,
            "text": "How can you define a route with multiple parameters, such as userId and postId?",
            "options": [
                "<Route path=\"/user/userId/post/postId\" component={UserPost} />",
                "<Route path=\"/user/:userId/:postId\" component={UserPost} />",
                "<Route path=\"/user/:userId/post/:postId\" component={UserPost} />",
                "<Route path=\"/user?userId?post?postId\" component={UserPost} />"
            ],
            "answer": 2,
            "explanation": "<Route path=\"/user/:userId/post/:postId\" component={UserPost} />",
            "keywords": "Q: you define a route with multiple parameters, such | A: <Route path=\"/user/:userId/post/:postId\" component={UserPost} />"
        },
        {
            "id": 10,
            "text": "How do you define a dynamic route parameter in React Router?",
            "options": [
                "<Route path=\"/users/:userId\" component={UserDetail} />",
                "<Route path=\"/users\" component={UserDetail} />",
                "<Route path=\"/users/{userId}\" component={UserDetail} />",
                "<Route path=\"/users?userId=:userId\" component={UserDetail} />"
            ],
            "answer": 0,
            "explanation": "<Route path=\"/users/:userId\" component={UserDetail} />",
            "keywords": "Q: you define a dynamic route parameter in React | A: <Route path=\"/users/:userId\" component={UserDetail} />"
        },
        {
            "id": 11,
            "text": "How do you create active navigation links in React Router?",
            "options": [
                "Using the <Link> component",
                "Using the <Route> component",
                "Using the <NavLink> component",
                "Using the <Switch> component"
            ],
            "answer": 2,
            "explanation": "Using the <NavLink> component",
            "keywords": "Q: you create active navigation links in React Router? | A: Using the <NavLink> component"
        },
        {
            "id": 12,
            "text": "How can you access the state and dispatch from Context in a child component?",
            "options": [
                "const [state, dispatch] = useContext(CountContext);",
                "const { state, dispatch } = CountContext;",
                "const { state, dispatch } = useContext(CountContext);",
                "const state = CountContext.state;"
            ],
            "answer": 2,
            "explanation": "const { state, dispatch } = useContext(CountContext);",
            "keywords": "Q: you access the state and dispatch from Context | A: const { state, dispatch } = useContext(CountContext);"
        },
        {
            "id": 13,
            "text": "How can you declare PropTypes for a prop that is an array of integers?",
            "options": [
                "prop: PropTypes.arrayOf(PropTypes.number)",
                "prop: PropTypes.arrayOf(PropTypes.integer)",
                "prop: PropTypes.array(PropTypes.number)",
                "prop: PropTypes.array(PropTypes.integer)"
            ],
            "answer": 0,
            "explanation": "prop: PropTypes.arrayOf(PropTypes.number)",
            "keywords": "Q: you declare PropTypes for a prop that is | A: prop: PropTypes.arrayOf(PropTypes.number)"
        },
        {
            "id": 14,
            "text": "How would you use the useEffect Hook to fetch data from an API in a React component?",
            "options": [
                "useEffect(fetchData, []);",
                "useEffect(() => fetchData(), [fetchData]);",
                "useEffect(() => fetchData());",
                "useEffect(() => fetchData(), []);"
            ],
            "answer": 3,
            "explanation": "useEffect(() => fetchData(), []);",
            "keywords": "Q: How would you use the useEffect Hook to | A: useEffect(() => fetchData(), []);"
        },
        {
            "id": 15,
            "text": "How would you use the useState Hook to manage a counter in a React component?",
            "options": [
                "const [count, setCount] = useState(0);",
                "const count = useState(0);",
                "const count = useState()[0];",
                "const [count, setCount] = useState();"
            ],
            "answer": 0,
            "explanation": "const [count, setCount] = useState(0);",
            "keywords": "Q: How would you use the useState Hook to | A: const [count, setCount] = useState(0);"
        },
        {
            "id": 16,
            "text": "How would you use the useContext Hook to access a shared theme in a React component?",
            "options": [
                "const theme = useContext(ThemeContext);",
                "const { theme } = useContext(ThemeContext);",
                "const { theme } = useContext(ThemeContext.Provider);",
                "const theme = useContext(ThemeContext.Provider);"
            ],
            "answer": 0,
            "explanation": "const theme = useContext(ThemeContext);",
            "keywords": "Q: How would you use the useContext Hook to | A: const theme = useContext(ThemeContext);"
        },
        {
            "id": 17,
            "text": "How do you define a route that matches /users/123 and passes 123 as a parameter to the component?",
            "options": [
                "<Route path=\"/users?id\" element={<User />} />",
                "<Route path=\"/users/:id\" element={<User />} />",
                "<Route path=\"/users/{id}\" element={<User />} />",
                "<Route path=\"/users/#id\" element={<User />} />"
            ],
            "answer": 1,
            "explanation": "<Route path=\"/users/:id\" element={<User />} />",
            "keywords": "Q: you define a route that matches /users/123 and | A: <Route path=\"/users/:id\" element={<User />} />"
        },
        {
            "id": 18,
            "text": "How would you extract and display multiple parameters, userId and postId, in a component?",
            "options": [
                "const { userId, postId } = useParams();",
                "const userId = useParams(\"userId\"); const postId = useParams(\"postId\");",
                "const userId = route.params.userId; const postId = route.params.postId;",
                "const { userId } = useParams(); const { postId } = useParams();"
            ],
            "answer": 0,
            "explanation": "const { userId, postId } = useParams();",
            "keywords": "Q: How would you extract and display multiple parameters, | A: const { userId, postId } = useParams();"
        },
        {
            "id": 19,
            "text": "How would you navigate back to the previous page using the useNavigate hook?",
            "options": [
                "navigate(\"/back\");",
                "navigate(\"back\");",
                "navigate(-1);",
                "navigate(\"/previous\");"
            ],
            "answer": 2,
            "explanation": "navigate(-1);",
            "keywords": "Q: How would you navigate back to the previous | A: navigate(-1);"
        },
        {
            "id": 20,
            "text": "Can you provide an example of a custom property validator in React that checks if a prop is a positive number?",
            "options": [
                "value: PropTypes.positiveNumber",
                "value: function (props, propName, componentName) { /* custom check */ }",
                "value: PropTypes.number && value > 0",
                "value: PropTypes.number && value >= 0"
            ],
            "answer": 1,
            "explanation": "value: function (props, propName, componentName) { /* custom check */ }",
            "keywords": "Q: Can you provide an example of a custom | A: value: function (props"
        },
        {
            "id": 21,
            "text": "Write a custom property validator in React for a prop called \"email\" that should be a valid email address.",
            "options": [
                "email: PropTypes.string",
                "email: PropTypes.email",
                "email: PropTypes.string.isRequired",
                "email: function (props, propName, componentName) { /* validate email */ }"
            ],
            "answer": 3,
            "explanation": "email: function (props, propName, componentName) { /* validate email */ }",
            "keywords": "Q: Write a custom property validator in React for | A: email: function (props"
        },
        {
            "id": 22,
            "text": "What is the first step in migrating from useState to useReducer with this code? const [count, setCount] = useState(0); function increment() { setCount(count + 1); }",
            "options": [
                "Replace setCount with dispatch in the existing code.",
                "Move all state update logic into a reducer function.",
                "Define the reducer function and use dispatch to replace setCount.",
                "Import useReducer without changing any code."
            ],
            "answer": 1,
            "explanation": "Move all state update logic into a reducer function.",
            "keywords": "Q: the first step in migrating from useState to | A: Move all state update logic"
        },
        {
            "id": 23,
            "text": "What is the correct way to define default props in a functional component?",
            "options": [
                "const Child = ({ name }) => { name = name || \"Default Name\"; return <div>{name}</div>; };",
                "const Child = ({ name }) => { return <div>{name ? name : \"Default Name\"}</div>; };",
                "const Child = ({ name }) => { return <div>{name || \"Default Name\"}</div>; };",
                "const Child = ({ name = \"Default Name\" }) => { return <div>{name}</div>; };"
            ],
            "answer": 3,
            "explanation": "const Child = ({ name = \"Default Name\" }) => { return <div>{name}</div>; };",
            "keywords": "Q: the correct way to define default props in | A: const Child = ({ name"
        },
        {
            "id": 24,
            "text": "What will be the output of the following code? const obj = { name: \"Alice\", greet: () => { console.log(this.name); } }; obj.greet();",
            "options": [
                "Alice",
                "undefined",
                "this",
                "this.name"
            ],
            "answer": 1,
            "explanation": "undefined",
            "keywords": "Q: What will be the output of the following | A: undefined"
        },
        {
            "id": 25,
            "text": "Which of the following is a valid JSON object?",
            "options": [
                "{ \"name\": \"John Doe\", \"age\": 30, \"city\": \"New York\" }",
                "{ name: \"John Doe\", age: \"30\", city: \"New York\" }",
                "{ name: \"John Doe\", age: 30, city: \"New York\" }",
                "{ \"name\" = \"John Doe\", \"age\" = 30, \"city\" = \"New York\" }"
            ],
            "answer": 0,
            "explanation": "{ \"name\": \"John Doe\", \"age\": 30, \"city\": \"New York\" }",
            "keywords": "Q: is a valid JSON object? | A: { \"name\": \"John Doe\""
        },
        {
            "id": 26,
            "text": "Which of the following is the correct syntax to use useDispatch in a functional component?",
            "options": [
                "const MyComponent = () => { const dispatch = useDispatch(); return <div>My Component</div>; };",
                "const MyComponent = () => { const dispatch = useDispatch; return <div>My Component</div>; };",
                "const MyComponent = () => { const dispatch = dispatch(); return <div>My Component</div>; };",
                "const MyComponent = () => { const dispatch = useDispatch(); return <div>My Component with {dispatch}</div>; };"
            ],
            "answer": 0,
            "explanation": "const MyComponent = () => { const dispatch = useDispatch(); return <div>My Component</div>; };",
            "keywords": "Q: is the correct syntax to use useDispatch in | A: const MyComponent = () =>"
        },
        {
            "id": 27,
            "text": "Which of the following correctly passes an object as a prop to a child component?",
            "options": [
                "return <ChildComponent user={user.toString()} />;",
                "return <ChildComponent user=\"user\" />;",
                "return <ChildComponent user=\"{user}\" />;",
                "return <ChildComponent user={user} />;"
            ],
            "answer": 3,
            "explanation": "return <ChildComponent user={user} />;",
            "keywords": "Q: correctly passes an object as a prop to | A: return <ChildComponent user={user} />;"
        },
        {
            "id": 28,
            "text": "Which of the following is a correct way to initialize multiple state variables using useState?",
            "options": [
                "const [value1, setValue1, value2, setValue2] = useState(0, 0);",
                "const [value1, setValue1] = useState(); const [value2, setValue2] = useState();",
                "const [state, setState] = useState({ value1: 0, value2: 0 });",
                "const [value1, value2, setValues] = useState(0, 0);"
            ],
            "answer": 1,
            "explanation": "const [value1, setValue1] = useState(); const [value2, setValue2] = useState();",
            "keywords": "Q: is a correct way to initialize multiple state | A: const [value1"
        },
        {
            "id": 29,
            "text": "Which method is commonly used to transform an array of data into a list of components in React?",
            "options": [
                "items.filter(item => <li>{item}</li>)",
                "items.map(item => <li>{item}</li>)",
                "items.forEach(item => <li>{item}</li>)",
                "items.reduce(item => <li>{item}</li>)"
            ],
            "answer": 1,
            "explanation": "items.map(item => <li>{item}</li>)",
            "keywords": "Q: Which method is commonly used to transform an | A: items.map(item => <li>{item}</li>)"
        },
        {
            "id": 30,
            "text": "Which method can help ensure that updates in a function depend on the previous state in React?",
            "options": [
                "setCount(count + 1);",
                "setCount(count + 1); // without functional updater",
                "setCount(prevCount => prevCount + 1);",
                "setCount(count - 1);"
            ],
            "answer": 2,
            "explanation": "setCount(prevCount => prevCount + 1);",
            "keywords": "Q: Which method can help ensure that updates in | A: setCount(prevCount => prevCount + 1);"
        },
        {
            "id": 31,
            "text": "How would you handle errors in a fetch request to ensure that the error is caught and logged to the console?",
            "options": [
                "fetch(url).then((response) => { return response.json(); }).catch(error => console.log(error));",
                "fetch(url).then(response => response.catch(error => console.log(error)));",
                "fetch(url).catch(error => { console.log(error); });",
                "fetch(url).then(response => { throw new Error(); }).catch(error => console.log(error));"
            ],
            "answer": 0,
            "explanation": "fetch(url).then((response) => { return response.json(); }).catch(error => console.log(error));",
            "keywords": "Q: How would you handle errors in a fetch | A: fetch(url).then((response) => { return response.json();"
        },
        {
            "id": 32,
            "text": "How do you pass multiple props to a child component in React?",
            "options": [
                "<Child props={{ name: \"John\", age: 30 }} />",
                "<Child name=\"John\" age={30} />",
                "<Child name=\"John\" age=\"30\" />",
                "<Child name=\"John\" age=30 />"
            ],
            "answer": 1,
            "explanation": "<Child name=\"John\" age={30} />",
            "keywords": "Q: you pass multiple props to a child component | A: <Child name=\"John\" age={30} />"
        },
        {
            "id": 33,
            "text": "How would you combine filter() and map() to display only fruits with names longer than 5 characters and transform them into uppercase?",
            "options": [
                "items.filter(item => item.length > 5).map(item => <li>{item}</li>)",
                "items.filter(item => item.length > 5).map(item => <li key={item}>{item.toUpperCase()}</li>)",
                "items.map(item => <li key={item}>{item}</li>).filter(item => item.length > 5)",
                "items.map(item => item.toUpperCase()).filter(item => item.length > 5)"
            ],
            "answer": 1,
            "explanation": "items.filter(item => item.length > 5).map(item => <li key={item}>{item.toUpperCase()}</li>)",
            "keywords": "Q: How would you combine filter and map to | A: items.filter(item => item.length > 5).map(item"
        },
        {
            "id": 34,
            "text": "How can you avoid contradictions in state with isOpen and buttonText derived from isOpen?",
            "options": [
                "The code keeping both in state is fine as it is.",
                "Remove buttonText from state and calculate it dynamically in the render method based on isOpen.",
                "Keep both isOpen and buttonText in state but update them separately.",
                "Use useEffect to sync buttonText with isOpen."
            ],
            "answer": 1,
            "explanation": "Remove buttonText from state and calculate it dynamically in the render method based on isOpen.",
            "keywords": "Q: you avoid contradictions in state with isOpen and | A: Remove buttonText from state and"
        },
        {
            "id": 35,
            "text": "How do you use the Grid system in React-Bootstrap?",
            "options": [
                "<Row><Container><Col xs={6}>2 of 3 (wider)</Col></Container></Row>",
                "<Row><Container><Column>1 of 3</Column></Container></Row>",
                "<Container><Row><Col xs={6}>2 of 3 (wider)</Col></Row></Container>",
                "<Container><Column><Row xs={6}>2 of 3 (wider)</Row></Column></Container>"
            ],
            "answer": 2,
            "explanation": "<Container><Row><Col xs={6}>2 of 3 (wider)</Col></Row></Container>",
            "keywords": "Q: you use the Grid system in React-Bootstrap? | A: <Container><Row><Col xs={6}>2 of 3 (wider)</Col></Row></Container>"
        },
        {
            "id": 36,
            "text": "How would you access the message prop inside the ChildComponent? function ChildComponent(props) { return <h1>{props.message}</h1>; }",
            "options": [
                "props.message",
                "this.props.message",
                "props(\"message\")",
                "props.getMessage()"
            ],
            "answer": 0,
            "explanation": "props.message",
            "keywords": "Q: How would you access the message prop inside | A: props.message"
        },
        {
            "id": 37,
            "text": "How do you define a dynamic route parameter in React Router (path style)?",
            "options": [
                "<Route path=\"/user/id\" component={UserProfile} />",
                "<Route path=\"/user.:id\" component={UserProfile} />",
                "<Route path=\"/user=?id\" component={UserProfile} />",
                "<Route path=\"/user/:id\" component={UserProfile} />"
            ],
            "answer": 3,
            "explanation": "<Route path=\"/user/:id\" component={UserProfile} />",
            "keywords": "Q: you define a dynamic route parameter in React | A: <Route path=\"/user/:id\" component={UserProfile} />"
        },
        {
            "id": 38,
            "text": "How do you configure a Redux store using Redux Toolkit?",
            "options": [
                "import { createStore } from \"redux\"; const store = createStore({ reducer: { counter: counterReducer } });",
                "import { createStore } from \"redux\"; const store = createStore({ counter: counterReducer });",
                "import { configureStore } from \"@reduxjs/toolkit\"; const store = configureStore({ counter: counterReducer });",
                "import { configureStore } from \"@reduxjs/toolkit\"; const store = configureStore({ reducer: { counter: counterReducer } });"
            ],
            "answer": 3,
            "explanation": "import { configureStore } from \"@reduxjs/toolkit\"; const store = configureStore({ reducer: { counter: counterReducer } });",
            "keywords": "Q: you configure a Redux store using Redux Toolkit? | A: import { configureStore } from"
        },
        {
            "id": 39,
            "text": "How do you dispatch an action when a button is clicked?",
            "options": [
                "const handleClick = () => { dispatch({ type: \"BUTTON_CLICKED\" }); }; <button onClick={handleClick}>Click me</button>",
                "const handleClick = () => { dispatch({ type: \"BUTTON_CLICKED\" }); }; <button onClick={() => handleClick()}>Click me</button>",
                "const handleClick = () => { dispatch({ type: \"BUTTON_CLICKED\" }); }; <button onClick={handleClick()}>Click me</button>",
                "const handleClick = () => { dispatch({ action: \"BUTTON_CLICKED\" }); }; <button onClick={handleClick}>Click me</button>"
            ],
            "answer": 0,
            "explanation": "const handleClick = () => { dispatch({ type: \"BUTTON_CLICKED\" }); }; <button onClick={handleClick}>Click me</button>",
            "keywords": "Q: you dispatch an action when a button is | A: const handleClick = () =>"
        },
        {
            "id": 40,
            "text": "How can you render only specific items from an array (names starting with \"A\")?",
            "options": [
                "items.map(item => item.startsWith(\"A\"))",
                "items.reduce(item => item.startsWith(\"A\"))",
                "items.filter(item => item.startsWith(\"A\")).map((item, index) => <li key={index}>{item}</li>)",
                "items.find(item => item.startsWith(\"A\"))"
            ],
            "answer": 2,
            "explanation": "items.filter(item => item.startsWith(\"A\")).map((item, index) => <li key={index}>{item}</li>)",
            "keywords": "Q: you render only specific items from an array | A: items.filter(item => item.startsWith(\"A\")).map((item, index) => <li key={index}>{item}</li>)"
        },
        {
            "id": 41,
            "text": "How do you wrap a lazy-loaded component with a fallback in React?",
            "options": [
                "<Suspense loader={<div>Loading...</div>}><LazyComponent /></Suspense>",
                "<Suspense fallback={<div>Loading...</div>}><LazyComponent /></Suspense>",
                "<Await fallback={<div>Loading...</div>}><LazyComponent /></Await>",
                "<Loading fallback={<div>Loading...</div>}><LazyComponent /></Loading>"
            ],
            "answer": 1,
            "explanation": "<Suspense fallback={<div>Loading...</div>}><LazyComponent /></Suspense>",
            "keywords": "Q: you wrap a lazy-loaded component with a fallback | A: <Suspense fallback={<div>Loading...</div>}><LazyComponent /></Suspense>"
        },
        {
            "id": 42,
            "text": "Create a responsive grid layout using React-Bootstrap with three columns that stack vertically on small screens. Which approach is correct?",
            "options": [
                "<Col>1 of 3</Col> without breakpoints",
                "<Col sm={4}> for all columns (side-by-side from sm up)",
                "<Col md={12}> for all columns",
                "<Col sm={12} md={4}> for each column (stack on small, 3 columns from md)"
            ],
            "answer": 3,
            "explanation": "<Col sm={12} md={4}> for each column (stack on small, 3 columns from md)",
            "keywords": "Q: Create a responsive grid layout using React-Bootstrap with | A: <Col sm={12} md={4}> for each"
        },
        {
            "id": 43,
            "text": "Create a React component that uses the Suspense component to display a fallback while loading a lazily loaded component. Which approach is correct?",
            "options": [
                "const MyComponent = lazy(() => import(\"./MyComponent\")); return <Suspense fallback={<div>Loading...</div>}><MyComponent /></Suspense>;",
                "const MyComponent = import(\"./MyComponent\"); return <Suspense fallback={<div>Loading...</div>}><MyComponent /></Suspense>;",
                "const MyComponent = lazy(\"/MyComponent\"); return <div>Loading...</div>;",
                "const MyComponent = React.lazy(() => import(\"./MyComponent\")); return <React.Suspense><MyComponent /></React.Suspense>;"
            ],
            "answer": 0,
            "explanation": "const MyComponent = lazy(() => import(\"./MyComponent\")); return <Suspense fallback={<div>Loading...</div>}><MyComponent /></Suspense>;",
            "keywords": "Q: Create a React component that uses the Suspense | A: const MyComponent = lazy(() =>"
        },
        {
            "id": 44,
            "text": "What is the json-server setup (jsonServer.create + router + listen) used for?",
            "options": [
                "Create a dynamic server to serve JSON data.",
                "Create a dynamic web application using JSON data.",
                "Create a JSON file based on data from the server.",
                "Configure the development environment for the project using JSON."
            ],
            "answer": 0,
            "explanation": "Create a dynamic server to serve JSON data.",
            "keywords": "Q: the json-server setup (jsonServer.create + router + listen) | A: Create a dynamic server to serve JSON data"
        },
        {
            "id": 45,
            "text": "Which process in React corresponds to \"send order to kitchen\" (triggering an update)?",
            "options": [
                "Triggering a render",
                "Rendering the component",
                "Committing to the DOM",
                "Placing the order on the table"
            ],
            "answer": 0,
            "explanation": "Triggering a render",
            "keywords": "Q: Which process in React corresponds to \"send order | A: Triggering a render"
        },
        {
            "id": 46,
            "text": "How many columns will the code below display on a mobile screen? <Col sm={6} md={4} /> and <Col sm={6} md={8} />",
            "options": [
                "1",
                "2",
                "3",
                "4"
            ],
            "answer": 1,
            "explanation": "2",
            "keywords": "Q: How many columns will the code below display | A: 2"
        },
        {
            "id": 47,
            "text": "Create a React component that uses composition to include a header, main content, and footer. Which snippet is correct?",
            "options": [
                "function App() { return (<div><Header /><MainContent /><Footer /></div>); }",
                "function App() { return (<div><Header /><Footer /><MainContent /></div>); }",
                "function App() { return (<div><MainContent /><Header /><Footer /></div>); }",
                "function App() { return (<div><Footer /><Header /><MainContent /></div>); }"
            ],
            "answer": 0,
            "explanation": "function App() { return (<div><Header /><MainContent /><Footer /></div>); }",
            "keywords": "Q: Create a React component that uses composition to | A: function App() { return (<div><Header"
        },
        {
            "id": 48,
            "text": "Find the bug: const [items, setItems] = useState([]); const addItem = () => { items.push(\"new\"); setItems(items); };",
            "options": [
                "useState should be useReducer",
                "use setItems([...items, \"new\"])",
                "push is not a valid method",
                "setItems must take a string"
            ],
            "answer": 1,
            "explanation": "use setItems([...items, \"new\"])",
            "keywords": "Q: Find the bug: const [items, setItems] = useState(); | A: use setItems([...items, \"new\"])"
        },
        {
            "id": 49,
            "text": "After git init, commit, branch new-feature, add file, commit, checkout main, merge new-feature — what is the result?",
            "options": [
                "The repository has a new branch called new-feature with new-file.js added.",
                "The main branch has new-file.js added.",
                "The new-feature branch is merged into main without new-file.js.",
                "The repository remains unchanged."
            ],
            "answer": 1,
            "explanation": "The main branch has new-file.js added.",
            "keywords": "Q: After git init, commit, branch new-feature, add file, | A: The main branch has new-file.js added"
        },
        {
            "id": 50,
            "text": "In a class Counter component, how can we increase count by 1 when clicking Increment?",
            "options": [
                "Call this.setState({ count: this.state.count + 1 }) inside incrementCount",
                "Assign count with = inside incrementCount",
                "Call this.state.count + 1 inside incrementCount",
                "Use this.setState(count + 1) inside incrementCount"
            ],
            "answer": 0,
            "explanation": "Call this.setState({ count: this.state.count + 1 }) inside incrementCount",
            "keywords": "Q: In a class Counter component, how can we | A: Call this.setState({ count: this.state.count +"
        },
        {
            "id": 51,
            "text": "In a class Form with name/email inputs sharing handleInputChange, how do we update state from user input?",
            "options": [
                "this.setState({ [event.target.name]: event.target.value }) (or set name/email from event.target.value)",
                "Assign name/email with = inside handleInputChange",
                "Mutate this.state.name / this.state.email directly",
                "Use this.setState(event.target.value)"
            ],
            "answer": 0,
            "explanation": "this.setState({ [event.target.name]: event.target.value }) (or set name/email from event.target.value)",
            "keywords": "Q: In a class Form with name/email inputs sharing | A: this.setState({ [event.target.name]: event.target.value }) (or"
        },
        {
            "id": 52,
            "text": "What happens when the \"Toggle Message\" button is clicked? (useState showMessage toggled)",
            "options": [
                "The message is displayed.",
                "The message is hidden.",
                "The state of the component is updated.",
                "The component is re-rendered."
            ],
            "answer": 2,
            "explanation": "The state of the component is updated.",
            "keywords": "Q: What happens when the \"Toggle Message\" button is | A: The state of the component is updated"
        },
        {
            "id": 53,
            "text": "What type of component is: const Greeting = ({ name }) => { return <h1>Hello, {name}!</h1>; };",
            "options": [
                "Class component",
                "Functional component",
                "Container component",
                "Higher-order component"
            ],
            "answer": 1,
            "explanation": "Functional component",
            "keywords": "Q: What type of component is: const Greeting = | A: Functional component"
        },
        {
            "id": 54,
            "text": "Which process in React corresponds to \"putting orders on the table\"?",
            "options": [
                "Triggering a render",
                "Rendering the component",
                "Committing to the DOM",
                "Placing the order on the table"
            ],
            "answer": 2,
            "explanation": "Committing to the DOM",
            "keywords": "Q: Which process in React corresponds to \"putting orders | A: Committing to the DOM"
        },
        {
            "id": 55,
            "text": "In React-Bootstrap, select the JSX to create a button with a blue background and white text color.",
            "options": [
                "<Button variant=\"primary\" className=\"btn-primary\">My Button</Button>",
                "<Button variant=\"primary\" className=\"bg-primary text-white\">My Button</Button>",
                "<Button variant=\"primary\" className=\"btn btn-primary\">My Button</Button>",
                "<Button className=\"btn btn-primary\">My Button</Button>"
            ],
            "answer": 1,
            "explanation": "<Button variant=\"primary\" className=\"bg-primary text-white\">My Button</Button>",
            "keywords": "Q: In React-Bootstrap, select the JSX to create a | A: <Button variant=\"primary\" className=\"bg-primary text-white\">My Button</Button>"
        },
        {
            "id": 56,
            "text": "What components does this code display? import { Button, Checkbox, Listbox } from \"react-bootstrap\"; then render Button, Checkbox, Listbox",
            "options": [
                "Grid, Button, ListBox",
                "Button, Radiobox, Listbox",
                "Checkbox, Listbox, Button",
                "Button, Checkbox, Tabs"
            ],
            "answer": 2,
            "explanation": "Checkbox, Listbox, Button",
            "keywords": "Q: What components does this code display? import { | A: Checkbox, Listbox, Button"
        },
        {
            "id": 57,
            "text": "Select the code snippet that correctly defines a Class Component in React.",
            "options": [
                "class MyComponent extends React.Component { render() { return <div>Hello, World!</div>; } }",
                "function MyComponent() { return <div>Hello, World!</div>; }",
                "const MyComponent = () => { return <div>Hello, World!</div>; };",
                "const MyComponent = React.createClass({ render() { return <div>Hello, World!</div>; } });"
            ],
            "answer": 0,
            "explanation": "class MyComponent extends React.Component { render() { return <div>Hello, World!</div>; } }",
            "keywords": "Q: Select the code snippet that correctly defines a | A: class MyComponent extends React.Component {"
        },
        {
            "id": 58,
            "text": "Select the code snippet that correctly defines a component with state in React.",
            "options": [
                "React.createClass with getInitialState",
                "function MyComponent() { const [count, setCount] = React.useState(0); return <div>{count}</div>; }",
                "class with this.state only in constructor (incomplete options)",
                "const MyComponent() => { const [count, setCount] = React.useState(0); ... } (invalid syntax)"
            ],
            "answer": 1,
            "explanation": "function MyComponent() { const [count, setCount] = React.useState(0); return <div>{count}</div>; }",
            "keywords": "Q: Select the code snippet that correctly defines a | A: function MyComponent() { const [count"
        },
        {
            "id": 59,
            "text": "Select the code snippet that correctly defines a Higher-Order Component in React using an arrow function.",
            "options": [
                "function withLogger(WrappedComponent) { return class extends React.Component { ... }; }",
                "const withLogger = (WrappedComponent) => { return class extends React.Component { ... }; };",
                "const withLogger = (WrappedComponent) => { return function HOC() { ... }; };",
                "function withLogger(WrappedComponent) { return function HOC() { ... }; }"
            ],
            "answer": 2,
            "explanation": "const withLogger = (WrappedComponent) => { return function HOC() { ... }; };",
            "keywords": "Q: Select the code snippet that correctly defines a | A: const withLogger = (WrappedComponent) =>"
        },
        {
            "id": 60,
            "text": "How can you pass parameters to an event handler in React?",
            "options": [
                "Using the bind() method.",
                "Using arrow functions.",
                "Using the addEventListener() method.",
                "Using the this keyword."
            ],
            "answer": 0,
            "explanation": "Using the bind() method. · Using arrow functions. · Using the this keyword.",
            "keywords": "Q: you pass parameters to an event handler in | A: Using the bind() method · Using arrow functions · Using the this keyword",
            "answers": [
                0,
                1,
                3
            ]
        },
        {
            "id": 61,
            "text": "What is the correct way to wrap a lazy component with Suspense in React?",
            "options": [
                "<Suspense loading={<Loading />}><MyComponent /></Suspense>",
                "<Suspense fallback={<Loading />}><MyComponent /></Suspense>",
                "<Suspense wait={<Loading />}><MyComponent /></Suspense>",
                "<Suspense fallback={<Loading />} loading={<MyComponent />} />"
            ],
            "answer": 1,
            "explanation": "<Suspense fallback={<Loading />}><MyComponent /></Suspense>",
            "keywords": "Q: the correct way to wrap a lazy component | A: <Suspense fallback={<Loading />}><MyComponent /></Suspense>"
        },
        {
            "id": 62,
            "text": "What is the correct way to declare PropTypes for a component in React?",
            "options": [
                "Component.propTypes = { ... }",
                "Component.typeCheck = { ... }",
                "Component.props = { ... }",
                "Component.checkProps = { ... }"
            ],
            "answer": 0,
            "explanation": "Component.propTypes = { ... }",
            "keywords": "Q: the correct way to declare PropTypes for a | A: Component.propTypes = { ... }"
        },
        {
            "id": 63,
            "text": "What is the correct way to update the state when it depends on the previous state?",
            "options": [
                "setValue(value + 1);",
                "setValue(prevValue => prevValue + 1);",
                "setValue(() => value + 1);",
                "setValue(value => value + 1);"
            ],
            "answer": 1,
            "explanation": "setValue(prevValue => prevValue + 1);",
            "keywords": "Q: the correct way to update the state when | A: setValue(prevValue => prevValue + 1);"
        },
        {
            "id": 64,
            "text": "Which of the following will navigate to the root path (\"/\") using the useNavigate hook?",
            "options": [
                "navigate(\"\");",
                "navigate(\"home\");",
                "navigate(\"/\");",
                "navigate(\"root\");"
            ],
            "answer": 2,
            "explanation": "navigate(\"/\");",
            "keywords": "Q: will navigate to the root path (\"/\") using | A: navigate(\"/\");"
        },
        {
            "id": 65,
            "text": "Which of the following is the correct way to dispatch an action using the useDispatch hook?",
            "options": [
                "const dispatch = useDispatch(); dispatch(\"ACTION_TYPE\");",
                "const dispatch = useDispatch(); dispatch(() => { type: \"ACTION_TYPE\" });",
                "const dispatch = useDispatch(); dispatch({ type: \"ACTION_TYPE\" });",
                "const dispatch = useDispatch(); dispatch({ action: \"ACTION_TYPE\" });"
            ],
            "answer": 2,
            "explanation": "const dispatch = useDispatch(); dispatch({ type: \"ACTION_TYPE\" });",
            "keywords": "Q: is the correct way to dispatch an action | A: const dispatch = useDispatch(); dispatch({"
        },
        {
            "id": 66,
            "text": "Which code snippet demonstrates how to handle a route parameter in React Router?",
            "options": [
                "<Route path=\"/users/:id\" component={UserDetail} />",
                "<Link to=\"/users\">Users</Link>",
                "import { BrowserRouter as Router, Route } from \"react-router-dom\";",
                "import { Link, Route } from \"react-router-dom\";"
            ],
            "answer": 0,
            "explanation": "<Route path=\"/users/:id\" component={UserDetail} />",
            "keywords": "Q: Which code snippet demonstrates how to handle a | A: <Route path=\"/users/:id\" component={UserDetail} />"
        },
        {
            "id": 67,
            "text": "Which code snippet demonstrates how to declare a basic route in React Router?",
            "options": [
                "<Route path=\"/about\" component={About} />",
                "<Link to=\"/about\">About</Link>",
                "import { BrowserRouter as Router, Route } from \"react-router-dom\";",
                "import { Link, Route } from \"react-router-dom\";"
            ],
            "answer": 0,
            "explanation": "<Route path=\"/about\" component={About} />",
            "keywords": "Q: Which code snippet demonstrates how to declare a | A: <Route path=\"/about\" component={About} />"
        },
        {
            "id": 68,
            "text": "Which of the following is the correct way to render a React-Bootstrap Button with a primary style?",
            "options": [
                "<Button className=\"btn btn-primary\">Click Me</Button>",
                "<button class=\"btn btn-primary\">Click Me</button>",
                "<Button variant=\"primary\">Click Me</Button>",
                "<PrimaryButton>Click Me</PrimaryButton>"
            ],
            "answer": 2,
            "explanation": "<Button variant=\"primary\">Click Me</Button>",
            "keywords": "Q: is the correct way to render a React-Bootstrap | A: <Button variant=\"primary\">Click Me</Button>"
        },
        {
            "id": 69,
            "text": "Which of the following is the correct way to pass a function as a prop in React?",
            "options": [
                "<Child onClick={handleClick()} />",
                "<Child handleClick={handleClick} />",
                "<Child onClick={handleClick} />",
                "<Child handleClick={handleClick()} />"
            ],
            "answer": 2,
            "explanation": "<Child onClick={handleClick} />",
            "keywords": "Q: is the correct way to pass a function | A: <Child onClick={handleClick} />"
        },
        {
            "id": 70,
            "text": "Which component is used to define a route in React Router?",
            "options": [
                "<Route>",
                "<Router>",
                "<Link>",
                "<Navigation>"
            ],
            "answer": 0,
            "explanation": "<Route>",
            "keywords": "Q: Which component is used to define a route | A: <Route>"
        },
        {
            "id": 71,
            "text": "Which class is used to create a button in Bootstrap 5?",
            "options": [
                ".btn",
                ".button",
                ".btn-primary",
                ".btn-default"
            ],
            "answer": 0,
            "explanation": ".btn",
            "keywords": "Q: Which class is used to create a button | A: .btn"
        },
        {
            "id": 72,
            "text": "Which pair of Git commands is used to create a new branch and then switch to it?",
            "options": [
                "git new branch-name; git change branch-name",
                "git branch branch-name; git checkout branch-name",
                "git make branch-name; git switch branch-name",
                "git create branch-name; git select branch-name"
            ],
            "answer": 1,
            "explanation": "git branch branch-name; git checkout branch-name",
            "keywords": "Q: Which pair of Git commands is used to | A: git branch branch-name; git checkout branch-name"
        },
        {
            "id": 73,
            "text": "Describe the Redux flow process when an action is dispatched.",
            "options": [
                "Action is dispatched → Middleware → Reducer → Store → Component.",
                "Component dispatches action → Reducer → Middleware → Store.",
                "Middleware dispatches action → Reducer → Store → Component.",
                "Reducer dispatches action → Middleware → Component → Store."
            ],
            "answer": 0,
            "explanation": "Action is dispatched → Middleware → Reducer → Store → Component.",
            "keywords": "Q: Describe the Redux flow process when an action | A: Action is dispatched → Middleware"
        },
        {
            "id": 74,
            "text": "Analyze the benefits of using synthetic events in React. Which of the following is NOT a benefit?",
            "options": [
                "Provides a consistent event interface across different browsers.",
                "Contains information necessary for event propagation.",
                "Reduces the need for garbage collection.",
                "Normalizes browser inconsistencies."
            ],
            "answer": 2,
            "explanation": "Reduces the need for garbage collection.",
            "keywords": "Q: Analyze the benefits of using synthetic events in | A: Reduces the need for garbage collection"
        },
        {
            "id": 75,
            "text": "Evaluate the benefits of using Redux Thunk middleware in a Redux application. Which of the following is NOT a benefit?",
            "options": [
                "Allows for handling asynchronous actions.",
                "Simplifies the process of making API calls within action creators.",
                "Ensures that all actions are synchronous.",
                "Enables conditional dispatching of actions."
            ],
            "answer": 2,
            "explanation": "Ensures that all actions are synchronous.",
            "keywords": "Q: Evaluate the benefits of using Redux Thunk middleware | A: Ensures that all actions are synchronous"
        },
        {
            "id": 76,
            "text": "Evaluate the benefits of using the React.lazy API for code splitting in a React application. Which of the following is NOT a benefit?",
            "options": [
                "Reduces the initial load time by splitting code into bundles.",
                "Ensures that all components are loaded upfront.",
                "Provides a better user experience by loading components only when needed.",
                "Allows for dynamic imports and lazy loading of components."
            ],
            "answer": 1,
            "explanation": "Ensures that all components are loaded upfront.",
            "keywords": "Q: Evaluate the benefits of using the React.lazy API | A: Ensures that all components are loaded upfront"
        },
        {
            "id": 77,
            "text": "Which method is used to perform enhanced array manipulation in ES6?",
            "options": [
                "map()",
                "forEach()",
                "reduce()",
                "filter()"
            ],
            "answer": 0,
            "explanation": "map()",
            "keywords": "Q: Which method is used to perform enhanced array | A: map()"
        },
        {
            "id": 78,
            "text": "Which two recent additions to React allow the complete integration of code splitting into applications?",
            "options": [
                "useState() and useEffect()",
                "React.memo() and useCallback()",
                "lazy() API and Suspense components",
                "ReactDOM.createRoot() and BrowserRouter"
            ],
            "answer": 2,
            "explanation": "lazy() API and Suspense components",
            "keywords": "Q: Which two recent additions to React allow the | A: lazy() API and Suspense components"
        },
        {
            "id": 79,
            "text": "After making a successful fetch request, how would you retrieve the JSON data from the response object?",
            "options": [
                "response.data()",
                "response.json()",
                "response.jsonText()",
                "response.body.json()"
            ],
            "answer": 1,
            "explanation": "response.json()",
            "keywords": "Q: After making a successful fetch request, how would | A: response.json()"
        },
        {
            "id": 80,
            "text": "What is a core feature of Next.js that enhances SEO?",
            "options": [
                "Real-time data fetching.",
                "Client-side routing.",
                "Automatic code splitting.",
                "Server-side rendering."
            ],
            "answer": 3,
            "explanation": "Server-side rendering.",
            "keywords": "Q: a core feature of Next.js that enhances SEO? | A: Server-side rendering"
        },
        {
            "id": 81,
            "text": "What is the typical file extension for a React component?",
            "options": [
                ".html",
                ".css",
                ".js or .jsx",
                ".php"
            ],
            "answer": 2,
            "explanation": ".js or .jsx",
            "keywords": "Q: the typical file extension for a React component? | A: .js or .jsx"
        },
        {
            "id": 82,
            "text": "What is the command to start json-server and specify the JSON file to be served?",
            "options": [
                "npm start",
                "json-server start",
                "npx json-server --watch data.json",
                "node server.js"
            ],
            "answer": 2,
            "explanation": "npx json-server --watch data.json",
            "keywords": "Q: the command to start json-server and specify the | A: npx json-server --watch data.json"
        },
        {
            "id": 83,
            "text": "What is the primary architectural style used in designing web services that follow REST principles?",
            "options": [
                "SOAP (Simple Object Access Protocol)",
                "RPC (Remote Procedure Call)",
                "MVC (Model-View-Controller)",
                "RESTful (Representational State Transfer)"
            ],
            "answer": 3,
            "explanation": "RESTful (Representational State Transfer)",
            "keywords": "Q: the primary architectural style used in designing web | A: RESTful (Representational State Transfer)"
        },
        {
            "id": 84,
            "text": "What is the initial state of a promise?",
            "options": [
                "Fulfilled",
                "Rejected",
                "Pending",
                "Resolved"
            ],
            "answer": 2,
            "explanation": "Pending",
            "keywords": "Q: the initial state of a promise? | A: Pending"
        },
        {
            "id": 85,
            "text": "What is the main concept behind Tailwind CSS?",
            "options": [
                "Component-based architecture.",
                "Object-oriented programming.",
                "Utility classes.",
                "Modular CSS."
            ],
            "answer": 2,
            "explanation": "Utility classes.",
            "keywords": "Q: the main concept behind Tailwind CSS? | A: Utility classes"
        },
        {
            "id": 86,
            "text": "What is a Component in React?",
            "options": [
                "It is a single UI element.",
                "It is a JavaScript function.",
                "It is an HTML framework.",
                "It is a Python class."
            ],
            "answer": 1,
            "explanation": "It is a JavaScript function.",
            "keywords": "Q: a Component in React? | A: It is a JavaScript function"
        },
        {
            "id": 87,
            "text": "What is Node.js?",
            "options": [
                "A web browser.",
                "A programming language.",
                "A JavaScript runtime.",
                "A CSS framework."
            ],
            "answer": 2,
            "explanation": "A JavaScript runtime.",
            "keywords": "Q: Node.js? | A: A JavaScript runtime"
        },
        {
            "id": 88,
            "text": "What are Higher-Order Components in React?",
            "options": [
                "Advanced components.",
                "Components written in JavaScript.",
                "Components with multiple props.",
                "Components with multiple states."
            ],
            "answer": 0,
            "explanation": "Advanced components.",
            "keywords": "Q: Higher-Order Components in React? | A: Advanced components"
        },
        {
            "id": 89,
            "text": "What are the key features of React?",
            "options": [
                "Two-way data binding.",
                "Virtual DOM.",
                "SQL database integration.",
                "Automatic styling."
            ],
            "answer": 1,
            "explanation": "Virtual DOM.",
            "keywords": "Q: the key features of React? | A: Virtual DOM"
        },
        {
            "id": 90,
            "text": "What does the HTTP response code 404 indicate?",
            "options": [
                "OK.",
                "Created.",
                "Not Found.",
                "Internal Server Error."
            ],
            "answer": 2,
            "explanation": "Not Found.",
            "keywords": "Q: the HTTP response code 404 indicate? | A: Not Found"
        },
        {
            "id": 91,
            "text": "What does REST stand for in the context of web services?",
            "options": [
                "Representational State Transfer",
                "Remote Execution and State Transfer",
                "Resourceful Endpoint and Service Tools",
                "Responsive Event-driven Server Technologies"
            ],
            "answer": 0,
            "explanation": "Representational State Transfer",
            "keywords": "Q: REST stand for in the context of web | A: Representational State Transfer"
        },
        {
            "id": 92,
            "text": "What are the three possible states of a Promise as described in the sources?",
            "options": [
                "Initial, Running, Completed",
                "Starting, Paused, Finished",
                "Pending, Fulfilled, Rejected",
                "Waiting, Processing, Error"
            ],
            "answer": 2,
            "explanation": "Pending, Fulfilled, Rejected",
            "keywords": "Q: the three possible states of a Promise as | A: Pending, Fulfilled, Rejected"
        },
        {
            "id": 93,
            "text": "What protocol is commonly used for client-server communication over the web?",
            "options": [
                "HTTP",
                "FTP",
                "SMTP",
                "SSH"
            ],
            "answer": 0,
            "explanation": "HTTP",
            "keywords": "Q: What protocol is commonly used for client-server communication | A: HTTP"
        },
        {
            "id": 94,
            "text": "What command is used to create a new Next.js project?",
            "options": [
                "npx create-react-app",
                "npm install next",
                "npx create-next-app",
                "git clone next.js"
            ],
            "answer": 2,
            "explanation": "npx create-next-app",
            "keywords": "Q: What command is used to create a new | A: npx create-next-app"
        },
        {
            "id": 95,
            "text": "Which of the following is a utility-first CSS framework that is often used with Next.js?",
            "options": [
                "Bootstrap",
                "Material-UI",
                "Tailwind CSS",
                "Bulma"
            ],
            "answer": 2,
            "explanation": "Tailwind CSS",
            "keywords": "Q: is a utility-first CSS framework that is often | A: Tailwind CSS"
        },
        {
            "id": 96,
            "text": "Which of the following components can be used to create a slideshow in Bootstrap?",
            "options": [
                ".popover",
                ".modal",
                ".carousel",
                ".nav-pills"
            ],
            "answer": 2,
            "explanation": ".carousel",
            "keywords": "Q: components can be used to create a slideshow | A: .carousel"
        },
        {
            "id": 97,
            "text": "Which Bootstrap component is used for creating a navigation bar?",
            "options": [
                ".navbar",
                ".navigation",
                ".nav",
                ".menu"
            ],
            "answer": 0,
            "explanation": ".navbar",
            "keywords": "Q: Which Bootstrap component is used for creating a | A: .navbar"
        },
        {
            "id": 98,
            "text": "Which command is used to install the required dependencies for a React project?",
            "options": [
                "npm install",
                "git clone",
                "create-react-app",
                "npm start"
            ],
            "answer": 0,
            "explanation": "npm install",
            "keywords": "Q: Which command is used to install the required | A: npm install"
        },
        {
            "id": 99,
            "text": "Which class is used to create a collapsible accordion component in Bootstrap 5?",
            "options": [
                ".collapse",
                ".accordion",
                ".collapsible",
                ".collapse-accordion"
            ],
            "answer": 1,
            "explanation": ".accordion",
            "keywords": "Q: Which class is used to create a collapsible | A: .accordion"
        },
        {
            "id": 100,
            "text": "Which class is used to create a form input with a validation state in Bootstrap 5?",
            "options": [
                ".form-control",
                ".input-group",
                ".form-check",
                ".form-validation"
            ],
            "answer": 2,
            "explanation": ".form-check",
            "keywords": "Q: Which class is used to create a form | A: .form-check"
        },
        {
            "id": 101,
            "text": "Which feature of ES6 is used to iterate over the elements of an array?",
            "options": [
                "Spread syntax",
                "Destructuring assignment",
                "Arrow functions",
                "for...of loop"
            ],
            "answer": 3,
            "explanation": "for...of loop",
            "keywords": "Q: Which feature of ES6 is used to iterate | A: for...of loop"
        },
        {
            "id": 102,
            "text": "Which ES6 feature allows you to extract values from arrays or objects and assign them to variables?",
            "options": [
                "Template literals",
                "Arrow functions",
                "Destructuring assignment",
                "Promises"
            ],
            "answer": 2,
            "explanation": "Destructuring assignment",
            "keywords": "Q: Which ES6 feature allows you to extract values | A: Destructuring assignment"
        },
        {
            "id": 103,
            "text": "Which HTTP status code indicates a successful response from a server?",
            "options": [
                "200 OK",
                "404 Not Found",
                "500 Internal Server Error",
                "302 Found"
            ],
            "answer": 0,
            "explanation": "200 OK",
            "keywords": "Q: Which HTTP status code indicates a successful response | A: 200 OK"
        },
        {
            "id": 104,
            "text": "Which HTTP method is typically used to retrieve data from a server?",
            "options": [
                "POST",
                "DELETE",
                "PUT",
                "GET"
            ],
            "answer": 3,
            "explanation": "GET",
            "keywords": "Q: Which HTTP method is typically used to retrieve | A: GET"
        },
        {
            "id": 105,
            "text": "Which method is used to update the state in a class component?",
            "options": [
                "setState",
                "useState",
                "updateState",
                "changeState"
            ],
            "answer": 0,
            "explanation": "setState",
            "keywords": "Q: Which method is used to update the state | A: setState"
        },
        {
            "id": 106,
            "text": "Which React hook is used to manage state in functional components?",
            "options": [
                "useEffect",
                "useContext",
                "useState",
                "useReducer"
            ],
            "answer": 2,
            "explanation": "useState",
            "keywords": "Q: Which React hook is used to manage state | A: useState"
        },
        {
            "id": 107,
            "text": "Which React-Bootstrap component is used to display a popup dialog with customizable content?",
            "options": [
                "Modal",
                "Checkbox",
                "Button",
                "Card"
            ],
            "answer": 0,
            "explanation": "Modal",
            "keywords": "Q: Which React-Bootstrap component is used to display a | A: Modal"
        },
        {
            "id": 108,
            "text": "Which React concept is used to pass data from a parent component to a child component?",
            "options": [
                "State",
                "Props",
                "Context",
                "Ref"
            ],
            "answer": 1,
            "explanation": "Props",
            "keywords": "Q: Which React concept is used to pass data | A: Props"
        },
        {
            "id": 109,
            "text": "Which React Router component is commonly used to perform client-side navigation without triggering a full page reload?",
            "options": [
                "<Router>",
                "<Routes>",
                "<Link>",
                "<Route>"
            ],
            "answer": 2,
            "explanation": "<Link>",
            "keywords": "Q: Which React Router component is commonly used to | A: <Link>"
        },
        {
            "id": 110,
            "text": "Which prop is used to define default values for props in a functional component in React 18?",
            "options": [
                "initialProps",
                "props",
                "defaultProps",
                "defaultValue"
            ],
            "answer": 2,
            "explanation": "defaultProps",
            "keywords": "Q: Which prop is used to define default values | A: defaultProps"
        },
        {
            "id": 111,
            "text": "Which prop is used to provide a unique identifier for elements in a list rendered by a component in React 18?",
            "options": [
                "key",
                "id",
                "index",
                "ref"
            ],
            "answer": 0,
            "explanation": "key",
            "keywords": "Q: Which prop is used to provide a unique | A: key"
        },
        {
            "id": 112,
            "text": "Which package can be used to set up a simple JSON-based server in Node.js?",
            "options": [
                "express",
                "json-server",
                "axios",
                "nodemon"
            ],
            "answer": 1,
            "explanation": "json-server",
            "keywords": "Q: Which package can be used to set up | A: json-server"
        },
        {
            "id": 113,
            "text": "Which is the correct way to consume context in a functional component using the useContext hook?",
            "options": [
                "const value = MyContext();",
                "const value = useContext(MyContext);",
                "const value = this.context(MyContext);",
                "<MyContext.Provider useContext={value} />"
            ],
            "answer": 1,
            "explanation": "const value = useContext(MyContext);",
            "keywords": "Q: Which is the correct way to consume context | A: const value = useContext(MyContext);"
        },
        {
            "id": 114,
            "text": "Which Bootstrap class is commonly used to create a responsive navigation bar?",
            "options": [
                ".navbar-static",
                ".nav-horizontal",
                ".navbar",
                ".navigation-block"
            ],
            "answer": 2,
            "explanation": ".navbar",
            "keywords": "Q: Which Bootstrap class is commonly used to create | A: .navbar"
        },
        {
            "id": 115,
            "text": "Which Bootstrap class provides a fluid container that adapts to all breakpoints?",
            "options": [
                ".container-fluid",
                ".container",
                ".container-lg",
                ".container-xs"
            ],
            "answer": 0,
            "explanation": ".container-fluid",
            "keywords": "Q: Which Bootstrap class provides a fluid container that | A: .container-fluid"
        },
        {
            "id": 116,
            "text": "Why would a React developer choose to use Axios?",
            "options": [
                "To render React components faster",
                "To manage component state globally",
                "To make HTTP requests to APIs",
                "To build reusable hooks"
            ],
            "answer": 2,
            "explanation": "To make HTTP requests to APIs",
            "keywords": "Q: Why would a React developer choose to use | A: To make HTTP requests to APIs"
        },
        {
            "id": 117,
            "text": "Which hook is typically used alongside useSelector to modify the Redux state?",
            "options": [
                "useState",
                "useEffect",
                "useDispatch",
                "useContext"
            ],
            "answer": 2,
            "explanation": "useDispatch",
            "keywords": "Q: Which hook is typically used alongside useSelector to | A: useDispatch"
        },
        {
            "id": 118,
            "text": "Which of the following is NOT considered a popular front-end framework?",
            "options": [
                "React",
                "Angular",
                "Django",
                "Vue.js"
            ],
            "answer": 2,
            "explanation": "Django",
            "keywords": "Q: is NOT considered a popular front-end framework? | A: Django"
        },
        {
            "id": 119,
            "text": "Which method is most commonly used in a React app to fetch data from a server?",
            "options": [
                "WebSockets",
                "useState()",
                "fetch() or axios inside useEffect()",
                "console.log() inside render()"
            ],
            "answer": 2,
            "explanation": "fetch() or axios inside useEffect()",
            "keywords": "Q: Which method is most commonly used in a | A: fetch() or axios inside useEffect()"
        },
        {
            "id": 120,
            "text": "How do you define a Type validator in PropTypes for a prop called \"age\" that should be a number?",
            "options": [
                "age: PropTypes.string",
                "age: PropTypes.number",
                "age: PropTypes.bool",
                "age: PropTypes.object"
            ],
            "answer": 1,
            "explanation": "age: PropTypes.number",
            "keywords": "Q: you define a Type validator in PropTypes for | A: age: PropTypes.number"
        },
        {
            "id": 121,
            "text": "How can you ensure that a prop is passed as an array with at least one element?",
            "options": [
                "By using PropTypes.array.isRequired",
                "By creating a custom PropType validator",
                "By using PropTypes.arrayOf()",
                "By using PropTypes.objectOf()"
            ],
            "answer": 1,
            "explanation": "By creating a custom PropType validator",
            "keywords": "Q: you ensure that a prop is passed as | A: By creating a custom PropType validator"
        },
        {
            "id": 122,
            "text": "How would you navigate programmatically to a route with a parameter using useNavigate in React Router?",
            "options": [
                "navigate(\"/user.id\");",
                "navigate(\"/user?id=123\");",
                "navigate(\"/user/123\");",
                "navigate({ path: \"/user/123\" });"
            ],
            "answer": 2,
            "explanation": "navigate(\"/user/123\");",
            "keywords": "Q: How would you navigate programmatically to a route | A: navigate(\"/user/123\");"
        },
        {
            "id": 123,
            "text": "How can you import functions or variables from an ES6 module?",
            "options": [
                "By using the import keyword",
                "By using the require function",
                "By using the export keyword",
                "By using the include directive"
            ],
            "answer": 0,
            "explanation": "By using the import keyword",
            "keywords": "Q: you import functions or variables from an ES6 | A: By using the import keyword"
        },
        {
            "id": 124,
            "text": "How would you write an arrow function in ES6 that adds two numbers?",
            "options": [
                "const add = function(a, b) { return a + b; }",
                "const add = (a, b) => { return a + b; }",
                "const add = a + b",
                "function add(a, b) { return a + b; }"
            ],
            "answer": 1,
            "explanation": "const add = (a, b) => { return a + b; }",
            "keywords": "Q: How would you write an arrow function in | A: const add = (a, b) => { return a + b; }"
        },
        {
            "id": 125,
            "text": "How are Class Components written in React?",
            "options": [
                "function",
                "class",
                "const",
                "component"
            ],
            "answer": 1,
            "explanation": "class",
            "keywords": "Q: How are Class Components written in React? | A: class"
        },
        {
            "id": 126,
            "text": "Fill in the blank in this Bootstrap CSS code to apply a primary button style using React-Bootstrap: <Button ___=\"primary\">Click me</Button>",
            "options": [
                "color",
                "variant",
                "style",
                "theme"
            ],
            "answer": 1,
            "explanation": "variant",
            "keywords": "Q: Fill in the blank in this Bootstrap CSS | A: variant"
        },
        {
            "id": 127,
            "text": "In JSX, how can you embed a JavaScript expression?",
            "options": [
                "By adding js: before it",
                "By wrapping it in {}",
                "By using () only",
                "By using {$}"
            ],
            "answer": 1,
            "explanation": "By wrapping it in {}",
            "keywords": "Q: In JSX, how can you embed a JavaScript | A: By wrapping it in {}"
        },
        {
            "id": 128,
            "text": "In the useEffect hook, how many milliseconds would you wait using setTimeout to perform a side effect after 2 seconds?",
            "options": [
                "2",
                "200",
                "2000",
                "20000"
            ],
            "answer": 2,
            "explanation": "2000",
            "keywords": "Q: In the useEffect hook, how many milliseconds would | A: 2000"
        },
        {
            "id": 129,
            "text": "In a React function component, how do you access a prop named \"name\" that is passed from a parent component?",
            "options": [
                "this.props.name",
                "props.name",
                "useState.name",
                "getProps().name"
            ],
            "answer": 1,
            "explanation": "props.name",
            "keywords": "Q: In a React function component, how do you | A: props.name"
        },
        {
            "id": 130,
            "text": "JSX in React stands for:",
            "options": [
                "JavaScript XML",
                "Java Syntax Extension",
                "JavaScript Executive Extension",
                "JSON Extension"
            ],
            "answer": 0,
            "explanation": "JavaScript XML",
            "keywords": "Q: JSX in React stands for: | A: JavaScript XML"
        },
        {
            "id": 131,
            "text": "Suppose a React component renders 50 items in a list. If the component re-renders and adds 10 new items, how many total list items will be displayed?",
            "options": [
                "40",
                "50",
                "60",
                "70"
            ],
            "answer": 2,
            "explanation": "60",
            "keywords": "Q: Suppose a React component renders 50 items in | A: 60"
        },
        {
            "id": 132,
            "text": "Which of the following are true characteristics of React components? Select all that apply.",
            "options": [
                "Can be reused across different parts of the application.",
                "Manage their own state.",
                "Use JSX syntax.",
                "Directly manage routing."
            ],
            "answer": 0,
            "explanation": "Can be reused across different parts of the application. · Manage their own state. · Use JSX syntax.",
            "keywords": "Q: are true characteristics of React components? | A: Can be reused across different · Manage their own state · Use JSX syntax",
            "answers": [
                0,
                1,
                2
            ]
        },
        {
            "id": 133,
            "text": "Which of the following are valid ways to initialize and manage state in a functional React component? Choose 2 correct answers.",
            "options": [
                "Using the useState hook.",
                "Using the useReducer hook.",
                "Using a Provider component.",
                "Using the useRef hook."
            ],
            "answer": 0,
            "explanation": "Using the useState hook. · Using the useReducer hook.",
            "keywords": "Q: are valid ways to initialize and manage state | A: Using the useState hook · Using the useReducer hook",
            "answers": [
                0,
                1
            ]
        },
        {
            "id": 134,
            "text": "How do you include Tailwind CSS in a project?",
            "options": [
                "Link the Tailwind CSS stylesheet in the HTML file.",
                "Import the Tailwind CSS file in the JavaScript code.",
                "Use the @import rule in a CSS file to import Tailwind CSS.",
                "Add Tailwind CSS as a dependency in the package.json file."
            ],
            "answer": 2,
            "explanation": "Use the @import rule in a CSS file to import Tailwind CSS. · Add Tailwind CSS as a dependency in the package.json file.",
            "keywords": "Q: you include Tailwind CSS in a project? | A: Use the @import rule in · Add Tailwind CSS as a",
            "answers": [
                2,
                3
            ]
        },
        {
            "id": 135,
            "text": "How do you import and initialize the useReducer hook in a React component? Select all that apply.",
            "options": [
                "const [state, dispatch] = useReducer(reducer, initialState);",
                "const [state, setState] = useReducer(reducer, initialState);",
                "import React, { useReducer } from \"react\";",
                "import { useReducer } from \"react-redux\";"
            ],
            "answer": 0,
            "explanation": "const [state, dispatch] = useReducer(reducer, initialState); · import React, { useReducer } from \"react\";",
            "keywords": "Q: you import and initialize the useReducer hook in | A: const [state, dispatch] = useReducer(reducer, initialState); · import React, { useReducer } from \"react\";",
            "answers": [
                0,
                2
            ]
        },
        {
            "id": 136,
            "text": "Select the code snippet that correctly defines a Functional Component in React. Choose 2 answers.",
            "options": [
                "function MyComponent() { return <div>Hello, World!</div>; }",
                "const MyComponent = () => { return <div>Hello, World!</div>; }",
                "class MyComponent extends React.Component { render() { return <div>Hello, World!</div>; } }",
                "const MyComponent = React.createClass({ render() { return <div>Hello, World!</div>; } });"
            ],
            "answer": 0,
            "explanation": "function MyComponent() { return <div>Hello, World!</div>; } · const MyComponent = () => { return <div>Hello, World!</div>; }",
            "keywords": "Q: Select the code snippet that correctly defines a | A: function MyComponent() { return <div>Hello, World!</div>; } · const MyComponent = () => { return <div>Hello",
            "answers": [
                0,
                1
            ]
        },
        {
            "id": 137,
            "text": "Select the benefits of using React.memo and useMemo in React applications. Choose 2 correct answers.",
            "options": [
                "Prevent unnecessary component re-renders",
                "Automatically synchronize component state with global state",
                "Guarantee object references don't change during re-rendering",
                "Simplify the process of context management"
            ],
            "answer": 0,
            "explanation": "Prevent unnecessary component re-renders · Guarantee object references don't change during re-rendering",
            "keywords": "Q: Select the benefits of using React.memo and useMemo | A: Prevent unnecessary component re-renders · Guarantee object references don't change during re-rendering",
            "answers": [
                0,
                2
            ]
        },
        {
            "id": 138,
            "text": "What are the key features of Next.js?",
            "options": [
                "Server-side rendering, Static Site Generation, Image Optimization, Built-in Routing.",
                "Database integration, code debugging, and form validation.",
                "CSS styling, version control, and error handling.",
                "Package management, command-line interface, and testing framework."
            ],
            "answer": 0,
            "explanation": "Server-side rendering, Static Site Generation, Image Optimization, Built-in Routing.",
            "keywords": "Q: the key features of Next.js? | A: Server-side rendering"
        },
        {
            "id": 139,
            "text": "Which methods are part of the Lifecycle in Class Components?",
            "options": [
                "componentDidMount, componentDidUpdate, componentWillUnmount.",
                "render, setState, forceUpdate.",
                "constructor, render, componentWillUpdate.",
                "componentWillReceiveProps, shouldComponentUpdate, componentDidCatch."
            ],
            "answer": 0,
            "explanation": "componentDidMount, componentDidUpdate, componentWillUnmount.",
            "keywords": "Q: Which methods are part of the Lifecycle in | A: componentDidMount, componentDidUpdate, componentWillUnmount"
        },
        {
            "id": 140,
            "text": "Which React-Bootstrap components are used to create navigation menus?",
            "options": [
                "Navbars, Navs, Tabs.",
                "Alert, Card.",
                "Button, Checkbox.",
                "Modal, Listbox."
            ],
            "answer": 0,
            "explanation": "Navbars, Navs, Tabs.",
            "keywords": "Q: Which React-Bootstrap components are used to create navigation | A: Navbars, Navs, Tabs"
        },
        {
            "id": 141,
            "text": "What is the purpose of the className attribute in JSX?",
            "options": [
                "To define a CSS class for the JSX element",
                "To specify the component's class name",
                "To define a unique identifier for the element",
                "To add inline styles to the element"
            ],
            "answer": 0,
            "explanation": "To define a CSS class for the JSX element",
            "keywords": "Q: the purpose of the className attribute in JSX? | A: To define a CSS class for the JSX element"
        },
        {
            "id": 142,
            "text": "What is event pooling in React?",
            "options": [
                "The process of reusing event objects for performance optimization.",
                "The process of creating multiple event objects for each event.",
                "The process of cleaning up event objects after they are used.",
                "The process of handling events in a pool of event handlers."
            ],
            "answer": 0,
            "explanation": "The process of reusing event objects for performance optimization.",
            "keywords": "Q: event pooling in React? | A: The process of reusing event"
        },
        {
            "id": 143,
            "text": "What is Tailwind CSS?",
            "options": [
                "A JavaScript framework for building single-page applications.",
                "A programming language used for backend development.",
                "A utility-first CSS framework for building responsive web interfaces.",
                "A database management system for storing CSS styles."
            ],
            "answer": 2,
            "explanation": "A utility-first CSS framework for building responsive web interfaces.",
            "keywords": "Q: Tailwind CSS? | A: A utility-first CSS framework for"
        },
        {
            "id": 144,
            "text": "What is the purpose of PropTypes?",
            "options": [
                "To ensure type safety in React components.",
                "To improve performance in React applications.",
                "To handle asynchronous operations in React.",
                "To enable code reusability in React components."
            ],
            "answer": 0,
            "explanation": "To ensure type safety in React components.",
            "keywords": "Q: the purpose of PropTypes? | A: To ensure type safety in React components"
        },
        {
            "id": 145,
            "text": "What is the purpose of the initial state parameter in a Redux reducer function?",
            "options": [
                "To define the structure of the Redux store",
                "To specify the actions that can be dispatched",
                "To handle asynchronous operations",
                "To define the initial state of the reducer"
            ],
            "answer": 3,
            "explanation": "To define the initial state of the reducer",
            "keywords": "Q: the purpose of the initial state parameter in | A: To define the initial state of the reducer"
        },
        {
            "id": 146,
            "text": "What is the purpose of json-server in the context of setting up a server?",
            "options": [
                "To handle user input and interactions.",
                "To display the website content.",
                "To provide a static web server for serving JSON data.",
                "To generate dynamic server responses."
            ],
            "answer": 2,
            "explanation": "To provide a static web server for serving JSON data.",
            "keywords": "Q: the purpose of json-server in the context of | A: To provide a static web"
        },
        {
            "id": 147,
            "text": "What is the purpose of the next/link module in Next.js?",
            "options": [
                "It is used for handling form submissions.",
                "It provides client-side routing capabilities.",
                "It is responsible for server-side rendering.",
                "It enables serverless function deployment."
            ],
            "answer": 1,
            "explanation": "It provides client-side routing capabilities.",
            "keywords": "Q: the purpose of the next/link module in Next.js? | A: It provides client-side routing capabilities"
        },
        {
            "id": 148,
            "text": "What is the purpose of package.json in a Node.js project?",
            "options": [
                "It defines the project's dependencies and scripts",
                "It contains the source code of the project",
                "It configures the Node.js environment",
                "It manages the project's build process"
            ],
            "answer": 0,
            "explanation": "It defines the project's dependencies and scripts",
            "keywords": "Q: the purpose of package.json in a Node.js project? | A: It defines the project's dependencies and scripts"
        },
        {
            "id": 149,
            "text": "What is the primary purpose of the tailwind.config.js file in a Tailwind CSS project?",
            "options": [
                "To define custom utility classes for HTML elements.",
                "To configure and customize the default Tailwind CSS settings.",
                "To handle CSS minification for production.",
                "To install third-party plugins automatically."
            ],
            "answer": 1,
            "explanation": "To configure and customize the default Tailwind CSS settings.",
            "keywords": "Q: the primary purpose of the tailwind.config.js file in | A: To configure and customize the"
        },
        {
            "id": 150,
            "text": "What is the role of HTTP response codes in client-server communication?",
            "options": [
                "To indicate the status of the HTTP request",
                "To manage state within a component",
                "To handle server-side logic",
                "To manage routing in a React application"
            ],
            "answer": 0,
            "explanation": "To indicate the status of the HTTP request",
            "keywords": "Q: the role of HTTP response codes in client-server | A: To indicate the status of the HTTP request"
        },
        {
            "id": 151,
            "text": "What is a prop in React used for?",
            "options": [
                "It defines the internal state of a component.",
                "It specifies the visual appearance of a component.",
                "It enables communication and data transfer between components.",
                "It handles user interactions and events."
            ],
            "answer": 2,
            "explanation": "It enables communication and data transfer between components.",
            "keywords": "Q: a prop in React used for? | A: It enables communication and data"
        },
        {
            "id": 152,
            "text": "What is the purpose of a router in web development?",
            "options": [
                "To handle database operations",
                "To manage user authentication",
                "To handle navigation between different pages",
                "To style the user interface"
            ],
            "answer": 2,
            "explanation": "To handle navigation between different pages",
            "keywords": "Q: the purpose of a router in web development? | A: To handle navigation between different pages"
        },
        {
            "id": 153,
            "text": "What is the purpose of a server in a client-server architecture?",
            "options": [
                "To handle user input and interactions.",
                "To display the website content.",
                "To provide data and resources to clients.",
                "To style the user interface."
            ],
            "answer": 2,
            "explanation": "To provide data and resources to clients.",
            "keywords": "Q: the purpose of a server in a client-server | A: To provide data and resources to clients"
        },
        {
            "id": 154,
            "text": "What is React?",
            "options": [
                "A programming language",
                "A JavaScript library for building user interfaces",
                "A database management system",
                "A web browser"
            ],
            "answer": 1,
            "explanation": "A JavaScript library for building user interfaces",
            "keywords": "Q: React? | A: A JavaScript library for building user interfaces"
        },
        {
            "id": 155,
            "text": "What is the purpose of Code Splitting in web development?",
            "options": [
                "To combine multiple code files into a single bundle",
                "To improve web performance by loading only necessary code",
                "To obfuscate code for security purposes",
                "To enhance cross-browser compatibility"
            ],
            "answer": 1,
            "explanation": "To improve web performance by loading only necessary code",
            "keywords": "Q: the purpose of Code Splitting in web development? | A: To improve web performance by"
        },
        {
            "id": 156,
            "text": "What is the purpose of a container component in React?",
            "options": [
                "To handle UI rendering and user interactions",
                "To fetch the data and passing to child component",
                "To provide a visual representation of data",
                "To encapsulate reusable UI components"
            ],
            "answer": 1,
            "explanation": "To fetch the data and passing to child component",
            "keywords": "Q: the purpose of a container component in React? | A: To fetch the data and"
        },
        {
            "id": 157,
            "text": "What is the purpose of the Redux middleware in React applications?",
            "options": [
                "To handle asynchronous actions and side effects",
                "To define the structure of the Redux store",
                "To connect React components to the Redux store",
                "To manage component hierarchy"
            ],
            "answer": 0,
            "explanation": "To handle asynchronous actions and side effects",
            "keywords": "Q: the purpose of the Redux middleware in React | A: To handle asynchronous actions and side effects"
        },
        {
            "id": 158,
            "text": "What is the purpose of arrow functions in ES6?",
            "options": [
                "To bind the value of this inside a function",
                "To create self-executing functions",
                "To declare asynchronous functions",
                "To define functions with a shorter syntax"
            ],
            "answer": 3,
            "explanation": "To define functions with a shorter syntax",
            "keywords": "Q: the purpose of arrow functions in ES6? | A: To define functions with a shorter syntax"
        },
        {
            "id": 159,
            "text": "What are PropTypes in React?",
            "options": [
                "They are used for creating component classes.",
                "They are used for defining the types of component props.",
                "They are used for handling events in React.",
                "They are used for manipulating the component's state."
            ],
            "answer": 1,
            "explanation": "They are used for defining the types of component props.",
            "keywords": "Q: PropTypes in React? | A: They are used for defining"
        },
        {
            "id": 160,
            "text": "What does the fallback prop in Suspense represent?",
            "options": [
                "The component to display while the lazy component is loading.",
                "The component to display when an error occurs during loading",
                "The component to display when the lazy component is rendered",
                "The component to display when Suspense is not supported"
            ],
            "answer": 0,
            "explanation": "The component to display while the lazy component is loading.",
            "keywords": "Q: the fallback prop in Suspense represent? | A: The component to display while"
        },
        {
            "id": 161,
            "text": "What does the npx create-next-app command do?",
            "options": [
                "It creates a new React application",
                "It creates a new Next.js application",
                "It installs Tailwind CSS",
                "It creates a new package.json in NextJS"
            ],
            "answer": 1,
            "explanation": "It creates a new Next.js application",
            "keywords": "Q: the npx create-next-app command do? | A: It creates a new Next.js application"
        },
        {
            "id": 162,
            "text": "What does the catch method do in a promise chain?",
            "options": [
                "It handles the resolved value",
                "It handles errors",
                "It pauses the execution",
                "It converts the promise to a synchronous function"
            ],
            "answer": 1,
            "explanation": "It handles errors",
            "keywords": "Q: the catch method do in a promise chain? | A: It handles errors"
        },
        {
            "id": 163,
            "text": "What does the render method in a React component do?",
            "options": [
                "It manages state updates",
                "It handles side effects",
                "It returns the JSX that describes the UI",
                "It fetches data from an API"
            ],
            "answer": 2,
            "explanation": "It returns the JSX that describes the UI",
            "keywords": "Q: the render method in a React component do? | A: It returns the JSX that describes the UI"
        },
        {
            "id": 164,
            "text": "What does the default case in the reducer function do?",
            "options": [
                "Resets the state",
                "Handles unknown actions",
                "Throws an error for unknown actions",
                "Returns the current state"
            ],
            "answer": 3,
            "explanation": "Returns the current state",
            "keywords": "Q: the default case in the reducer function do? | A: Returns the current state"
        },
        {
            "id": 165,
            "text": "What happens during the render phase of React's rendering process?",
            "options": [
                "The DOM is updated immediately",
                "React calculates what to render but doesn't change the DOM yet",
                "Side effects like useEffect are executed",
                "Event listeners are removed"
            ],
            "answer": 1,
            "explanation": "React calculates what to render but doesn't change the DOM yet",
            "keywords": "Q: What happens during the render phase of React's | A: React calculates what to render"
        },
        {
            "id": 166,
            "text": "What happens if a prop fails the validation defined by a simple property validator?",
            "options": [
                "An error will be thrown during runtime.",
                "The prop will be automatically converted to the expected type.",
                "The component will continue to function normally.",
                "The validation will be bypassed, and the prop will be accepted."
            ],
            "answer": 0,
            "explanation": "An error will be thrown during runtime.",
            "keywords": "Q: What happens if a prop fails the validation | A: An error will be thrown during runtime"
        },
        {
            "id": 167,
            "text": "What happens when you declare a function with the \"async\" keyword?",
            "options": [
                "It makes the function execute immediately",
                "It tells the function to pause until all variables are declared",
                "It makes the function return a Promise",
                "It prevents any asynchronous code from running"
            ],
            "answer": 2,
            "explanation": "It makes the function return a Promise",
            "keywords": "Q: What happens when you declare a function with | A: It makes the function return a Promise"
        },
        {
            "id": 168,
            "text": "What happens if you forget to add key to items in a list rendered with map()?",
            "options": [
                "React will not render the list at all.",
                "React will display a warning in the console about missing keys.",
                "React will automatically assign keys to each item.",
                "React will throw an error and stop rendering the component."
            ],
            "answer": 1,
            "explanation": "React will display a warning in the console about missing keys.",
            "keywords": "Q: What happens if you forget to add key | A: React will display a warning"
        },
        {
            "id": 169,
            "text": "What would happen if you didn't include the class=\"form-control\" in your <input> element?",
            "options": [
                "The input would not be submitted with the form",
                "The input would fail client-side validation",
                "The input field would revert to the browser's default styles",
                "The input field would become non-responsive"
            ],
            "answer": 2,
            "explanation": "The input field would revert to the browser's default styles",
            "keywords": "Q: What would happen if you didn't include the | A: The input field would revert"
        },
        {
            "id": 170,
            "text": "Which of the following is a feature of Next.js?",
            "options": [
                "A CSS framework for styling web applications.",
                "A server-side rendering framework for React.",
                "A state management library for React applications.",
                "A testing framework for JavaScript applications."
            ],
            "answer": 1,
            "explanation": "A server-side rendering framework for React.",
            "keywords": "Q: is a feature of Next.js? | A: A server-side rendering framework for React"
        },
        {
            "id": 171,
            "text": "Which of the following best explains the purpose of the tailwind.config.js file?",
            "options": [
                "To configure server-side rendering",
                "To define custom utility classes and paths to template files",
                "To manage JavaScript dependencies",
                "To set up routing for the application"
            ],
            "answer": 1,
            "explanation": "To define custom utility classes and paths to template files",
            "keywords": "Q: best explains the purpose of the tailwind.config.js file? | A: To define custom utility classes"
        },
        {
            "id": 172,
            "text": "Which of the following best describes Lazy Components?",
            "options": [
                "Components that are slow to render",
                "Components that are loaded asynchronously",
                "Components that are reusable across multiple projects",
                "Components that are optimized for mobile devices"
            ],
            "answer": 1,
            "explanation": "Components that are loaded asynchronously",
            "keywords": "Q: best describes Lazy Components? | A: Components that are loaded asynchronously"
        },
        {
            "id": 173,
            "text": "Which of the following is a common use case for using Redux in a React application?",
            "options": [
                "Managing authentication and user sessions",
                "Styling and layout of React components",
                "Handling form validation and input tracking",
                "Implementing server-side rendering in React"
            ],
            "answer": 0,
            "explanation": "Managing authentication and user sessions",
            "keywords": "Q: is a common use case for using Redux | A: Managing authentication and user sessions"
        },
        {
            "id": 174,
            "text": "Which of the following is the best use case for React Context?",
            "options": [
                "Passing props from a parent to a single child component.",
                "Passing data to a component at the same level in the tree.",
                "Sharing a theme setting across multiple nested components.",
                "Updating a component's local state."
            ],
            "answer": 2,
            "explanation": "Sharing a theme setting across multiple nested components.",
            "keywords": "Q: is the best use case for React Context? | A: Sharing a theme setting across"
        },
        {
            "id": 175,
            "text": "Which of the following is used to pass a function from a parent component to a child component?",
            "options": [
                "Passing a function as a prop to the child component.",
                "Using useState hook in the child component.",
                "Using useContext in both parent and child components.",
                "Directly accessing the child component's state."
            ],
            "answer": 0,
            "explanation": "Passing a function as a prop to the child component.",
            "keywords": "Q: is used to pass a function from a | A: Passing a function as a"
        },
        {
            "id": 176,
            "text": "Which of the following could cause an Effect to run too frequently?",
            "options": [
                "Including all state variables in the dependency array.",
                "Not using a dependency array.",
                "Including a variable like data that changes often in the dependency array.",
                "Omitting the dependency array altogether."
            ],
            "answer": 1,
            "explanation": "Not using a dependency array. · Including a variable like data that changes often in the dependency array. · Omitting the dependency array altogether.",
            "keywords": "Q: could cause an Effect to run too frequently? | A: Not using a dependency array · Including a variable like data · Omitting the dependency array altogether",
            "answers": [
                1,
                2,
                3
            ]
        },
        {
            "id": 177,
            "text": "Which of the following is the correct way to use useSelector to access a value from the Redux store?",
            "options": [
                "const value = useSelector((store) => store.value);",
                "const value = useSelector((state) => state.value);",
                "const value = useSelector((context) => context.value);",
                "const value = useSelector((redux) => redux.value);"
            ],
            "answer": 1,
            "explanation": "const value = useSelector((state) => state.value);",
            "keywords": "Q: is the correct way to use useSelector to | A: const value = useSelector((state) => state.value);"
        },
        {
            "id": 178,
            "text": "How do you declare multiple routes in React Router?",
            "options": [
                "By nesting <Route> components inside each other.",
                "By using the <Routes> component instead of <Route>",
                "By using the path prop with multiple values in a single <Route> component.",
                "By using an array of Route components inside the Routes component."
            ],
            "answer": 0,
            "explanation": "By nesting <Route> components inside each other.",
            "keywords": "Q: you declare multiple routes in React Router? | A: By nesting <Route> components inside each other"
        },
        {
            "id": 179,
            "text": "How do you import the useNavigate hook from React Router?",
            "options": [
                "import { useNavigate } from \"react-router\";",
                "import { useNavigate } from \"react-router-dom\";",
                "import { useNavigate } from \"react-router-native\";",
                "import { useNavigate } from \"react-navigation\";"
            ],
            "answer": 1,
            "explanation": "import { useNavigate } from \"react-router-dom\";",
            "keywords": "Q: you import the useNavigate hook from React Router? | A: import { useNavigate } from \"react-router-dom\";"
        },
        {
            "id": 180,
            "text": "How do you create a modal in Bootstrap?",
            "options": [
                "By using the <modal> HTML element.",
                "By applying the modal class to the container element.",
                "By using the .modal class along with the data-bs-toggle=\"modal\" attribute.",
                "By using JavaScript to dynamically create and show modal elements."
            ],
            "answer": 2,
            "explanation": "By using the .modal class along with the data-bs-toggle=\"modal\" attribute.",
            "keywords": "Q: you create a modal in Bootstrap? | A: By using the .modal class"
        },
        {
            "id": 181,
            "text": "How do you create a new Next.js project?",
            "options": [
                "Use the create-next-app command-line tool.",
                "Install the Next.js package globally with npm.",
                "Clone the Next.js starter template from GitHub.",
                "Use the npm init command and manually configure the project."
            ],
            "answer": 0,
            "explanation": "Use the create-next-app command-line tool.",
            "keywords": "Q: you create a new Next.js project? | A: Use the create-next-app command-line tool"
        },
        {
            "id": 182,
            "text": "How do you create a responsive grid layout using Bootstrap?",
            "options": [
                "By using the <div class=\"grid\"> element.",
                "By applying the .responsive-grid class to the container element.",
                "By using the .row and .col-* classes to create rows and columns.",
                "By manually specifying the width of each element using CSS."
            ],
            "answer": 2,
            "explanation": "By using the .row and .col-* classes to create rows and columns.",
            "keywords": "Q: you create a responsive grid layout using Bootstrap? | A: By using the .row and"
        },
        {
            "id": 183,
            "text": "How do you install Tailwind CSS in a project?",
            "options": [
                "Use the npm install tailwindcss command.",
                "Include the Tailwind CSS CDN in the HTML file.",
                "Install Tailwind CSS globally with npm.",
                "Use the npx tailwindcss init command."
            ],
            "answer": 0,
            "explanation": "Use the npm install tailwindcss command.",
            "keywords": "Q: you install Tailwind CSS in a project? | A: Use the npm install tailwindcss command"
        },
        {
            "id": 184,
            "text": "How can you access Chrome DevTools?",
            "options": [
                "By pressing F12 or right-clicking and selecting \"Inspect\"",
                "By installing a Chrome extension.",
                "By typing \"chrome://devtools\" in the address bar.",
                "By opening the Chrome menu and selecting \"DevTools.\""
            ],
            "answer": 0,
            "explanation": "By pressing F12 or right-clicking and selecting \"Inspect\"",
            "keywords": "Q: you access Chrome DevTools? | A: By pressing F12 or right-clicking"
        },
        {
            "id": 185,
            "text": "How can you conditionally render content in JSX?",
            "options": [
                "By using the if statement",
                "By using the for loop",
                "By using the ternary operator (condition ? trueContent : falseContent)",
                "By using the switch statement"
            ],
            "answer": 2,
            "explanation": "By using the ternary operator (condition ? trueContent : falseContent)",
            "keywords": "Q: you conditionally render content in JSX? | A: By using the ternary operator"
        },
        {
            "id": 186,
            "text": "How can you create a new Git repository?",
            "options": [
                "By running \"git init\" in the project directory",
                "By adding a remote repository URL",
                "By cloning an existing repository",
                "By committing changes using \"git commit -m\""
            ],
            "answer": 0,
            "explanation": "By running \"git init\" in the project directory",
            "keywords": "Q: you create a new Git repository? | A: By running \"git init\" in"
        },
        {
            "id": 187,
            "text": "How can you set up Git for version control?",
            "options": [
                "By running \"npm install git\"",
                "By downloading Git from the official website",
                "By using a Git GUI client",
                "By configuring Git settings in Visual Studio Code"
            ],
            "answer": 1,
            "explanation": "By downloading Git from the official website",
            "keywords": "Q: you set up Git for version control? | A: By downloading Git from the official website"
        },
        {
            "id": 188,
            "text": "How can you configure Tailwind CSS in a Next.js project?",
            "options": [
                "By importing a CSS file directly in the component",
                "By installing the Tailwind CSS package and creating a configuration file",
                "By using a CDN link in the HTML file",
                "By installing a Tailwind CSS plugin for Next.js"
            ],
            "answer": 1,
            "explanation": "By installing the Tailwind CSS package and creating a configuration file",
            "keywords": "Q: you configure Tailwind CSS in a Next.js project? | A: By installing the Tailwind CSS"
        },
        {
            "id": 189,
            "text": "Why should you avoid using too many lazy components in your application?",
            "options": [
                "Because it results in multiple HTTP requests, slowing down the application.",
                "Because it decreases the performance by loading everything upfront.",
                "Because it makes the code difficult to debug.",
                "Because it affects the layout and styling of components."
            ],
            "answer": 0,
            "explanation": "Because it results in multiple HTTP requests, slowing down the application.",
            "keywords": "Q: Why should you avoid using too many lazy | A: Because it results in multiple HTTP requests"
        },
        {
            "id": 190,
            "text": "How can the useEffect hook be optimized for cleanup actions?",
            "options": [
                "By passing an empty array as the second argument",
                "By using a class-based component",
                "By calling it after every render",
                "By returning a cleanup function that removes event listeners"
            ],
            "answer": 3,
            "explanation": "By returning a cleanup function that removes event listeners",
            "keywords": "Q: the useEffect hook be optimized for cleanup actions? | A: By returning a cleanup function"
        },
        {
            "id": 191,
            "text": "How do you declare a route in React Router?",
            "options": [
                "Using <Link path=\"/\" element={<Home />} />",
                "Using <Route path=\"/\" element={<Home />} />",
                "Using <Routes path=\"/\" element={<Home />} />",
                "Using <Context path=\"/\"></Context>"
            ],
            "answer": 1,
            "explanation": "Using <Route path=\"/\" element={<Home />} />",
            "keywords": "Q: you declare a route in React Router? | A: Using <Route path=\"/\" element={<Home />} />"
        },
        {
            "id": 192,
            "text": "How can you optimize performance when using Hooks in React?",
            "options": [
                "By using the useMemo and useCallback Hooks.",
                "By avoiding unnecessary re-renders with the memo Hook.",
                "By using the useLayoutEffect Hook instead of useEffect.",
                "By using the useDebugValue Hook for debugging purposes."
            ],
            "answer": 0,
            "explanation": "By using the useMemo and useCallback Hooks.",
            "keywords": "Q: you optimize performance when using Hooks in React? | A: By using the useMemo and useCallback Hooks"
        },
        {
            "id": 193,
            "text": "How can you install React-Bootstrap in your ReactJS project?",
            "options": [
                "By using npm or yarn to install the package.",
                "By downloading the React-Bootstrap files from a website.",
                "By copying and pasting the React-Bootstrap code into your project.",
                "By using a CDN link to include React-Bootstrap in your HTML file."
            ],
            "answer": 0,
            "explanation": "By using npm or yarn to install the package.",
            "keywords": "Q: you install React-Bootstrap in your ReactJS project? | A: By using npm or yarn to install the package"
        },
        {
            "id": 194,
            "text": "How can you create a new React application using Create React App?",
            "options": [
                "By running \"npx create-react-app my-app\"",
                "By downloading a ZIP file from the official website",
                "By using an online code editor",
                "By cloning a Git repository"
            ],
            "answer": 0,
            "explanation": "By running \"npx create-react-app my-app\"",
            "keywords": "Q: you create a new React application using Create | A: By running \"npx create-react-app my-app\""
        },
        {
            "id": 195,
            "text": "How can route parameters be defined in React Router?",
            "options": [
                "By using the params prop in the <Route> component",
                "By accessing them directly from the URL",
                "By using the path prop with placeholders in the <Route> component",
                "By using the match object passed to the component"
            ],
            "answer": 2,
            "explanation": "By using the path prop with placeholders in the <Route> component",
            "keywords": "Q: route parameters be defined in React Router? | A: By using the path prop"
        },
        {
            "id": 196,
            "text": "How would you create a custom Hook in React?",
            "options": [
                "By defining a function that uses other built-in Hooks.",
                "By extending the React.Component class.",
                "By wrapping a class component with a functional component.",
                "By using the createCustomHook() function."
            ],
            "answer": 0,
            "explanation": "By defining a function that uses other built-in Hooks.",
            "keywords": "Q: How would you create a custom Hook in | A: By defining a function that"
        },
        {
            "id": 197,
            "text": "Why use React-Bootstrap?",
            "options": [
                "It is easier to manage the state as updates are made using React's state.",
                "It is faster and more efficient than other UI libraries.",
                "It is compatible with all browsers and devices.",
                "It is developed by Facebook and has a large community support."
            ],
            "answer": 0,
            "explanation": "It is easier to manage the state as updates are made using React's state.",
            "keywords": "Q: Why use React-Bootstrap? | A: It is easier to manage"
        },
        {
            "id": 198,
            "text": "Why are frameworks like React, Angular, or Vue popular among developers?",
            "options": [
                "They only work with static content",
                "They allow building dynamic, responsive, and efficient web applications",
                "They focus on database management",
                "They are used exclusively for creating server-side logic"
            ],
            "answer": 1,
            "explanation": "They allow building dynamic, responsive, and efficient web applications",
            "keywords": "Q: frameworks like React, Angular, or Vue popular among | A: They allow building dynamic"
        },
        {
            "id": 199,
            "text": "In Next.js, what mechanism primarily determines the routes in an application?",
            "options": [
                "Explicit configuration in a central routes.json file.",
                "File-system routing, where routes are determined by the structure of files",
                "Dynamic route declarations using React Router",
                "Server-side API endpoints only"
            ],
            "answer": 1,
            "explanation": "File-system routing, where routes are determined by the structure of files",
            "keywords": "Q: In Next.js, what mechanism primarily determines the routes | A: File-system routing"
        },
        {
            "id": 200,
            "text": "In JSX, which of the following is correct?",
            "options": [
                "You must always wrap JSX in a single root element",
                "You can use multiple root elements without any wrapping",
                "JSX tags can be self-closing only for non-void elements",
                "JSX does not support attributes like className"
            ],
            "answer": 0,
            "explanation": "You must always wrap JSX in a single root element",
            "keywords": "Q: In JSX, which of the following is correct? | A: You must always wrap JSX"
        },
        {
            "id": 201,
            "text": "Compare the use of Redux and Flux for state management. Which statement is true?",
            "options": [
                "Redux uses multiple stores, while Flux uses a single store.",
                "Flux uses multiple stores, while Redux uses a single store.",
                "Both Redux and Flux use multiple stores.",
                "Both Redux and Flux use a single store."
            ],
            "answer": 1,
            "explanation": "Flux uses multiple stores, while Redux uses a single store.",
            "keywords": "Q: Compare the use of Redux and Flux for | A: Flux uses multiple stores"
        },
        {
            "id": 202,
            "text": "Compare the use of Container and Container fluid in React-Bootstrap. Which statement is accurate?",
            "options": [
                "Container is always 100% wide.",
                "Container fluid is fixed-width at all breakpoints.",
                "Container fluid is 100% wide at all breakpoints.",
                "Container is 100% wide at all breakpoints."
            ],
            "answer": 2,
            "explanation": "Container fluid is 100% wide at all breakpoints.",
            "keywords": "Q: Compare the use of Container and Container fluid | A: Container fluid is 100% wide"
        },
        {
            "id": 203,
            "text": "To specify that a property must be provided and must have a specific type in PropTypes, what is appended to the type validator?",
            "options": [
                ".optional",
                ".default",
                ".isRequired",
                ".mustExist"
            ],
            "answer": 2,
            "explanation": ".isRequired",
            "keywords": "Q: To specify that a property must be provided | A: .isRequired"
        },
        {
            "id": 204,
            "text": "What is the purpose of the fluid prop in React-Bootstrap's Container component?",
            "options": [
                "It makes the container take up the entire width of the viewport.",
                "It enables the container to display text.",
                "It changes the container's background color.",
                "It makes the container fixed width."
            ],
            "answer": 0,
            "explanation": "It makes the container take up the entire width of the viewport.",
            "keywords": "Q: the purpose of the fluid prop in React-Bootstrap's | A: It makes the container take"
        },
        {
            "id": 205,
            "text": "What is the main advantage of using Hooks in React?",
            "options": [
                "Hooks allow React to maintain internal state without classes",
                "Hooks simplify sharing functionality between components",
                "Hooks remove the need for functional components",
                "Hooks only support stateful components"
            ],
            "answer": 0,
            "explanation": "Hooks allow React to maintain internal state without classes",
            "keywords": "Q: the main advantage of using Hooks in React? | A: Hooks allow React to maintain"
        },
        {
            "id": 206,
            "text": "What is the primary purpose of Next.js?",
            "options": [
                "To enable server-side rendering and generate static websites.",
                "To manage state in React applications.",
                "To provide a UI component library.",
                "To create database schemas."
            ],
            "answer": 0,
            "explanation": "To enable server-side rendering and generate static websites.",
            "keywords": "Q: the primary purpose of Next.js? | A: To enable server-side rendering and"
        },
        {
            "id": 207,
            "text": "What is the purpose of the rest parameter in ES6?",
            "options": [
                "To declare variables in the global scope.",
                "To accept an indefinite number of arguments as an array.",
                "To handle asynchronous tasks.",
                "To destructure arrays."
            ],
            "answer": 1,
            "explanation": "To accept an indefinite number of arguments as an array.",
            "keywords": "Q: the purpose of the rest parameter in ES6? | A: To accept an indefinite number"
        },
        {
            "id": 208,
            "text": "What is the purpose of json-server in client-server communication?",
            "options": [
                "To set up a simple static web server that serves data to clients.",
                "To encrypt data during transmission between client and server.",
                "To manage client authentication and session data.",
                "To provide a full-featured backend for the React application."
            ],
            "answer": 0,
            "explanation": "To set up a simple static web server that serves data to clients.",
            "keywords": "Q: the purpose of json-server in client-server communication? | A: To set up a simple"
        },
        {
            "id": 209,
            "text": "What is the purpose of a package.json file in a Node.js project?",
            "options": [
                "To store application data",
                "To define routes for the web application",
                "To serve as documentation for project dependencies and their versions",
                "To compile JavaScript code"
            ],
            "answer": 2,
            "explanation": "To serve as documentation for project dependencies and their versions",
            "keywords": "Q: the purpose of a package.json file in a | A: To serve as documentation for"
        },
        {
            "id": 210,
            "text": "What is the primary purpose of event handlers in React?",
            "options": [
                "To manage state within a component",
                "To respond to user interactions like clicking, hovering, and focusing",
                "To handle server-side logic",
                "To manage routing in a React application"
            ],
            "answer": 1,
            "explanation": "To respond to user interactions like clicking, hovering, and focusing",
            "keywords": "Q: the primary purpose of event handlers in React? | A: To respond to user interactions like clicking"
        },
        {
            "id": 211,
            "text": "What is Redux Thunk used for?",
            "options": [
                "To manage asynchronous actions in Redux.",
                "To log every action dispatched to the Redux store.",
                "To split reducers into simpler functions.",
                "To handle side effects in React components."
            ],
            "answer": 0,
            "explanation": "To manage asynchronous actions in Redux.",
            "keywords": "Q: Redux Thunk used for? | A: To manage asynchronous actions in Redux"
        },
        {
            "id": 212,
            "text": "What is the benefit of using Code Splitting and lazy components for web performance?",
            "options": [
                "Enhanced security",
                "Handle load-time User Experience (UX)",
                "Smaller bundle sizes",
                "Handle CORS"
            ],
            "answer": 2,
            "explanation": "Smaller bundle sizes",
            "keywords": "Q: the benefit of using Code Splitting and lazy | A: Smaller bundle sizes"
        },
        {
            "id": 213,
            "text": "What is the main purpose of the Bootstrap framework in web development?",
            "options": [
                "To manage back-end data",
                "To provide pre-designed responsive layout components and styles for front-end development",
                "To perform server-side scripting",
                "To enable database management in web applications"
            ],
            "answer": 1,
            "explanation": "To provide pre-designed responsive layout components and styles for front-end development",
            "keywords": "Q: the main purpose of the Bootstrap framework in | A: To provide pre-designed responsive layout"
        },
        {
            "id": 214,
            "text": "What is a key differentiating characteristic of Tailwind CSS compared to traditional CSS frameworks like Bootstrap?",
            "options": [
                "It provides a comprehensive set of pre-built components for rapid development",
                "It enforces strict design patterns to maintain visual consistency",
                "It offers a huge list of utility CSS classes, providing more freedom for custom designs",
                "It relies heavily on JavaScript for styling and layout management"
            ],
            "answer": 2,
            "explanation": "It offers a huge list of utility CSS classes, providing more freedom for custom designs",
            "keywords": "Q: a key differentiating characteristic of Tailwind CSS compared | A: It offers a huge list of utility CSS classes"
        },
        {
            "id": 215,
            "text": "What is a Higher-Order Component (HOC) in React?",
            "options": [
                "A component that has a higher visual hierarchy than others.",
                "A function that takes a component as an argument and returns a new component with enhanced functionality.",
                "A component that only renders other components without any logic of its own.",
                "A built-in React component for advanced routing."
            ],
            "answer": 1,
            "explanation": "A function that takes a component as an argument and returns a new component with enhanced functionality.",
            "keywords": "Q: a Higher-Order Component (HOC) in React? | A: A function that takes a"
        },
        {
            "id": 216,
            "text": "What is the primary goal of decoupling route declarations in a React Router application?",
            "options": [
                "To improve the organization and maintainability of the code by separating routes into larger, more manageable modules.",
                "To enhance the security of the application by separating sensitive routes from public routes.",
                "To enable the use of dynamic routing and nested routes in the application.",
                "To enhance code organization and maintainability by separating routes into smaller, more manageable modules."
            ],
            "answer": 3,
            "explanation": "To enhance code organization and maintainability by separating routes into smaller, more manageable modules.",
            "keywords": "Q: the primary goal of decoupling route declarations in | A: To enhance code organization and"
        },
        {
            "id": 217,
            "text": "What is JSX in React primarily used for?",
            "options": [
                "Defining server-side logic and database queries",
                "Describing the user interface structure and embedding HTML-like markup directly within JavaScript code.",
                "Managing application-wide state using a global store",
                "Optimizing image loading and asset management"
            ],
            "answer": 1,
            "explanation": "Describing the user interface structure and embedding HTML-like markup directly within JavaScript code.",
            "keywords": "Q: JSX in React primarily used for? | A: Describing the user interface structure"
        },
        {
            "id": 218,
            "text": "What is async/await in JavaScript?",
            "options": [
                "It is a JavaScript feature that makes asynchronous code look and behave like synchronous code.",
                "It is used to send data to a server without blocking the UI.",
                "It is a way to handle callback functions.",
                "It is a method to manage state in React components."
            ],
            "answer": 0,
            "explanation": "It is a JavaScript feature that makes asynchronous code look and behave like synchronous code.",
            "keywords": "Q: async/await in JavaScript? | A: It is a JavaScript feature"
        },
        {
            "id": 219,
            "text": "What is the main feature of Tailwind CSS compared to other CSS frameworks?",
            "options": [
                "It provides pre-designed UI components and themes",
                "It uses a utility-first approach, allowing developers to build custom designs using small utility classes",
                "It provides pre-built JavaScript components",
                "It is a framework specifically for mobile development"
            ],
            "answer": 1,
            "explanation": "It uses a utility-first approach, allowing developers to build custom designs using small utility classes",
            "keywords": "Q: the main feature of Tailwind CSS compared to | A: It uses a utility-first approach"
        },
        {
            "id": 220,
            "text": "What is the role of the BrowserRouter component in React Router?",
            "options": [
                "To define a route in the application",
                "To wrap the entire application and enable routing using the HTML5 History API",
                "To handle form submissions",
                "To manage state within a component"
            ],
            "answer": 1,
            "explanation": "To wrap the entire application and enable routing using the HTML5 History API",
            "keywords": "Q: the role of the BrowserRouter component in React | A: To wrap the entire application"
        },
        {
            "id": 221,
            "text": "What is React-Bootstrap?",
            "options": [
                "It combines the flexibility and power of the Bootstrap framework with the dynamic nature of React.",
                "It is a programming language used for back-end development.",
                "It is a database management system for React applications.",
                "It is a version control system for React projects."
            ],
            "answer": 0,
            "explanation": "It combines the flexibility and power of the Bootstrap framework with the dynamic nature of React.",
            "keywords": "Q: React-Bootstrap? | A: It combines the flexibility and"
        },
        {
            "id": 222,
            "text": "What is the difference between the render() method and the commit() method in React?",
            "options": [
                "The render() method defines the component's structure, while the commit() method handles side effects.",
                "The render() method handles events, while the commit() method defines the component's structure.",
                "The render() method is called before the component is mounted, while the commit() method is called after the component is mounted.",
                "There is no commit() method in React."
            ],
            "answer": 0,
            "explanation": "The render() method defines the component's structure, while the commit() method handles side effects.",
            "keywords": "Q: the difference between the render method and the | A: The render() method defines the"
        },
        {
            "id": 223,
            "text": "What is the purpose of React Hooks?",
            "options": [
                "Hooks are functions that are part of the React library.",
                "React didn't have a simple way to share reusable functionality between components.",
                "Solutions such as higher-order components and render props.",
                "Using classes to be unnecessarily confusing and verbose."
            ],
            "answer": 1,
            "explanation": "React didn't have a simple way to share reusable functionality between components.",
            "keywords": "Q: the purpose of React Hooks? | A: React didn't have a simple"
        },
        {
            "id": 224,
            "text": "What is the purpose of the componentDidMount method in React?",
            "options": [
                "It is called after the component's render method has been executed.",
                "It is called before the component's render method is executed.",
                "It is called when the component is about to be unmounted from the DOM.",
                "It is called when the component is about to be updated and re-rendered."
            ],
            "answer": 0,
            "explanation": "It is called after the component's render method has been executed.",
            "keywords": "Q: the purpose of the componentDidMount method in React? | A: It is called after the"
        },
        {
            "id": 225,
            "text": "What is the difference between controlled and uncontrolled components in React-Bootstrap?",
            "options": [
                "Controlled components are stateless and rely on external state management, while uncontrolled components manage their own state internally.",
                "Controlled components have predefined behavior and cannot be customized, while uncontrolled components offer more flexibility.",
                "Controlled components are faster and more efficient than uncontrolled components.",
                "Uncontrolled components are recommended for complex forms, while controlled components are suitable for simple forms."
            ],
            "answer": 0,
            "explanation": "Controlled components are stateless and rely on external state management, while uncontrolled components manage their own state internally.",
            "keywords": "Q: the difference between controlled and uncontrolled components in | A: Controlled components are stateless and"
        },
        {
            "id": 226,
            "text": "What is the advantage of event pooling in React?",
            "options": [
                "It reduces memory usage by reusing event objects.",
                "It improves event handling performance by creating new event objects for each event.",
                "It simplifies event handling by providing a pool of event handlers.",
                "It allows for better management of event contexts."
            ],
            "answer": 0,
            "explanation": "It reduces memory usage by reusing event objects.",
            "keywords": "Q: the advantage of event pooling in React? | A: It reduces memory usage by"
        },
        {
            "id": 227,
            "text": "What is the purpose of the exact prop in a Route component?",
            "options": [
                "It specifies the component to render for a specific route.",
                "It ensures that the route matches the URL exactly, without partial matching.",
                "It defines a redirect to another route.",
                "It enables code splitting for the route component."
            ],
            "answer": 1,
            "explanation": "It ensures that the route matches the URL exactly, without partial matching.",
            "keywords": "Q: the purpose of the exact prop in a | A: It ensures that the route matches the URL exactly"
        },
        {
            "id": 228,
            "text": "What is the main purpose of the await keyword within an async function?",
            "options": [
                "To return a new Promise object.",
                "To immediately execute the next line of code without waiting.",
                "To pause the execution of the async function until the Promise it's waiting for is resolved or rejected.",
                "To define a synchronous block of code"
            ],
            "answer": 2,
            "explanation": "To pause the execution of the async function until the Promise it's waiting for is resolved or rejected.",
            "keywords": "Q: the main purpose of the await keyword within | A: To pause the execution of"
        },
        {
            "id": 229,
            "text": "What is the primary purpose of a router in a web application?",
            "options": [
                "To manage state within a component",
                "To respond to a URL based on a set of route handler declarations",
                "To handle server-side logic",
                "To manage routing in a React application"
            ],
            "answer": 1,
            "explanation": "To respond to a URL based on a set of route handler declarations",
            "keywords": "Q: the primary purpose of a router in a | A: To respond to a URL"
        },
        {
            "id": 230,
            "text": "What is the advantage of using Axios over fetch?",
            "options": [
                "Axios has better support for handling requests and responses.",
                "Axios requires less boilerplate code.",
                "Axios is faster than fetch for all types of HTTP requests.",
                "Axios does not support promises."
            ],
            "answer": 1,
            "explanation": "Axios requires less boilerplate code.",
            "keywords": "Q: the advantage of using Axios over fetch? | A: Axios requires less boilerplate code"
        },
        {
            "id": 231,
            "text": "What is the core principle of Redux?",
            "options": [
                "Single source of truth and unidirectional data flow.",
                "Multiple sources of truth for each component.",
                "State is mutable and can be directly modified.",
                "State is only updated using the useState hook."
            ],
            "answer": 0,
            "explanation": "Single source of truth and unidirectional data flow.",
            "keywords": "Q: the core principle of Redux? | A: Single source of truth and"
        },
        {
            "id": 232,
            "text": "What is the difference between the HTTP response codes 401 and 403?",
            "options": [
                "401 the request is missing valid authentication credentials, while 403 the server refuses to authorize.",
                "401 the server encountered an internal error, while 403 means the requested resource was not found.",
                "401 the request was successful, while 403 means the request was not modified.",
                "401 and 403 are interchangeable and have the same meaning."
            ],
            "answer": 0,
            "explanation": "401 the request is missing valid authentication credentials, while 403 the server refuses to authorize.",
            "keywords": "Q: the difference between the HTTP response codes 401 | A: 401 the request is missing"
        },
        {
            "id": 233,
            "text": "What happens when you use the xs prop on a Col component in React-Bootstrap?",
            "options": [
                "The column will only have its width defined on extra-large screens.",
                "The column will only have its width defined on extra-small screens, and larger sizes will ignore it",
                "The column will have its width defined on extra-small screens and will apply to larger sizes if no specific breakpoint is defined.",
                "The xs prop does not exist in React-Bootstrap"
            ],
            "answer": 2,
            "explanation": "The column will have its width defined on extra-small screens and will apply to larger sizes if no specific breakpoint is defined.",
            "keywords": "Q: What happens when you use the xs prop | A: The column will have its"
        },
        {
            "id": 234,
            "text": "What are the differences between useState and useReducer Hooks in React?",
            "options": [
                "useState is used for managing simple state, while useReducer is used for complex state and state transitions.",
                "useState is a built-in Hook, while useReducer is a custom Hook.",
                "useState is used for class components, while useReducer is used for functional components.",
                "useState is for local component state, while useReducer is for global application state."
            ],
            "answer": 0,
            "explanation": "useState is used for managing simple state, while useReducer is used for complex state and state transitions.",
            "keywords": "Q: the differences between useState and useReducer Hooks in | A: useState is used for managing simple state"
        },
        {
            "id": 235,
            "text": "What does the useNavigate hook return?",
            "options": [
                "An object with navigation methods.",
                "A navigate function that can be used to navigate to a new location",
                "A boolean indicating navigation status",
                "A string representing the current route."
            ],
            "answer": 1,
            "explanation": "A navigate function that can be used to navigate to a new location",
            "keywords": "Q: the useNavigate hook return? | A: A navigate function that can"
        },
        {
            "id": 236,
            "text": "What happens if a component tries to consume a context that has not been provided higher up in the component tree?",
            "options": [
                "The component receives a default value specified in the context definition.",
                "The component throws an error.",
                "The component receives an empty object as the context value.",
                "The component receives null as the context value."
            ],
            "answer": 0,
            "explanation": "The component receives a default value specified in the context definition.",
            "keywords": "Q: What happens if a component tries to consume | A: The component receives a default"
        },
        {
            "id": 237,
            "text": "What advantage does using a reducer function have over directly managing state with useState?",
            "options": [
                "It makes code shorter and less complex for simple state updates.",
                "It consolidates all state logic in one place, which is beneficial for components with complex state updates.",
                "It automatically optimizes rendering performance.",
                "It only works with global state, not local component state."
            ],
            "answer": 1,
            "explanation": "It consolidates all state logic in one place, which is beneficial for components with complex state updates.",
            "keywords": "Q: What advantage does using a reducer function have | A: It consolidates all state logic in one place"
        },
        {
            "id": 238,
            "text": "What unique capability does Redux Thunk middleware provide for action creators?",
            "options": [
                "It allows action creators to return an immutable state object",
                "It enables action creators to directly modify the global state",
                "It allows action creators to return a function instead of a plain action object.",
                "It automatically dispatches actions without needing a dispatch function."
            ],
            "answer": 2,
            "explanation": "It allows action creators to return a function instead of a plain action object.",
            "keywords": "Q: What unique capability does Redux Thunk middleware provide | A: It allows action creators to"
        },
        {
            "id": 239,
            "text": "Which of the following best describes a reducer in Redux?",
            "options": [
                "A function that triggers actions in response to user interactions",
                "A component that manages the application's state",
                "A function that specifies how the application's state changes in response to actions.",
                "A middleware that handles asynchronous operations in Redux"
            ],
            "answer": 2,
            "explanation": "A function that specifies how the application's state changes in response to actions.",
            "keywords": "Q: best describes a reducer in Redux? | A: A function that specifies how"
        },
        {
            "id": 240,
            "text": "Which of the following statements about reducers in Redux is true?",
            "options": [
                "Reducers can only be used with React class components, not functional components.",
                "Reducers are responsible for dispatching actions.",
                "Reducers should have side effects such as API calls or database interactions.",
                "Reducers must be pure functions with no side effects."
            ],
            "answer": 3,
            "explanation": "Reducers must be pure functions with no side effects.",
            "keywords": "Q: statements about reducers in Redux is true? | A: Reducers must be pure functions"
        },
        {
            "id": 241,
            "text": "Which of the following statements about Redux selectors is true?",
            "options": [
                "Selectors are responsible for dispatching actions.",
                "Selectors are used to modify the Redux store directly.",
                "Selectors are pure functions that derive specific data from the Redux store.",
                "Selectors are only used in React class components."
            ],
            "answer": 2,
            "explanation": "Selectors are pure functions that derive specific data from the Redux store.",
            "keywords": "Q: statements about Redux selectors is true? | A: Selectors are pure functions that"
        },
        {
            "id": 242,
            "text": "How are PropTypes typically integrated into a functional React component?",
            "options": [
                "By declaring them within the component's return statement.",
                "By installing react-proptypes and using this.props.propTypes inside the function.",
                "By defining a propTypes property on the component function itself, usually after its declaration, to specify prop type definitions.",
                "PropTypes cannot be used with functional components."
            ],
            "answer": 2,
            "explanation": "By defining a propTypes property on the component function itself, usually after its declaration, to specify prop type definitions.",
            "keywords": "Q: How are PropTypes typically integrated into a functional | A: By defining a propTypes property"
        },
        {
            "id": 243,
            "text": "How can you render JSX in a React component?",
            "options": [
                "By using the renderJSX() function.",
                "By passing the JSX as a string to the ReactDOM.render() function.",
                "By enclosing the JSX in curly braces () within the component's render() method.",
                "By using the React.render() function."
            ],
            "answer": 2,
            "explanation": "By enclosing the JSX in curly braces () within the component's render() method.",
            "keywords": "Q: you render JSX in a React component? | A: By enclosing the JSX in"
        },
        {
            "id": 244,
            "text": "How can you perform initialization and cleanup actions using the useEffect Hook?",
            "options": [
                "By returning a cleanup function from the useEffect callback.",
                "By passing an empty dependency array as the second parameter to useEffect.",
                "By wrapping the useEffect callback in a try-catch block.",
                "By using the useCleanupEffect Hook instead of useEffect."
            ],
            "answer": 0,
            "explanation": "By returning a cleanup function from the useEffect callback.",
            "keywords": "Q: you perform initialization and cleanup actions using the | A: By returning a cleanup function"
        },
        {
            "id": 245,
            "text": "How can you safely remove an unnecessary dependency from an Effect?",
            "options": [
                "Remove all dependencies from the array.",
                "Use an empty dependency array [] to ensure the Effect only runs once.",
                "Keep all dependencies and accept performance issues.",
                "Replace useEffect with useLayoutEffect."
            ],
            "answer": 1,
            "explanation": "Use an empty dependency array [] to ensure the Effect only runs once.",
            "keywords": "Q: you safely remove an unnecessary dependency from an | A: Use an empty dependency array"
        },
        {
            "id": 246,
            "text": "How can you configure Git with your name and email address?",
            "options": [
                "By running \"git config --global user.name 'Your Name'\" and \"git config --global user.email 'Your Email'\"",
                "By creating a .gitignore file.",
                "By committing changes using \"git commit -m\".",
                "By pushing changes to a remote repository."
            ],
            "answer": 0,
            "explanation": "By running \"git config --global user.name 'Your Name'\" and \"git config --global user.email 'Your Email'\"",
            "keywords": "Q: you configure Git with your name and email | A: By running \"git config --global"
        },
        {
            "id": 247,
            "text": "How can you use a fragment in JSX?",
            "options": [
                "By wrapping the JSX elements with <div> tags.",
                "By using the shorthand syntax <></> or <React.Fragment>...</React.Fragment>.",
                "By creating a separate component for each element.",
                "By using the fragment() function."
            ],
            "answer": 1,
            "explanation": "By using the shorthand syntax <></> or <React.Fragment>...</React.Fragment>.",
            "keywords": "Q: you use a fragment in JSX? | A: By using the shorthand syntax"
        },
        {
            "id": 248,
            "text": "How do you create a dynamic route in Next.js?",
            "options": [
                "By using useRouter() and manually specifying the route.",
                "By creating a file with square brackets in the pages directory, e.g., [id].js.",
                "By defining a route in the next.config.js file.",
                "By using React Router's Route component."
            ],
            "answer": 1,
            "explanation": "By creating a file with square brackets in the pages directory, e.g., [id].js.",
            "keywords": "Q: you create a dynamic route in Next.js? | A: By creating a file with"
        },
        {
            "id": 249,
            "text": "How do you create a tooltip in Bootstrap?",
            "options": [
                "By using the <tooltip> HTML element.",
                "By applying the tooltip class to the container element.",
                "By using the data-bs-toggle=\"tooltip\" attribute along with the title attribute.",
                "By using JavaScript to dynamically create and show tooltip elements."
            ],
            "answer": 2,
            "explanation": "By using the data-bs-toggle=\"tooltip\" attribute along with the title attribute.",
            "keywords": "Q: you create a tooltip in Bootstrap? | A: By using the data-bs-toggle=\"tooltip\" attribute"
        },
        {
            "id": 250,
            "text": "How does the Grid component in React-Bootstrap help in creating a responsive layout?",
            "options": [
                "Defines a flexible grid system with rows and columns that auto-adjust by screen size",
                "Provides pre-built responsive layouts",
                "Auto resizes and repositions elements",
                "Aligns elements vertically and horizontally"
            ],
            "answer": 0,
            "explanation": "Defines a flexible grid system with rows and columns that auto-adjust by screen size",
            "keywords": "Q: the Grid component in React-Bootstrap help in creating | A: Defines a flexible grid system"
        },
        {
            "id": 251,
            "text": "How does using Suspense with lazy components enhance user experience?",
            "options": [
                "Prevents interaction until all components load",
                "Displays a loading indicator while lazy component loads",
                "Improves responsiveness and perceived performance",
                "Removes need for error handling in async rendering"
            ],
            "answer": 1,
            "explanation": "Displays a loading indicator while lazy component loads",
            "keywords": "Q: using Suspense with lazy components enhance user experience? | A: Displays a loading indicator while"
        },
        {
            "id": 252,
            "text": "How does Next.js's server-side rendering capability primarily benefit web applications?",
            "options": [
                "By offloading all rendering tasks to the client's browser",
                "By eliminating the need for any server infrastructure",
                "By resulting in faster initial page load times and better search engine optimization (SEO)",
                "By simplifying complex client-side state management."
            ],
            "answer": 2,
            "explanation": "By resulting in faster initial page load times and better search engine optimization (SEO)",
            "keywords": "Q: Next.js's server-side rendering capability primarily benefit web applications? | A: By resulting in faster initial"
        },
        {
            "id": 253,
            "text": "How does the Bootstrap grid system help in designing responsive websites?",
            "options": [
                "Provides pre-designed website templates",
                "Auto-adjusts font sizes",
                "Adapts layout to screen sizes using 12-column responsive grid",
                "Optimizes website for search engines"
            ],
            "answer": 2,
            "explanation": "Adapts layout to screen sizes using 12-column responsive grid",
            "keywords": "Q: the Bootstrap grid system help in designing responsive | A: Adapts layout to screen sizes"
        },
        {
            "id": 254,
            "text": "How does Tailwind CSS's utility-first approach differ from traditional CSS frameworks that offer pre-designed components?",
            "options": [
                "Tailwind CSS provides a set of pre-designed components that can be customized with utility classes, while traditional frameworks offer more flexibility in creating custom designs.",
                "Tailwind CSS provides low-level utility classes for styling, while traditional frameworks offer pre-built components with limited customization.",
                "Tailwind CSS relies on JavaScript to generate styles dynamically, while traditional frameworks use static CSS files.",
                "Tailwind CSS is primarily used for server-side rendering, while traditional frameworks are better suited for client-side rendering."
            ],
            "answer": 1,
            "explanation": "Tailwind CSS provides low-level utility classes for styling, while traditional frameworks offer pre-built components with limited customization.",
            "keywords": "Q: Tailwind CSS's utility-first approach differ from traditional CSS | A: Tailwind CSS provides low-level utility"
        },
        {
            "id": 255,
            "text": "How would you combine fluid and pixel widths behaviors in a grid layout using Bootstrap 5?",
            "options": [
                "Use .container-fluid for entire layout",
                "Combine .container with .col-fluid",
                "Use fixed-width class with media query",
                "Use .container-md to apply responsive container at md breakpoint"
            ],
            "answer": 3,
            "explanation": "Use .container-md to apply responsive container at md breakpoint",
            "keywords": "Q: How would you combine fluid and pixel widths | A: Use .container-md to apply responsive"
        },
        {
            "id": 256,
            "text": "When writing a custom PropTypes validator function, what should it return upon successful validation and upon failure?",
            "options": [
                "It should return true for success and false for failure.",
                "It should return the validated value for success and undefined for failure.",
                "It should return null for success and an Error object for failure.",
                "It should return a success message string for success and an error message string for failure."
            ],
            "answer": 2,
            "explanation": "It should return null for success and an Error object for failure.",
            "keywords": "Q: writing a custom PropTypes validator function, what should | A: It should return null for"
        },
        {
            "id": 257,
            "text": "When should the useReducer() Hook be used instead of useState()?",
            "options": [
                "When components require simple, independent state values.",
                "When performing initialization and cleanup actions",
                "When there is complex state logic, several sub-values, or when the upcoming state depends on the previous state",
                "When sharing data across a component hierarchy without prop drilling"
            ],
            "answer": 2,
            "explanation": "When there is complex state logic, several sub-values, or when the upcoming state depends on the previous state",
            "keywords": "Q: should the useReducer Hook be used instead of | A: When there is complex state logic"
        },
        {
            "id": 258,
            "text": "When declaring routes in React Router, what are Routes and Route components used for?",
            "options": [
                "Routes is for styling, and Route is for defining event handlers.",
                "Routes is for managing state, and Route is for rendering components.",
                "Routes is used to wrap Route components and define the application's routes, while Route is used to define an individual route.",
                "Routes is for client-side logic, and Route is for server-side logic"
            ],
            "answer": 2,
            "explanation": "Routes is used to wrap Route components and define the application's routes, while Route is used to define an individual route.",
            "keywords": "Q: declaring routes in React Router, what are Routes | A: Routes is used to wrap"
        },
        {
            "id": 259,
            "text": "Analyze the differences between Flux and MVC architectures. Which statement is true?",
            "options": [
                "Flux enforces unidirectional data flow, while MVC allows bidirectional data flow",
                "MVC enforces unidirectional data flow, while Flux allows bidirectional",
                "Both Flux and MVC enforce unidirectional",
                "Both Flux and MVC allow bidirectional"
            ],
            "answer": 0,
            "explanation": "Flux enforces unidirectional data flow, while MVC allows bidirectional data flow",
            "keywords": "Q: Analyze the differences between Flux and MVC architectures. | A: Flux enforces unidirectional data flow"
        },
        {
            "id": 260,
            "text": "Assess the impact of using inline event handlers in React components. Which statement is true?",
            "options": [
                "Inline event handlers improve performance by reducing the number of function calls",
                "Inline event handlers can lead to performance issues due to the creation of new functions on each render",
                "Inline event handlers are the only way to handle events in React",
                "Inline event handlers are more secure than named event handlers"
            ],
            "answer": 1,
            "explanation": "Inline event handlers can lead to performance issues due to the creation of new functions on each render",
            "keywords": "Q: Assess the impact of using inline event handlers | A: Inline event handlers can lead"
        },
        {
            "id": 261,
            "text": "Create a React component that displays a list of items passed as props. Which approach would you use?",
            "options": [
                "Use a functional component with the map method.",
                "Use a class component with componentDidMount.",
                "Use a higher-order component.",
                "Use a lifecycle method to fetch data."
            ],
            "answer": 0,
            "explanation": "Use a functional component with the map method.",
            "keywords": "Q: Create a React component that displays a list | A: Use a functional component with"
        },
        {
            "id": 262,
            "text": "Can you define multiple Type and Value validators for a single prop in PropTypes?",
            "options": [
                "Yes, you can define multiple validators for a prop.",
                "No, you can only define one validator for a prop.",
                "Yes, but it's not recommended for code readability.",
                "No, Type and Value validators cannot be used together."
            ],
            "answer": 0,
            "explanation": "Yes, you can define multiple validators for a prop.",
            "keywords": "Q: Can you define multiple Type and Value validators | A: Yes, you can define multiple"
        },
        {
            "id": 263,
            "text": "In Redux, how do you update the state immutably?",
            "options": [
                "By directly modifying the state object.",
                "By using the setState() method.",
                "By using the splice() method.",
                "By creating a new copy of the state object."
            ],
            "answer": 3,
            "explanation": "By creating a new copy of the state object.",
            "keywords": "Q: In Redux, how do you update the state | A: By creating a new copy of the state object"
        },
        {
            "id": 264,
            "text": "In React, what is the role of Suspense?",
            "options": [
                "To handle errors in asynchronous rendering.",
                "To control the rendering of lazy components.",
                "To manage state in functional components.",
                "To handle network requests and API calls."
            ],
            "answer": 1,
            "explanation": "To control the rendering of lazy components.",
            "keywords": "Q: In React, what is the role of Suspense? | A: To control the rendering of lazy components"
        },
        {
            "id": 265,
            "text": "In React Router, how do you define a nested route structure within a parent component?",
            "options": [
                "Utilize the <Switch> component to handle nested routes",
                "Implement a routing table using an array of route objects",
                "Use the <Route> component with nested <Route> components",
                "Direct routes using query parameters in URL path names"
            ],
            "answer": 2,
            "explanation": "Use the <Route> component with nested <Route> components",
            "keywords": "Q: In React Router, how do you define a | A: Use the <Route> component with"
        },
        {
            "id": 266,
            "text": "In Redux, when should you use combineReducers?",
            "options": [
                "When you want to connect the Redux store to a React component.",
                "When you want to manage actions in the Redux application.",
                "When you want to split a reducer into smaller reducers.",
                "When you want to use Redux DevTools to track the state."
            ],
            "answer": 2,
            "explanation": "When you want to split a reducer into smaller reducers.",
            "keywords": "Q: In Redux, when should you use combineReducers? | A: When you want to split"
        },
        {
            "id": 267,
            "text": "Next.js is primarily used for:",
            "options": [
                "Styling static websites",
                "Creating server-rendered or statically generated React applications",
                "Managing back-end databases",
                "Handling real-time communication"
            ],
            "answer": 1,
            "explanation": "Creating server-rendered or statically generated React applications",
            "keywords": "Q: Next.js is primarily used for: | A: Creating server-rendered or statically generated React applications"
        },
        {
            "id": 268,
            "text": "One of the main characteristics of React-Bootstrap is \"Component-Based\". What does this imply?",
            "options": [
                "React-Bootstrap only provides components for CSS styling",
                "It enables developers to create modular and reusable UI elements as React components.",
                "It requires custom JavaScript to be written for each component.",
                "Components can only be used once in the application"
            ],
            "answer": 1,
            "explanation": "It enables developers to create modular and reusable UI elements as React components.",
            "keywords": "Q: One of the main characteristics of React-Bootstrap is | A: It enables developers to create"
        },
        {
            "id": 269,
            "text": "What is the main purpose of code splitting in a React application?",
            "options": [
                "To make the code easier to read",
                "To bundle all components into a single large file",
                "To reduce the initial load time by loading parts of the app only when needed",
                "To split CSS and JavaScript into separate files"
            ],
            "answer": 2,
            "explanation": "To reduce the initial load time by loading parts of the app only when needed",
            "keywords": "Q: the main purpose of code splitting in a | A: To reduce the initial load"
        },
        {
            "id": 270,
            "text": "What is the main purpose of React in modern web development, and what type of applications does it best support?",
            "options": [
                "It is mainly designed for handling backend logic and database management",
                "React helps build interactive user interfaces, especially for SPAs.",
                "React primarily functions as a server-side rendering engine for web applications.",
                "It is mainly a mobile development framework and not suitable for web applications."
            ],
            "answer": 1,
            "explanation": "React helps build interactive user interfaces, especially for SPAs.",
            "keywords": "Q: the main purpose of React in modern web | A: React helps build interactive user interfaces"
        },
        {
            "id": 271,
            "text": "What is one major benefit of using front-end frameworks like React or Vue.js?",
            "options": [
                "They eliminate the need for HTML",
                "They allow for faster development by providing pre-built components",
                "They only work on mobile applications",
                "They focus solely on server-side development"
            ],
            "answer": 1,
            "explanation": "They allow for faster development by providing pre-built components",
            "keywords": "Q: one major benefit of using front-end frameworks like | A: They allow for faster development"
        },
        {
            "id": 272,
            "text": "What is the purpose of React.Fragment or shorthand <> </> in React? (Select all that apply)",
            "options": [
                "Fragments allow you to group multiple elements without adding an extra node to the DOM.",
                "Fragments allow you to provide CSS styling to multiple elements.",
                "Fragments allow you to handle state management in React.",
                "Fragments are particularly useful for avoiding unnecessary <div> elements, which can clutter your markup."
            ],
            "answer": 0,
            "explanation": "Fragments allow you to group multiple elements without adding an extra node to the DOM. · Fragments are particularly useful for avoiding unnecessary <div> elements, which can clutter your markup.",
            "keywords": "Q: the purpose of React.Fragment or shorthand <> </> | A: Fragments allow you to group · Fragments are particularly useful for",
            "answers": [
                0,
                3
            ]
        },
        {
            "id": 273,
            "text": "What is one of the primary benefits of using Promises in JavaScript for asynchronous operations?",
            "options": [
                "It allows direct modification of the DOM",
                "It makes synchronous code asynchronous.",
                "It helps solve the \"callback hell\" problem by allowing chains of asynchronous operations.",
                "It ensures data is always instantaneously available."
            ],
            "answer": 2,
            "explanation": "It helps solve the \"callback hell\" problem by allowing chains of asynchronous operations.",
            "keywords": "Q: one of the primary benefits of using Promises | A: It helps solve the \"callback"
        },
        {
            "id": 274,
            "text": "What is the primary purpose of Redux Thunk in a React-Redux application?",
            "options": [
                "To connect React components directly to the Redux store without the need for action creators or reducers.",
                "To provide a way to store and manage the application's state on the server-side, separate from the client-side state.",
                "To enable creating action creators that return functions (for asynchronous operations like API calls) instead of plain action objects.",
                "To automatically generate the code for action creators and reducers based on the application's data structure."
            ],
            "answer": 2,
            "explanation": "To enable creating action creators that return functions (for asynchronous operations like API calls) instead of plain action objects.",
            "keywords": "Q: the primary purpose of Redux Thunk in a | A: To enable creating action creators"
        },
        {
            "id": 275,
            "text": "What is a key characteristic of network operations in client-server communication that developers must recognize?",
            "options": [
                "Data is always instantaneously available.",
                "Network operations inherently cause unexpected delays and are asynchronous",
                "Communication is always synchronous and predictable.",
                "Client-server communication primarily focuses on local data storage."
            ],
            "answer": 1,
            "explanation": "Network operations inherently cause unexpected delays and are asynchronous",
            "keywords": "Q: a key characteristic of network operations in client-server | A: Network operations inherently cause unexpected"
        },
        {
            "id": 276,
            "text": "What is the main role of a reducer in Redux?",
            "options": [
                "To fetch data from APIs",
                "To dispatch actions to components",
                "To update the store by returning the new state based on the action received",
                "To create components dynamically"
            ],
            "answer": 2,
            "explanation": "To update the store by returning the new state based on the action received",
            "keywords": "Q: the main role of a reducer in Redux? | A: To update the store by"
        },
        {
            "id": 277,
            "text": "Evaluate differences between Fetch API and Axios. Which statement is true?",
            "options": [
                "Fetch auto handles JSON, Axios requires manual parsing",
                "Axios provides built-in support for request/response interception, Fetch does not",
                "Fetch supports auto retries, Axios does not",
                "Axios built into browsers, Fetch needs library"
            ],
            "answer": 1,
            "explanation": "Axios provides built-in support for request/response interception, Fetch does not",
            "keywords": "Q: Evaluate differences between Fetch API and Axios. Which | A: Axios provides built-in support for"
        },
        {
            "id": 278,
            "text": "Explain the difference between using async/await and traditional Promises (.then and .catch) for handling asynchronous operations in JavaScript.",
            "options": [
                "async/await makes async code more readable, while Promises use a callback-based approach.",
                "async/await is used for synchronous operations, while Promises are used for asynchronous operations.",
                "async/await can only be used with the window.fetch API, while Promises can be used with any asynchronous function.",
                "async/await is a newer feature that completely replaces Promises in modern JavaScript."
            ],
            "answer": 0,
            "explanation": "async/await makes async code more readable, while Promises use a callback-based approach.",
            "keywords": "Q: Explain the difference between using async/await and traditional | A: async/await makes async code more readable"
        },
        {
            "id": 279,
            "text": "In React 18, how can you pass additional arguments to an event handler?",
            "options": [
                "Using event.target",
                "Using event.data",
                "Using bind method when binding the handler",
                "Not supported"
            ],
            "answer": 2,
            "explanation": "Using bind method when binding the handler",
            "keywords": "Q: In React 18, how can you pass additional | A: Using bind method when binding the handler"
        },
        {
            "id": 280,
            "text": "In React 19, how can you pass additional arguments to an event handler?",
            "options": [
                "By using the event.target property",
                "By using the event.data property",
                "By using the bind method when binding the event handler",
                "React 19 does not support passing additional arguments to event handlers"
            ],
            "answer": 2,
            "explanation": "By using the bind method when binding the event handler",
            "keywords": "Q: In React 19, how can you pass additional | A: By using the bind method"
        },
        {
            "id": 281,
            "text": "The purpose of JSX is to:",
            "options": [
                "Make JavaScript code more readable by embedding HTML in JavaScript",
                "Make JavaScript run faster",
                "Encrypt HTML elements",
                "Handle server-side logic"
            ],
            "answer": 0,
            "explanation": "Make JavaScript code more readable by embedding HTML in JavaScript",
            "keywords": "Q: The purpose of JSX is to: | A: Make JavaScript code more readable"
        },
        {
            "id": 282,
            "text": "[Using Bootstrap] How does the for attribute in the <label> element work, and why is it important in forms?",
            "options": [
                "It styles the label based on form control types",
                "It links the label to the form control via the control's id, improving accessibility",
                "It is used for adding inline form validation",
                "It triggers JavaScript events when the form is submitted"
            ],
            "answer": 1,
            "explanation": "It links the label to the form control via the control's id, improving accessibility",
            "keywords": "Q: [Using Bootstrap] How does the for attribute in | A: It links the label to"
        },
        {
            "id": 283,
            "text": "Understand the role of the render method in JSX. Which of the following best explains its use?",
            "options": [
                "The render method is used to compile JSX into JavaScript.",
                "The render method is used to convert JSX into HTML and render it to the DOM.",
                "The render method is used to manage state in React components.",
                "The render method is used to handle routing in React applications."
            ],
            "answer": 1,
            "explanation": "The render method is used to convert JSX into HTML and render it to the DOM.",
            "keywords": "Q: Understand the role of the render method in | A: The render method is used"
        },
        {
            "id": 284,
            "text": "According to Redux's main principles, how should changes to the application's state be made?",
            "options": [
                "Directly by modifying the state object in any component.",
                "Through setters that directly update the state.",
                "Only through actions, with changes made by pure functions that return a new state without mutating the previous one.",
                "By calling setState() on the Redux store directly."
            ],
            "answer": 2,
            "explanation": "Only through actions, with changes made by pure functions that return a new state without mutating the previous one.",
            "keywords": "Q: According to Redux's main principles, how should changes | A: Only through actions"
        },
        {
            "id": 285,
            "text": "Can PropTypes be used for both functional and class components?",
            "options": [
                "Yes, PropTypes can be used in both types of components",
                "No, only functional",
                "No, only class",
                "Yes, but syntax differs"
            ],
            "answer": 0,
            "explanation": "Yes, PropTypes can be used in both types of components",
            "keywords": "Q: Can PropTypes be used for both functional and | A: Yes, PropTypes can be used"
        },
        {
            "id": 286,
            "text": "Describe the concept of fragments in JSX. Which best explains their purpose?",
            "options": [
                "Group multiple elements without adding extra nodes to the DOM",
                "Used to style JSX elements",
                "Used to manage state",
                "Used to handle async ops"
            ],
            "answer": 0,
            "explanation": "Group multiple elements without adding extra nodes to the DOM",
            "keywords": "Q: Describe the concept of fragments in JSX. Which | A: Group multiple elements without adding"
        },
        {
            "id": 287,
            "text": "If you wanted to customize the size of the form controls, what would you do in Bootstrap 5?",
            "options": [
                "Set width in inline CSS",
                "Use the rows and cols attributes for all form elements",
                "Use the size variants of the form-control class, like form-control-sm or form-control-lg",
                "Apply custom JavaScript functions"
            ],
            "answer": 2,
            "explanation": "Use the size variants of the form-control class, like form-control-sm or form-control-lg",
            "keywords": "Q: If you wanted to customize the size of | A: Use the size variants of the form-control class"
        }
    ];
    global.QUIZ_BANKS = global.QUIZ_BANKS || {};
    global.QUIZ_BANKS["fer"] = bank;
})(typeof window !== "undefined" ? window : globalThis);
