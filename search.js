var data = JSON.parse(localStorage.getItem("data"))

let display = document.getElementById("display")

data.forEach(element => {
    var data = JSON.parse(localStorage.getItem('data'))

    let display = document.getElementById('display').value

    data.forEach(element => {
        let {
            title,
            url,
            description,
            urlToImage
        } = element
        let p = document.createElement('p')
        p.innerHTML = `<img src = "${urlToImage}" width 720> <br> Title: ${title} <br> Description: ${description} <br> URL: ${url}`
        display.append(p)
    })
})
async function Trending() {
    let req = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c6c3a52b43814b0fb953a834e317c2c7`)
    let data = await req.json()
    data = data.articles
    console.log(data)

    ShowNews(data)

}
Trending()
function ShowNews(data) {

    data.forEach((element) => {
        let div = document.createElement("div")
      

        let img = document.createElement("img");
        img.src = element.urlToImage
        console.log(img.src)
        card.appendChild(img)

        let title = document.createElement("p");
        title.textContent = element.title;
      
        let p1 = document.createElement("p");
        p1.textContent = element.content;
        
        let description = document.createElement("p")
        description.innerHTML = element.description
    })
}
