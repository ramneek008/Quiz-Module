
const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: [
            "<script>",
            "<head>",
            "<meta>",
            "<style>"
        ],
        answer: "<script>",
        score: 1
    },
    {
        question: "What is the full form of CSS?",
        options: [
            "JavaScript", 
            "Java", 
            "HTML", 
            "None of the above"
            ],
        answer: "None of the above",
        score: 1
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        options: [
            "changeOrder(order)", 
            "reverse()", 
            "sort(order)", 
            "None of the above"
            ],
        answer: "reverse()",
        score: 1
    },
    {
        question: "Which of the following function of String object extracts a section of a string and returns a new string?",
        options: [
            "slice()",
            "split()",
            "replace()",
            "search()"
        ],
        answer: "slice()",
        score: 1
    },
    {
        question: "Which of the following function of String object returns the calling string value converted to lower case?",
        options: [
            "toLocaleLowerCase()",
            "toLowerCase()",
            "toString()",
            "substring()"
        ],
        answer: "toLowerCase()",
        score: 1
    },
    {
        question: "Which of the following function of Array object adds one or more elements to the end of an array and returns the new length of the array?",
        options: [
            "pop()",
            "push()",
            "join()",
            "map()"
        ],
        answer: "push()",
        score: 1
    },
    {
        question: "Which of the following is not JavaScript Data Types?",
        options: [
            "Undefined",
            "Number",
            "Boolean",
            "Float"
        ],
        answer: "Float",
        score: 1
    },
    
    {
        question: "What is the correct syntax for referring to an external script called \"script.js\"? ",
        options: [
            "<script src=\"script.js\">",
            "<script source=\"script.js\">",
            "<script ref=\"script.js\">",
            "<script type=\"script.js\">"
        ],
        answer: "<script src=\"script.js\">",
        score: 1
    },
    {
        question: "Which symbol is used for comments in Javascript? ",
        options: [
            "\\\\",
            "//",
            "\\* *\\",
            "\\* */"
        ],
        answer: "//",
        score: 1
    },
    {
        question: "Which method of an Array object adds and/or removes elements from an array?",
        options: [
            "reverse()",
            "shift()",
            "slice()",
            "splice()"
        ],
        answer: "splice()",
        score: 1
    }
];

var i=0, scores=0;

var h = document.createElement("h2");
var q = document.createTextNode(questions[i].question);
h.appendChild(q);
var div =document.getElementById("box");
div.appendChild(h);

var form = document.createElement("form");
for(let j=0;j<4;j++)
{
    var input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("name", "ans");
    input.setAttribute("id",`op${j}`)
    var op = document.createTextNode(questions[i].options[j]);
    form.appendChild(input);
    form.appendChild(op);
    var br = document.createElement("br");
    form.appendChild(br);
}

div.appendChild(form);

var result = document.createElement("p");
div.appendChild(result);

var button1 = document.createElement("button");
button1.setAttribute("id", "submit")
var sub = document.createTextNode("Submit");
button1.appendChild(sub);
div.appendChild(button1);

var button2 = document.createElement("button");
button2.setAttribute("id", "next")
var next = document.createTextNode("Next");
button2.appendChild(next);
// div.appendChild(button2);

button1.addEventListener("click",answerSubmit);

function answerSubmit()
{
    var ans;
    for(let j=0;j<4;j++)
    {
        if(document.getElementById(`op${j}`).checked)
        {
            ans=questions[i].options[j];
            console.log(j);
            break;
        }
    }
    if(ans===undefined)
    {
        result.innerHTML="";
        result.setAttribute("id","incorr");
        let res = document.createTextNode("Select the option");
        result.appendChild(res);
    }
    else
    {
        if(ans===questions[i].answer)
        {
            result.innerHTML="";
            result.setAttribute("id","corr");
            let res = document.createTextNode("Correct");
            result.appendChild(res);
            scores++;
        }
        else
        {
            result.innerHTML="";
            result.setAttribute("id","incorr");
            let res = document.createTextNode("Incorrect");
            result.appendChild(res);
        }
        div.removeChild(button1);
        div.appendChild(button2);
        for(let j=0;j<4;j++)
        {
            document.getElementById(`op${j}`).disabled = true;
        }
        i++;
    }
    
}

button2.addEventListener("click", nextQuestion);

function nextQuestion(){
    if(i<10)
    {
       h.innerText= questions[i].question;
        form.innerHTML="";
        for(let j=0;j<4;j++)
        {
            var input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("name", "ans");
            input.setAttribute("id",`op${j}`)
            var op = document.createTextNode(questions[i].options[j]);
            form.appendChild(input);
            form.appendChild(op);
            var br = document.createElement("br");
            form.appendChild(br);
        }

        result.innerHTML="";
        result.setAttribute("id","");
        div.removeChild(button2);
        div.appendChild(button1); 
    }
    else
    {
        div.innerHTML="";
        var h1 = document.getElementsByTagName("h1");
        h1[0].innerText=`Score: ${scores}`;

        var panel= document.getElementById("panel");

        var h3 = document.createElement("h3");
        var key = document.createTextNode("Answer Key");
        h3.appendChild(key);
        panel.insertBefore(h3, div);

        var ul = document.createElement("ul");
        for(let j=0;j<10;j++)
        {
            var li = document.createElement("li");
            var quesli = document.createTextNode(questions[j].question + " - ");
            li.appendChild(quesli);
            var span = document.createElement("span");
            var ansli = document.createTextNode(questions[j].answer);
            span.setAttribute("id","ans")
            span.appendChild(ansli);
            li.appendChild(span);
            ul.appendChild(li);
            console.log(li);
        }
        div.appendChild(ul);

        var restart = document.createElement("button");
        restart.setAttribute("id", "restart");
        var resbut = document.createTextNode("Restart");
        restart.appendChild(resbut);
        panel.appendChild(restart);
        restart.addEventListener("click",restartQuiz);
    }
    
}

function restartQuiz()
{
    location.reload()
}
