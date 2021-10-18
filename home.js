// console.log("hii")
async function india() {
    let req = await fetch(`
    https://newsapi.org/v2/top-headlines?q=in&apiKey=c6c3a52b43814b0fb953a834e317c2c7`)
    let data = await req.json()
    data = data.articles
    console.log(data)
}
async function usa() {
    let req = await fetch(`
    https://newsapi.org/v2/top-headlines?q=us&apiKey=c6c3a52b43814b0fb953a834e317c2c7`)
    let data = await req.json()
    data = data.articles
    console.log(data)
}
async function germany() {
    let req = await fetch(`
    https://newsapi.org/v2/top-headlines?q=de&apiKey=c6c3a52b43814b0fb953a834e317c2c7`)
    let data = await req.json()
    data = data.articles
    console.log(data)
}
async function china() {
    let req = await fetch(`
    https://newsapi.org/v2/top-headlines?q=cn&apiKey=c6c3a52b43814b0fb953a834e317c2c7`)
    let data = await req.json()
    data = data.articles
    console.log(data)
}

async function result(t) {
    let title = document.getElementById("search").value
    let response = await fetch(`https://newsapi.org/v2/top-headlines/sources?q=${title}&apiKey=c6c3a52b43814b0fb953a834e317c2c7`)

    data = await response.json()
    data = (data.articles)
    console.log(data)

    localStorage.setItem('data', JSON.stringify(data))
    location.assign('search.html')
    
}


async function Trending() {
    let req = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c6c3a52b43814b0fb953a834e317c2c7`)
    let data = await req.json()
    data = data.articles
    console.log(data)

    ShowNews(data)

}
Trending()
var show = document.getElementById("trending")

function ShowNews(data) {

    data.forEach((element) => {
        let card = document.createElement("div")
        card.setAttribute("class", "card");

        let img = document.createElement("img");
        img.src = `(${element.urlToImage})`
        console.log(img.src)
        card.appendChild(img)

        let p = document.createElement("p");
        p.textContent = element.title;
        card.appendChild(p)
        let p1 = document.createElement("p");
        p1.textContent = element.author;
        p1.style.fontSize = "10px"
        card.appendChild(p1)
        card.addEventListener("click", function () {
            NewPage(element)
        });
        show.appendChild(card)
    })
}
if (localStorage.getItem("News") === null) {
    localStorage.setItem("News", JSON.stringify([]))
}

function NewPage(news) {
    let mynews = JSON.parse(localStorage.getItem("News"))

    mynews.push(news)

    localStorage.setItem("News", JSON.stringify(mynews))

    setTimeout(() => {
        window.location.href = "news.html"
    }, 1500)
}


// console.log(fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=c6c3a52b43814b0fb953a834e317c2c7`))

// https://newsapi.org/v2/top-headlines?q=tesla&apiKey=c6c3a52b43814b0fb953a834e317c2c7
// https://newsapi.org/v2/top-headlines?country=us&apiKey=c6c3a52b43814b0fb953a834e317c2c7
