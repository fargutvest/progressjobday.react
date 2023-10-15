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

  let percent = "";
  let elapsedCalc = "";
  let toHomePredict = "";


  if (totalWorkedMinutes < 0) {
    percent = 0;
    elapsedCalc = toHomePredict = "рабочий день еще не начался";
  }
  else {
    percent = totalWorkedMinutes / totalWorkingMinutes * 100;
    if (percent > 100)
      percent = 100;

    elapsedCalc = Math.floor(totalWorkedMinutes / 60) + " ч " + totalWorkedMinutes % 60 + "м";
    if (totalRemainedMinutes <= 0)
      toHomePredict = "уже пора";
    else
      toHomePredict = Math.floor(totalRemainedMinutes / 60) + " ч  " + totalRemainedMinutes % 60 + "м";
  }


  return (
    <div>
      <div>
        {Math.floor(percent)} %
      </div>
      <Progress completed={percent} />
      <p />
      <div>
        С начала рабочего дня ({startWorkDayHour}:00) прошло:
      </div>
      <div>
        {elapsedCalc}
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