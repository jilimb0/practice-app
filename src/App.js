import { Route, Switch, Redirect, useLocation } from "react-router-dom"

import cn from "classnames"

import HomePage from "./routes/HomePage"
import GamePage from "./routes/GamePage"
import AboutPage from "./routes/AboutPage"
import ContactPage from "./routes/ContactPage"
import NotFound from "./routes/NotFound"
import MenuHeader from "./components/MenuHeader"
import Footer from "./components/Footer"
import s from "./style.module.scss"
import { FireBaseContext } from "./context/firebaseContext"
import Firebase from "./services/firebase"

const App = () => {
  const location = useLocation("/")
  const isPadding =
    location.pathname === "/" || location.pathname === "/game/board"
  return (
    <FireBaseContext.Provider value={new Firebase()}>
      <Switch>
        <Route path="/404" component={NotFound} />
        <Route>
          <>
            <MenuHeader bgActive={!isPadding} />
            <div className={cn(s.wrap, { [s.isHomePage]: isPadding })}>
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
    </FireBaseContext.Provider>
  )
}

export default App
