const data = [
  {
    id: 1,
    name: '1',
    email: '1@gmail.com',
    item: {
      id: 1,
      name: 'item1',
      price: 1000
    },
    go: view = () => {
      console.log("view");
    }
  },
  {
    id: 2,
    name: '2',
    email: '2@gmail.com'
  },
  {
    id: 3,
    name: '3',
    email: '3@gmail.com'
  }
];

console.log(data[0].item.price);

const myFunction = (name) => {
  let myId = window.prompt('id를 입력하세요');
  
  for(let i in data) {
    if(myId == data[i].id) {
      console.log(data[i].name, data[i].email);
      break;
    }
    else {
      console.log(`현재 id는 ${data[i].id}`);
    }
  }
}