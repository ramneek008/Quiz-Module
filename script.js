
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
        question: "Which of the following is true about typeof operator in JavaScript?",
        options: [
            "The typeof is a unary operator that is placed before its single operand, which can be of any type", 
            "Its value is a string indicating the data type of the operand.", 
            "Both of the above", 
            "None of the above"
            ],
        answer: "Both of the above",
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
            "\\",
            "//",
            "\\* *\\",
            "\* */"
        ],
        answer: "//",
        score: 1
    },
    {
        question: "Which method of an Array object adds and/or removes elements from an array?",
        options: [
            "Reverse",
            "Shift",
            "Slice",
            "Splice"
        ],
        answer: "Splice",
        score: 1
    }
];

var i=0,j=0, scores=0;

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
    var op = document.createTextNode(questions[i].options[j]);
    form.appendChild(input);
    form.appendChild(op);
    var br = document.createElement("br");
    form.appendChild(br);
}

div.appendChild(form);

var button1 = document.createElement("button");
button1.setAttribute("id", "submit")
var sub = document.createTextNode("Submit");
button1.appendChild(sub);
div.appendChild(button1);

var button2 = document.createElement("button");
button2.setAttribute("id", "next")
var next = document.createTextNode("Next");
button2.appendChild(next);
div.appendChild(button2);


// questions.map(
//     (ques)=>{
//         console.log(ques.question);
//         var p = document.createElement("p");
//         var n = document.createTextNode(ques.question);
//         p.appendChild(n)
//         document.body.appendChild(p);
//     }
// )
