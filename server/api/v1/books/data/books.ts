type Book = {
  title: string;
  id: number;
  price: number;
  author: string;
  specialDeal?: boolean;
  discount?: number;
  category: string;
};

export const books: Book[] = [
  {
    title: "one",
    id: 1,
    price: 10,
    author: "Vishnuvardhan",
    category: "crime",
    specialDeal: true,
    discount: 10,
  },
  {
    title: "two",
    id: 2,
    price: 20,
    author: "Uppunuthula",
    category: "humor",
  },
];
export type BookType = typeof books;
