const Header = (props) => {
  return (
    <div>
      <p>{props.title}</p>
    </div>
  );
};

const Parts = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exer}
      </p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Parts part={props.parts[0].name} exer={props.parts[0].exercises} />
      <Parts part={props.parts[1].name} exer={props.parts[1].exercises} />
      <Parts part={props.parts[2].name} exer={props.parts[2].exercises} />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        Total Parts
        {props.parts[0].exercises +
          props.parts[1].exercises +
          props.parts[2].exercises}
      </p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header title={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
