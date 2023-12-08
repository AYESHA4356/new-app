import React from "react";

function Cart() {
  let counterValue = 0;

  function updateCounter() {
    document.getElementById("counter").textContent = counterValue;
  }

  function increment() {
    counterValue++;
    updateCounter();
  }

  function decrement() {
    if (counterValue > 0) {
      counterValue--;
      updateCounter();
    }
  }
  return (
    <div className=" p-[25px] ">
      <div className="box_2 section1 flex   my-auto mx-auto h-[460px] w-[1010px] ">
        <div className="box1 p-[30px] ">
          <img width={"400px"} src="./imp3.jpeg" alt="" />
        </div>
        <div className="box1 main0 text-[24px]   ">
          <h1 className="mb-[40px] mt-[50px] text-[#123C69] font-[500] ">
            Polo Men's Short Seleevs Branded T-Shirts For
            <br /> Men's With Top Quality For Eid Collection 2023
          </h1>
          <span className="mx-[10px] text-[#cf2960] font-[700] ">
            Rs. 1999\- <br />{" "}
          </span>
          <div></div>
          <div className="">
            <div className="body">
              <h1 className="text-[#123C69]" >Quantity:</h1>

              <div className="text-[#123C69]" id="counter-container">
                <button className="propety text-[#cf2960] " onClick={increment}>
                  +
                </button>
                <p id="counter">{counterValue}</p>
                <button className="propety text-[#cf2960]" onClick={decrement}>
                  -
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <button className="bg-[#cf2960] py-[10px] px-[40px] text-[20px] mr-[30px] mt-[50px] ">
              Buy Now <br />
            </button>
            <button className="bg-[#123C69] py-[10px] px-[40px] text-[20px]  mt-[50px] ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
