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

### 7.18pm - 8:25pm
- create routes and components for pages required in challenge starting with stub content.
- create a Header Component
- Create a EvaluationList Component
- Include Header and EvaluationList in App
- Create a EvaluationPage Component
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

### 8.25pm - 8.31pm
- restructure files into logical folders
- use, components, containers, images, styles, actions, reducers
- WebStorm automagically updates imports +1
- commit changes

### 8.31pm - 10.00pm
- set up reducers and actions
- invoke an action from EvaluationList which fetches the evaluations and just prints them out to console
- action names defined in `actions/types` file
- control fetch headers using api.json defined in `utils/api`
- define `API_ROOT` as config in `config/api`
- still no updates to store yet.
- update journal
- commit changes
- enough for the day

## Wednesday 13 Jun 2018

### 8.00pm - 8.15pm
- make the api handlers more framework friendly
- put api related stuff in the `src/api` directory
- refactor `api.js` -> `src/api/index.js` usage `import {fetchApi, postApi} from ./api`
- define api endpoints as importable constants in `api/endpoints`
- commit changes

### 8.15pm - 1.00am
- enough time wasting, lets structure and save to our store
- read up on best practise for normalising the Redux store (because performance)
- use [Normalizr](https://github.com/paularmstrong/normalizr)? 
- 6 issues, 3 PRs, 34 releases = HELL NO. I've been burnt by being stuck with sh*tty frameworks before. 
Best to roll our own if needed.
- Rules for normalizing a redux store
- Keep tables for each entity just like a relational database
- store each entity with the id as the key and the entity as the value
- for lists of entities, only store arrays of ids to keep the order
- for sub-entities/relations, only store the id (or array of ids) as a property of the entity
- any full data entity is now called an "Entity"
- Each entity type is defined in `entities/types`
- Each Entity has its own reducer
- Each Entity store holds a key:entity pair and a full array of ids
- The links, meta and an array of evaluation ids fetched are tracked by a Page reducer
- anytime we store an array of entities tied to either a page or another entity, store them as an array of `{type, id}` 
objects
- i think it would be good practise to separate the page ui state from the entity states.
- the page ui can hold the pagination links and meta data and also a temporary array of ids which will be updated on 
each new pagination load. The loading states for the page will also be added here.
- the page array of evaluations will hold the currently visible entities, while the entity store keeps a hashed copy of 
the most recent state of the entities
- on the list page, connect the page store and the evaluations store. Then iterate through the evaluation ids from the 
page store and look up the full evaluation entity from the evaluation store.
- render an EvaluationListItem component and pass it the full evaluation to each component.
- commit changes

## Thursday 14 Jun 2018

### 7.15pm - 9.10pm
- The way i connected the `EvaluationListItem`, means that all the components get recomputed when there is any change 
to the list or its elements. By subscribing to both the page store and the entity store, I basically lose the all the 
benefit of normalising the store. YAY.
- This [Blog Post](https://blog.shovonhasan.com/pattern-for-rendering-lists-of-connected-components-with-react-redux/)
describes the problem and solution perfectly.
- Done. Also added link to open evaluation.
- defined PropType groups in `api/types` for the page properties data, links, meta so i can reuse validation for the 
data returned from the server
- I'm thinking i should also use the above to validate the fetch evaluations response. This is good practise to catch 
sync errors between the BE and FE when changes happen.
- I think I should also create Entity classes which validates api data and parse into a more preferred structure for the store 
- I'll create PropTypes for both api data validation and entity validation (when an entity is passed to a component)
- Creating PropTypes for all data structures will serve as both validation and documentation of structures and types in the framework
- i'll do this sometime soon
- i just spent 30 mins reading debates on the web about using `.jsx` versus `.js` for files containing JSX. Don't do that. Also, use `.js`
- commit changes

### Dinner break


