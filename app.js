console.log('tangina');
const resultDiv = document.querySelector('.results-div');

const objectData = [
	{
		name: 'Computer',
		price: 3000,
	},
	{
		name: 'Lambo',
		price: 2000,
	},
];

const objects = objectData.forEach((element) => {
	showData(element);
});

function showData(element) {
	const data = element;
	const childDiv = document.createElement('div');
	childDiv.innerHTML = `
        <div class="card m-2"> 
            ${data.name}
            ${data.price}
            <div class="d-flex justify-content-between align-items-center">
                <button class="addButton btn btn-primary">+</button>
                <p class="denomination mt-3">0</p>
                <button class="decreaseButton btn btn-danger">-</button>
            </div>
        </div>
    `;
	resultDiv.appendChild(childDiv);
}

const decreaseButton = document.getElementsByClassName('decreaseButton');
const addButton = document.getElementsByClassName('addButton');

calculate();

function calculate() {
	for (let i = 0; i < decreaseButton.length; i++) {
		const button = decreaseButton[i];

		button.addEventListener('click', function (event) {
			const buttonClicked = event.target;

			const denominationText =
				buttonClicked.parentElement.children[1].innerHTML;
			let quantityNumber = parseInt(denominationText);
			quantityNumber--;
			// const decrementButton = buttonClicked.parentElement.children[2].innerHTML;
		});
	}

	for (let i = 0; i < addButton.length; i++) {
		const button = addButton[i];

		button.addEventListener('click', function (event) {
			const buttonClicked = event.target;

			const denominationText =
				buttonClicked.parentElement.children[1].innerHTML;
			let quantityNumber = parseInt(denominationText);

			// const decrementButton = buttonClicked.parentElement.children[2].innerHTML;
		});
	}
}
