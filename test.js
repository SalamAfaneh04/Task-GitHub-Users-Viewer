const searchBar = document.getElementById('search');
const cardsContant = document.querySelector('.cards');
const NameOfAllUsrs = document.getElementsByTagName('h3');

function displayUsers(){
    fetch("https://api.github.com/users")
    .then(res=> res.json())
    .then(users=>{
        users.forEach(element => {
            const card = document.createElement('div');
            const imag = document.createElement('img');
            const login = document.createElement('h3');
            const githubURL = document.createElement('a');
            const breakLine = document.createElement('br');

            card.classList.add('card');

            imag.src = element.avatar_url ;
            console.log(element);

            login.textContent = element.login;
            githubURL.href = element.html_url;
            githubURL.textContent='View Profile';
            githubURL.target= '_blank'

            card.appendChild(imag);
            card.appendChild(login);
            card.appendChild(githubURL);
            card.appendChild(breakLine);


            cardsContant.appendChild(card);

        });
        
    })
    .catch(err=>{console.error('Error ')});
}

displayUsers();
