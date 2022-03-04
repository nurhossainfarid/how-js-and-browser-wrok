console.log(`fetch is api contactor`);
console.log(`fetch work like that asynchronous`);
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
console.log(`I am using jsonplaceholder`);
for (let i = 0; i < 10000; i++) {
    console.log(i);
}