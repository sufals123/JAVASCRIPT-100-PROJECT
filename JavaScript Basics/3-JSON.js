

const person = {
    name: 'John',
    age: 30,
    job: 'Software Engineer',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js', 'Express.js', 'MongoDB'],
    languages: ['English', 'Spanish', 'Portuguese', 'French', 'German', 'Italian', 'Russian', 'Chinese', 'Japanese', 'Korean', 'Polish', 'Arabic', 'Vietnamese', 'Hindi', ],
    hobbies:{
        music: 'Rock',
        movies: 'Comedy',
        sports: 'Soccer',
        food: 'Pizza'
    }
}

const jsonString = JSON.stringify(person);
console.log(jsonString);

const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
