let rainis = [{
    skaitlis: [59615, 59643, 61100, 62389, 62395, 62396, 62397, 64513, 64517, 64525, 64528, 64529, 64531, 66520, 66567, 66568, 68815, 5826, 5827, 5828],
    vards: "Rainis",
    daudzums: 19
},
];

let skalbe = [{
    skaitlis: [31485, 30921, 30920, 30918, 30917, 30916, 30915, 30914, 30913, 30763],
    vards: "Kārlis Skalbe",
    daudzums: 9
},
];

let jaunsudrabins = [{
    skaitlis: [30784],
    vards: "Jānis Jaunsudrabiņš",
    daudzums: 0
},
];
let kenins = [{
    skaitlis: [31025],
    vards: "Atis Ķēniņš",
    daudzums: 0
},
];
let poruks = [{
    skaitlis: [30846, 30407, 5792],
    vards: "Jānis Poruks",
    daudzums: 2
},
];
let valdemars = [{
    skaitlis: [30772, 30709, 30700, 30465, 5821, 5820],
    vards: "Krišjānis Valdemārs",
    daudzums: 5
},
];
let vitols = [{
    skaitlis: [30487, 30481, 30180, 30134, 30132],
    vards: "Jāzeps Vītols",
    daudzums: 4
},
];
let asars = [{
    skaitlis: [30486, 30485, 5743, 5742],
    vards: "Jānis Asars",
    daudzums: 3
},
];
let akuraters = [{
    skaitlis: [30460, 30033, 30032, 30031, 5745, 5744],
    vards: "Jānis Akuraters",
    daudzums: 5
},
];  
let melngailis = [{
    skaitlis: [30218],
    vards: "Emilis Melngalvis",
    daudzums: 0
},
];   
let blaumanis = [{
    skaitlis: [1690, 5822, 30079],
    vards: "Rūdolfs Blaumanis",
    daudzums: 2
},
];   
let person = [rainis, skalbe, jaunsudrabins, kenins, poruks, valdemars, vitols, asars, akuraters, melngailis, blaumanis];
let randomperson = [
    person[Math.floor(Math.random() * person.length)],
    person[Math.floor(Math.random() * person.length)],
    person[Math.floor(Math.random() * person.length)],
    person[Math.floor(Math.random() * person.length)],
    person[Math.floor(Math.random() * person.length)]
    ];
    randpers1 = randomperson[0];
    randpers2 = randomperson[1];
    randpers3 = randomperson[2];
    randpers4 = randomperson[3];
    randpers5 = randomperson[4];

let questions = [
    {
    numb: 1,
    question: "Kā sauc šo pazīstamo cilvēku?",
    answer: randpers1[0].vards,
    options: [
      "Alberts Kviesis",
      "Juris Akmentiņš",
      randpers1[0].vards,
      "Kārlis Baumanis"
    ]
  },
    {
    numb: 2,
    question: "Kā sauc šo pazīstamo cilvēku?",
    answer: randpers2[0].vards,
    options: [
      "Gunārs Astra",
      randpers2[0].vards,
      "Gunārs Birkerts",
      "Emīls Dārziņš"
    ]
  },
    {
    numb: 3,
    question: "Kā sauc šo pazīstamo cilvēku?",
    answer:  randpers3[0].vards,
    options: [
        randpers3[0].vards,
      "Marģers Skujenieks",
      "Ojārs Vācietis",
      "Oskars Kalpaks"
    ]
  },
    {
    numb: 4,
    question: "Kā sauc šo pazīstamo cilvēku?",
    answer: randpers4[0].vards,
    options: [
      "Vilhelms Purvītis",
      "Vilis Plūdonis",
      "Kārlis Zāle",
      randpers4[0].vards
    ]
  },
    {
    numb: 5,
    question: "Kā sauc šo pazīstamo cilvēku?",
    answer: randpers5[0].vards,
    options: [
      "Zigfrīds Anna Meierovics",
      "Dainis Īvāns",
      randpers5[0].vards,
      "Emīls Dārziņš"
    ]
  },
];
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); 
}
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
    window.location = "home.html"; 
}
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuetions(0);
    queCounter(1); 
    startTimer(15);
    startTimerLine(0); 
}
let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");
restart_quiz.onclick = ()=>{
    window.location.reload();
    quiz_box.classList.add("activeQuiz"); 
    result_box.classList.remove("activeResult"); 
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); 
    queCounter(que_numb); 
    clearInterval(counter); 
    clearInterval(counterLine); 
    startTimer(timeValue);
    startTimerLine(widthValue); 
    timeText.textContent = "Atlicis:"; 
    next_btn.classList.remove("show"); 
    skip_btn.classList.add("show"); 
}

