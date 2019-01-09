function setDate () {
   const secondHand = document.querySelector('.hand--second');
   const minuteHand = document.querySelector('.hand--minute');
   const hourHand = document.querySelector('.hand--hour');
   
   const now = new Date();

   const seconds = now.getSeconds();
   console.log(seconds)
   const minutes = now.getMinutes();
   console.log(minutes)
   const hours = now.getHours();
   console.log(hours)

   const secondsDegrees = ((seconds / 60) * 360) + 90;
   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
   const minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
   minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
   const hoursDegrees = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
   hourHand.style.transform = `rotate(${hoursDegrees}deg)`;


}

setInterval(setDate, 1000);