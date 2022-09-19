

const ChildComponent = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
    </div>
  );
};

const ParentComponent = (props) => {
  return (
    <div>
      <ChildComponent name="Gösta" age="31" />
    </div>
  );
};

export default ParentComponent;