function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

const questionBank = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    answer: "Delhi"
  },
  {
    question: "Who was the first President of India?",
    options: ["Mahatma Gandhi", "Rajendra Prasad", "Nehru", "Sarvepalli Radhakrishnan"],
    answer: "Rajendra Prasad"
  },
  {
  question: "What is the color of grass?",
  options: ["Blue", "Green", "Red", "Yellow"],
  answer: "Green"
},
{
  question: "Which animal is known as the 'King of the Jungle'?",
  options: ["Elephant", "Tiger", "Lion", "Bear"],
  answer: "Lion"
},
{
  question: "How many hours are there in a day?",
  options: ["12", "24", "36", "48"],
  answer: "24"
},
{
  question: "What is the shape of a wheel?",
  options: ["Square", "Round", "Rectangle", "Triangle"],
  answer: "Round"
},
{
  question: "How many days are in a year?",
  options: ["360", "364", "365", "366"],
  answer: "365"
},
{
  question: "What is the color of an apple?",
  options: ["Green", "Purple", "Red", "Pink"],
  answer: "Red"
},
{
  question: "Which part of the body is used to see?",
  options: ["Hands", "Feet", "Eyes", "Nose"],
  answer: "Eyes"
},
{
  question: "Which bird can swim but not fly?",
  options: ["Sparrow", "Crow", "Penguin", "Peacock"],
  answer: "Penguin"
},
{
  question: "How many letters are there in the English alphabet?",
  options: ["24", "25", "26", "27"],
  answer: "26"
},
{
  question: "Where does the sun rise from?",
  options: ["North", "West", "East", "South"],
  answer: "East"
},
{
  question: "Which fruit is called the 'King of Fruits'?",
  options: ["Apple", "Banana", "Mango", "Grapes"],
  answer: "Mango"
},
{
  question: "What do you wear on your feet?",
  options: ["Hat", "Shoes", "Gloves", "Shirt"],
  answer: "Shoes"
},
{
  question: "Which sense organ do we use to smell?",
  options: ["Eyes", "Ears", "Nose", "Tongue"],
  answer: "Nose"
},
{
  question: "How many legs does a dog have?",
  options: ["2", "4", "6", "8"],
  answer: "4"
},
{
  question: "What is the opposite of day?",
  options: ["Dark", "Black", "Night", "Morning"],
  answer: "Night"
},
{
  question: "Which season is the hottest?",
  options: ["Winter", "Summer", "Autumn", "Rainy"],
  answer: "Summer"
},
{
  question: "What do you call frozen water?",
  options: ["Rain", "Ice", "Steam", "Snow"],
  answer: "Ice"
},
{
  question: "How many minutes are there in one hour?",
  options: ["30", "60", "90", "100"],
  answer: "60"
},
{
  question: "What is 5 + 5?",
  options: ["8", "9", "10", "11"],
  answer: "10"
},
{
  question: "Which animal gives us wool?",
  options: ["Dog", "Goat", "Sheep", "Cow"],
  answer: "Sheep"
},
  {
    question: "What color is the Indian national flag?",
    options: ["Red", "Blue", "Tricolor", "White"],
    answer: "Tricolor"
  },
  {
  question: "Which is the largest ocean in the world?",
  options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
  answer: "Pacific Ocean"
},
{
  question: "Which Indian cricketer is known as 'Master Blaster'?",
  options: ["Virat Kohli", "Kapil Dev", "MS Dhoni", "Sachin Tendulkar"],
  answer: "Sachin Tendulkar"
},
{
  question: "What is the square root of 144?",
  options: ["10", "12", "14", "16"],
  answer: "12"
},
{
  question: "Who wrote the national anthem of India?",
  options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu", "Subhash Chandra Bose"],
  answer: "Rabindranath Tagore"
},
{
  question: "Which animal is known as the Ship of the Desert?",
  options: ["Camel", "Horse", "Donkey", "Elephant"],
  answer: "Camel"
},
{
  question: "How many players are there in a cricket team?",
  options: ["10", "11", "9", "12"],
  answer: "11"
},
{
  question: "Which organ purifies blood in the human body?",
  options: ["Heart", "Lungs", "Kidney", "Liver"],
  answer: "Kidney"
},
{
  question: "Which is the smallest prime number?",
  options: ["0", "1", "2", "3"],
  answer: "2"
},
{
  question: "What is the national flower of India?",
  options: ["Rose", "Lotus", "Marigold", "Jasmine"],
  answer: "Lotus"
},
{
  question: "Which gas is essential for breathing?",
  options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Helium"],
  answer: "Oxygen"
},
{
  question: "What is the currency of Japan?",
  options: ["Yen", "Won", "Dollar", "Euro"],
  answer: "Yen"
},
{
  question: "Which instrument is used to measure temperature?",
  options: ["Barometer", "Thermometer", "Hygrometer", "Altimeter"],
  answer: "Thermometer"
},
{
  question: "Which day is celebrated as Independence Day in India?",
  options: ["26th January", "15th August", "2nd October", "14th November"],
  answer: "15th August"
},
{
  question: "Who was the first man to walk on the moon?",
  options: ["Neil Armstrong", "Buzz Aldrin", "Rakesh Sharma", "Yuri Gagarin"],
  answer: "Neil Armstrong"
},
{
  question: "Which is the longest river in the world?",
  options: ["Amazon", "Ganga", "Nile", "Yangtze"],
  answer: "Nile"
},
{
  question: "Which is the highest mountain in the world?",
  options: ["K2", "Kanchenjunga", "Everest", "Makalu"],
  answer: "Everest"
},
{
  question: "What is the chemical formula for water?",
  options: ["H2", "O2", "H2O", "CO2"],
  answer: "H2O"
},
{
  question: "What is the main source of energy for Earth?",
  options: ["Wind", "Water", "Sun", "Electricity"],
  answer: "Sun"
},
{
  question: "Which festival is known as the festival of lights?",
  options: ["Holi", "Eid", "Diwali", "Christmas"],
  answer: "Diwali"
},
{
  question: "Which bird is the national bird of India?",
  options: ["Sparrow", "Crow", "Peacock", "Pigeon"],
  answer: "Peacock"
},

  {
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Mercury", "Earth", "Mars"],
    answer: "Mercury"
  },
  {
    question: "What is the boiling point of water?",
    options: ["100°C", "90°C", "120°C", "80°C"],
    answer: "100°C"
  },
  {
  question: "How many colors are there in a rainbow?",
  options: ["5", "6", "7", "8"],
  answer: "7"
},
{
  question: "What is 2 + 2?",
  options: ["3", "4", "5", "6"],
  answer: "4"
},
{
  question: "Which fruit is yellow and long?",
  options: ["Apple", "Banana", "Grapes", "Orange"],
  answer: "Banana"
},
{
  question: "Which day comes after Monday?",
  options: ["Sunday", "Wednesday", "Tuesday", "Friday"],
  answer: "Tuesday"
},
{
  question: "What do bees make?",
  options: ["Milk", "Honey", "Juice", "Wax"],
  answer: "Honey"
},
{
  question: "Which animal says 'meow'?",
  options: ["Dog", "Cat", "Cow", "Sheep"],
  answer: "Cat"
},
{
  question: "What is the shape of the Earth?",
  options: ["Flat", "Round", "Square", "Triangle"],
  answer: "Round"
},
{
  question: "What do we drink that comes from cows?",
  options: ["Water", "Juice", "Milk", "Soda"],
  answer: "Milk"
},
{
  question: "What color is the sky on a clear day?",
  options: ["Red", "Green", "Blue", "Yellow"],
  answer: "Blue"
},
{
  question: "How many legs does a spider have?",
  options: ["6", "8", "10", "12"],
  answer: "8"
},
{
  question: "Which is the largest land animal?",
  options: ["Elephant", "Lion", "Giraffe", "Zebra"],
  answer: "Elephant"
},
{
  question: "What is the name of Mickey Mouse's pet dog?",
  options: ["Pluto", "Goofy", "Donald", "Max"],
  answer: "Pluto"
},
{
  question: "Which vegetable is orange and has a long shape?",
  options: ["Potato", "Carrot", "Pumpkin", "Tomato"],
  answer: "Carrot"
},
{
  question: "Which bird cannot fly?",
  options: ["Eagle", "Sparrow", "Penguin", "Pigeon"],
  answer: "Penguin"
},
{
  question: "What do you call a baby dog?",
  options: ["Kitten", "Puppy", "Cub", "Chick"],
  answer: "Puppy"
},
{
  question: "What do you wear to protect your feet?",
  options: ["Shirt", "Hat", "Shoes", "Gloves"],
  answer: "Shoes"
},
{
  question: "Which number comes after 9?",
  options: ["8", "10", "11", "12"],
  answer: "10"
},
{
  question: "What do we use to write on a blackboard?",
  options: ["Pen", "Chalk", "Pencil", "Marker"],
  answer: "Chalk"
},
{
  question: "What do trees give us to breathe?",
  options: ["Oxygen", "Carbon", "Smoke", "Dust"],
  answer: "Oxygen"
},
{
  question: "Which season is the coldest?",
  options: ["Summer", "Spring", "Winter", "Autumn"],
  answer: "Winter"
},
  {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Michelangelo"],
    answer: "Leonardo da Vinci"
  },
  {
    question: "Which gas do plants use to make food?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon Dioxide"
  }
];
const totalQuestions = 15;
let selectedQuestions = [];
let currentQuestion = 0;
let score = 0;
let userAnswers = []; // store selected options

