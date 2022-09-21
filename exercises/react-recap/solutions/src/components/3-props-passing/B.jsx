import C from "./C";

function B(props) {

  return (
    <div style={{ border: "1px solid green"}}>
      <p>B</p>
      <C value={props.value} onClick={props.onClick} />
    </div>
  );
}

export default B;
