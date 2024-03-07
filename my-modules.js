const hello = name => {
    //console.log("hello "+ name )
    console.log(`hello my friend ${name}` )
}

 const topla = (a,b) => a+b;
 const cikar = (a,b) => a-b;
 const names = [{
    name: "ahmet" ,
    surname: "yılmaz"
},
{
    name:"mehmet",
    surname: "kaya",
}]
export {hello, names , topla , cikar};