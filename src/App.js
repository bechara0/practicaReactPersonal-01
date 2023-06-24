import logo from "./logo.svg";
import "./App.css";
import { Uno } from "./components/Uno";
import { Dos } from "./components/Dos";
import { Tres } from "./components/Tres";

function App() {
  const datos = {
    nombre: "Juan",
    apellido: "Bechara Baladi",
    profesion: "Ingeniero Agrónomo",
    edad: 40,
  };
  const hijo =
    "https://snz04pap002files.storage.live.com/y4mv1kIU82Va0A4dZN6rieKv6lU7aGrrU88QQsaxU2gmVhozWivqUf-4dY9EGWikPQYGQnHhbJqiNKXY_NMhVLYNUMv99pnPK6qsaTwjF1ydGBBlS6l8bKHKsM1O05VfgY7ZvFPlVW6O90mVSNKQJ04Bxd5ZqAeGGz2RpJespzQ__crCbsw55dhl6mcUBQxRW3ulAqYsbrovaKIbeGRqKmWLzdhvh6LCn9q469oWppAV3c?encodeFailures=1&width=1308&height=873";

  return (
    <div>
      <Uno datos={datos} hijo={hijo} />
      <Dos />
      <Tres />
    </div>
  );
}

export default App;
