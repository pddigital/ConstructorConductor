/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
};

//Create an Array called 'users' that will store all our instances of User.

var users = [];

users.push(new User("Tyler", "tylermcginnis33@gmail.com", "iLoveJS"));
users.push(new User("Cahlan", "cahlan@devmounta.in", "iLoveHashtags"));
users.push(new User("Lenny", "lenny@theLenster.com", "iLoveLentilSoup"));

console.log(users);


//Now create and push into your users array 3 separate instances of User using the data from above in that exact order


console.log('Tyler\'s information is ' + users[0].email + ', ' + users[0].pw);
//Console.log all of Tylers information


console.log('Tyler\'s information is ' + users[2].email + ', ' + users[2].pw);
//Now console.log all of Lennys information



//Now create another instance of User using your own information and then add that to your users array.

users.push(new User("Paul", "proposalpaul@gmail.com", "12345"));
console.log('Paul\'s information is ' + users[3].email + ', ' + users[3].pw);
//Now console.log all of Lennys information


//Now loop through your users Array and console.log every users name. 


console.log('All my users names are: ');
users.ForEach(function() {
    console.log(item.name);
});
        
