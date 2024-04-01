import {
  Outlet,
  Link,
  ScrollRestoration,
  useNavigation,
} from "react-router-dom"

export function RootLayout() {
  const { state } = useNavigation()
  const isLoading = state === "loading"

  return (
    <>
      <nav className="top-nav">
        <div className="nav-text-large">
          My New App: Visualizing Blog Posts from fake REST API
        </div>
        <ul className="nav-list">
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/todos">To-Do's</Link>
          </li>
        </ul>
      </nav>
      <div className="source-page">
        API Source:{" "}
        <a href="https://jsonplaceholder.typicode.com/">
          https://jsonplaceholder.typicode.com/
        </a>
      </div>
      <ScrollRestoration />
      {isLoading && <div className="loading-spinner" />}
      <div className={`container ${isLoading ? "loading" : ""}`}>
        <Outlet />
      </div>
    </>
  )
}
