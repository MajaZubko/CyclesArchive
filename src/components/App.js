import React from 'react';
import history from '../history';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import CycleShow from './entries/CycleShow';
import EntryCreate from './entries/EntryCreate';
import EntryDelete from './entries/EntryDelete';
import EntryEdit from './entries/EntryEdit';
import EntryList from './entries/EntryList';

const App = () => {
	return (
		<div>
			<Router history={history}>
				<div>
					<Header />
					<Switch>
						<Route path="/" exact component={EntryList} />
						<Route path="/entries/new" exact component={EntryCreate} />
						<Route path="/entries/edit/:id" exact component={EntryEdit} />
						<Route path="/entries/delete/:id" exact component={EntryDelete} />
						{/* <Route path="/:id" exact component={CycleShow} /> */}
					</Switch>
				</div>
			</Router>
		</div>
	);
};

export default App;