quit_quiz.onclick = ()=>{
    window.location = "home.html";
}
const next_btn = document.querySelector("footer .next_btn");
const skip_btn = document.querySelector("footer .skip_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ 
        que_count++;
        que_numb++; 
        showQuetions(que_count); 
        queCounter(que_numb); 
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(timeValue); 
        startTimerLine(widthValue); 
        timeText.textContent = "Atlicis:"; 
        next_btn.classList.remove("show"); 
    }else{
        clearInterval(counter); 
        clearInterval(counterLine); 
        showResult();
    }
}
skip_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ 
        que_count++; 
        que_numb++; 
        showQuetions(que_count); 
        queCounter(que_numb);
        clearInterval(counter); 
        clearInterval(counterLine); 
        startTimer(timeValue);
        startTimerLine(widthValue); 
        timeText.textContent = "Atlicis:"; 
        
    }else{
        clearInterval(counter); 
        clearInterval(counterLine);
        showResult(); 
    }
}
function showQuetions(index){
    skip_btn.classList.add("show"); 
    const que_text = document.querySelector(".que_text");
    const que_img = document.querySelector(".que_img");
    let randpers = randomperson[index];
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let que_image = '<img src="https://dom.lndb.lv/data/obj/' + randpers[0].skaitlis[Math.floor(Math.random() *randpers[0].daudzums)]+ '.png", style="max-width:485px;width:100%>">';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; 
    option_list.innerHTML = option_tag; 
    que_img.innerHTML = que_image;
    const option = option_list.querySelectorAll(".option");
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';
function optionSelected(answer){
    clearInterval(counter); 
    clearInterval(counterLine); 
    let userAns = answer.textContent; 
    let correcAns = questions[que_count].answer;
    const allOptions = option_list.children.length; 
    
    if(userAns == correcAns){ 
        userScore += 1; 
        answer.classList.add("correct"); 
        answer.insertAdjacentHTML("beforeend", tickIconTag); 
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{ 
        answer.classList.add("incorrect"); 
        answer.insertAdjacentHTML("beforeend", crossIconTag);
        console.log("Wrong Answer");
        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ 
                option_list.children[i].setAttribute("class", "option correct"); 
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled");
    }
    next_btn.classList.add("show");
    skip_btn.classList.add("show");
}
function showResult(){
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ 
        let scoreTag = '<span>Lieliski, Tu atbildēji pareizi uz <p>'+ userScore +'</p> no <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  
    }
    else if(userScore > 1){
        let scoreTag = '<span>Labi, Tu atbildēji pareizi uz <p>'+ userScore +'</p> no <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ 
        let scoreTag = '<span>Slikti, Tu atbildēji pareizi uz <p>'+ userScore +'</p> no <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}
function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; 
        time--; 
        if(time < 9){ 
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; 
        }
        if(time < 0){ 
            clearInterval(counter); 
            timeText.textContent = "STOP"; 
            const allOptions = option_list.children.length; 
            let correcAns = questions[que_count].answer; 
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ 
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled");
            }
            next_btn.classList.add("show"); 
            skip_btn.classList.add("show"); 
        }
    }
}
function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; 
        time_line.style.width = time + "px"; 
        if(time > 549){ 
            clearInterval(counterLine); 
        }
    }
}
function queCounter(index){
    let totalQueCounTag = '<span><p>'+ index +'</p> no <p>'+ questions.length +'</p> jautājumiem</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  
}