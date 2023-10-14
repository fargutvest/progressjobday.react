import './App.css';
import Progress from 'react-progressbar';

function App() {

  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  const startWorkDayHour = 9;

  const workedTime = hours * 60 + minutes - startWorkDayHour * 60;

  const percent = workedTime / (9 * 60) * 100;
  return (
    <div>
      <Progress completed={percent} />
      <div>
        С начала рабочего дня (9:00) прошло:
      </div>
      <div>
        {Math.round(percent)} %
      </div>
      <div>
        {hours - startWorkDayHour} ч
      </div>
      <p />
      <div>
        Домой через:
      </div>
      <div>
        {9 - (hours - startWorkDayHour)} ч
      </div>
    </div>

  );
}

export default App;