
interface IUsers {
    id: number,
    name: string,
    username: string
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users: IUsers[]) => {
        console.log(users[0].username)
    });


// типізація функції з fetch

async function foobar (): Promise<IUsers[]> {
  let users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((response: Response)  => response.json())

    return users
}
foobar().then(users => console.log(users))