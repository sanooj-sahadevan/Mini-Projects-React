/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

const list = () => {
  const fruits = [
    { name: "Sanooj", age: 22, id: 1 },
    { name: "Arun", age: 25, id: 2 },
    { name: "Hari", age: 28, id: 3 },
    { name: "Madhav", age: 30, id: 4 },
    { name: "Ziya", age: 27, id: 5 },
    { name: "Akil", age: 24, id: 6 },
    { name: "Suresh", age: 26, id: 7 },
    { name: "Drishya", age: 23, id: 8 },
    { name: "Yaseer", age: 29, id: 9 },
    { name: "Anbu", age: 31, id: 10 },
  ];
  const x = fruits.map((f) => <li key={f.id}>{f.name}</li>);
  return <ul>{x}</ul>;
};

export default list;
