const addOrder = () => {
	const inOrderBtn = document.querySelector(".order-btn");
	const orderedItemsBtn = document.querySelector(".ordered-items-btn");
	const orderItemsNumber = orderedItemsBtn.querySelector(".ordered-item-num");
	const toggleOrderButton = (isActive) => {
		if (isActive) {
			inOrderBtn.classList.add("hidden");
			orderedItemsBtn.classList.remove("hidden");
		} else {
			inOrderBtn.classList.remove("hidden");
			orderedItemsBtn.classList.add("hidden");
		}
	};
	let count = 0;
	inOrderBtn.addEventListener("click", (e) => {
		toggleOrderButton(true);
		count++;
		orderItemsNumber.innerHTML = `${count} набор`;
	});
	const minus = orderedItemsBtn.querySelector("span.minus");
	const plus = orderedItemsBtn.querySelector("span.plus");
	minus.addEventListener("click", () => {
		count--;
		orderItemsNumber.innerHTML = `${count} набор`;
		if (count <= 0) {
			toggleOrderButton(false);
		}
	});
	plus.addEventListener("click", () => {
		count++;
		orderItemsNumber.innerHTML = `${count} набор`;
	});
};
