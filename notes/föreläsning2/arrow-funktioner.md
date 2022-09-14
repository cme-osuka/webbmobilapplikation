// Arrow-funktioner

// function() {}
// Syntax
() => {};

const greeting = () => {
  return "Hej";
};

const greeting = () => "Hej";
const greeting = _ => "Hej";

<>
  <button onClick={(e) => {doSomething()}} />
  <button onClick={e => {doSomething()}} />
  <button onClick={e => {
    doSomething()
    doSomethingElse()
  }} />
</>;

app.get((req, res) => {
  res.send("HellO");
})