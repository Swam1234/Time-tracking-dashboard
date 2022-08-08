const data = [
    {
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    {
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    {
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
];

const workCard = document.getElementById("work");
const playCard = document.getElementById("play");
const studyCard = document.getElementById("study");
const exerciseCard = document.getElementById("exercise");
const socialCard = document.getElementById("social");
const selfCareCard = document.getElementById("self-care");

const dailyBtn = document.getElementById("daily-btn");
const weeklyBtn = document.getElementById("weekly-btn");
const monthlyBtn = document.getElementById("monthly-btn");

let workTitle = data[0].title;
let playTitle = data[1].title;
let studyTitle = data[2].title;
let exerciseTitle = data[3].title;
let socialTitle = data[4].title;
let selfCareTitle = data[5].title;

let workTimeCurrent = data[0].timeframes.weekly.current;
let workTimePrevious = data[0].timeframes.weekly.previous;

let playTimeCurrent = data[1].timeframes.weekly.current;
let playTimePrevious = data[1].timeframes.weekly.previous;

let studyTimeCurrent = data[2].timeframes.weekly.current;
let studyTimePrevious = data[2].timeframes.weekly.previous;

let exerciseTimeCurrent = data[3].timeframes.weekly.current;
let exerciseTimePrevious = data[3].timeframes.weekly.previous;

let socialTimeCurrent = data[4].timeframes.weekly.current;
let socialTimePrevious = data[4].timeframes.weekly.previous;

let selfCareTimeCurrent = data[5].timeframes.weekly.current;
let selfCareTimePrevious = data[5].timeframes.weekly.previous;

function forInnerHtml(whichTime, title, timeCurrent, timePrevious) {
    let resultHtml = `
            <div class="d-flex justify-content-between align-items-center">
                <p class="m-0 text-white">${title}</p>
                <img src="time-tracking-dashboard-main/time-tracking-dashboard-main/images/icon-ellipsis.svg" alt="">
            </div>
            <div class="d-flex justify-content-between align-items-center d-lg-block">
                <h1 class="display-5 text-white m-0">${timeCurrent}hrs</h1>
                <p class="small text-pale-blue m-0">Last ${whichTime} - ${timePrevious}</p>
            </div>
            `;
    return resultHtml;
};

workCard.innerHTML = forInnerHtml("week", workTitle, workTimeCurrent, workTimePrevious);
playCard.innerHTML = forInnerHtml("week", playTitle, playTimeCurrent, playTimePrevious);
studyCard.innerHTML = forInnerHtml("week", studyTitle, studyTimeCurrent, studyTimePrevious);
exerciseCard.innerHTML = forInnerHtml("week", exerciseTitle, exerciseTimeCurrent, exerciseTimePrevious);
socialCard.innerHTML = forInnerHtml("week", socialTitle, socialTimeCurrent, socialTimePrevious);
selfCareCard.innerHTML = forInnerHtml("week", selfCareTitle, selfCareTimeCurrent, selfCareTimePrevious);

dailyBtn.addEventListener("click", () => {
    if (document.querySelector(".active")) {
        document.querySelector(".active").classList.remove("active");
        dailyBtn.classList.add("active");
    };

    workTimeCurrent = data[0].timeframes.daily.current;
    workTimePrevious = data[0].timeframes.daily.previous;

    playTimeCurrent = data[1].timeframes.daily.current;
    playTimePrevious = data[1].timeframes.daily.previous;

    studyTimeCurrent = data[2].timeframes.daily.current;
    studyTimePrevious = data[2].timeframes.daily.previous;

    exerciseTimeCurrent = data[3].timeframes.daily.current;
    exerciseTimePrevious = data[3].timeframes.daily.previous;

    socialTimeCurrent = data[4].timeframes.daily.current;
    socialTimePrevious = data[4].timeframes.daily.previous;

    selfCareTimeCurrent = data[5].timeframes.daily.current;
    selfCareTimePrevious = data[5].timeframes.daily.previous;
    workCard.innerHTML = forInnerHtml("day", workTitle, workTimeCurrent, workTimePrevious);
    playCard.innerHTML = forInnerHtml("day", playTitle, playTimeCurrent, playTimePrevious);
    studyCard.innerHTML = forInnerHtml("day", studyTitle, studyTimeCurrent, studyTimePrevious);
    exerciseCard.innerHTML = forInnerHtml("day", exerciseTitle, exerciseTimeCurrent, exerciseTimePrevious);
    socialCard.innerHTML = forInnerHtml("day", socialTitle, socialTimeCurrent, socialTimePrevious);
    selfCareCard.innerHTML = forInnerHtml("day", selfCareTitle, selfCareTimeCurrent, selfCareTimePrevious);
})

weeklyBtn.addEventListener("click", () => {
    if (document.querySelector(".active")) {
        document.querySelector(".active").classList.remove("active");
        weeklyBtn.classList.add("active");
    };

    
    workTimeCurrent = data[0].timeframes.weekly.current;
    workTimePrevious = data[0].timeframes.weekly.previous;

    playTimeCurrent = data[1].timeframes.weekly.current;
    playTimePrevious = data[1].timeframes.weekly.previous;

    studyTimeCurrent = data[2].timeframes.weekly.current;
    studyTimePrevious = data[2].timeframes.weekly.previous;

    exerciseTimeCurrent = data[3].timeframes.weekly.current;
    exerciseTimePrevious = data[3].timeframes.weekly.previous;

    socialTimeCurrent = data[4].timeframes.weekly.current;
    socialTimePrevious = data[4].timeframes.weekly.previous;

    selfCareTimeCurrent = data[5].timeframes.weekly.current;
    selfCareTimePrevious = data[5].timeframes.weekly.previous;
    
    workCard.innerHTML = forInnerHtml("week", workTitle, workTimeCurrent, workTimePrevious);
    playCard.innerHTML = forInnerHtml("week", playTitle, playTimeCurrent, playTimePrevious);
    studyCard.innerHTML = forInnerHtml("week", studyTitle, studyTimeCurrent, studyTimePrevious);
    exerciseCard.innerHTML = forInnerHtml("week", exerciseTitle, exerciseTimeCurrent, exerciseTimePrevious);
    socialCard.innerHTML = forInnerHtml("week", socialTitle, socialTimeCurrent, socialTimePrevious);
    selfCareCard.innerHTML = forInnerHtml("week", selfCareTitle, selfCareTimeCurrent, selfCareTimePrevious);
})

monthlyBtn.addEventListener("click", () => {
    if (document.querySelector(".active")) {
        document.querySelector(".active").classList.remove("active");
        monthlyBtn.classList.add("active");
    };

    workTimeCurrent = data[0].timeframes.monthly.current;
    workTimePrevious = data[0].timeframes.monthly.previous;

    playTimeCurrent = data[1].timeframes.monthly.current;
    playTimePrevious = data[1].timeframes.monthly.previous;

    studyTimeCurrent = data[2].timeframes.monthly.current;
    studyTimePrevious = data[2].timeframes.monthly.previous;

    exerciseTimeCurrent = data[3].timeframes.monthly.current;
    exerciseTimePrevious = data[3].timeframes.monthly.previous;

    socialTimeCurrent = data[4].timeframes.monthly.current;
    socialTimePrevious = data[4].timeframes.monthly.previous;

    selfCareTimeCurrent = data[5].timeframes.monthly.current;
    selfCareTimePrevious = data[5].timeframes.monthly.previous;

    workCard.innerHTML = forInnerHtml("month", workTitle, workTimeCurrent, workTimePrevious);
    playCard.innerHTML = forInnerHtml("month", playTitle, playTimeCurrent, playTimePrevious);
    studyCard.innerHTML = forInnerHtml("month", studyTitle, studyTimeCurrent, studyTimePrevious);
    exerciseCard.innerHTML = forInnerHtml("month", exerciseTitle, exerciseTimeCurrent, exerciseTimePrevious);
    socialCard.innerHTML = forInnerHtml("month", socialTitle, socialTimeCurrent, socialTimePrevious);
    selfCareCard.innerHTML = forInnerHtml("month", selfCareTitle, selfCareTimeCurrent, selfCareTimePrevious);
})