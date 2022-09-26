import "./App.css";
import BigForm from "./component/BigForm";
import ControlledForm from "./component/ControlledForm";
import EffectDependencies from "./component/EffectDependencies";
import Effect from "./component/Effect";
import EffectCleanup from "./component/EffectCleanup";
import Ref from "./component/Ref";
import UncontrolledForm from "./component/UncontrolledForm";

function App() {
  // useEffect (Effect, Dependencies, Cleaup), useState, useRef
  // Senare: useMemo, useCallback
  return (
    <div className="App">
      <BigForm />
    </div>
  );
}

export default App;
