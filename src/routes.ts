import { UserController } from "./controller/UserController";
import { UserDetailsController } from "./controller/UserDetailsController";
import { PostController } from "./controller/PostController";


export const Routes = [
    // user
    {
        method: "get",
        route: "/users",
        controller: UserController,
        action: "all"
    },
    {
        method: "get",
        route: "/users/:id",
        controller: UserController,
        action: "one"
    },
    {
        method: "post",
        route: "/users",
        controller: UserController,
        action: "save"
    },
    {
        method: "delete",
        route: "/users/:id",
        controller: UserController,
        action: "remove"
    },
    {
        method: "put",
        route: "/users/:id",
        controller: UserController,
        action: "update"
    },
    {
        method: "post",
        route: "/login",
        controller: UserController,
        action: "login"
    },
    {
        method: "put",
        route: "/register",
        controller: UserController,
        action: "register",
    },


    // user details
    {
        method: "get",
        route: "/usersdetails",
        controller: UserDetailsController,
        action: "all"
    },
    {
        method: "get",
        route: "/usersdetails/:id",
        controller: UserDetailsController,
        action: "one"
    },
    {
        method: "post",
        route: "/usersdetails",
        controller: UserDetailsController,
        action: "save"
    },
    {
        method: "delete",
        route: "/usersdetails/:id",
        controller: UserDetailsController,
        action: "remove"
    },
    {
        method: "put",
        route: "/usersdetails/:id",
        controller: UserDetailsController,
        action: "update"
    },

    // posts
    {
        method: "get",
        route: "/posts",
        controller: PostController,
        action: "all"
    },
    {
        method: "get",
        route: "/posts/:id",
        controller: PostController,
        action: "one"
    },
    {
        method: "post",
        route: "/posts",
        controller: PostController,
        action: "save"
    },
    {
        method: "delete",
        route: "/posts/:id",
        controller: PostController,
        action: "remove"
    },
    {
        method: "put",
        route: "/posts/:id",
        controller: PostController,
        action: "update"
    }
];