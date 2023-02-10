import {Routes ,Route } from "react-router-dom";

import {AboutPage, HomePage, NotFoundPage, PostsPage, UserPage} from "./pages";

import {MainLayout} from "./layouts";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={''} element={<HomePage/>}/>
                    <Route path={'users'} element={<UserPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>
                    <Route path={'about'} element={<AboutPage/>}/>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
};

export {App};