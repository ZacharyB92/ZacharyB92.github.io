fetch('json/temples.json')
    .then(response => response.json())
    .then(
        response => {
            console.log(response);
            // temple 1
            document.querySelector('#temple1-name').textContent = response[0].TempleName;
            document.querySelector('#image1').setAttribute('src', response[0].Image);
            document.querySelector('#address1').textContent = response[0].StreetLine1;
            document.querySelector('#telephone1').textContent = response[0].Telephone;
            document.querySelector('#email1').textContent = response[0].Email;
            response[0].Services.forEach(
                service=> {document.querySelector('#services1').innerHTML += `<li>${ service }</li>`; }
            )
            response[0].History.forEach(
                history=> {document.querySelector('#history1').innerHTML += `<li>${ history }</li>`;}
            )
            response[0].Baptism.forEach(
                baptism=> {document.querySelector('#baptism1').innerHTML += `<li>${ baptism }</li>`;}
            )
            response[0].Endownment.forEach(
                endownment=> {document.querySelector('#endownment1').innerHTML += `<li>${ endownment }</li>`;}
            )
            response[0].Sealing.forEach(
                sealing=> {document.querySelector('#sealing1').innerHTML += `<li>${ sealing }</li>`;}
            )
            response[0].Closures.forEach(
                closure=> {document.querySelector('#closure1').innerHTML += `<li>${ closure }</li>`;}
            )
            // temple 2
            document.querySelector('#temple2-name').textContent = response[1].TempleName;
            document.querySelector('#image2').setAttribute('src', response[1].Image);
            document.querySelector('#address2').textContent = response[1].StreetLine1;
            document.querySelector('#telephone2').textContent = response[1].Telephone;
            document.querySelector('#email2').textContent = response[1].Email;
            response[1].Services.forEach(
                service=> {document.querySelector('#services2').innerHTML += `<li>${ service }</li>`; }
            )
            response[1].History.forEach(
                history=> {document.querySelector('#history2').innerHTML += `<li>${ history }</li>`;}
            )
            response[1].Baptism.forEach(
                baptism=> {document.querySelector('#baptism2').innerHTML += `<li>${ baptism }</li>`;}
            )
            response[1].Endownment.forEach(
                endownment=> {document.querySelector('#endownment2').innerHTML += `<li>${ endownment }</li>`;}
            )
            response[1].Sealing.forEach(
                sealing=> {document.querySelector('#sealing2').innerHTML += `<li>${ sealing }</li>`;}
            )
            response[1].Closures.forEach(
                closure=> {document.querySelector('#closure2').innerHTML += `<li>${ closure }</li>`;}
            )
            //temple 3
            document.querySelector('#temple3-name').textContent = response[2].TempleName;
            document.querySelector('#image3').setAttribute('src', response[2].Image);
            document.querySelector('#address3').textContent = response[2].StreetLine1;
            document.querySelector('#telephone3').textContent = response[2].Telephone;
            document.querySelector('#email3').textContent = response[2].Email;
            response[2].Services.forEach(
                service=> {document.querySelector('#services3').innerHTML += `<li>${ service }</li>`; }
            )
            response[2].History.forEach(
                history=> {document.querySelector('#history3').innerHTML += `<li>${ history }</li>`;}
            )
            response[2].Baptism.forEach(
                baptism=> {document.querySelector('#baptism3').innerHTML += `<li>${ baptism }</li>`;}
            )
            response[2].Endownment.forEach(
                endownment=> {document.querySelector('#endownment3').innerHTML += `<li>${ endownment }</li>`;}
            )
            response[2].Sealing.forEach(
                sealing=> {document.querySelector('#sealing3').innerHTML += `<li>${ sealing }</li>`;}
            )
            response[2].Closures.forEach(
                closure=> {document.querySelector('#closure3').innerHTML += `<li>${ closure }</li>`;}
            )
            //temple 4
            document.querySelector('#temple4-name').textContent = response[3].TempleName;
            document.querySelector('#image4').setAttribute('src', response[3].Image);
            document.querySelector('#address4').textContent = response[3].StreetLine1;
            document.querySelector('#telephone4').textContent = response[3].Telephone;
            document.querySelector('#email4').textContent = response[3].Email;
            response[3].Services.forEach(
                service=> {document.querySelector('#services4').innerHTML += `<li>${ service }</li>`; }
            )
            response[3].History.forEach(
                history=> {document.querySelector('#history4').innerHTML += `<li>${ history }</li>`;}
            )
            response[3].Baptism.forEach(
                baptism=> {document.querySelector('#baptism4').innerHTML += `<li>${ baptism }</li>`;}
            )
            response[3].Endownment.forEach(
                endownment=> {document.querySelector('#endownment4').innerHTML += `<li>${ endownment }</li>`;}
            )
            response[3].Sealing.forEach(
                sealing=> {document.querySelector('#sealing4').innerHTML += `<li>${ sealing }</li>`;}
            )
            response[3].Closures.forEach(
                closure=> {document.querySelector('#closure4').innerHTML += `<li>${ closure }</li>`;}
            )
        }
    );