const Container = (props) => {
  return (
    <div style={{ border: "1px solid red", padding: 16 }}>
      <h1>Mina children</h1>
      <div>
        {props.children}
      </div>
    </div>
  );
};

/*
  <Container>
    <p style={{ background: "orange" }}>Detta är en child till Container</p>
    <p style={{ background: "orange" }}>Detta är ännu en</p>
  </Container>
 */

export default Container;
