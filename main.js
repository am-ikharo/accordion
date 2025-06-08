const data = [
  {
    id: "1",
    question: "what are accordiom components?",
    answer: "Arccordion components are user interface elements",
  },
  {
    id: "2",
    question: "what are they used for?",
    answer: "They are commonly employed in various contexts,",
  },
  {
    id: "3",
    question: "Accodion as a musical instrument",
    answer: "the arccordion is a musical instrument with a key",
  },
  {
    id: "4",
    question: "Can i create an accordion component with?",
    answer: "Yes ofcourse, its is very possible to create an accordion ",
  },
];

const accordionWrapper = document.querySelector(".accordion");

function createAccodionData() {
  accordionWrapper.innerHTML = data.map(
    (dataItem) => `
        <div class="accordion_item">
        <div class="accordion_title">
        <h3>${dataItem.question}</h3>
        <i class="fa-solid fa-arrow-up"></i>
        </div>
        </div>
        `
  ).join(" ");
}

createAccodionData();
