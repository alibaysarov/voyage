import React from 'react';

const UnderHeader = () => {
    return (
        <>
          <div className="under-header__container">
					<div className="flex justify-between items-center mt-[15px] under-header__content">
						<div className="cities">
							<div className="city">
								<img
									className="coutrise-logo"
									src="img/icons/Turkey.png"
									alt=""
								/>
								<span>Стамбул</span>
							</div>
							<div className="city">
								<img
									className="coutrise-logo"
									src="img/icons/Dubai.png"
									alt=""
								/>
								<span>Дубай</span>
							</div>
							<div className="city">
								<img
									className="coutrise-logo"
									src="img/icons/USA.png"
									alt=""
								/>
								<span>Техас</span>
							</div>
						</div>
						<div className="basket">
							<div className="basket__total-price">
								<img
									src="img/shopping-bag.png"
									alt=""
								/>
								<span>Ваш заказ</span>
								<span className="tottal-price">9450 ₽</span>
							</div>
							<div className="bookmark">
								<div className="flex jutify-center align-center bg-[#F4F6F9] py-[10px] px-[25px] rounded-[50px]">
									<img
										src="img/закладка.png"
										alt=""
									/>
									<span className="bg-[#FF6B17] px-[7px] rounded-[50px] text-[14px] text-white">
										2
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>  
        </>
    );
};

export default UnderHeader;