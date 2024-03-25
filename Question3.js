const sampleData = [
  {
    "id": 1,
    "name": "John Doe",
    "status": 1
  },
  {
    "id": 2,
    "name": "Jane Doe",
    "status": 2
  },
  {
    "id": 3,
    "name": "Adam Rocket",
    "status": 2
  },
  {
    "id": 4,
    "name": "Luis Rocket",
    "status": 1
  }
];


const result = Object.groupBy(sampleData, ({ status }) => {
  return `status-${status}`;
 });

 console.log('result', result);