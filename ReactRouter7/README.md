# ROUTER QUESTIONS

## Basic Level

# What is React Router? Why is it used?
Discuss how React Router enables navigation between components in a single-page application without reloading the page.
What are the different types of routers provided by React Router?

Examples: BrowserRouter, HashRouter, MemoryRouter, StaticRouter.

# What is the difference between BrowserRouter and HashRouter?
Explain the usage of clean URLs in BrowserRouter and hash-based URLs in HashRouter.
How do you define routes in React Router?

Syntax examples using <Route> and <Routes>.

# What is the purpose of the <Link> component?
Discuss how it creates navigation links without refreshing the page.


## Intermediate Level

# What is the difference between <Route path> and <Route index>?
Explain how path defines a specific route and index defines the default route in a parent route.

# How do you pass parameters in React Router?
Example with path="/user/:id" and accessing parameters via useParams.

# What is useNavigate, and how is it used?
Demonstrate programmatic navigation using useNavigate.

# How do you handle nested routes in React Router?
Show how to create a parent route with child routes using the Outlet component.

# What is the role of useLocation in React Router?
Explain how to retrieve the current location 


# What is React Router? Why is it used?
React Router is a standard library for routing in React applications. It allows developers to build single-page applications (SPAs) with navigation and dynamic content rendering without reloading the page.

# What are the different types of routers provided by React Router?
React Router provides various routers to handle navigation based on the application's environment:

1. BrowserRouter

Uses the HTML5 history API (pushState, popState) for cleaner URLs (e.g., /home).
Best for modern web apps.

2. HashRouter

Uses the URL hash (#) for routing (e.g., /home#about).
Suitable for environments where the server cannot handle dynamic requests.

3. MemoryRouter

Keeps the history in memory and does not update the browser's address bar.
Useful for testing or non-browser environments.

4. StaticRouter

Renders routes statically based on the provided location.
Primarily used for server-side rendering (SSR).


# What is the difference between BrowserRouter and HashRouter?
|               Aspect              |                       BrowserRouter                   |   HashRouter              |
|-----------------------------------|-------------------------------------------------------|---------------------------|
| URL Structure	                    | Clean URLs (e.g., /home).	                            | URLs with a hash (e.g., /home#about).
| History API	                    | Uses the HTML5 history API.	                        | Does not use the History API. |
| Server Support	                | Requires server configuration to handle routes.	    | No server configuration needed.|
| SEO Friendly	                    | More SEO-friendly.	                                | Less SEO-friendly.|
| Use Case	                        | Modern web applications.	                            | Legacy apps or static file hosting.|

# How do you implement dynamic routing in React Router?
Dynamic routing allows you to define routes with dynamic segments. In React Router, this is achieved using a colon (:) in the path.
```javascript
<Route path="/user/:id" element={<User />} />
```

# What is useRoutes and how does it differ from defining routes using Route components?
The useRoutes hook provides a declarative way to define route configurations. Unlike nested <Route> components, it uses an array of route objects.

# How does useNavigate work in React Router?
useNavigate is a hook used to programmatically navigate between routes.

#  Explain the purpose of Outlet in React Router.
The Outlet component is used in nested routing to render child routes.

# How do you handle route protection in React Router?
Route protection is used to restrict access to certain routes based on user authentication or roles.

# What is the difference between Navigate and useNavigate?
|   Aspect	                |   Navigate	                               |useNavigate                                         |
|---------------------------|----------------------------------------------|----------------------------------------------------|
|   Type	                |   Component.                                 | Hook.                                              |
|   Usage	                |   Used in JSX for declarative navigation.    | Used in event handlers for programmatic navigation.|
|   Example	                |   <Navigate to="/home" />	                   | navigate("/home")                                  |

# How does lazy loading work in React Router?
React Router supports lazy loading of components using React.lazy and Suspense.

```javascript
    import React, { lazy, Suspense } from "react";
    import { Route, Routes } from "react-router-dom";

    const About = lazy(() => import("./About"));

    function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/about" element={<About />} />
        </Routes>
        </Suspense>
    );
    }
```

# How do you implement error handling with React Router?
React Router v6 supports error handling via an errorElement property.
```javascript
    <Route
    path="/"
    element={<Home />}
    errorElement={<ErrorPage />}
    />
```

