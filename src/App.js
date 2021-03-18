import { useRouteMatch, Route, Switch, Redirect } from "react-router-dom"
import cn from "classnames"

import HomePage from "./routes/HomePage"
import GamePage from "./routes/GamePage"
import AboutPage from "./routes/AboutPage"
import ContactPage from "./routes/ContactPage"
import NotFound from "./routes/NotFound"
import MenuHeader from "./components/MenuHeader"
import Footer from "./components/Footer"

import s from "./style.module.scss"

const App = () => {
  const match = useRouteMatch("/")
  return (
    <Switch>
      <Route path="/404" component={NotFound} />
      <Route>
        <>
          <MenuHeader bgActive={!match.isExact} />
          <div className={cn(s.wrap, { [s.isHomePage]: match.isExact })}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/game" component={GamePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contacts" component={ContactPage} />
              <Route render={() => <Redirect to="/404" />} />
            </Switch>
          </div>
          <Footer />
        </>
      </Route>
    </Switch>
  )
}

export default App