const startBtn = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");
const startScreen = document.getElementById("start-screen");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const finishBtn = document.getElementById("finish-btn");
const resultScreen = document.getElementById("result-screen");
const scoreDisplay = document.getElementById("score-display");

startBtn.addEventListener("click", () => {
  startScreen.classList.add("hide");
  quizContainer.classList.remove("hide");
  startQuiz();
});

function startQuiz() {
  const randomQuestions = getRandomQuestions(questionBank, totalQuestions);

  // Deep copy and shuffle options for each selected question
  selectedQuestions = randomQuestions.map(q => ({
    ...q,
    options: shuffleArray([...q.options])
  }));

  userAnswers = Array(totalQuestions).fill(null);
  currentQuestion = 0;
  score = 0;
  showQuestion();
}


function getRandomQuestions(bank, n) {
  const shuffled = bank.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function showQuestion() {
  const q = selectedQuestions[currentQuestion];
  questionEl.textContent = `Q${currentQuestion + 1}. ${q.question}`;
  optionsEl.innerHTML = "";

  q.options.forEach(option => 
 {
    const btn = document.createElement("div");
    btn.classList.add("option");
    btn.textContent = option;

    if (userAnswers[currentQuestion]) {
      btn.style.pointerEvents = "none";
      if (option === selectedQuestions[currentQuestion].answer) {
        btn.classList.add("correct");
      } else if (option === userAnswers[currentQuestion]) {
        btn.classList.add("incorrect");
      }
    }

    btn.addEventListener("click", () => {
      if (userAnswers[currentQuestion] !== null) return;

      userAnswers[currentQuestion] = option;
      if (option === q.answer) score++;

      showQuestion(); // re-render with result
    });

    optionsEl.appendChild(btn);
  });

  updateNavButtons();
}


function updateNavButtons() {
  prevBtn.disabled = currentQuestion === 0;
  nextBtn.classList.toggle("hide", currentQuestion === selectedQuestions.length - 1);
  finishBtn.classList.toggle("hide", currentQuestion !== selectedQuestions.length - 1);
}

nextBtn.addEventListener("click", () => {
  if (currentQuestion < selectedQuestions.length - 1) {
    currentQuestion++;
    showQuestion();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
});

finishBtn.addEventListener("click", () => {
  quizContainer.classList.add("hide");
  resultScreen.classList.remove("hide");

  const total = selectedQuestions.length;
  const incorrect = total - score;

  scoreDisplay.textContent = `You answered ${score} out of ${total} questions correctly. 🎉`;

  const ctx = document.getElementById('score-chart').getContext('2d');
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Correct', 'Incorrect'],
      datasets: [{
        data: [score, incorrect],
        backgroundColor: ['#28a745', '#dc3545']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        },
        title: {
          display: true,
          text: 'Quiz Score Summary'
        }
      }
    }
  });
});