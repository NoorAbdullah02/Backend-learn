
const imu = {
    name: 'Imran',
    age: 20,
    location: 'India',
    "full name": 'Imran Khan'
}

//console.log(imu["full name"]);

const key = {
    id: 1,
    user :{
        name: "imran",
        age: 20
    }
}

const obj3 = {...key, ...imu}

//console.log(key.user);

console.log(obj3);


