const data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
]

const currentDate = new Date().getDay()
const allDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
const currentDay = allDays[currentDate]
const graphs = document.getElementById('graphs-div')

data.map(element => {
    if(element.day === currentDay) {
        graphs.innerHTML += `<div class="day">
                                <span class="tool-tip" id="tool-tip-${element.day}">${element.amount}</span>
                                <div class="graph" id="${element.day}"  style="height: ${element.amount * 3}px; background-color: hsl(186, 34%, 60%)"></div>
                                <div class="medium-brown weekday">${element.day}</div>
                        </div>`
    } else {
        graphs.innerHTML += `<div class="day">
                                <span class="tool-tip" id="tool-tip-${element.day}">${element.amount}</span>
                                <div class="graph" id=${element.day}  style="height: ${element.amount * 3}px;"></div>
                                <div class="medium-brown weekday">${element.day}</div>
                        </div>`
    }
    
})