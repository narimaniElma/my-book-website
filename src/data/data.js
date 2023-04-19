let books = [
  {
    name: "The Compound Effect",
    id: 21,
    price: "50,000",
    due: "2022/01/12",
  },
  {
    name: "Chicken soup for the soul",
    id: 22,
    price: "65,000",
    due: "2021/12/22",
  },
  {
    name: "Good To Great",
    id: 23,
    price: "42,000",
    due: "2020/08/03",
  },
  {
    name: "Time Management",
    id: 24,
    price: "75,000",
    due: "2019/01/12",
  },
  {
    name: "Who Moved My Cheese",
    id: 25,
    price: "52,000",
    due: "2022/02/14",
  },
];

export const getBooks = () => {
  return books;
};

export const getBook = (number) => {
  return books.find((book) => book.id === number);
};

export const deleteBook = (number) => {
  books = books.filter((book) => book.id !== number);
};
