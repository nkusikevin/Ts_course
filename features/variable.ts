const names:string[] = ["names", "nadeje", "gaju"];


const course : (string | number | Date) [] = [1,2,"kevin", new Date()]


//tuples

const classes :[string,number,boolean] = ['software',23,true]



interface Car{
  name:string,
  year:number,
  broken:boolean
}


const benz = {
  name:'bugatti',
  year:2001,
  broken:false

}



const printCar = ( cars:Car):void =>{
console.log(cars.name);
console.log(cars.year);
console.log(cars.broken);

}

printCar(benz)