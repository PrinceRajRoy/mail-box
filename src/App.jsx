import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MailList from "./components/MailList/MailList";
import Sidebar from "./components/Sidebar/Sidebar";
import SearchBar from "./components/SearchBar/SearchBar";
import Mail from "./components/Mail/Mail";
import { useGetMailsQuery } from "./store/services/mailApi";
import "./App.css";
import LoadingIcon from "./icons/LoadingIcon";

export default function App() {
  const { error, isLoading } = useGetMailsQuery();
  return (
    <div className="App font-montserrat h-full min-h-screen w-full bg-gray-200">
      {error ? (
        <div className="w-60 bg-red-300 text-red-700 font-semibold px-6 py-4 rounded-md absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2">
          Error Occured
        </div>
      ) : isLoading ? (
        <LoadingIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      ) : (
        <Router>
          <Sidebar />
          <div className="flex flex-col ml-40 sm-max:ml-0 sm-max:pt-14 sm-max:text-sm">
            <SearchBar />
            <Switch>
              <Route exact path="/:tag" component={MailList} />
              <Route exact path="/:tag/:id" component={Mail} />
              <Redirect from="*" to="/inbox" />
            </Switch>
          </div>
        </Router>
      )}
    </div>
  );
}
