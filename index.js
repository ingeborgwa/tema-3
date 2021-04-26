//---------TO DO LIST---------//

let enterButton = document.querySelector("#enter");

let input = document.querySelector("#userInput");
let ul = document.querySelector("ul");
let item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	let li = document.createElement("li"); 
	li.appendChild(document.createTextNode(input.value)); 
	ul.appendChild(li); 
	input.value = ""; 


	//CROSSOUT
	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);
	

	// DELETE BUTTON
	let dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("done"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	

	//ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
		li.classList.add("delete")
	}
	
}


//ADD BY CLICK AND ENTER

function addListAfterClick(){
	if (inputLength() > 0) { 
		createListElement();
	}
}


function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { 
		createListElement();
	} 
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);





//---------QUOTE---------//

let quotes=[

	'“All our dreams can come true, if we have the courage to pursue them.” – Walt Disney',
	'“The secret of getting ahead is getting started.” – Mark Twain',
	'“Only the paranoid survive.” – Andy Grove',
	'T“You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.” ― William W. Purkeyz',
	'“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.”― Neil Gaiman',
	'“Everything you can imagine is real.”― Pablo Picasso',
	'“Do one thing every day that scares you.”― Eleanor Roosevelt',
	'“Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.” – Socrates',
	'“Do what you feel in your heart to be right – for you’ll be criticized anyway.”― Eleanor Roosevelt',
	'“Whatever you are, be a good one.” ― Abraham Lincoln',
	'“Impossible is just an opinion.” – Paulo Coelho',
	'“Don’t be afraid to give up the good to go for the great.” – John D. Rockefeller',
	'“Hold the vision, trust the process.” – Unknown',
	'“If something is important enough, even if the odds are stacked against you, you should still do it.” – Elon Musk',
	'“Some people want it to happen, some wish it would happen, others make it happen.” – Michael Jordan',
	'“Great things are done by a series of small things brought together” – Vincent Van Gogh',
	'“Keep your eyes on the stars, and your feet on the ground.” – Theodore Roosevelt',
	'“You can waste your lives drawing lines. Or you can live your life crossing them.” – Shonda Rhimes',
	'“In a gentle way, you can shake the world.” – Mahatma Gandhi',
	'“If opportunity doesn’t knock, build a door.” – Kurt Cobain',
	'“If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.” – Sheryl Sandberg',
	'The cheapest, fastest, and most reliable components are those that aren’t there. - Gordon Bell',
	'“If you cannot do great things, do small things in a great way.” – Napoleon Hill',
	'“Nothing will work unless you do.” – Maya Angelou',
	'“Never allow a person to tell you no who doesn’t have the power to say yes.” – Eleanor Roosevelt'

];


function displayQuote(){
	let index=Math.floor(Math.random()*quotes.length);
	let div=document.querySelector('#quote');
	let quote=`
		<div>
		<p>${quotes[index]}</p>
		</div>
	`;
	div.innerHTML=quote;

}
