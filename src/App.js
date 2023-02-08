import {Route, Routes} from "react-router-dom";

import {AboutPage, HomePage, PostsPage, UserPage} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/users'} element={<UserPage/>}/>
            <Route path={'/posts'} element={<PostsPage/>}/>
            <Route path={'/about'} element={<AboutPage/>}/>
        </Routes>
    );
};

export {App};