# My journal while completing this challenge

The goal of this journal is to keep a record of the development process for myself and Michael.

I believe this will help give more of an insight on how I think and my learning process.
It will also be useful for myself in the future for my own projects.

It will include a history of the steps I took, the challenges I faced and the decisions I made.

## Tuesday, 12 Jun 2018

### 5.00pm - 5.10pm

- Forked repository.
- Chose Jetbrains Webstorm as editor of choice. Great for alrge projects and teams.
- added `.gitignore` file
- update npm `npm i -g npm t`
- `npm -v` 
```text
v6.1.0
```

### 5.10pm - 5.25pm
- Goal - create React App
- Choice - create using [create-react-redux-router-app](https://www.npmjs.com/package/create-react-redux-router-app)
- Reason - it includes boilerplate for redux, thunk and router, which is necessary for a large project 
(I hope to build this as if I'm planning a real app). 
- `npm install -g create-react-redux-router-app`
- `create-react-redux-router-app qctrl-frontend-challenge`
```text
 create-react-app: command not found
```
- `npm install -g create-react-app`
- `create-react-redux-router-app qctrl-frontend-challenge`
```text
+ react-dom@16.4.0
+ react@16.4.0
+ react-scripts@1.1.4

+ redux@4.0.0
+ react-router@4.3.1
+ react-redux@5.0.7
+ redux-thunk@2.3.0
+ react-router-dom@4.3.1
```

### 5.25pm - 6.25pm
- study bootstrapped files.
- the app was created inside this project. `frontend-challenge/qctrl-frontend-challenge`
- I'm not sure if this is what I want, but I guess the app files are separated from the challenge files, so that's good.
- There are two `node_modules` folders. I don't know why and it tickles my OCD. I'll leave it for now.
- There is a `registerServiceWorker.js` file. I've heard of these. I'd love to check it out but I'm going to take it 
out for now as I want to see raw performance.
- comment out the `registerServiceWorker` import `index.js`
- Follow the provided guide in [Readme.md](./qctrl-frontend-challenge/README.md) to get an intro on basics
- failed `npm test` out of the box
```text
Could not find "store" in either the context or props of "Connect(App)". Either wrap the root component in a, or 
explicitly pass "store" as a prop to "Connect(App)".
```
- Eventually figured out that the test file ran the App component without the Provider with the store. 
- the `index.js` file was responsible for connecting redux and react. I think the App component should do that.
- passed the test after fix
- commit progress
- take a dinner break

### 7.00pm - 7.17pm
- Make the App component responsible for connecting redux to react
- The Provider should be outside the Root Component. That means it should be outside App and in the index.js
- Revert back to how it was. Don't waste time on such nonsense anymore.
- commit update to journal

### 7.18pm
- create routes and components for pages required in challenge starting with stub content.
- create a Header Component
- Create a ListEvaluations Component
- Include Header and ListEvaluations in App
- Create a ViewEvaluation Component
- Link routes for `/` and `/evaluations/:id`
- Problem: clicking a link updated the url but the rendered component doesn't change without a refresh
- In App.js where I define the Route's, the export uses the connect function
```text
export default connect(
	state => ({}),

	{}
)(App)
```
- This overrides the `shouldComponentUpdate` function. I'm guessing its because the store's state should be controlling 
the route updates at this point. 
- I'm changing this to `export default App` until i start using the store.
- commit changes




