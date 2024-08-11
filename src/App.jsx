import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import UnderHeader from "./components/UnderHeader";
import Card from "./components/Card";
function App() {
	const goodsList = [
		{
			img: "img/CARDS IMG/CHIP.png",
			name: "Чипсы, 50гр",
			subtitle: "Вкус: соль",
			price: 120,
		},
		{
			img: "img/CARDS IMG/STR.png",
			name: "Клубника, 50гр",
			subtitle: "Кусочками",
			price: 250,
		},
		{
			img: "img/CARDS IMG/M.png",
			name: "Печеный хумус с бастурмой,",
			subtitle: "Кусочками",
			price: 200,
		},
		{
			img: "img/CARDS IMG/CR.png",
			name: "Круассаны,",
			subtitle: "Кусочками",
			price: 170,
		},
	];
	const [goods, setGoods] = useState([]);
	useEffect(() => {
		setTimeout(() => {
			setGoods(goodsList);
		}, 1000);
	}, []);
	return (
		<>
			<Header />
			<div className="under-header">
				<UnderHeader />
				<div className="max-w-[1500px] mx-auto mt-[22px]">
					<div className="hero rounded-[30px]">
						<div className="hero__card mt-[127px] flex-col max-h-[480px]">
							<h2 className="text-white font-black text-[45px]">
								Яхтенное меню
							</h2>
							<p className="hero__text text-white font-semibold text-[18px] line-height: 1.5rem;">
								Здесь вы можете заказать еду в вояж. Сделайте
								<br />
								это в любое время, заблаговременно до старта
								<br />
								вояжа. Минимальное время заказа указано рядом
								<br />с названием каждого ресторана.
							</p>
						</div>

						<img
							className="mt-[300px] translate-x-[83px] mb-[54px]"
							src="img/logotwo.png"
							width="218"
							height="58"
							alt="Logo"
						/>
					</div>
					<div className="Home-YachtMenu text-[14px] mt-[25px] ml-[100px] font-normal">
						Главная / Яхтенное меню
					</div>
				</div>

				<div className="futura-section pt-[51px] pb-[26px]">
					<div className="max-w-[1300px] container mx-auto">
						<div className="futura-top">
							<div className="flex justify-between items-center gap-[59px]">
								<div className="flex items-center gap-[12px]">
									<div className="transition duration-150 cursor-pointer bg-[#F4F6F9] px-[15px] py-[7px] text-[16px] text-slate-600 leading-5 rounded-[50px] font-normal futura-tab-item">
										Роллы
									</div>
									<div className="transition duration-150 cursor-pointer bg-[#F4F6F9] px-[15px] py-[7px] text-[16px] text-slate-600 leading-5 rounded-[50px] font-normal futura-tab-item">
										Вино
									</div>
									<div className="transition duration-150 cursor-pointer bg-[#F4F6F9] px-[15px] py-[7px] text-[16px] text-slate-600 leading-5 rounded-[50px] font-normal futura-tab-item">
										Пицца
									</div>
									<div className="transition duration-150 cursor-pointer bg-[#F4F6F9] px-[15px] py-[7px] text-[16px] text-slate-600 leading-5 rounded-[50px] font-normal futura-tab-item">
										Устрицы
									</div>
									<div className="transition duration-150 cursor-pointer bg-[#D5E5FB] px-[15px] py-[7px] text-[16px] text-[#0E254B] leading-5 rounded-[50px] font-normal futura-tab-item">
										Острое
									</div>
									<div className="transition duration-150 cursor-pointer bg-[#F4F6F9] px-[15px] py-[7px] text-[16px] text-slate-600 leading-5 rounded-[50px] font-normal futura-tab-item">
										Новинки
									</div>
								</div>
								<div className="grow">
									<div className="flex items-center overflow-hidden border border-[#F4F6F9] px-[10px] py-[3px] grow rounded-[31px]">
										<input
											className="block w-full"
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
				<div className="futura-cards">
					<div className="max-w-[1300px] container mx-auto">
						<div className="futura-header flex justify-between mt-[38px]">
							<div className="futura-logo flex gap-[26px]">
								<img
									src="img/Frame 5891.png"
									alt=""
								/>
								<h2 className="text-[35px] font-bold text-[#0E254B;]">
									Футура
								</h2>
							</div>
							<div className="futura-info flex gap-[17px]">
								<div className="flex w-fit transition duration-150 cursor-pointer bg-[#F4F6F9] rounded-[10px] px-[15px] py-[7px] text-[14px] font-normal leading-5 font-normal futura-tab-item">
									<img
										className="p-[10px]"
										src="img/iconse/stopwatch.png"
										alt=""
									/>
									<div className="text flex items-center p-[13px 13px 13px 0px]">
										<div className="">Заказать не позднее чем за</div>
										<div className="text-[#0E254B;] text-[14px]">: 3 часа</div>
									</div>
								</div>
								<div className="flex w-fit transition duration-150 cursor-pointer bg-[#F4F6F9] rounded-[10px] px-[15px] py-[7px] text-[14px] font-normal leading-5 font-normal futura-tab-item">
									<img
										className="logo-inf p-[10px]"
										src="img/iconse/Vector.png"
										alt=""
									/>
									<div className="text flex items-center p-[13px 13px 13px 0px]">
										<span className="text-[#0E254B;] text-[14px] whitespace-nowrap">
											Минимальный заказ: 5000 ₽
										</span>
									</div>
								</div>
								<div className="flex w-fit transition duration-150 cursor-pointer bg-[#F4F6F9] rounded-[10px] px-[15px] py-[7px] text-[14px] font-normal leading-5 font-normal futura-tab-item">
									<img
										className="p-[10px]"
										src="img/iconse/car-sideview.png"
										alt=""
									/>
									<div className="text flex items-center p-[13px 13px 13px 0px]">
										<div className="">Доставка</div>
										<div className="text-[#0E254B;] text-[14px]">
											: бесплатно
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="fut-cards mt-[25px] flex rounded-b-lg justify-between">
							{goods.map((item) => (
								<Card
									key={item.name}
									img={item.img}
									name={item.name}
									subtitle={item.subtitle}
									price={item.price}
								/>
							))}
						</div>
					</div>
				</div>
				<div className="long-cards max-w-[1300px] container mx-auto mt-[30px]">
					<div className="max-w-[1300px] container mx-auto flex justify-between">
						<div className="futura-card rounded-[20px] max-w-[640px] max-h-[420px] bg-gray-50">
							<div className="images flex gap-[5px]">
								<img
									className="rounded-l-lg"
									src="img/CARDS IMG/card- 1  1.png"
									alt=""
								/>
								<img
									className="rounded-r-lg"
									src="img/CARDS IMG/card-1  2.png"
									alt=""
								/>
							</div>
							<div className="py-[15px] px-[15px]">
								<div className="info flex justify-between items-center mt-[14px] text-[#000000;] text-[18px] font-semibold">
									<div className="flex items-center gap-[7px]">
										<span className="py-[3px] px-[12px] text-[#3485FF;] bg-[#D5E5FB;] rounded-[34px] text-[18px]">
											Набор
										</span>
										<span>Набор для двоих, 580гр</span>
									</div>

									<img
										className="at"
										src="img/CARDS IMG/Frame 5695.png"
										alt=""
									/>
								</div>
								<div className="flex gap-[8px] mt-[14px]">
									<img
										className="vv"
										src="img/CARDS IMG/Users.png"
										alt=""
									/>
									<span>На 2 персоны</span>
								</div>
								<span className="taste mt-[10px] font-normal text-[14px] text-gray-400">
									Багет, ржанная чиабатта, вафли, гриссини, мусс из цветной
									капусты с беконом, паштет с вишневым конфи, ассорти сыров и
									мясных
								</span>
								<div className="order-and-price flex mt-[25px] items-center justify-between">
									<div className="price font-bold text-[22px] text-[#3485FF;]">
										2375 ₽
									</div>
									<div className="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
										<img
											className=""
											src="img/CARDS IMG/shopping-bag (1).png"
											alt=""
										/>
										<button className="text-[#FFFFFF;] font-semibold text-[16px]">
											В заказ
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="futura-card rounded-[20px] max-w-[640px] max-h-[420px] bg-gray-50">
							<div className="images flex gap-[5px]">
								<img
									className="rounded-l-lg"
									src="img/CARDS IMG/card 2 1.png"
									alt=""
								/>
								<img
									className=""
									src="img/CARDS IMG/card 2 2.png"
									alt=""
								/>
								<img
									className="rounded-r-lg"
									src="img/CARDS IMG/card 2 3.png"
									alt=""
								/>
							</div>
							<div className="py-[14px] px-[15px]">
								<div className="info flex justify-between items-center mt-[14px] text-[#000000;] text-[18px] font-semibold">
									<div className="flex items-center gap-[7px]">
										<span className="py-[3px] px-[12px] text-[#3485FF;] bg-[#D5E5FB;] rounded-[34px] text-[18px]">
											Набор
										</span>
										<span>Большой набор , 1100гр</span>
									</div>

									<img
										className="at"
										src="img/CARDS IMG/Frame 5695.png"
										alt=""
									/>
								</div>
								<div className="flex gap-[8px] mt-[14px]">
									<img
										className="vv"
										src="img/CARDS IMG/Users.png"
										alt=""
									/>
									<span>На 4 персоны</span>
								</div>
								<span className="taste mt-[10px] font-normal text-[14px] text-gray-400">
									Ассорти мясных деликатесов, ассорти сыров и антипасти, хлебная
									корзина, парфе из птицы с фисташкой, гуаккамоле, хумус с
									брезаолой, риет из
								</span>
								<div className="order-and-price flex mt-[25px] items-center justify-between">
									<div className="price font-bold text-[22px] text-[#3485FF;]">
										4000 ₽
									</div>
									<div className="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
										<img
											className=""
											src="img/CARDS IMG/shopping-bag (1).png"
											alt=""
										/>
										<button className="text-[#FFFFFF;] font-semibold text-[16px]">
											В заказ
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="show-more mt-[30px] text-[16px] font-semibold text-[#FF6B17;] bg-[#FF6B1726] py-[9px] px-[30px] rounded-[50px] border-[2px] border-orange-200 max-w-[173px] float-end">
						<button>Показать ещё</button>
					</div>
				</div>
				<div className="max-w-[1300px] container mx-auto mt-[100px]">
					<div className="futura-header flex justify-between mt-[38px]">
						<div className="futura-logo flex gap-[26px]">
							<img
								src="img/Logo ProBR.png"
								alt=""
							/>
							<h2 className="text-[35px] font-bold text-[#0E254B;]">
								ProBrbnch
							</h2>
						</div>
						<div className="futura-info flex gap-[17px]">
							<div className="flex w-fit transition duration-150 cursor-pointer bg-[#F4F6F9] rounded-[10px] px-[15px] py-[7px] text-[14px] font-normal leading-5 font-normal futura-tab-item">
								<img
									className="p-[10px]"
									src="img/iconse/stopwatch.png"
									alt=""
								/>
								<div className="text flex items-center p-[13px 13px 13px 0px]">
									<div className="">Заказать не позднее чем за</div>
									<div className="text-[#0E254B;] text-[14px]">: 2 часа</div>
								</div>
							</div>
							<div className="flex w-fit transition duration-150 cursor-pointer bg-[#F4F6F9] rounded-[10px] px-[15px] py-[7px] text-[14px] font-normal leading-5 font-normal futura-tab-item">
								<img
									className="logo-inf p-[10px]"
									src="img/iconse/Vector.png"
									alt=""
								/>
								<div className="text flex items-center p-[13px 13px 13px 0px]">
									<span className="text-[#0E254B;] text-[14px] whitespace-nowrap">
										Минимальный заказ: 3000 ₽
									</span>
								</div>
							</div>
							<div className="flex w-fit transition duration-150 cursor-pointer bg-[#F4F6F9] rounded-[10px] px-[15px] py-[7px] text-[14px] font-normal leading-5 font-normal futura-tab-item">
								<img
									className="p-[10px]"
									src="img/iconse/car-sideview.png"
									alt=""
								/>
								<div className="text flex items-center p-[13px 13px 13px 0px]">
									<div className="">Доставка</div>
									<div className="text-[#0E254B;] text-[14px]">: 500 ₽</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="futura-cards">
					<div className="max-w-[1300px] container mx-auto"></div>
				</div>
				<div className="long-cards max-w-[1300px] container mx-auto mt-[30px]">
					<div className="max-w-[1300px] container mx-auto flex justify-between">
						<div className="futura-card rounded-[20px] max-w-[640px] max-h-[420px] bg-gray-50">
							<div className="images flex gap-[5px]">
								<img
									className="rounded-l-lg"
									src="img/CARDS IMG/card 2 1.png"
									alt=""
								/>
								<img
									className=""
									src="img/CARDS IMG/card 2 2.png"
									alt=""
								/>
								<img
									className="rounded-r-lg"
									src="img/CARDS IMG/card 2 3.png"
									alt=""
								/>
							</div>
							<div className="py-[14px] px-[15px]">
								<div className="info flex justify-between items-center mt-[14px] text-[#000000;] text-[18px] font-semibold">
									<div className="flex items-center gap-[7px]">
										<span className="py-[3px] px-[12px] text-[#3485FF;] bg-[#D5E5FB;] rounded-[34px] text-[18px]">
											Набор
										</span>
										<span>Большой набор , 1100гр</span>
									</div>

									<img
										className="at"
										src="img/CARDS IMG/Frame 5695.png"
										alt=""
									/>
								</div>
								<div className="flex gap-[8px] mt-[14px]">
									<img
										className="vv"
										src="img/CARDS IMG/Users.png"
										alt=""
									/>
									<span>На 4 персоны</span>
								</div>
								<span className="taste mt-[10px] font-normal text-[14px] text-gray-400">
									Ассорти мясных деликатесов, ассорти сыров и антипасти, хлебная
									корзина, парфе из птицы с фисташкой, гуаккамоле, хумус с
									брезаолой, риет из
								</span>
								<div className="order-and-price flex mt-[25px] items-center justify-between">
									<div className="price font-bold text-[22px] text-[#3485FF;]">
										4000 ₽
									</div>
									<div className="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
										<img
											className=""
											src="img/CARDS IMG/shopping-bag (1).png"
											alt=""
										/>
										<button className="text-[#FFFFFF;] font-semibold text-[16px]">
											В заказ
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="futura-card rounded-[20px] max-w-[640px] max-h-[420px] bg-gray-50">
							<div className="images flex gap-[5px]">
								<img
									className="rounded-l-lg"
									src="img/CARDS IMG/card- 1  1.png"
									alt=""
								/>
								<img
									className="rounded-r-lg"
									src="img/CARDS IMG/card-1  2.png"
									alt=""
								/>
							</div>
							<div className="py-[15px] px-[15px]">
								<div className="info flex justify-between items-center mt-[14px] text-[#000000;] text-[18px] font-semibold">
									<div className="flex items-center gap-[7px]">
										<span className="py-[3px] px-[12px] text-[#3485FF;] bg-[#D5E5FB;] rounded-[34px] text-[18px]">
											Набор
										</span>
										<span>Набор для двоих, 580гр</span>
									</div>

									<img
										className="at"
										src="img/CARDS IMG/Frame 5695.png"
										alt=""
									/>
								</div>
								<div className="flex gap-[8px] mt-[14px]">
									<img
										className="vv"
										src="img/CARDS IMG/Users.png"
										alt=""
									/>
									<span>На 2 персоны</span>
								</div>
								<span className="taste mt-[10px] font-normal text-[14px] text-gray-400">
									Багет, ржанная чиабатта, вафли, гриссини, мусс из цветной
									капусты с беконом, паштет с вишневым конфи, ассорти сыров и
									мясных
								</span>
								<div className="order-and-price flex mt-[25px] items-center justify-between">
									<div className="price font-bold text-[22px] text-[#3485FF;]">
										2375 ₽
									</div>
									<div className="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
										<img
											className=""
											src="img/CARDS IMG/shopping-bag (1).png"
											alt=""
										/>
										<button className="text-[#FFFFFF;] font-semibold text-[16px]">
											В заказ
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="show-more mt-[30px] text-[16px] font-semibold text-[#FF6B17;] bg-[#FF6B1726] py-[9px] px-[30px] rounded-[50px] border-[2px] border-orange-200 max-w-[173px] float-end">
						<button>Показать ещё</button>
					</div>
				</div>
				<div className="slider mt-[150px]">
					<div className="max-w-[1300px] container mx-auto bg-sky-200 rounded-[30px] pl-[50px] pt-[30px]">
						<div className="slider-header flex gap-[26px] align-center text-[35px] font-bold">
							<img
								src="img/slider/logo вино.png"
								alt=""
							/>
							<h2>Винный вояж & Винный склад</h2>
						</div>
						<div className="fut-cards mt-[25px] flex rounded-b-lg justify-between">
							<div className="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									className="rounded-[20px]"
									src="img/slider/1 1.png"
									alt=""
								/>
								<div className="py-[14px] px-[15px]">
									<div className="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Toucas, Vinho Verde DOC, 2021
										<img
											className="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span className="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div className="order-and-price flex mt-[65px] items-center justify-between">
										<div className="price font-bold text-[22px] text-[#3485FF;]">
											1900 ₽
										</div>
										<div className="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												className=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button className="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									className="rounded-[20px]"
									src="img/slider/1 2.png"
									alt=""
								/>
								<div className="py-[14px] px-[15px]">
									<div className="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Pago Casa Gran,Falcata White, Valencia DO, 2021
										<img
											className="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span className="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div className="order-and-price flex mt-[42px] items-center justify-between">
										<div className="price font-bold text-[22px] text-[#3485FF;]">
											1950 ₽
										</div>
										<div className="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												className=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button className="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									className="rounded-[20px]"
									src="img/slider/1 3.png"
									alt=""
								/>
								<div className="py-[14px] px-[15px]">
									<div className="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Belguardo Vermentino, Toscana IGT, 2020
										<img
											className="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span className="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div className="order-and-price flex mt-[42px] items-center justify-between">
										<div className="price font-bold text-[22px] text-[#3485FF;]">
											2000 ₽
										</div>
										<div className="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												className=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button className="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>

							<div className="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50 opacity-30">
								<img
									className="rounded-[20px]"
									src="img/slider/1 4.png"
									alt=""
								/>
								<div className="py-[14px] px-[15px]">
									<div className="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Loveblock Pinot Gris, 2020
										<img
											className="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span className="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div className="order-and-price flex mt-[65px] items-center justify-between">
										<div className="price font-bold text-[22px] text-[#3485FF;]">
											13000 ₽
										</div>
										<div className="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												className=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button className="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>

						<img
							className="mt-[84px] pl-[584px] mb-[25px]"
							src="img/slider/точки.png"
							alt=""
						/>
					</div>
				</div>
				<div className="slider mt-[150px]">
					<div className="max-w-[1300px] container mx-auto bg-amber-200 rounded-[30px] pl-[50px] pt-[30px]">
						<div className="slider-header flex gap-[26px] align-center text-[35px] font-bold">
							<img
								src="img/slider/logo вино.png"
								alt=""
							/>
							<h2>Винный вояж & Винный склад</h2>
						</div>
						<div className="fut-cards mt-[25px] flex rounded-b-lg justify-between">
							<div className="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									className="rounded-[20px]"
									src="img/slider/1 1.png"
									alt=""
								/>
								<div className="py-[14px] px-[15px]">
									<div className="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Toucas, Vinho Verde DOC, 2021
										<img
											className="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span className="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div className="order-and-price flex mt-[65px] items-center justify-between">
										<div className="price font-bold text-[22px] text-[#3485FF;]">
											1900 ₽
										</div>
										<div className="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												className=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button className="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									className="rounded-[20px]"
									src="img/slider/1 2.png"
									alt=""
								/>
								<div className="py-[14px] px-[15px]">
									<div className="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Pago Casa Gran,Falcata White, Valencia DO, 2021
										<img
											className="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span className="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div className="order-and-price flex mt-[42px] items-center justify-between">
										<div className="price font-bold text-[22px] text-[#3485FF;]">
											1950 ₽
										</div>
										<div className="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												className=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button className="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									className="rounded-[20px]"
									src="img/slider/1 3.png"
									alt=""
								/>
								<div className="py-[14px] px-[15px]">
									<div className="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Belguardo Vermentino, Toscana IGT, 2020
										<img
											className="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span className="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div className="order-and-price flex mt-[42px] items-center justify-between">
										<div className="price font-bold text-[22px] text-[#3485FF;]">
											2000 ₽
										</div>
										<div className="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												className=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button className="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>

							<div className="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50 opacity-30">
								<img
									className="rounded-[20px]"
									src="img/slider/1 4.png"
									alt=""
								/>
								<div className="py-[14px] px-[15px]">
									<div className="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Loveblock Pinot Gris, 2020
										<img
											className="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span className="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div className="order-and-price flex mt-[65px] items-center justify-between">
										<div className="price font-bold text-[22px] text-[#3485FF;]">
											13000 ₽
										</div>
										<div className="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												className=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button className="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>

						<img
							className="mt-[84px] pl-[584px] mb-[25px]"
							src="img/slider/точки.png"
							alt=""
						/>
					</div>
				</div>
				<div className="slider mt-[150px]">
					<div className="max-w-[1300px] container mx-auto bg-red-200 rounded-[30px] pl-[50px] pt-[30px]">
						<div className="slider-header flex gap-[26px] align-center text-[35px] font-bold">
							<img
								src="img/slider/logo вино.png"
								alt=""
							/>
							<h2>Винный вояж & Винный склад</h2>
						</div>
						<div className="fut-cards mt-[25px] flex rounded-b-lg justify-between">
							<div className="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									className="rounded-[20px]"
									src="img/slider/1 1.png"
									alt=""
								/>
								<div className="py-[14px] px-[15px]">
									<div className="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Toucas, Vinho Verde DOC, 2021
										<img
											className="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span className="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div className="order-and-price flex mt-[65px] items-center justify-between">
										<div className="price font-bold text-[22px] text-[#3485FF;]">
											1900 ₽
										</div>
										<div className="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												className=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button className="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									className="rounded-[20px]"
									src="img/slider/1 2.png"
									alt=""
								/>
								<div className="py-[14px] px-[15px]">
									<div className="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Pago Casa Gran,Falcata White, Valencia DO, 2021
										<img
											className="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span className="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div className="order-and-price flex mt-[42px] items-center justify-between">
										<div className="price font-bold text-[22px] text-[#3485FF;]">
											1950 ₽
										</div>
										<div className="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												className=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button className="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									className="rounded-[20px]"
									src="img/slider/1 3.png"
									alt=""
								/>
								<div className="py-[14px] px-[15px]">
									<div className="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Belguardo Vermentino, Toscana IGT, 2020
										<img
											className="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span className="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div className="order-and-price flex mt-[42px] items-center justify-between">
										<div className="price font-bold text-[22px] text-[#3485FF;]">
											2000 ₽
										</div>
										<div className="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												className=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button className="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>

							<div className="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50 opacity-30">
								<img
									className="rounded-[20px]"
									src="img/slider/1 4.png"
									alt=""
								/>
								<div className="py-[14px] px-[15px]">
									<div className="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Loveblock Pinot Gris, 2020
										<img
											className="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span className="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div className="order-and-price flex mt-[65px] items-center justify-between">
										<div className="price font-bold text-[22px] text-[#3485FF;]">
											13000 ₽
										</div>
										<div className="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												className=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button className="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>

						<img
							className="mt-[84px] pl-[584px] mb-[25px]"
							src="img/slider/точки.png"
							alt=""
						/>
					</div>
				</div>
				<div className="slider mt-[150px]">
					<div className="max-w-[1300px] container mx-auto bg-violet-200 rounded-[30px] pl-[50px] pt-[30px]">
						<div className="slider-header flex gap-[26px] align-center text-[35px] font-bold">
							<img
								src="img/slider/logo вино.png"
								alt=""
							/>
							<h2>Винный вояж & Винный склад</h2>
						</div>
						<div className="fut-cards mt-[25px] flex rounded-b-lg justify-between">
							<div className="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									className="rounded-[20px]"
									src="img/slider/1 1.png"
									alt=""
								/>
								<div className="py-[14px] px-[15px]">
									<div className="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Toucas, Vinho Verde DOC, 2021
										<img
											className="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span className="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div className="order-and-price flex mt-[65px] items-center justify-between">
										<div className="price font-bold text-[22px] text-[#3485FF;]">
											1900 ₽
										</div>
										<div className="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												className=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button className="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									className="rounded-[20px]"
									src="img/slider/1 2.png"
									alt=""
								/>
								<div className="py-[14px] px-[15px]">
									<div className="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Pago Casa Gran,Falcata White, Valencia DO, 2021
										<img
											className="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span className="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div className="order-and-price flex mt-[42px] items-center justify-between">
										<div className="price font-bold text-[22px] text-[#3485FF;]">
											1950 ₽
										</div>
										<div className="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												className=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button className="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									className="rounded-[20px]"
									src="img/slider/1 3.png"
									alt=""
								/>
								<div className="py-[14px] px-[15px]">
									<div className="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Belguardo Vermentino, Toscana IGT, 2020
										<img
											className="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span className="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div className="order-and-price flex mt-[42px] items-center justify-between">
										<div className="price font-bold text-[22px] text-[#3485FF;]">
											2000 ₽
										</div>
										<div className="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												className=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button className="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>

							<div className="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50 opacity-30">
								<img
									className="rounded-[20px]"
									src="img/slider/1 4.png"
									alt=""
								/>
								<div className="py-[14px] px-[15px]">
									<div className="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Loveblock Pinot Gris, 2020
										<img
											className="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span className="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div className="order-and-price flex mt-[65px] items-center justify-between">
										<div className="price font-bold text-[22px] text-[#3485FF;]">
											13000 ₽
										</div>
										<div className="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												className=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button className="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>

						<img
							className="mt-[84px] pl-[584px] mb-[25px]"
							src="img/slider/точки.png"
							alt=""
						/>
					</div>
				</div>
				<div className="slider mt-[150px]">
					<div className="max-w-[1300px] container mx-auto bg-green-200 rounded-[30px] pl-[50px] pt-[30px]">
						<div className="slider-header flex gap-[26px] align-center text-[35px] font-bold">
							<img
								src="img/slider/logo вино.png"
								alt=""
							/>
							<h2>Винный вояж & Винный склад</h2>
						</div>
						<div className="fut-cards mt-[25px] flex rounded-b-lg justify-between">
							<div className="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									className="rounded-[20px]"
									src="img/slider/1 1.png"
									alt=""
								/>
								<div className="py-[14px] px-[15px]">
									<div className="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Toucas, Vinho Verde DOC, 2021
										<img
											className="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span className="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div className="order-and-price flex mt-[65px] items-center justify-between">
										<div className="price font-bold text-[22px] text-[#3485FF;]">
											1900 ₽
										</div>
										<div className="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												className=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button className="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									className="rounded-[20px]"
									src="img/slider/1 2.png"
									alt=""
								/>
								<div className="py-[14px] px-[15px]">
									<div className="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Pago Casa Gran,Falcata White, Valencia DO, 2021
										<img
											className="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span className="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div className="order-and-price flex mt-[42px] items-center justify-between">
										<div className="price font-bold text-[22px] text-[#3485FF;]">
											1950 ₽
										</div>
										<div className="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												className=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button className="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
								<img
									className="rounded-[20px]"
									src="img/slider/1 3.png"
									alt=""
								/>
								<div className="py-[14px] px-[15px]">
									<div className="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Belguardo Vermentino, Toscana IGT, 2020
										<img
											className="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span className="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div className="order-and-price flex mt-[42px] items-center justify-between">
										<div className="price font-bold text-[22px] text-[#3485FF;]">
											2000 ₽
										</div>
										<div className="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												className=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button className="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>

							<div className="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50 opacity-30">
								<img
									className="rounded-[20px]"
									src="img/slider/1 4.png"
									alt=""
								/>
								<div className="py-[14px] px-[15px]">
									<div className="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
										Loveblock Pinot Gris, 2020
										<img
											className="at"
											src="img/CARDS IMG/Frame 5695.png"
											alt=""
										/>
									</div>
									<span className="taste mt-[7px] font-normal text-[14px] text-gray-400">
										Португалия, белое полусухое 9,5%
									</span>
									<div className="order-and-price flex mt-[65px] items-center justify-between">
										<div className="price font-bold text-[22px] text-[#3485FF;]">
											13000 ₽
										</div>
										<div className="order flex bg-[#FF6B17] gap-[9px] py-[8px] px-[30px] rounded-[50px]">
											<img
												className=""
												src="img/CARDS IMG/shopping-bag (1).png"
												alt=""
											/>
											<button className="text-[#FFFFFF;] font-semibold text-[16px]">
												В заказ
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>

						<img
							className="mt-[60px] pl-[584px] mb-[25px]"
							src="img/slider/точки.png"
							alt=""
						/>
					</div>
				</div>
				<div className="info-cards-block max-w-[1300px] container mx-auto mt-[70px]">
					<div className="container">
						<div className="info-cards grid grid-cols-3 grid-rows-[1fr_minmax(210px,_1fr)_1fr] gap-[20px]">
							<div className="info-card relative bg-slate-100 rounded-[20px] pt-[30px] pl-[30px] pr-[20px] pb-[30px]">
								<div className="leading-6 tracking-tight text-[18px] tracking-tight font-semibold color-[#0E254B] max-w-[307px]">
									Меню можно заказать в любое время после бронирования вояжа,
									уже когда вы посоветуетесь со всеми гостями
								</div>
								<img
									className="absolute bottom-[10px] end-0 right-[20px]"
									src="img/attention.png"
									alt=""
								/>
							</div>
							<div className="info-card relative bg-blue-100 rounded-[20px] pt-[30px] pl-[30px] pr-[20px] pb-[30px]">
								<div className="leading-6 tracking-tight text-[18px] font-semibold color-[#0E254B] max-w-[307px]">
									У некоторых ресторанов есть минимальный заказ. Меньше чем на
									указанную сумму заказать нельзя. Если вы заказываете еду из
									разных мест, то порог минимального заказа нужно превысить для
									каждого.
								</div>
								<img
									className="absolute bottom-[10px] end-0 right-[20px]"
									src="img/attention.png"
									alt=""
								/>
							</div>
							<div className="info-card relative bg-slate-100 rounded-[20px] pt-[30px] pl-[30px] pr-[20px] pb-[30px]">
								<div className="leading-6 tracking-tight text-[18px] font-semibold color-[#0E254B] max-w-[307px]">
									За доставку вашего заказа отвечаем мы. Прямо на лодку заказ
									доставит курьер, а мы заберём. Будет ждать вас на борту.
								</div>
								<img
									className="absolute bottom-[10px] end-0 right-[20px]"
									src="img/attention.png"
									alt=""
								/>
							</div>
							<div className="info-card relative bg-slate-100 rounded-[20px] pt-[30px] pl-[30px] pr-[20px] pb-[30px]">
								<div className="leading-6 tracking-tight text-[18px] tracking-tight font-semibold color-[#0E254B] max-w-[307px]">
									В случае отмены вояжа за 24 часа - можно отменить и заказ на
									еду. Деньги вернутся вам на ту карту, с которой платили.
								</div>
								<img
									className="absolute bottom-[10px] end-0 right-[20px]"
									src="img/attention.png"
									alt=""
								/>
							</div>
							<div className="info-card relative bg-blue-100 rounded-[20px] pt-[30px] pl-[30px] pr-[20px] pb-[30px]">
								<div className="leading-6 tracking-tight text-[18px] font-semibold color-[#0E254B;] max-w-[307px]">
									Текст
								</div>
								<img
									className="absolute bottom-[10px] end-0 right-[20px]"
									src="img/attention.png"
									alt=""
								/>
							</div>
							<div className="info-card relative bg-slate-100 rounded-[20px] pt-[30px] pl-[30px] pr-[20px] pb-[30px]">
								<div className="leading-6 tracking-tight text-[18px] font-semibold color-[#0E254B;] max-w-[307px]">
									Текст
								</div>
								<img
									className="absolute bottom-[10px] end-0 right-[20px]"
									src="img/attention.png"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-block">
					<div className="max-w-[1920px] container mx-auto bg-[#4F4F4F;]">
						<div
							div
							className="flex"
						>
							<div className="footer-left-side pt-[142px] pl-[312px] pb-[108px]">
								<img
									src="img/footer/Кураж-Вояж.png"
									alt=""
								/>
								<div className="ins-tel flex gap-[16px] mt-[23px]">
									<img
										src="img/footer/Telegram (1).png"
										alt=""
									/>
									<img
										src="img/footer/Telegram (1).png"
										alt=""
									/>
								</div>
								<div className="text-white mt-[38px]">
									Подписка на эксклюзивные новости
								</div>
								<div className="email-send mt-[20px] rounded-[50px] max-w-[420px] max-h-[46px] bg-white flex justify-between items-center">
									<div className="email py-[18px] px-[31px]">
										moyapochta@mail.ru
									</div>
									<div className="rounded-[50px] sub bg-[#D5E5FB;] py-[10px] px-[30px] max-h-[48px]">
										Подписаться
									</div>
								</div>
							</div>
							<div className="footer-right-side flex flex-col list-none">
								<div className="columns flex mt-[158px] gap-[30px] ml-[222px]">
									<div className="col1">
										<h3 className="text-[#FFFFFF;] text-[18px] font-semibold">
											О нас
										</h3>
										<ul></ul>
										<li>
											<a
												className="text-[#FFFFFF;] text-[14px] font-normal"
												href=""
											>
												О компании
											</a>
										</li>
										<li>
											<a
												className="text-[#FFFFFF;] text-[14px] font-normal"
												href=""
											>
												Команда
											</a>
										</li>
										<li>
											<a
												className="text-[#FFFFFF;] text-[14px] font-normal"
												href=""
											>
												Кейтеринг
											</a>
										</li>
										<li>
											<a
												className="text-[#FFFFFF;] text-[14px] font-normal"
												href=""
											>
												Частые вопросы
											</a>
										</li>
										<li>
											<a
												className="text-[#FFFFFF;] text-[14px] font-normal"
												href=""
											>
												Блог
											</a>
										</li>
										<ul></ul>
									</div>
									<div className="col2">
										<h3 className="text-[#FFFFFF;] text-[18px] font-semibold">
											Вояжи
										</h3>
										<ul></ul>
										<li>
											<a
												className="text-[#FFFFFF;] text-[14px] font-normal"
												href=""
											>
												Вояж в Петергоф
											</a>
										</li>
										<li>
											<a
												className="text-[#FFFFFF;] text-[14px] font-normal"
												href=""
											>
												По Ладожским шахерам
											</a>
										</li>
										<li>
											<a
												className="text-[#FFFFFF;] text-[14px] font-normal"
												href=""
											>
												Люди на катерах
											</a>
										</li>
										<li>
											<a
												className="text-[#FFFFFF;] text-[14px] font-normal"
												href=""
											>
												День ВМФ
											</a>
										</li>
										<li>
											<a
												className="text-[#FFFFFF;] text-[14px] font-normal"
												href=""
											>
												Вояж в крепость Орешек
											</a>
										</li>
										<li>
											<a
												className="text-[#FFFFFF;] text-[14px] font-normal"
												href=""
											>
												Вояж в Кронштадт
											</a>
										</li>
										<ul></ul>
									</div>
									<div className="col3">
										<h3 className="text-[#FFFFFF;] text-[18px] font-semibold">
											Катера и яхты
										</h3>
										<ul></ul>
										<li>
											<a
												className="text-[#FFFFFF;] text-[14px] font-normal"
												href=""
											>
												Эль Чапа
											</a>
										</li>
										<li>
											<a
												className="text-[#FFFFFF;] text-[14px] font-normal"
												href=""
											>
												Princess 25M
											</a>
										</li>
										<li>
											<a
												className="text-[#FFFFFF;] text-[14px] font-normal"
												href=""
											>
												Meridian
											</a>
										</li>
										<li>
											<a
												className="text-[#FFFFFF;] text-[14px] font-normal"
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
					<div className="max-w-[1920px] max-h-[100px] container mx-auto bg-[#D5E5FB;] border-2">
						<div className="flex ml-[310px] mt-[40px] mb-[40px] gap-[265px]">
							<span className="text-[14px] font-normal text-slate-500">
								© Кураж-Вояж
							</span>
							<span className="text-[14px] font-normal text-slate-500">
								Конфиденциальность
							</span>
							<span className="text-[14px] font-normal text-slate-500">
								Политика сайта
							</span>
							<div className="flex text-[14px] font-normal gap-[8px] text-slate-500">
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
