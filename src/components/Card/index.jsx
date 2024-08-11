import React, { useState } from "react";

const Card = () => {
  const [count, setcount] = useState(0);
  const changedQuantityHandler = () => {
    setcount(count * 2 + 1);
  };
  const [showQuantity, setShowQuantity] = useState(false);
  const showQuantityHandler = () => {
    setShowQuantity(true);
    setcount(count + 1);
  };
  const hideQuantityHandler = () => {
    setShowQuantity(false);
  };
  const plusOne = () => {
    setcount(count + 1);
  };
  const minusOne = () => {
    setcount(count - 1);
    if (count <= 1) {
      hideQuantityHandler();
    }
  };

  return (
    <>
      <div className="futura-card rounded-[20px] max-w-[310px] max-h-[420px] bg-gray-50">
        <img className="rounded-[20px]" src="img/CARDS IMG/CHIP.png" alt="" />
        <div className="py-[14px] px-[15px]">
          <div className="info flex justify-between items-center text-[#000000;] text-[18px] font-semibold">
            Чипсы, 50гр
            <img className="at" src="img/CARDS IMG/Frame 5695.png" alt="" />
          </div>
          <span className="taste mt-[7px] font-normal text-[14px] text-gray-400">
            Вкус: соль
          </span>
          <div className="order-and-price flex mt-[65px] items-center justify-between">
            <div className="price font-bold text-[22px] text-[#3485FF;]">
              {count}
            </div>
            {showQuantity == false ? (
              <button
                onClick={showQuantityHandler}
                className="order flex items-center bg-[#FF6B17] gap-[9px] text-[#FFFFFF;] font-semibold text-[16px] py-[8px] px-[30px] rounded-[50px] order-btn"
              >
                <img
                  className=""
                  src="img/CARDS IMG/shopping-bag (1).png"
                  alt=""
                />
                В заказ
              </button>
            ) : (
              <button
                data-count="0"
                data-price="120"
                className="flex justify-between items-center bg-[#FFE9DC] gap-[9px] py-[8px] px-[30px] rounded-[50px] ordered-items-btn "
              >
                <span
                  onClick={minusOne}
                  className="minus text-[#FF6B17] font-semibold cursor-pointer"
                >
                  -
                </span>
                <span className="ordered-item-num text-[#FF6B17] font-semibold">
                  {count} набор
                </span>
                <span
                  onClick={plusOne}
                  className="plus text-[#FF6B17] font-semibold cursor-pointer"
                >
                  +
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
