<h2>Motivation</h2>
Show double render 

<h2>Introduction</h2>
React intentionally double-invokes in strict mode (development mode only) few functions e.g. render (check <a href='https://reactjs.org/docs/strict-mode.html'>here</a>). Up until version 17 it was possible to see this using console.log and this is what is done here. Therefor react version < 17 is used here (check changelog of version 17.0 about disable console.log <a href='https://github.com/facebook/react/blob/main/CHANGELOG.md#1702-march-22-2021'>here</a>)

<h2>Setup</h2>
<li>npm i</li>
<li>npm run dev</li>
