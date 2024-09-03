//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.
function giveEmail(arr){
    let email=[];
    for(let i=0;i<arr.length;i++){
        email.push(arr[i].email);
    }
    return email;
}
/*const arrayOfObjects = [
  { 
     id: 1, 
     name: 'Alice', 
     age: 30,
     email: 'alice@example.com',
     city: 'New York',
     country: 'USA',
     hobbies: ['reading', 'painting'],
     isStudent: false
  },*/

//    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.
function findWithAge(agee,arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i].age==agee)console.log(`${arr[i].name} has these hobbies - ${arr[i].hobbies}`);
    }
    return ;
}

//    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.
function studentsOfAustralia(arr){
    
    for(let i=0;i<arr.length;i++){
        if(arr[i].isStudent==true&&arr[i].country=='Australia')console.log(arr[i].name);
    }
    return ;
}

//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.
function at3(arr){
    if(arr.length<3){
        console.log("Given array has length less then three");
        return;
    }
    console.log("name = "+arr[3].name+" and  City = "+arr[3].city);
    return ;
}

//    Implement a loop to access and print the ages of all individuals in the dataset.
function ageOfAll(arr){
    for(let i=0;i<arr.length;i++){
        console.log(`${arr[i].name}'s is ${arr[i].age} years old`);
    }
    return ;
}

//    Create a function to retrieve and display the first hobby of each individual in the dataset.

function firstHobby(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i].hobbies.length==0)console.log(`${arr[i].name} has no hobby`);
        else console.log(`${arr[i].name}'s first hobby is ${arr[i].hobbies[0]}`);
    }
    return ;
}

//    Write a function that accesses and prints the names and email addresses of individuals aged 25.
function findWithAge25(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i].age==25)console.log(`${arr[i].name}'s mail is - ${arr[i].email}`);
    }
    return ;
}

//    Implement a loop to access and log the city and country of each individual in the dataset.
function cityAndCountry(arr){
    for(let i=0;i<arr.length;i++){
        console.log(`${arr[i].name} lives in city - ${arr[i].city} and country - ${arr[i].country}`);
    }
    return ;
}
export{giveEmail,findWithAge,studentsOfAustralia,at3,ageOfAll,firstHobby,findWithAge25,cityAndCountry};