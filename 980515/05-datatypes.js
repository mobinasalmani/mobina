// scope
// life-cycle
// global variable
let x;
{
    // local variable
    // let x="test";
    x="test";
}
{
    x="another test";
}
console.log(x);