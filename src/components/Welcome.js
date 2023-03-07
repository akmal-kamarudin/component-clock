function Welcome(props) {
  console.log(props);
  return <h1>Hello, {props.user.firstName} from Welcome Component</h1>;
}

export default Welcome;
