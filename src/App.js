import './App.css';
import Progress from 'react-progressbar';

function App() {

  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  const startWorkDayHour = 9;
  const totalWorkingMinutes = 540;

  let totalWorkedMinutes = hours * 60 + minutes - startWorkDayHour * 60;

  let totalRemainedMinutes = totalWorkingMinutes - totalWorkedMinutes;
  let toHomePredict = "";

  if (totalRemainedMinutes <= 0)
    toHomePredict = "уже пора";
  else  
    toHomePredict = Math.round(totalRemainedMinutes / 60) + " ч  " + totalRemainedMinutes % 60 + "м";

  let percent = totalWorkedMinutes / totalWorkingMinutes * 100;
  if (percent > 100)
    percent = 100;

  return (
    <div>
      <div>
        {Math.round(percent)} %
      </div>
      <Progress completed={percent} />
      <p />
      <div>
        С начала рабочего дня ({startWorkDayHour}:00) прошло:
      </div>
      <div>
        {Math.round(totalWorkedMinutes / 60)} ч {totalWorkedMinutes % 60} м
      </div>
      <p />
      <div>
        Домой через:
      </div>
      <div>
        {toHomePredict}
      </div>
    </div>

  );
}

export default App;