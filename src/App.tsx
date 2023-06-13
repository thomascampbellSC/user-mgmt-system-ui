import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import UserDetail from './features/user-detail/UserDetail';
import UserList from './features/user-list/UserList';

const App: React.FC = () => {
    return (
        <>
            <CssBaseline />
            <UserList />
            <UserDetail />
        </>
    );
};

export default App;
