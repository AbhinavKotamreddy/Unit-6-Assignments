function getCosine() {
    let values = []
    for (let i = 0; i < 10; i++) {
        let x = Math.cos(10);
        values.push(x);
    }

    // Add your code here
    let val1, val2, val3, val4, val5, rest;
    [val1, val2, val3, val4, val5,... rest] = values;
    console.log(val1);
    console.log(val2);
    console.log(val3);
    console.log(val4);
    console.log(val5);
    console.log(rest);
}
getCosine();