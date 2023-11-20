import { useState } from "react";

const Statisticline = ({ data, text }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            {text} {data}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const Statistics = ({ good, bad, neutral, all }) => {
  return (
    <div>
      <h1>Statistics</h1>
      {all >= 1 ? (
        <>
          <Statisticline data={good} text="good" />
          <Statisticline data={neutral} text="neutral" />
          <Statisticline data={bad} text="bad" />
          <Statisticline data={all} text="all" />
          <Statisticline data={(good - bad) / all} text="average" />
          <Statisticline data={(good / all) * 100 + " %"} text="positive" />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

const Buttons = ({ text, things }) => {
  return (
    <span>
      <button onClick={things}>{text}</button>
    </span>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  const goods = () => setGood(good + 1);
  const neutrals = () => setNeutral(neutral + 1);
  const bads = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Buttons text="good" things={goods} />
      <Buttons text="neutral" things={neutrals} />
      <Buttons text="bad" things={bads} />
      <Statistics good={good} bad={bad} neutral={neutral} all={all} />
    </div>
  );
};

export default App;
