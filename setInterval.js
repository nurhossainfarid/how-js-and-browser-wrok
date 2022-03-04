console.log(`first`);
// const count = setInterval(() => {
//     console.log(`Tik Tik Tik Tik`);
// }, 2000);
console.log(`second`);

let second = 0;
const timeID = setInterval(() => {
    // second++;
    ++second;
    console.log(second);
    if (second >= 15) {
        clearInterval(timeID)
    }
}, 1000)