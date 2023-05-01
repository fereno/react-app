function Message() {
  const name = "Fereno";
  if (name) return <h1>hello {name}</h1>;
  else return <h1>hello world</h1>;
}

export default Message;
