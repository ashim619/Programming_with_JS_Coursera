const car={
    engine:true
}
const sportsCar=Object.create(car);
sportsCar.speed="fast";
for(prop in sportsCar){
    console.log(prop)
}

for(prop of Object.keys(sportsCar)){
    console.log(prop,":",sportsCar[prop])
}