//4. You are given multiple objects representing user details and preferences. Write a function mergeUserData that merges all the objects into one using the spread operator.Example Input:const userDetails = {name: ‘CVR’, age: 25}const userAddress = {address: ‘Mangalpally’, city: ‘Hyderabad’}const userPreferences = {theme: ‘Engineering Edu’, language: ‘EN’}Example Output:{name: ‘CVR’, age: 25, address: ‘Mangalpally’, city: ‘Hyderabad’, theme: ‘Engineering Edu’, language: ‘EN’}

function mergeUserData(...objects){
    return{
        ...objects[0],
        ...objects[1],
        ...objects[2]
    }
}

const userDetails = {
    name : 'CVR',
    age : 25
}

const userAddress = {
    address: 'Mangalpally',
     city:'Hyderabad'
}

const userPreferences = {
    theme:'Engineering Edu',
     language: 'EN'
}

const mergeData = mergeUserData(userDetails,userAddress,userPreferences)

document.getElementById("result").innerHTML = 
    "Name :"+mergeData.name+"<br>"+
    "Age :"+mergeData.age+"<br>"+ 
    "Address :"+mergeData.address+"<br>"+ 
    "City :"+mergeData.city+"<br>"+ 
    "Theme :"+mergeData.theme+"<br>"+ 
    "Language :"+mergeData.language