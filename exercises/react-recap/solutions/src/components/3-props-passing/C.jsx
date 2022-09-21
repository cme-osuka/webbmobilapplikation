function C(props) {
  return (
    <div style={{ border: "1px solid blue"}}>
      <p>C</p>
      <p>x är {props.value}</p>
      <button onClick={props.onClick}>x++</button>
    </div>
  );
}

export default C;
