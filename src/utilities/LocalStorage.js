const setLocalStorage = (selectedTime) => {
  let breakTime;;
  const getLCData = localStorage.getItem('break-time');
  if(getLCData){
    if(selectedTime !== 0){
      breakTime = selectedTime;
      localStorage.setItem('break-time', JSON.stringify(breakTime));
    }
  }else{
    breakTime = 0;
    localStorage.setItem('break-time', JSON.stringify(breakTime));
  }
}

const getLocalStorage = () => {
  let breakTime;
  const getLCData = localStorage.getItem('break-time');
  if(getLCData){
    breakTime = JSON.parse(getLCData);
  }else{
    breakTime = 0;
  }
  return breakTime;
}

export {setLocalStorage, getLocalStorage};