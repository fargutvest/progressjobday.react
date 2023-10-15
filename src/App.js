import './App.css';
import Progress from 'react-progressbar';
import React, { useState, useEffect } from 'react';

function twoDigits(n){
  return n > 9 ? "" + n: "0" + n;
}

function totalSecondsToTimeString(totalSeconds){
  
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds - hours * 3600) / 60);
  let seconds = Math.floor((totalSeconds - hours * 3600 - minutes * 60));
  
  return twoDigits(hours) + " ч  " + twoDigits(minutes) + " м  " + twoDigits(seconds) + " c";
}

function App() {

  const [time, setTime] = useState(new Date());
  
  const startWorkDayHour = 9;
  const workDayDurationInHours = 9;

  let percent = "";
  let elapsedCalc = "";
  let toHomePredict = "";


  if (time.getHours() < startWorkDayHour) {
    percent = 0;
    elapsedCalc = toHomePredict = "рабочий день еще не начался";
  }
  else {
    let totalSeconds = time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds();
    let totalWorkedSeconds = totalSeconds - startWorkDayHour * 3600;
    percent = totalWorkedSeconds / (workDayDurationInHours * 3600) * 100;

    if (percent > 100)
      percent = 100;

    elapsedCalc = totalSecondsToTimeString(totalWorkedSeconds);
     
    let totalRemainedSeconds = workDayDurationInHours * 3600 - totalWorkedSeconds;
    
    if (totalRemainedSeconds <= 0)
      toHomePredict = "уже пора";
    else
      toHomePredict = totalSecondsToTimeString(totalRemainedSeconds);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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