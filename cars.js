// var model = document.querySelector(".save")
// var mark = document.querySelector(".mark");
// var year = document.querySelector(".year");
// var color = document.querySelector(".color");
// var save = document.querySelector(".save");
// var mysort = document.querySelector(".sort");
// var arr = []
// save.addEventListener("click", function() {
//    var obj = {
//     mark:mark.value,
//     model:model.value,
//     year:year.value,
//     color:color.value
//    }
//    arr.push(obj)
// })
// mysort.addEventListener("click",function(){
//     arr.sort(function(a,b){
//         return a.year - b.year
//     })
//     console.log(arr[0])
//     console.log(arr[arr.length-1])
// })

var select = document.getElementById("cars")

var obj1 = {
    mark: "Ferrari",
    year: 2020,
    color: "red"
}
var obj2 = {
    mark: "Mercedes",
    year: 2015,
    color: "black"
}
var obj3 = {
    mark: "Bmw",
    year: 2012,
    color: "black"
}
var obj4 = {
    mark: "Audi",
    year: 2021,
    color: "red"
}
var obj5 = {
    mark: "Mercedes",
    year: 2009,
    color: "green"
}
var obj6 = {
    mark: "Toyota",
    year: 2020,
    color: "yellow"
}
var obj7 = {
    mark: "Lamborghini",
    year: 2015,
    color: "red"
}

var arr = [obj1, obj2, obj3, obj4, obj5, obj6, obj7]

for(var i of arr){
    document.getElementById("car")
}

// console.log(arr.)




// var obj = [{
//     mark: ["Ferrari","Mercedes","Audi","bmw",],
//     model: ["a","b","c","d"],
//     year: [2000,2005,2010,2020],
//     color: ["red", "green", "blue", "black"]
// }]
// console.log(obj[0].model[0])

// for(var i of obj){
//     if(i.model=="Ferrari"){
//         console.log(i)
//     }
// }