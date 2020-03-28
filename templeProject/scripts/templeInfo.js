fetch('json/temples.json')
    .then(response => response.json())
    .then(
        response => {
            console.log(response);

            document.querySelector('#temple-name').textContent =
                response[0].TempleName;

            response[0].services.forEach(
                services => {
                    document.querySelector('#services1').innerHTML +=
                        `<li>${ service}<li>`
                }
            )
        }
    )