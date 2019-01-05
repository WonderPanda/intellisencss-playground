import * as React from "react";
import * as ReactDOM from "react-dom";

interface MyProps {
  name: string;
}

const Comp: React.SFC<MyProps> = props => <p>{props.name}</p>;

const App = () => (
  <div>
    <h1>get started!</h1>
    <Comp name="WHOOOT" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
