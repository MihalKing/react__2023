
// import {Launches} from "./component/spacexComponent/launches/launches";




import {User} from "./component/usersComponent/User/User";

const App = () => {

    return (
        <div>
            {/*{<Launches/>}*/}
            <User/>

        </div>
    );
};

export {App};

// з jsonplaceholder отримати всіх юзерів в компоненту Users.js
// відобразити кожного інформацію (id,name) з кожного юзера (компонента User)
// Зробити кнопку вибора юзера, при натисканні на яку в Users.js ви покажете
// детальну інфомацію про користувача(довільно обрану інформацію)
//
//
//
// =====
// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)