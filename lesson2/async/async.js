"use strict";
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
    console.log(users[0].username);
});
// типізація функції з fetch
async function foobar() {
    let users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json());
    return users;
}
foobar().then(users => console.log(users));
