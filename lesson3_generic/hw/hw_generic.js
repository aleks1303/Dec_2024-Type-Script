"use strict";
// Створити функцію, яка робить запити на апі та віддає результат свого запиту. Тип відповіді визначається дженеріком функції.
//
//     Сигнатур функції під час виклику foobar<SomeType>(‘/url)
//
// SomeType – ваш тим відповіді
//
// url – ваш ендпоінт з якого чекаємо відповідь
// async function fnFetch <T> (url: string): Promise<T> {
//     const response = await fetch(url)
//     if (!response.ok) {
//         throw new Error(`Fetch error ${response.status}`)
//     }
//     const data: T = await response.json()
//     return data
// }
// interface IUserFetch {
//     id:number,
//     name: string,
//     email: string
// }
//
// async function fnUsers (id:number) {
//     const url = `https://jsonplaceholder.typicode.com/users/${id}`
//      return fnFetch<IUserFetch>(url)
// }
// fnUsers(3).then(users => console.log(users.email))
//
//
// interface IPostFn {
//     userId: number,
//     id: number,
//     title: string
// }
//
//
// async function fnPosts (userId: number) {
//     const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
//     return fnFetch<IPostFn[]>(url)
// }
//
// fnPosts(10).then(posts => {
//     const title = posts.map(post => post.title);
//     const useId = posts.map(post => post.userId)
//     for (const item of title) {
//         console.log(`title: ${item}`)
//     }
//
// })
//
//
// interface Local {
//     id: number
//     name: string
// }
// function getLS <T> (key: string) {
//     const item = localStorage.getItem(key);
//     if (!item) {
//         throw new Error('There is not item in localStorage')
//     }
//     else{
//         return  JSON.parse(item) as T
//     }
// }
// const localSt = getLS<Local>('user');
// console.log(localSt)
async function fnDummy(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Api wrong`);
    }
    return await response.json();
}
function getDummy() {
    const url = 'https://dummyjson.com/products?limit=50';
    return fnDummy(url);
}
getDummy().then(products => console.log(products));
