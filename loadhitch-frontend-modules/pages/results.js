import { useStateMachine } from "little-state-machine";
import updateAction from "../components/updateAction";

const results = () => {
  const { state } = useStateMachine({ updateAction });

  return (
    <>
      <h2>results:</h2>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
};

export default results;
