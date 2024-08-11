import React from 'react';

const Header = () => {
    return (
        <>
         <header className="border">
				<div className="container max-w-[1300px] mx-auto">
					<div className="py-[10px]">
						<div className="flex justify-between">
							<div className="flex gap-[34px]">
								<img
									src="img/Logo.svg"
									width="100"
									alt="Logo"
								/>
								<div className="flex gap-[6px]">
									<div className="bg-[#F4F6F9] py-[5px] px-[22px] rounded-[50px]">
										<a
											href="tel:+7 921 400-50-20"
											className="text-[#0E254B]"
										>
											+7 921 400-50-20
										</a>
									</div>
									<div className="flex jutify-center align-center bg-[#F4F6F9] py-[5px] px-[18px] rounded-[50px]">
										<img
											src="img/icons/Whatsapp.svg"
											width="18"
											height="18"
											alt="Whatsapp"
										/>
									</div>
									<div className="flex jutify-center align-center bg-[#F4F6F9] py-[5px] px-[18px] rounded-[50px]">
										<img
											src="img/icons/TG.svg"
											width="18"
											height="18"
											alt="Whatsapp"
										/>
									</div>
								</div>
							</div>

							<div className="flex justify-between items-center gap-[35px]">
								<nav className="flex gap-[24px]">
									<a
										className="font-secondary text-[#0E254B] text-[13px]"
										href="#"
									>
										Праздники и события
									</a>
									<a
										className="font-secondary text-[#0E254B] text-[13px]"
										href="#"
									>
										Подарочный сертификат
									</a>
									<a
										className="font-secondary text-[#0E254B] text-[13px]"
										href="#"
									>
										Партнёрам
									</a>
									<a
										className="font-secondary text-[#0E254B] text-[13px]"
										href="#"
									>
										Путеводитель
									</a>
								</nav>
								<div className="flex gap-[6px]">
									<div className="flex jutify-center align-center bg-[#F4F6F9] py-[5px] px-[18px] rounded-[50px]">
										<img
											src="img/icons/Vk.svg"
											width="18"
											height="18"
											alt="Whatsapp"
										/>
									</div>
									<div className="flex jutify-center align-center bg-[#F4F6F9] py-[5px] px-[18px] rounded-[50px]">
										<img
											src="img/icons/IG.svg"
											width="18"
											height="18"
											alt="Whatsapp"
										/>
									</div>
								</div>
								<div className="langs">EN</div>
							</div>
						</div>
					</div>
				</div>
			</header>   
        </>
    );
};

export default Header;