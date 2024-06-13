let xAxisData = [
  {
    name: "Jan",
    Sale: 112_000,
  },
  {
    name: "Feb",
    Sale: 99_000,
  },
  {
    name: "Mar",
    Sale: 12_090,
  },
  {
    name: "Apr",
    Sale: 99_000,
  },
  {
    name: "May",
    Sale: 54_000,
  },
  {
    name: "Jun",
    Sale: 85_000,
  },
  {
    name: "Jul",
    Sale: 34_000,
  },
  {
    name: "Agu",
    Sale: 18_598,
  },
  {
    name: "Sep",
    Sale: 0,
  },
  {
    name: "Oct",
    Sale: 73_078,
  },
  {
    name: "Nov",
    Sale: 12_900,
  },
  {
    name: "Dev",
    Sale: 97_000,
  },
];

const newMembers = [
  {
    id: 2,
    username: "Mohammad Amin Saeedi",
    title: "Web Developer",
    img: "./images/admin.png",
  },
  {
    id: 2,
    username: "Mojtaba Nayyeri",
    title: "Web Developer",
    img: "./images/admin.png",
  },
  {
    id: 3,
    username: "Ghadir Yolmeh ",
    title: "Hacker",
    img: "./images/admin.png",
  },
  {
    id: 4,
    username: "Sasan Moghaddam",
    title: "Seo",
    img: "./images/admin.png",
  },
];

const transActions = [
  {
    id: 1,
    customer: "Ghadir Yolmeh",
    date: "18 Jun 2022",
    amount: 100,
    status: "Declined",
    img: "./images/admin.png",
  },
  {
    id: 2,
    customer: "Sasan Moghaddam",
    date: "22 Jun 2022",
    amount: 1000,
    status: "Approved",
    img: "./images/admin.png",
  },
  {
    id: 3,
    customer: "amin Saeedi",
    date: "14 Jun 2020",
    amount: 200,
    status: "Pending",
    img: "./images/admin.png",
  },
  {
    id: 4,
    customer: "Mojtaba Nayyeri",
    date: "12 Jun 2021",
    amount: 800,
    status: "Approved",
    img: "./images/admin.png",
  },
];


let userRows = [
  {
    id:1,
    username:'qadir yolmeh',
    avatar:'./images/admin.png',
    status:'active',
    transaction:'$129.52',
    email:'ghadir@gmail.com'
  },
  {
    id:2,
    username:'sasan moghaddas',
    avatar:'./images/admin.png',
    status:'active',
    transaction:'$140',
    email:'sasan@gmail.com'
  },
  {
    id:3,
    username:'amin saeedi',
    avatar:'./images/admin.png',
    status:'non-active',
    transaction:'$180.52',
    email:'amin@gmail.com'
  },
  {
    id:4,
    username:'mojtaba nayyeri',
    avatar:'./images/admin.png',
    status:'active',
    transaction:'$200',
    email:'mojtaba@gmail.com'
  },
]

let products =[
  {
    id:1,
    title:'asus',
    avatar:'./images/admin.png',
    price:'890'
  },
  {
    id:2,
    title:'asus',
    avatar:'./images/admin.png',
    price:'890'
  },
  {
    id:3,
    title:'asus',
    avatar:'./images/admin.png',
    price:'890'
  },
  {
    id:4,
    title:'asus',
    avatar:'./images/admin.png',
    price:'890'
  },
]

export { xAxisData, newMembers, transActions ,userRows,products};
