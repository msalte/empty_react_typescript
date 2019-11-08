import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';

import 'typeface-roboto';
import './root.less';

const AppWrapper = () => {
    return <App />;
};

ReactDOM.render(<AppWrapper></AppWrapper>, document.getElementById('root'));
