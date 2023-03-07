function Welcome(props) {
  return (
    <div>
      <h1>
        Hello, {!props ? props.user.firstName : props.user.lastName}. Check out
        the time!
        <strong>🌏</strong>
      </h1>
    </div>
  );
}

export default Welcome;
