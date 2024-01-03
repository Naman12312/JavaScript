const posttodo = async ()=>{
    let mybody = {
        "Title": "Do physics and chemisty",
        "time": "tomorrow",
    }
    let p = fetch("https://jsonplaceholder.typicode.com/posts/", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(mybody)
    })

    let response = await p;
    let r = await response.json();
    return r;

}

const printtodo = async () => {
    let response = await posttodo();
    console.log(response);
}

const gettodo = async (id) => {
    console.log("Hello")
    let response= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    let r = await response.json();
    console.log(r);
}
const main = async () => {
    await printtodo()
    await gettodo(101)}


main()