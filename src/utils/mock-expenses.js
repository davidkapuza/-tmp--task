import deepClone from "./deepClone";

const initialExpenses = [
  {
    month: "07-2022",
    expenses: [{
      category: "food",
      title: "Coffee",
      date: "16-07-2022",
      price: {
        amount: 40,
        currency: "PLN",
      },
    }],
  },
  {
    month: "08-2022",
    expenses: [{
      category: "food",
      title: "Bread",
      date: "03-08-2022",
      price: {
        amount: 8,
        currency: "PLN",
      },
    },{
      category: "food",
      title: "Cheese",
      date: "03-08-2022",
      price: {
        amount: 21,
        currency: "PLN",
      },
    },{
      category: "car",
      title: "Fuel",
      date: "14-08-2022",
      price: {
        amount: 320,
        currency: "PLN",
      },
    },],
  },
  {
    month: "09-2022",
    expenses: [{
      category: "food",
      title: "Bread",
      date: "01-09-2022",
      price: {
        amount: 8,
        currency: "PLN",
      },
    },{
      category: "food",
      title: "Ham",
      date: "01-09-2022",
      price: {
        amount: 14,
        currency: "PLN",
      },
    },{
      category: "car",
      title: "Fuel",
      date: "10-09-2022",
      price: {
        amount: 320,
        currency: "PLN",
      },
    },{
      category: "car",
      title: "Car Wash",
      date: "10-09-2022",
      price: {
        amount: 60,
        currency: "PLN",
      },
    }],
  },
];

export default deepClone(initialExpenses)