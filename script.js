const text = [
    `Get suggestions from Grammarly while you write in desktop
     applications and sites across the web—as you move between apps, social media, documents,
      messages, and emails.`,
    `From grammar and spelling to style and tone, Grammarly"s suggestions are comprehensive, 
    helping you communicate effectively and as you intend.
    `,
    `Grammarly allows me to get those communications out and feel confident that I"m putting my
    best foot forward. Grammarly
    is like a little superpower, especially when I need to be at 110%.`,
    `Get started for free and find out what you can accomplish with the power of Grammarly at your fingertips.`,
    `Find Learn Language English Here. Research Learn Language English Online. Login.
    Trusted Sources. Near You. Emergency. Health Information Online.
    Instagram. Chat. Fast. Expert Advice and Content. Same Day. Neighborhoods`,
    `Discover English Language Course In Usa. Find Quick Results from Multiple Sources.
    Get English Language Course In Usa. Get Instant Quality Results at iZito Now! Explore the Best Info Now. 100+ Qualitative Results. Powerful and Easy to Use. Discover Quality Results.
    Get More Related Info. Find Related Results Now. Types: News, Video, Images, Web, Wiki.`
]

const form = document.querySelector('.container-form')
const amount = document.querySelector('#amount')
const results = document.querySelector('.text')

form.addEventListener('submit', function(e){
  e.preventDefault()
  //console.log('hello');
  const value = parseInt(amount.value) 
  //console.log(value);
  const random = Math.floor(Math.random() * text.length)
  //console.log(random);
  if(isNaN(value) || value < 0 || value > 6){
    results.innerHTML = `<p class="result">${text[random]}</p>`
  }else{
    let tempText = text.slice(0, value)
    tempText = tempText.map(function(item){
      return `<p class="result">${item}</p>`
    }).join("")
    results.innerHTML = tempText
  }
})