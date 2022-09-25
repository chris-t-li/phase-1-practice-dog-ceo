
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

document.addEventListener('DOMContentLoaded', () => {
    // Challenge 1
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => {
        for(const image in data.message) {
            const img = document.createElement('img');
            img.src = data.message[image];
            document.getElementById('dog-image-container').append(img);
        }
    })

    // Challenge 2
        fetch(breedUrl)
        .then(res => res.json())
        .then(data => {
            for(const breed in data.message) {
                if(data.message[breed].length === 0) {
                    const li = document.createElement('li');
                    li.textContent = breed;
                    document.getElementById('dog-breeds').append(li);
                } else {
                    for(let i=0; i< data.message[breed].length; i++) {
                        const li = document.createElement('li');
                        li.textContent = `${data.message[breed][i]} ${breed}`;
                        document.getElementById('dog-breeds').append(li);
                    }
                }   
            }
        })

    // Challenge 3
    document.getElementById('dog-breeds').addEventListener('click', e => {
        e.target.style.color = 'red';
    })

    // Challenge 4
    document.getElementById('breed-dropdown').addEventListener('change', e => {
        const list = document.querySelectorAll('li');
        list.forEach(element => element.style.display = 'list-item')
        list.forEach(element => {
            if(element.textContent[0] !== e.target.value) {
                element.style.display = 'none';
            }
        })
        if(document.getElementById('breed-dropdown').value === 'all') {
            list.forEach(element => element.style.display = 'list-item')
        }
    })
})



