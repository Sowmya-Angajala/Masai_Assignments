// function homies(arr)
// {
//     for(let i=0;i<arr.length;i++){
//         setTimeout(()=>{
//             console.log(arr[i])
//         },i*5000)
//     }
// }

// let arr=["S","V","V","U","T"]
// homies(arr)

function timer(duration,onComplete,arr)
{
    onComplete(duration)
    
}
function onComplete(duration){
        for(let i=0;i<arr.length;i++)
    {
       setTimeout(()=>{
        console.log(arr[i]);
    },i* duration) 
    }
    }
let arr=[23,46,82]
timer(5000,onComplete,arr)

