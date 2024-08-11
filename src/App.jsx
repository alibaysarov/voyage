import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<header class="border">
				<div class="container max-w-[1300px] mx-auto">
					<div class="py-[10px]">
						<div class="flex justify-between">
							<div class="flex gap-[34px]">
								<img
									src="img/Logo.svg"
									width="100"
									alt="Logo"
								/>
								<div class="flex gap-[6px]">
									<div class="bg-[#F4F6F9] py-[5px] px-[22px] rounded-[50px]">
										<a
											href="tel:+7 921 400-50-20"
											class="text-[#0E254B]"
										>
											+7 921 400-50-20
										</a>
									</div>
									<div class="flex jutify-center align-center bg-[#F4F6F9] py-[5px] px-[18px] rounded-[50px]">
										<img
											src="img/icons/Whatsapp.svg"
											width="18"
											height="18"
											alt="Whatsapp"
										/>
									</div>
									<div class="flex jutify-center align-center bg-[#F4F6F9] py-[5px] px-[18px] rounded-[50px]">
										<img
											src="img/icons/TG.svg"
											width="18"
											height="18"
											alt="Whatsapp"
										/>
									</div>
								</div>
							</div>

							<div class="flex justify-between items-center gap-[35px]">
								<nav class="flex gap-[24px]">
									<a
										class="font-secondary text-[#0E254B] text-[13px]"
										href="#"
									>
										Праздники и события
									</a>
									<a
										class="font-secondary text-[#0E254B] text-[13px]"
										href="#"
									>
										Подарочный сертификат
									</a>
									<a
										class="font-secondary text-[#0E254B] text-[13px]"
										href="#"
									>
										Партнёрам
									</a>
									<a
										class="font-secondary text-[#0E254B] text-[13px]"
										href="#"
									>
										Путеводитель
									</a>
								</nav>
								<div class="flex gap-[6px]">
									<div class="flex jutify-center align-center bg-[#F4F6F9] py-[5px] px-[18px] rounded-[50px]">
										<img
											src="img/icons/Vk.svg"
											width="18"
											height="18"
											alt="Whatsapp"
										/>
									</div>
									<div class="flex jutify-center align-center bg-[#F4F6F9] py-[5px] px-[18px] rounded-[50px]">
										<img
											src="img/icons/IG.svg"
											width="18"
											height="18"
											alt="Whatsapp"
										/>
									</div>
								</div>
								<div class="langs">EN</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<div class="under-header">
				<div class="under-header__container">
					<div class="flex justify-between items-center mt-[15px] under-header__content">
						<div class="cities">
							<div class="city">
								<img
									class="coutrise-logo"
									src="img/icons/Turkey.png"
									alt=""
								/>
								<span>Стамбул</span>
							</div>
							<div class="city">
								<img
									class="coutrise-logo"
									src="img/icons/Dubai.png"
									alt=""
								/>
								<span>Дубай</span>
							</div>
							<div class="city">
								<img
									class="coutrise-logo"
									src="img/icons/USA.png"
									alt=""
								/>
								<span>Техас</span>
							</div>
						</div>
						<div class="basket">
							<div class="basket__total-price">
								<img
									src="img/shopping-bag.png"
									alt=""
								/>
								<span>Ваш заказ</span>
								<span class="tottal-price">9450 ₽</span>
							</div>
							<div class="bookmark">
								<div class="flex jutify-center align-center bg-[#F4F6F9] py-[10px] px-[25px] rounded-[50px]">
									<img
										src="img/закладка.png"
										alt=""
									/>
									<span class="bg-[#FF6B17] px-[7px] rounded-[50px] text-[14px] text-white">
										2
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="max-w-[1500px] mx-auto mt-[22px]">
					<div class="hero rounded-[30px]">
						<div class="hero__card mt-[127px] flex-col max-h-[480px]">
							<h2 class="text-white font-black text-[45px]">Яхтенное меню</h2>
							<p class="hero__text text-white font-semibold text-[18px] line-height: 1.5rem;">
								Здесь вы можете заказать еду в вояж. Сделайте
								<br />
								это в любое время, заблаговременно до старта
								<br />
								вояжа. Минимальное время заказа указано рядом
								<br />с названием каждого ресторана.
							</p>
						</div>

						<img
							class="mt-[300px] translate-x-[83px] mb-[54px]"
							src="img/logotwo.png"
							width="218"
							height="58"
							alt="Logo"
						/>
					</div>
					<div class="Home-YachtMenu text-[14px] mt-[25px] ml-[100px] font-normal">
						Главная / Яхтенное меню
					</div>
				</div>

				<div class="futura-section pt-[51px] pb-[26px]">
					<div class="max-w-[1300px] container mx-auto">
						<div class="futura-top">
							<div class="flex justify-between items-center gap-[59px]">
								<div class="flex items-center gap-[12px]">
									<div class="transition duration-150 cursor-pointer bg-[#F4F6F9] px-[15px] py-[7px] text-[16px] text-slate-600 leading-5 rounded-[50px] font-normal futura-tab-item">
										Роллы
									</div>
									<div class="transition duration-150 cursor-pointer bg-[#F4F6F9] px-[15px] py-[7px] text-[16px] text-slate-600 leading-5 rounded-[50px] font-normal futura-tab-item">
										Вино
									</div>
									<div class="transition duration-150 cursor-pointer bg-[#F4F6F9] px-[15px] py-[7px] text-[16px] text-slate-600 leading-5 rounded-[50px] font-normal futura-tab-item">
										Пицца
									</div>
									<div class="transition duration-150 cursor-pointer bg-[#F4F6F9] px-[15px] py-[7px] text-[16px] text-slate-600 leading-5 rounded-[50px] font-normal futura-tab-item">
										Устрицы
									</div>
									<div class="transition duration-150 cursor-pointer bg-[#D5E5FB] px-[15px] py-[7px] text-[16px] text-[#0E254B] leading-5 rounded-[50px] font-normal futura-tab-item">
										Острое
									</div>
									<div class="transition duration-150 cursor-pointer bg-[#F4F6F9] px-[15px] py-[7px] text-[16px] text-slate-600 leading-5 rounded-[50px] font-normal futura-tab-item">
										Новинки
									</div>
								</div>
								<div class="grow">
									<div class="flex items-center overflow-hidden border border-[#F4F6F9] px-[10px] py-[3px] grow rounded-[31px]">
										<input
											class="block w-full"
											type="text"
										/>
										<button>
											<svg
												width="23"
												height="23"
												viewBox="0 0 23 23"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M10.4219 17.9688C14.5899 17.9688 17.9688 14.5899 17.9688 10.4219C17.9688 6.25385 14.5899 2.875 10.4219 2.875C6.25385 2.875 2.875 6.25385 2.875 10.4219C2.875 14.5899 6.25385 17.9688 10.4219 17.9688Z"
													stroke="#0E254B"
													stroke-width="1.5"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
												<path
													d="M15.7578 15.7585L20.1243 20.125"
													stroke="#0E254B"
													stroke-width="1.5"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="futura-cards">
					<div class="max-w-[1300px] container mx-auto">
						<div class="futura-header flex justify-between mt-[38px]">
							<div class="futura-logo flex gap-[26px]">
								<img
									src="img/Frame 5891.png"
									alt=""
								/>
								<h2 class="text-[35px] font-bold text-[#0E254B;]">Футура</h2>
							</div>
							<div class="futura-info flex gap-[17px]">
								<div class="flex w-fit transition duration-150 cursor-pointer bg-[#F4F6F9] rounded-[10px] px-[15px] py-[7px] text-[14px] font-normal leading-5 font-normal futura-tab-item">
									<img
										class="p-[10px]"
										src="img/iconse/stopwatch.png"
										alt=""
									/>
									<div class="text flex items-center p-[13px 13px 13px 0px]">
										<div class="">Заказать не позднее чем за</div>
										<div class="text-[#0E254B;] text-[14px]">: 3 часа</div>
									</div>
								</div>
								<div class="flex w-fit transition duration-150 cursor-pointer bg-[#F4F6F9] rounded-[10px] px-[15px] py-[7px] text-[14px] font-normal leading-5 font-normal futura-tab-item">
									<img
										class="logo-inf p-[10px]"
										src="img/iconse/Vector.png"
										alt=""
									/>
									<div class="text flex items-center p-[13px 13px 13px 0px]">
										<span class="text-[#0E254B;] text-[14px] whitespace-nowrap">
											Минимальный заказ: 5000 ₽
										</span>
									</div>
								</div>
								<div class="flex w-fit transition duration-150 cursor-pointer bg-[#F4F6F9] rounded-[10px] px-[15px] py-[7px] text-[14px] font-normal leading-5 font-normal futura-tab-item">
									<img
										class="p-[10px]"
										src="img/iconse/car-sideview.png"
										alt=""
									/>
									<div class="text flex items-center p-[13px 13px 13px 0px]">
										<div class="">Доставка</div>
										<div class="text-[#0E254B;] text-[14px]">: бесплатно</div>
									</div>
								</div>
							</div>
						</div>
						<div class="fut-cards mt-[25px] flex rounded-b-lg justify-between">
							<div class="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									class="rounded-[20px]"
									src="img/CARDS IMG/CHIP.png"
									alt=""
								/>
								<div class="py-[14px] px-[15px]">
									<div class="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Чипсы, 50гр
										<img
											class="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span class="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Вкус: соль
									</span>
									<div class="order-and-price flex mt-[65px] items-center justify-between">
										<div class="price font-bold text-[22px] text-[#3485FF;]">
											120 ₽
										</div>
										<button class="order flex items-center bg-[#FF6B17] gap-[9px] text-[#FFFFFF;] font-semibold text-[16px] py-[8px] px-[30px] rounded-[50px] order-btn">
											<img
												class=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											В заказ
										</button>
										<button
											data-count="0"
											data-price="120"
											class="flex justify-between items-center bg-[#FFE9DC] gap-[9px] py-[8px] px-[30px] rounded-[50px] ordered-items-btn hidden"
										>
											<span class="minus text-[#FF6B17] font-semibold cursor-pointer">
												-
											</span>
											<span class="ordered-item-num text-[#FF6B17] font-semibold">
												1 набор
											</span>
											<span class="plus text-[#FF6B17] font-semibold cursor-pointer">
												+
											</span>
										</button>
									</div>
								</div>
							</div>
							<div class="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									class="rounded-[20px]"
									src="img/CARDS IMG/STR.png"
									alt=""
								/>
								<div class="py-[14px] px-[15px]">
									<div class="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Клубника, 50гр
										<img
											class="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span class="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Кусочками
									</span>
									<div class="order-and-price flex mt-[65px] items-center justify-between">
										<div class="price font-bold text-[22px] text-[#3485FF;]">
											250 ₽
										</div>
										<button class="order flex items-center bg-[#FF6B17] gap-[9px] text-[#FFFFFF;] font-semibold text-[16px] py-[8px] px-[30px] rounded-[50px] order-btn">
											<img
												class=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											В заказ
										</button>
										<button
											data-count="0"
											data-price="250"
											class="flex justify-between items-center bg-[#FFE9DC] gap-[9px] py-[8px] px-[30px] rounded-[50px] ordered-items-btn hidden"
										>
											<span class="minus text-[#FF6B17] font-semibold cursor-pointer">
												-
											</span>
											<span class="ordered-item-num text-[#FF6B17] font-semibold">
												1 набор
											</span>
											<span class="plus text-[#FF6B17] font-semibold cursor-pointer">
												+
											</span>
										</button>
									</div>
								</div>
							</div>
							<div class="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									class="rounded-[20px]"
									src="img/CARDS IMG/M.png"
									alt=""
								/>
								<div class="py-[14px] px-[15px]">
									<div class="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Печеный хумус с бастурмой, 60гр
										<img
											class="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span class="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Нут, тахини, винный уксус, кумин, паприка, бастурма
									</span>
									<div class="order-and-price flex mt-[10px] items-center justify-between">
										<div class="price font-bold text-[22px] text-[#3485FF;]">
											200 ₽
										</div>
										<button class="order flex items-center bg-[#FF6B17] gap-[9px] text-[#FFFFFF;] font-semibold text-[16px] py-[8px] px-[30px] rounded-[50px] order-btn">
											<img
												class=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											В заказ
										</button>
										<button
											data-count="0"
											data-price="200"
											class="flex justify-between items-center bg-[#FFE9DC] gap-[9px] py-[8px] px-[30px] rounded-[50px] ordered-items-btn hidden"
										>
											<span class="minus text-[#FF6B17] font-semibold cursor-pointer">
												-
											</span>
											<span class="ordered-item-num text-[#FF6B17] font-semibold">
												1 набор
											</span>
											<span class="plus text-[#FF6B17] font-semibold cursor-pointer">
												+
											</span>
										</button>
									</div>
								</div>
							</div>
							<div class="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									class="rounded-[20px]"
									src="img/CARDS IMG/CR.png"
									alt=""
								/>
								<div class="py-[14px] px-[15px]">
									<div class="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Круассаны, 70гр
										<img
											class="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span class="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Сливочный сыр, копченый лосось, лисонный сок
									</span>
									<div class="order-and-price flex mt-[35px] items-center justify-between">
										<div class="price font-bold text-[22px] text-[#3485FF;]">
											170 ₽
										</div>
										<div class="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												class=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button class="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="long-cards max-w-[1300px] container mx-auto mt-[30px]">
					<div class="max-w-[1300px] container mx-auto flex justify-between">
						<div class="futura-card rounded-[20px] max-w-[640px] max-h-[420px] bg-gray-50">
							<div class="images flex gap-[5px]">
								<img
									class="rounded-l-lg"
									src="img/CARDS IMG/card- 1  1.png"
									alt=""
								/>
								<img
									class="rounded-r-lg"
									src="img/CARDS IMG/card-1  2.png"
									alt=""
								/>
							</div>
							<div class="py-[15px] px-[15px]">
								<div class="info flex justify-between items-center mt-[14px] text-[#000000;] text-[18px] font-semibold">
									<div class="flex items-center gap-[7px]">
										<span class="py-[3px] px-[12px] text-[#3485FF;] bg-[#D5E5FB;] rounded-[34px] text-[18px]">
											Набор
										</span>
										<span>Набор для двоих, 580гр</span>
									</div>

									<img
										class="at"
										src="img/CARDS IMG/Frame 5695.png"
										alt=""
									/>
								</div>
								<div class="flex gap-[8px] mt-[14px]">
									<img
										class="vv"
										src="img/CARDS IMG/Users.png"
										alt=""
									/>
									<span>На 2 персоны</span>
								</div>
								<span class="taste mt-[10px] font-normal text-[14px] text-gray-400">
									Багет, ржанная чиабатта, вафли, гриссини, мусс из цветной
									капусты с беконом, паштет с вишневым конфи, ассорти сыров и
									мясных
								</span>
								<div class="order-and-price flex mt-[25px] items-center justify-between">
									<div class="price font-bold text-[22px] text-[#3485FF;]">
										2375 ₽
									</div>
									<div class="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
										<img
											class=""
											src="img/CARDS IMG/shopping-bag (1).png"
											alt=""
										/>
										<button class="text-[#FFFFFF;] font-semibold text-[16px]">
											В заказ
										</button>
									</div>
								</div>
							</div>
						</div>
						<div class="futura-card rounded-[20px] max-w-[640px] max-h-[420px] bg-gray-50">
							<div class="images flex gap-[5px]">
								<img
									class="rounded-l-lg"
									src="img/CARDS IMG/card 2 1.png"
									alt=""
								/>
								<img
									class=""
									src="img/CARDS IMG/card 2 2.png"
									alt=""
								/>
								<img
									class="rounded-r-lg"
									src="img/CARDS IMG/card 2 3.png"
									alt=""
								/>
							</div>
							<div class="py-[14px] px-[15px]">
								<div class="info flex justify-between items-center mt-[14px] text-[#000000;] text-[18px] font-semibold">
									<div class="flex items-center gap-[7px]">
										<span class="py-[3px] px-[12px] text-[#3485FF;] bg-[#D5E5FB;] rounded-[34px] text-[18px]">
											Набор
										</span>
										<span>Большой набор , 1100гр</span>
									</div>

									<img
										class="at"
										src="img/CARDS IMG/Frame 5695.png"
										alt=""
									/>
								</div>
								<div class="flex gap-[8px] mt-[14px]">
									<img
										class="vv"
										src="img/CARDS IMG/Users.png"
										alt=""
									/>
									<span>На 4 персоны</span>
								</div>
								<span class="taste mt-[10px] font-normal text-[14px] text-gray-400">
									Ассорти мясных деликатесов, ассорти сыров и антипасти, хлебная
									корзина, парфе из птицы с фисташкой, гуаккамоле, хумус с
									брезаолой, риет из
								</span>
								<div class="order-and-price flex mt-[25px] items-center justify-between">
									<div class="price font-bold text-[22px] text-[#3485FF;]">
										4000 ₽
									</div>
									<div class="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
										<img
											class=""
											src="img/CARDS IMG/shopping-bag (1).png"
											alt=""
										/>
										<button class="text-[#FFFFFF;] font-semibold text-[16px]">
											В заказ
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="show-more mt-[30px] text-[16px] font-semibold text-[#FF6B17;] bg-[#FF6B1726] py-[9px] px-[30px] rounded-[50px] border-[2px] border-orange-200 max-w-[173px] float-end">
						<button>Показать ещё</button>
					</div>
				</div>
				<div class="max-w-[1300px] container mx-auto mt-[100px]">
					<div class="futura-header flex justify-between mt-[38px]">
						<div class="futura-logo flex gap-[26px]">
							<img
								src="img/Logo ProBR.png"
								alt=""
							/>
							<h2 class="text-[35px] font-bold text-[#0E254B;]">ProBrbnch</h2>
						</div>
						<div class="futura-info flex gap-[17px]">
							<div class="flex w-fit transition duration-150 cursor-pointer bg-[#F4F6F9] rounded-[10px] px-[15px] py-[7px] text-[14px] font-normal leading-5 font-normal futura-tab-item">
								<img
									class="p-[10px]"
									src="img/iconse/stopwatch.png"
									alt=""
								/>
								<div class="text flex items-center p-[13px 13px 13px 0px]">
									<div class="">Заказать не позднее чем за</div>
									<div class="text-[#0E254B;] text-[14px]">: 2 часа</div>
								</div>
							</div>
							<div class="flex w-fit transition duration-150 cursor-pointer bg-[#F4F6F9] rounded-[10px] px-[15px] py-[7px] text-[14px] font-normal leading-5 font-normal futura-tab-item">
								<img
									class="logo-inf p-[10px]"
									src="img/iconse/Vector.png"
									alt=""
								/>
								<div class="text flex items-center p-[13px 13px 13px 0px]">
									<span class="text-[#0E254B;] text-[14px] whitespace-nowrap">
										Минимальный заказ: 3000 ₽
									</span>
								</div>
							</div>
							<div class="flex w-fit transition duration-150 cursor-pointer bg-[#F4F6F9] rounded-[10px] px-[15px] py-[7px] text-[14px] font-normal leading-5 font-normal futura-tab-item">
								<img
									class="p-[10px]"
									src="img/iconse/car-sideview.png"
									alt=""
								/>
								<div class="text flex items-center p-[13px 13px 13px 0px]">
									<div class="">Доставка</div>
									<div class="text-[#0E254B;] text-[14px]">: 500 ₽</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="futura-cards">
					<div class="max-w-[1300px] container mx-auto"></div>
				</div>
				<div class="long-cards max-w-[1300px] container mx-auto mt-[30px]">
					<div class="max-w-[1300px] container mx-auto flex justify-between">
						<div class="futura-card rounded-[20px] max-w-[640px] max-h-[420px] bg-gray-50">
							<div class="images flex gap-[5px]">
								<img
									class="rounded-l-lg"
									src="img/CARDS IMG/card 2 1.png"
									alt=""
								/>
								<img
									class=""
									src="img/CARDS IMG/card 2 2.png"
									alt=""
								/>
								<img
									class="rounded-r-lg"
									src="img/CARDS IMG/card 2 3.png"
									alt=""
								/>
							</div>
							<div class="py-[14px] px-[15px]">
								<div class="info flex justify-between items-center mt-[14px] text-[#000000;] text-[18px] font-semibold">
									<div class="flex items-center gap-[7px]">
										<span class="py-[3px] px-[12px] text-[#3485FF;] bg-[#D5E5FB;] rounded-[34px] text-[18px]">
											Набор
										</span>
										<span>Большой набор , 1100гр</span>
									</div>

									<img
										class="at"
										src="img/CARDS IMG/Frame 5695.png"
										alt=""
									/>
								</div>
								<div class="flex gap-[8px] mt-[14px]">
									<img
										class="vv"
										src="img/CARDS IMG/Users.png"
										alt=""
									/>
									<span>На 4 персоны</span>
								</div>
								<span class="taste mt-[10px] font-normal text-[14px] text-gray-400">
									Ассорти мясных деликатесов, ассорти сыров и антипасти, хлебная
									корзина, парфе из птицы с фисташкой, гуаккамоле, хумус с
									брезаолой, риет из
								</span>
								<div class="order-and-price flex mt-[25px] items-center justify-between">
									<div class="price font-bold text-[22px] text-[#3485FF;]">
										4000 ₽
									</div>
									<div class="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
										<img
											class=""
											src="img/CARDS IMG/shopping-bag (1).png"
											alt=""
										/>
										<button class="text-[#FFFFFF;] font-semibold text-[16px]">
											В заказ
										</button>
									</div>
								</div>
							</div>
						</div>
						<div class="futura-card rounded-[20px] max-w-[640px] max-h-[420px] bg-gray-50">
							<div class="images flex gap-[5px]">
								<img
									class="rounded-l-lg"
									src="img/CARDS IMG/card- 1  1.png"
									alt=""
								/>
								<img
									class="rounded-r-lg"
									src="img/CARDS IMG/card-1  2.png"
									alt=""
								/>
							</div>
							<div class="py-[15px] px-[15px]">
								<div class="info flex justify-between items-center mt-[14px] text-[#000000;] text-[18px] font-semibold">
									<div class="flex items-center gap-[7px]">
										<span class="py-[3px] px-[12px] text-[#3485FF;] bg-[#D5E5FB;] rounded-[34px] text-[18px]">
											Набор
										</span>
										<span>Набор для двоих, 580гр</span>
									</div>

									<img
										class="at"
										src="img/CARDS IMG/Frame 5695.png"
										alt=""
									/>
								</div>
								<div class="flex gap-[8px] mt-[14px]">
									<img
										class="vv"
										src="img/CARDS IMG/Users.png"
										alt=""
									/>
									<span>На 2 персоны</span>
								</div>
								<span class="taste mt-[10px] font-normal text-[14px] text-gray-400">
									Багет, ржанная чиабатта, вафли, гриссини, мусс из цветной
									капусты с беконом, паштет с вишневым конфи, ассорти сыров и
									мясных
								</span>
								<div class="order-and-price flex mt-[25px] items-center justify-between">
									<div class="price font-bold text-[22px] text-[#3485FF;]">
										2375 ₽
									</div>
									<div class="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
										<img
											class=""
											src="img/CARDS IMG/shopping-bag (1).png"
											alt=""
										/>
										<button class="text-[#FFFFFF;] font-semibold text-[16px]">
											В заказ
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="show-more mt-[30px] text-[16px] font-semibold text-[#FF6B17;] bg-[#FF6B1726] py-[9px] px-[30px] rounded-[50px] border-[2px] border-orange-200 max-w-[173px] float-end">
						<button>Показать ещё</button>
					</div>
				</div>
				<div class="slider mt-[150px]">
					<div class="max-w-[1300px] container mx-auto bg-sky-200 rounded-[30px] pl-[50px] pt-[30px]">
						<div class="slider-header flex gap-[26px] align-center text-[35px] font-bold">
							<img
								src="img/slider/logo вино.png"
								alt=""
							/>
							<h2>Винный вояж & Винный склад</h2>
						</div>
						<div class="fut-cards mt-[25px] flex rounded-b-lg justify-between">
							<div class="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									class="rounded-[20px]"
									src="img/slider/1 1.png"
									alt=""
								/>
								<div class="py-[14px] px-[15px]">
									<div class="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Toucas, Vinho Verde DOC, 2021
										<img
											class="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span class="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div class="order-and-price flex mt-[65px] items-center justify-between">
										<div class="price font-bold text-[22px] text-[#3485FF;]">
											1900 ₽
										</div>
										<div class="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												class=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button class="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>
							<div class="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									class="rounded-[20px]"
									src="img/slider/1 2.png"
									alt=""
								/>
								<div class="py-[14px] px-[15px]">
									<div class="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Pago Casa Gran,Falcata White, Valencia DO, 2021
										<img
											class="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span class="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div class="order-and-price flex mt-[42px] items-center justify-between">
										<div class="price font-bold text-[22px] text-[#3485FF;]">
											1950 ₽
										</div>
										<div class="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												class=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button class="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>
							<div class="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									class="rounded-[20px]"
									src="img/slider/1 3.png"
									alt=""
								/>
								<div class="py-[14px] px-[15px]">
									<div class="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Belguardo Vermentino, Toscana IGT, 2020
										<img
											class="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span class="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div class="order-and-price flex mt-[42px] items-center justify-between">
										<div class="price font-bold text-[22px] text-[#3485FF;]">
											2000 ₽
										</div>
										<div class="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												class=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button class="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>

							<div class="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50 opacity-30">
								<img
									class="rounded-[20px]"
									src="img/slider/1 4.png"
									alt=""
								/>
								<div class="py-[14px] px-[15px]">
									<div class="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Loveblock Pinot Gris, 2020
										<img
											class="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span class="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div class="order-and-price flex mt-[65px] items-center justify-between">
										<div class="price font-bold text-[22px] text-[#3485FF;]">
											13000 ₽
										</div>
										<div class="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												class=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button class="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>

						<img
							class="mt-[84px] pl-[584px] mb-[25px]"
							src="img/slider/точки.png"
							alt=""
						/>
					</div>
				</div>
				<div class="slider mt-[150px]">
					<div class="max-w-[1300px] container mx-auto bg-amber-200 rounded-[30px] pl-[50px] pt-[30px]">
						<div class="slider-header flex gap-[26px] align-center text-[35px] font-bold">
							<img
								src="img/slider/logo вино.png"
								alt=""
							/>
							<h2>Винный вояж & Винный склад</h2>
						</div>
						<div class="fut-cards mt-[25px] flex rounded-b-lg justify-between">
							<div class="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									class="rounded-[20px]"
									src="img/slider/1 1.png"
									alt=""
								/>
								<div class="py-[14px] px-[15px]">
									<div class="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Toucas, Vinho Verde DOC, 2021
										<img
											class="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span class="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div class="order-and-price flex mt-[65px] items-center justify-between">
										<div class="price font-bold text-[22px] text-[#3485FF;]">
											1900 ₽
										</div>
										<div class="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												class=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button class="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>
							<div class="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									class="rounded-[20px]"
									src="img/slider/1 2.png"
									alt=""
								/>
								<div class="py-[14px] px-[15px]">
									<div class="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Pago Casa Gran,Falcata White, Valencia DO, 2021
										<img
											class="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span class="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div class="order-and-price flex mt-[42px] items-center justify-between">
										<div class="price font-bold text-[22px] text-[#3485FF;]">
											1950 ₽
										</div>
										<div class="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												class=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button class="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>
							<div class="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									class="rounded-[20px]"
									src="img/slider/1 3.png"
									alt=""
								/>
								<div class="py-[14px] px-[15px]">
									<div class="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Belguardo Vermentino, Toscana IGT, 2020
										<img
											class="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span class="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div class="order-and-price flex mt-[42px] items-center justify-between">
										<div class="price font-bold text-[22px] text-[#3485FF;]">
											2000 ₽
										</div>
										<div class="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												class=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button class="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>

							<div class="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50 opacity-30">
								<img
									class="rounded-[20px]"
									src="img/slider/1 4.png"
									alt=""
								/>
								<div class="py-[14px] px-[15px]">
									<div class="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Loveblock Pinot Gris, 2020
										<img
											class="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span class="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div class="order-and-price flex mt-[65px] items-center justify-between">
										<div class="price font-bold text-[22px] text-[#3485FF;]">
											13000 ₽
										</div>
										<div class="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												class=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button class="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>

						<img
							class="mt-[84px] pl-[584px] mb-[25px]"
							src="img/slider/точки.png"
							alt=""
						/>
					</div>
				</div>
				<div class="slider mt-[150px]">
					<div class="max-w-[1300px] container mx-auto bg-red-200 rounded-[30px] pl-[50px] pt-[30px]">
						<div class="slider-header flex gap-[26px] align-center text-[35px] font-bold">
							<img
								src="img/slider/logo вино.png"
								alt=""
							/>
							<h2>Винный вояж & Винный склад</h2>
						</div>
						<div class="fut-cards mt-[25px] flex rounded-b-lg justify-between">
							<div class="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									class="rounded-[20px]"
									src="img/slider/1 1.png"
									alt=""
								/>
								<div class="py-[14px] px-[15px]">
									<div class="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Toucas, Vinho Verde DOC, 2021
										<img
											class="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span class="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div class="order-and-price flex mt-[65px] items-center justify-between">
										<div class="price font-bold text-[22px] text-[#3485FF;]">
											1900 ₽
										</div>
										<div class="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												class=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button class="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>
							<div class="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									class="rounded-[20px]"
									src="img/slider/1 2.png"
									alt=""
								/>
								<div class="py-[14px] px-[15px]">
									<div class="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Pago Casa Gran,Falcata White, Valencia DO, 2021
										<img
											class="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span class="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div class="order-and-price flex mt-[42px] items-center justify-between">
										<div class="price font-bold text-[22px] text-[#3485FF;]">
											1950 ₽
										</div>
										<div class="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												class=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button class="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>
							<div class="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									class="rounded-[20px]"
									src="img/slider/1 3.png"
									alt=""
								/>
								<div class="py-[14px] px-[15px]">
									<div class="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Belguardo Vermentino, Toscana IGT, 2020
										<img
											class="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span class="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div class="order-and-price flex mt-[42px] items-center justify-between">
										<div class="price font-bold text-[22px] text-[#3485FF;]">
											2000 ₽
										</div>
										<div class="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												class=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button class="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>

							<div class="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50 opacity-30">
								<img
									class="rounded-[20px]"
									src="img/slider/1 4.png"
									alt=""
								/>
								<div class="py-[14px] px-[15px]">
									<div class="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Loveblock Pinot Gris, 2020
										<img
											class="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span class="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div class="order-and-price flex mt-[65px] items-center justify-between">
										<div class="price font-bold text-[22px] text-[#3485FF;]">
											13000 ₽
										</div>
										<div class="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												class=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button class="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>

						<img
							class="mt-[84px] pl-[584px] mb-[25px]"
							src="img/slider/точки.png"
							alt=""
						/>
					</div>
				</div>
				<div class="slider mt-[150px]">
					<div class="max-w-[1300px] container mx-auto bg-violet-200 rounded-[30px] pl-[50px] pt-[30px]">
						<div class="slider-header flex gap-[26px] align-center text-[35px] font-bold">
							<img
								src="img/slider/logo вино.png"
								alt=""
							/>
							<h2>Винный вояж & Винный склад</h2>
						</div>
						<div class="fut-cards mt-[25px] flex rounded-b-lg justify-between">
							<div class="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									class="rounded-[20px]"
									src="img/slider/1 1.png"
									alt=""
								/>
								<div class="py-[14px] px-[15px]">
									<div class="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Toucas, Vinho Verde DOC, 2021
										<img
											class="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span class="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div class="order-and-price flex mt-[65px] items-center justify-between">
										<div class="price font-bold text-[22px] text-[#3485FF;]">
											1900 ₽
										</div>
										<div class="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												class=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button class="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>
							<div class="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									class="rounded-[20px]"
									src="img/slider/1 2.png"
									alt=""
								/>
								<div class="py-[14px] px-[15px]">
									<div class="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Pago Casa Gran,Falcata White, Valencia DO, 2021
										<img
											class="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span class="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div class="order-and-price flex mt-[42px] items-center justify-between">
										<div class="price font-bold text-[22px] text-[#3485FF;]">
											1950 ₽
										</div>
										<div class="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												class=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button class="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>
							<div class="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									class="rounded-[20px]"
									src="img/slider/1 3.png"
									alt=""
								/>
								<div class="py-[14px] px-[15px]">
									<div class="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Belguardo Vermentino, Toscana IGT, 2020
										<img
											class="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span class="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div class="order-and-price flex mt-[42px] items-center justify-between">
										<div class="price font-bold text-[22px] text-[#3485FF;]">
											2000 ₽
										</div>
										<div class="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												class=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button class="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>

							<div class="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50 opacity-30">
								<img
									class="rounded-[20px]"
									src="img/slider/1 4.png"
									alt=""
								/>
								<div class="py-[14px] px-[15px]">
									<div class="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Loveblock Pinot Gris, 2020
										<img
											class="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span class="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div class="order-and-price flex mt-[65px] items-center justify-between">
										<div class="price font-bold text-[22px] text-[#3485FF;]">
											13000 ₽
										</div>
										<div class="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												class=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button class="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>

						<img
							class="mt-[84px] pl-[584px] mb-[25px]"
							src="img/slider/точки.png"
							alt=""
						/>
					</div>
				</div>
				<div class="slider mt-[150px]">
					<div class="max-w-[1300px] container mx-auto bg-green-200 rounded-[30px] pl-[50px] pt-[30px]">
						<div class="slider-header flex gap-[26px] align-center text-[35px] font-bold">
							<img
								src="img/slider/logo вино.png"
								alt=""
							/>
							<h2>Винный вояж & Винный склад</h2>
						</div>
						<div class="fut-cards mt-[25px] flex rounded-b-lg justify-between">
							<div class="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									class="rounded-[20px]"
									src="img/slider/1 1.png"
									alt=""
								/>
								<div class="py-[14px] px-[15px]">
									<div class="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Toucas, Vinho Verde DOC, 2021
										<img
											class="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span class="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div class="order-and-price flex mt-[65px] items-center justify-between">
										<div class="price font-bold text-[22px] text-[#3485FF;]">
											1900 ₽
										</div>
										<div class="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												class=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button class="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>
							<div class="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									class="rounded-[20px]"
									src="img/slider/1 2.png"
									alt=""
								/>
								<div class="py-[14px] px-[15px]">
									<div class="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Pago Casa Gran,Falcata White, Valencia DO, 2021
										<img
											class="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span class="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div class="order-and-price flex mt-[42px] items-center justify-between">
										<div class="price font-bold text-[22px] text-[#3485FF;]">
											1950 ₽
										</div>
										<div class="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												class=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button class="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>
							<div class="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									class="rounded-[20px]"
									src="img/slider/1 3.png"
									alt=""
								/>
								<div class="py-[14px] px-[15px]">
									<div class="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Belguardo Vermentino, Toscana IGT, 2020
										<img
											class="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span class="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div class="order-and-price flex mt-[42px] items-center justify-between">
										<div class="price font-bold text-[22px] text-[#3485FF;]">
											2000 ₽
										</div>
										<div class="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												class=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button class="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>

							<div class="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50 opacity-30">
								<img
									class="rounded-[20px]"
									src="img/slider/1 4.png"
									alt=""
								/>
								<div class="py-[14px] px-[15px]">
									<div class="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Loveblock Pinot Gris, 2020
										<img
											class="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span class="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div class="order-and-price flex mt-[65px] items-center justify-between">
										<div class="price font-bold text-[22px] text-[#3485FF;]">
											13000 ₽
										</div>
										<div class="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												class=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button class="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>

						<img
							class="mt-[60px] pl-[584px] mb-[25px]"
							src="img/slider/точки.png"
							alt=""
						/>
					</div>
				</div>
				<div class="info-cards-block max-w-[1300px] container mx-auto mt-[70px]">
					<div class="container">
						<div class="info-cards grid grid-cols-3 grid-rows-[1fr_minmax(210px,_1fr)_1fr] gap-[20px]">
							<div class="info-card relative bg-slate-100 rounded-[20px] pt-[30px] pl-[30px] pr-[20px] pb-[30px]">
								<div class="leading-6 tracking-tight text-[18px] tracking-tight font-semibold color-[#0E254B] max-w-[307px]">
									Меню можно заказать в любое время после бронирования вояжа,
									уже когда вы посоветуетесь со всеми гостями
								</div>
								<img
									class="absolute bottom-[10px] end-0 right-[20px]"
									src="img/attention.png"
									alt=""
								/>
							</div>
							<div class="info-card relative bg-blue-100 rounded-[20px] pt-[30px] pl-[30px] pr-[20px] pb-[30px]">
								<div class="leading-6 tracking-tight text-[18px] font-semibold color-[#0E254B] max-w-[307px]">
									У некоторых ресторанов есть минимальный заказ. Меньше чем на
									указанную сумму заказать нельзя. Если вы заказываете еду из
									разных мест, то порог минимального заказа нужно превысить для
									каждого.
								</div>
								<img
									class="absolute bottom-[10px] end-0 right-[20px]"
									src="img/attention.png"
									alt=""
								/>
							</div>
							<div class="info-card relative bg-slate-100 rounded-[20px] pt-[30px] pl-[30px] pr-[20px] pb-[30px]">
								<div class="leading-6 tracking-tight text-[18px] font-semibold color-[#0E254B] max-w-[307px]">
									За доставку вашего заказа отвечаем мы. Прямо на лодку заказ
									доставит курьер, а мы заберём. Будет ждать вас на борту.
								</div>
								<img
									class="absolute bottom-[10px] end-0 right-[20px]"
									src="img/attention.png"
									alt=""
								/>
							</div>
							<div class="info-card relative bg-slate-100 rounded-[20px] pt-[30px] pl-[30px] pr-[20px] pb-[30px]">
								<div class="leading-6 tracking-tight text-[18px] tracking-tight font-semibold color-[#0E254B] max-w-[307px]">
									В случае отмены вояжа за 24 часа - можно отменить и заказ на
									еду. Деньги вернутся вам на ту карту, с которой платили.
								</div>
								<img
									class="absolute bottom-[10px] end-0 right-[20px]"
									src="img/attention.png"
									alt=""
								/>
							</div>
							<div class="info-card relative bg-blue-100 rounded-[20px] pt-[30px] pl-[30px] pr-[20px] pb-[30px]">
								<div class="leading-6 tracking-tight text-[18px] font-semibold color-[#0E254B;] max-w-[307px]">
									Текст
								</div>
								<img
									class="absolute bottom-[10px] end-0 right-[20px]"
									src="img/attention.png"
									alt=""
								/>
							</div>
							<div class="info-card relative bg-slate-100 rounded-[20px] pt-[30px] pl-[30px] pr-[20px] pb-[30px]">
								<div class="leading-6 tracking-tight text-[18px] font-semibold color-[#0E254B;] max-w-[307px]">
									Текст
								</div>
								<img
									class="absolute bottom-[10px] end-0 right-[20px]"
									src="img/attention.png"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="footer-block">
					<div class="max-w-[1920px] container mx-auto bg-[#4F4F4F;]">
						<div
							div
							class="flex"
						>
							<div class="footer-left-side pt-[142px] pl-[312px] pb-[108px]">
								<img
									src="img/footer/Кураж-Вояж.png"
									alt=""
								/>
								<div class="ins-tel flex gap-[16px] mt-[23px]">
									<img
										src="img/footer/Telegram (1).png"
										alt=""
									/>
									<img
										src="img/footer/Telegram (1).png"
										alt=""
									/>
								</div>
								<div class="text-white mt-[38px]">
									Подписка на эксклюзивные новости
								</div>
								<div class="email-send mt-[20px] rounded-[50px] max-w-[420px] max-h-[46px] bg-white flex justify-between items-center">
									<div class="email py-[18px] px-[31px]">
										moyapochta@mail.ru
									</div>
									<div class="rounded-[50px] sub bg-[#D5E5FB;] py-[10px] px-[30px] max-h-[48px]">
										Подписаться
									</div>
								</div>
							</div>
							<div class="footer-right-side flex flex-col list-none">
								<div class="columns flex mt-[158px] gap-[30px] ml-[222px]">
									<div class="col1">
										<h3 class="text-[#FFFFFF;] text-[18px] font-semibold">
											О нас
										</h3>
										<ul></ul>
										<li>
											<a
												class="text-[#FFFFFF;] text-[14px] font-normal"
												href=""
											>
												О компании
											</a>
										</li>
										<li>
											<a
												class="text-[#FFFFFF;] text-[14px] font-normal"
												href=""
											>
												Команда
											</a>
										</li>
										<li>
											<a
												class="text-[#FFFFFF;] text-[14px] font-normal"
												href=""
											>
												Кейтеринг
											</a>
										</li>
										<li>
											<a
												class="text-[#FFFFFF;] text-[14px] font-normal"
												href=""
											>
												Частые вопросы
											</a>
										</li>
										<li>
											<a
												class="text-[#FFFFFF;] text-[14px] font-normal"
												href=""
											>
												Блог
											</a>
										</li>
										<ul></ul>
									</div>
									<div class="col2">
										<h3 class="text-[#FFFFFF;] text-[18px] font-semibold">
											Вояжи
										</h3>
										<ul></ul>
										<li>
											<a
												class="text-[#FFFFFF;] text-[14px] font-normal"
												href=""
											>
												Вояж в Петергоф
											</a>
										</li>
										<li>
											<a
												class="text-[#FFFFFF;] text-[14px] font-normal"
												href=""
											>
												По Ладожским шахерам
											</a>
										</li>
										<li>
											<a
												class="text-[#FFFFFF;] text-[14px] font-normal"
												href=""
											>
												Люди на катерах
											</a>
										</li>
										<li>
											<a
												class="text-[#FFFFFF;] text-[14px] font-normal"
												href=""
											>
												День ВМФ
											</a>
										</li>
										<li>
											<a
												class="text-[#FFFFFF;] text-[14px] font-normal"
												href=""
											>
												Вояж в крепость Орешек
											</a>
										</li>
										<li>
											<a
												class="text-[#FFFFFF;] text-[14px] font-normal"
												href=""
											>
												Вояж в Кронштадт
											</a>
										</li>
										<ul></ul>
									</div>
									<div class="col3">
										<h3 class="text-[#FFFFFF;] text-[18px] font-semibold">
											Катера и яхты
										</h3>
										<ul></ul>
										<li>
											<a
												class="text-[#FFFFFF;] text-[14px] font-normal"
												href=""
											>
												Эль Чапа
											</a>
										</li>
										<li>
											<a
												class="text-[#FFFFFF;] text-[14px] font-normal"
												href=""
											>
												Princess 25M
											</a>
										</li>
										<li>
											<a
												class="text-[#FFFFFF;] text-[14px] font-normal"
												href=""
											>
												Meridian
											</a>
										</li>
										<li>
											<a
												class="text-[#FFFFFF;] text-[14px] font-normal"
												href=""
											>
												Виндзора
											</a>
										</li>
										<ul></ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="max-w-[1920px] max-h-[100px] container mx-auto bg-[#D5E5FB;] border-2">
						<div class="flex ml-[310px] mt-[40px] mb-[40px] gap-[265px]">
							<span class="text-[14px] font-normal text-slate-500">
								© Кураж-Вояж
							</span>
							<span class="text-[14px] font-normal text-slate-500">
								Конфиденциальность
							</span>
							<span class="text-[14px] font-normal text-slate-500">
								Политика сайта
							</span>
							<div class="flex text-[14px] font-normal gap-[8px] text-slate-500">
								<span>Дизайн от</span>
								<img
									src="img/NUT.png"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
