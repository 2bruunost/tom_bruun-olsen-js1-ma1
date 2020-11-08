const cats = [
	{
		name: "Blob",
		age: 10,
	},
	{
		name: "Harold",
	},
	{
		name: "Blurt",
		age: 21,
	},
];


Question 1
const cat = complain();

function complain() {
	console.log("Meow!");
}

Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

Question 3

heading.style.fontSize = "2em";

Question 4

heading.classList = "subHeading";

Question 5

const paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
	paragraphs[i].style.color = "red";
}

Question 6

resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p style="Background: yellow"> New Paragrah </p>`;

Question 7

function caturday(list) {
	for (let i = 0; i < list.length; i++) {
		console.log(list[i].name);
	}
}

caturday(cats);

Question 8

let items; items  = "a string";

