import React from 'react';
import MainNav from './Nav/MainNav';

const App: React.FC = () => {
    return (
        <div>
            <MainNav />
            <h1>Welcome to My React App</h1>
            {/* Other components or routes can be included here */}
        </div>
    );
};

export default App;