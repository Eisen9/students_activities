import React from "react";
import CreateViewEvents from "./CreateViewEvents";
import Title from "./Title";
import Search from "./SearchBar"
import Events from "./Events";

function EventsMain() {
  return (
    <>
        <CreateViewEvents />
        <Title />
        <Search />
        <Events />
    </>
  );
}

export default EventsMain;
