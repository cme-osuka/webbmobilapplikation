function LimitInput({ limit, setLimit }) {
  return (
    <div>
      <p>Gräns:</p>
      <input
        value={limit}
        type="number"
        onChange={(e) => {
          const value = Number(e.currentTarget.value);
          setLimit(value);
        }}
      />
    </div>
  );
}

export default LimitInput;
