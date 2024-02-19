let availableSeatnum;
let discountRate;
let discount;
let grandTotal;
let couponSuccess;
let reservedSeats = [];
const ticketPrice = 550;
let totalPrice;
const coupons = [
  {
    code NEW15,
    discountRate 15,
  },
  {
    code Couple 20,
    discountRate 20,
  },
];

const successModal = document.getElementById(successModal);

const nextButton = document.getElementById(next);
const nameInput = document.getElementById(name);
const phoneInput = document.getElementById(phone);
const emailInput = document.getElementById(email);
let nameValue;
let phoneValue;
let emailValue;

const inputForm = document.getElementById(input-form);

const couponInput = document.getElementById(coupon-input);
let couponValue;
const couponButton = document.getElementById(coupon-button);

 console.log(coupons[0]);

const hiddenTicketSection = document.getElementById(hidden-ticket-section);
 const hiddenTotalSection = document.getElementById(hidden-total-section);
const hiddenCouponSection = document.getElementById(hidden-coupon-section);
const hiddenGrandTotal = document.getElementById(hidden-grand-total);

const totalContent = document.querySelector(.total);
const discountContent = document.getElementById(hidden-discount);
const grandTotalContent = document.querySelector(.grand-total);
 console.log(totalContents);

const availableSeatText = document.querySelector(.available-seat);

const seatsContainer = document.querySelector(.dynamic-ticket);
 console.log(seatsContainer);
const seatNumText = document.querySelector(.seat-num);

const availableSeats = document.querySelectorAll(.seat);
availableSeatnum = availableSeats.length;




 