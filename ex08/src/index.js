// Only change code below this line
// suers nested array with four objects starts here
var users = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 24,
        gender: 'male'
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 5,
        gender: 'female'
    },
    {
        firstName: 'Jim',
        lastName: 'Carrey',
        age: 54,
        gender: 'male'
    },
    {
        firstName: 'Kate',
        lastName: 'Winslet',
        age: 40,
        gender: 'female'
    }
];
//users nested array with four objects ends here

// getUsers function - list of users starts here

function getUsers() {
    var output = "";

    for(var i = 0; i < users.length; i++) {
        if(users[i] !== undefined) {
            output = `${users[i].firstName} ${users[i].lastName} is ${users[i].age}, ${users[i].gender}`;
        
            console.log(output);
        }
        

        
    }
       return output;
   
    
}

function findUser(lastName, gender){

    try {
        var user = users.find(el => el.firstName === lastName)
        console.log(user)
    }
    catch(err){
        
    }
    
}



getUsers();