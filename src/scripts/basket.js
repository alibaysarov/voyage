const addOrder = () => {
	const calculateDrawer = () => {
		const orderData = document.querySelectorAll(".ordered-items-btn");
		let totalPrice = 0;
		const goods = [...orderData].map((el) => {
			return {
				count: +el.dataset.count,
				price: +el.dataset.price,
			};
		});
		goods.forEach((el) => {
			const pricePerProduct = el.count * el.price;
			totalPrice += pricePerProduct;
		});
		const totalPriceElement = document.querySelector(".tottal-price");
		totalPriceElement.innerHTML = `${totalPrice} ₽`;
	};
	const inOrderBtn = document.querySelectorAll(".order-btn");
	calculateDrawer();
	const toggleOrderButton = (btn1, btn2, isActive) => {
		if (isActive) {
			btn1.classList.add("hidden");
			btn2.classList.remove("hidden");
		} else {
			btn1.classList.remove("hidden");
			btn2.classList.add("hidden");
		}
	};
	inOrderBtn.forEach((btn) => {
		const orderedQuantityBtn = btn.nextElementSibling;
		const orderItemsNumber =
			orderedQuantityBtn.querySelector(".ordered-item-num");

		btn.addEventListener("click", (e) => {
			toggleOrderButton(btn, orderedQuantityBtn, true);
			orderedQuantityBtn.dataset.count = +orderedQuantityBtn.dataset.count + 1;
			orderItemsNumber.innerHTML = `${orderedQuantityBtn.dataset.count} набор`;
			calculateDrawer();
		});
		const minus = orderedQuantityBtn.querySelector("span.minus");
		const plus = orderedQuantityBtn.querySelector("span.plus");
		minus.addEventListener("click", () => {
			orderedQuantityBtn.dataset.count = +orderedQuantityBtn.dataset.count - 1;
			orderItemsNumber.innerHTML = `${orderedQuantityBtn.dataset.count} набор`;
			if (+orderedQuantityBtn.dataset.count <= 0) {
				toggleOrderButton(btn, orderedQuantityBtn, false);
			}
			calculateDrawer();
		});
		plus.addEventListener("click", () => {
			orderedQuantityBtn.dataset.count = +orderedQuantityBtn.dataset.count + 1;
			orderItemsNumber.innerHTML = `${orderedQuantityBtn.dataset.count} набор`;
			calculateDrawer();
		});
	});
};
