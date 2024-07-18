window.onload = function() {
  excuseGenerate();
};

function excuseGenerate() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let selectedExcuses = [];
  selectedExcuses.push(who[Math.floor(Math.random() * (who.length - 1))]);
  selectedExcuses.push(action[Math.floor(Math.random() * (action.length - 1))]);
  selectedExcuses.push(what[Math.floor(Math.random() * (what.length - 1))]);
  selectedExcuses.push(when[Math.floor(Math.random() * (when.length - 1))]);

  printExcuses(selectedExcuses);
}

function printExcuses(excuseGenerated) {
  let excuses = document.getElementById("excuse");
  let nuevoHTML = "";
  for (let i = 0; i < excuseGenerated.length; i++) {
    nuevoHTML += excuseGenerated[i] + " ";
  }
  excuses.innerHTML = nuevoHTML;
}
