// loops

// while
// do while
// for

// var num = 1;

// while (num < 10) {
//     console.log(num*2);
//     num++;
// }

// for(var num=1; num<=10; num++){
//     console.log(num);
// }

// var num = 0;
// do{
//     console.log("playing game");
//     console.log("do u want to play again");
//     num = 1;
// } while(num<=10);

// Arrays

    // var arr=["thor", "ironman", "superman", "captain"];
    // for (var num = 0; num < arr.length; num++) {
    //     console.log(arr[num]);
    // }

    // alert("hello");

    // var data=prompt("hello");
    // console.log(data);

    // var data=confirm("are you sure you want to go to google");
    
    // if(data===true){
    //     location="https://www.google.co.in";
    // }
    // else{
    //     alert("ok then stay here")
    // }
    
    // window.alert();
    // window.prompt();
    // window.location="";

// Objects
    // var user = {
    //     name: "ironman",
    //     age: 34,
    //     powers: ["armour", "intelligence", "rich"],
    //     adress: {pincode: "1234",city: "new york",country: "america"}
    // };

    // console.log(user["name"]);
    // console.log(user.age);
    // console.log(user.powers[2]);

    // for (var i=0; i<user.powers.length; i++)
    // {
    //     console.log(user.powers[i]);
    // }

// looping through Array of objects

    // var users = [
    //     { name: "thor", age: 1500},
    //     { name: "ironman", age: 34},
    //     { name: "captain", age: 100}
    // ];

    // console.log(users[2].name, users[2].age);

    // for (var i=0; i<users.length; i++) {
    //     console.log(users[i].name);
    // }
    

    // document.write("i am a very bad printing mechanism");

    var ele=document.getElementsByTagName('h1');
    console.log(ele[0]);

    ele[0].innerText="avengers";
    ele[1].innerText="captain";