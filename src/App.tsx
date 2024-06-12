

import { Route, Routes, Outlet } from 'react-router';
import { HomePage } from './pages/Home';
import { MapPage } from './pages/Map/Map';

import classes from './App.module.css'
import { useMemo, useState } from 'react';
import { User } from './types/user';

import { UsersContext } from './contexts/users';
import { PostsContext } from './contexts/posts';
import { Post } from './types/post';


const Layout = () => {
  const [users, setUsers] = useState<User[]>([])
  const [posts, setPosts] = useState<Record<string, Post[]>>({})

  const usersContextValue = useMemo(() => ({ users, setUsers }), [users])
  const postsContextValue = useMemo(() => ({ posts, setPosts }), [posts])

  return <UsersContext.Provider value={usersContextValue}>
    <PostsContext.Provider value={postsContextValue}>
      <div className={classes.app}>
        <Outlet />
      </div>
    </PostsContext.Provider>
  </UsersContext.Provider>
}

function App() {
  return (

    <Routes >
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
      </Route>
    </Routes>


  );
}

export default App;
