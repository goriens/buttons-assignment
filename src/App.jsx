import "./App.css";
import { Button } from "./components/Button";

const App = () => (
  <div className="App">
    <Button color="primary" background="primary">
      Primary Button
    </Button>
    <Button>Default Button</Button>
    <Button color="dashed" background="dashed">
      Dashed Button
    </Button>
    <Button background="text">Text Button</Button>
    <Button background="link" color="link">
      Link Button
    </Button>
  </div>
);

export default App;
