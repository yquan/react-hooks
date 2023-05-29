import React, { Fragment } from 'react';

import './App.scss';
import UserInput from "./components/UerInput";
import ResultChart from "./components/ResultChart";

const App = () => {
  return (
    <Fragment>
      <header className="mb-auto">
        <div>
          <h3 className="float-md-start mb-0">Demo</h3>
        </div>
      </header>

      <main className="px-3">
        <UserInput />
        <ResultChart />
      </main>

      <footer className="mt-auto text-white-50">
        <p>Cover template for <a href="https://getbootstrap.com/" className="text-white">Bootstrap</a>, by <a
            href="https://www.swiftcore.com" className="text-white">@Swiftcore</a>.</p>
      </footer>
    </Fragment>
  );
}

export default App;
