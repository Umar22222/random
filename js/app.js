console.log("START");

const tel = document.querySelector(".tel")
const btn = document.querySelector(".btn");

const TEL_NUMBER = [
    "+998 90 029 01 00",
    "+998 90 029 01 01",
    "+998 90 029 01 02",
    "+998 90 029 01 03",
    "+998 90 029 01 04",
    "+998 90 029 01 05",
    "+998 90 029 01 06",
    "+998 90 029 01 07",
    "+998 90 029 01 08",
    "+998 90 029 01 09",
    "+998 90 029 01 10",
    "+998 90 029 01 11",
    "+998 90 029 01 12",
    "+998 90 029 01 13",
    "+998 90 029 01 14",
    "+998 90 029 01 15",
    "+998 90 029 01 16",
    "+998 90 029 01 17",
    "+998 90 029 01 18",
    "+998 90 029 01 19",
    "+998 90 029 01 20",
    "+998 90 029 01 21",
    "+998 90 029 01 22",
    "+998 90 029 01 23",
    "+998 90 029 01 24",
    "+998 90 029 01 25",
    "+998 90 029 01 26",
    "+998 90 029 01 27",
    "+998 90 029 01 28",
    "+998 90 029 01 29",
    "+998 90 029 01 30",
    "+998 90 029 01 31",
    "+998 90 029 01 32",
    "+998 90 029 01 33",
    "+998 90 029 01 34",
    "+998 90 029 01 35",
    "+998 90 029 01 36",
    "+998 90 029 01 37",
    "+998 90 029 01 38",
    "+998 90 029 01 39",
    "+998 90 029 01 40",
    "+998 90 029 01 41",
    "+998 90 029 01 42",
    "+998 90 029 01 43",
    "+998 90 029 01 44",
    "+998 90 029 01 45",
    "+998 90 029 01 46",
    "+998 90 029 01 47",
    "+998 90 029 01 48",
    "+998 90 029 01 49",
    "+998 90 029 01 50",
    "+998 90 029 01 51",
    "+998 90 029 01 52",
    "+998 90 029 01 53",
    "+998 90 029 01 54",
    "+998 90 029 01 55",
    "+998 90 029 01 56",
    "+998 90 029 01 57",
    "+998 90 029 01 58",
    "+998 90 029 01 59",
    "+998 90 029 01 60",
    "+998 90 029 01 61",
    "+998 90 029 01 62",
    "+998 90 029 01 63",
    "+998 90 029 01 64",
    "+998 90 029 01 65",
    "+998 90 029 01 66",
    "+998 90 029 01 67",
    "+998 90 029 01 68",
    "+998 90 029 01 69",
    "+998 90 029 01 70",
    "+998 90 029 01 71",
    "+998 90 029 01 72",
    "+998 90 029 01 73",
    "+998 90 029 01 74",
    "+998 90 029 01 75",
    "+998 90 029 01 76",
    "+998 90 029 01 77",
    "+998 90 029 01 78",
    "+998 90 029 01 79",
    "+998 90 029 01 80",
    "+998 90 029 01 81",
    "+998 90 029 01 82",
    "+998 90 029 01 83",
    "+998 90 029 01 84",
    "+998 90 029 01 85",
    "+998 90 029 01 86",
    "+998 90 029 01 87",
    "+998 90 029 01 88",
    "+998 90 029 01 89",
    "+998 90 029 01 90",
    "+998 90 029 01 91",
    "+998 90 029 01 92",
    "+998 90 029 01 93",
    "+998 90 029 01 94",
    "+998 90 029 01 95",
    "+998 90 029 01 96",
    "+998 90 029 01 97",
    "+998 90 029 01 98",
    "+998 90 029 01 99",
    "+998 90 029 01 00",

]


function randomTel(){
    btn.setAttribute("disabled", true)
    let interval = setInterval(()=>{
        let randomNaber = Math.floor(Math.random() * TEL_NUMBER.length)
        tel.innerHTML = TEL_NUMBER[randomNaber]
    },100)
    setTimeout(()=>{
        clearInterval(interval)
        btn.removeAttribute("disabled")
        
    },2500)
}














console.log("END");
