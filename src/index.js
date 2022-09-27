const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const dogContainer = document.getElementById('dog-image-container');
const dogBreeds = document.getElementById('dog-breeds');

document.addEventListener("DOMContentLoaded", () => {
    // Challenge 1
    fetch(imgUrl)
        .then(res => res.json())
        .then(data => {
            data.message.forEach(image => {
                const dogImage = document.createElement('img');
                dogImage.src = image;
                dogContainer.append(dogImage);
            })
        })

    // Challenge 2
    // fetch(breedUrl)
    // .then(res => res.json())
    // .then(data => {
    //     for(const breed in data.message) {
    //         const li = document.createElement('li');
    //         li.textContent = breed;
    //         dogBreeds.append(li);
    //     }    
    // })

    // Challenge 2 - Elaborate
    fetch(breedUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data.message);
            const breedList = data.message;

            for (const breed in breedList) {
                if (breedList[breed].length === 0) {
                    const li = document.createElement('li')
                    li.textContent = breed;
                    dogBreeds.append(li);
                } else {
                    for (let i = 0; i < breedList[breed].length; i++) {
                        const li = document.createElement('li')
                        li.textContent = `${breedList[breed][i]} ${breed}`;
                        dogBreeds.append(li);
                    }
                }
            }

            // Challenge 3
            dogBreeds.addEventListener('click', e => {
                e.target.style.color = "red";
            })

            // Challenge 4
            document.getElementById('breed-dropdown').addEventListener('change', e => {
                const list = document.querySelectorAll('li');
                list.forEach(element => element.style.display = 'list-item')
                list.forEach(element => {
                    if (element.textContent[0] !== e.target.value) {
                        element.style.display = 'none'
                    }
                })

                if (document.getElementById('breed-dropdown').value === 'all') {
                    list.forEach(element => element.style.display = 'list-item');
                }
            })
        })
})
