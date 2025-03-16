 const dataForm = document.getElementById('dataForm');
        const outputDiv = document.getElementById('outputBlock');


        function saveDataToLocalStorage(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const desc = document.getElementById('desc').value;
            let done = 0;


            const dataObject = {
                Задача: name,
                Описание: desc,
                Готовность: done
            };


            const key = 'data_' + Date.now();


            localStorage.setItem(key, JSON.stringify(dataObject));


            dataForm.reset();


            displayDataFromLocalStorage();
        }


        function displayDataFromLocalStorage() {
            outputDiv.innerHTML = '';


            const itemCount = localStorage.length;


            for (let i = 0; i < itemCount; i++) {
                const key = localStorage.key(i);
                try {
                    const jsonString = localStorage.getItem(key);

                    if (jsonString) {

                        const object = JSON.parse(jsonString);

                        const objectDiv = document.createElement('div');
                        objectDiv.classList.add('object-container');
                        objectDiv.classList.add('note');

                        const keyHeader = document.createElement('h3');
                        const deleteButton = document.createElement('button');
                        const editButton = document.createElement('button');
                        const doneButton = document.createElement('button');
                        keyHeader.textContent = `${key}`;

                        deleteButton.textContent = "Удалить";
                        deleteButton.classList.add('deleteButton');
                        deleteButton.onclick = deleteData;

                        editButton.classList.add('editButton');
                        editButton.textContent = "Изменить";
                        editButton.onclick = openEditModal;

                        doneButton.classList.add('doneButton');
                        doneButton.textContent = "Выполнено";
                        doneButton.onclick = doneData;

                        objectDiv.appendChild(deleteButton);
                        objectDiv.appendChild(editButton);
                        objectDiv.appendChild(doneButton);
                        objectDiv.appendChild(keyHeader);


                        for (const prop in object) {
                            if (object.hasOwnProperty(prop)) {
                                const propertyParagraph = document.createElement('p');
                                propertyParagraph.textContent = `${prop}: ${object[prop]}`;
                                objectDiv.appendChild(propertyParagraph);
                            }
                        }


                        outputDiv.appendChild(objectDiv);
                    }
                } catch (error) {
                    console.error(`Ошибка при обработке ключа ${key}:`, error);
                    const stringDiv = document.createElement('div');
                    stringDiv.classList.add('object-container');
                    stringDiv.innerHTML = `<b>Ключ:</b> ${key}<br><b>Значение:</b> ${localStorage.getItem(key)}`;
                    outputDiv.appendChild(stringDiv);
                }
            }
        }

        function deleteData(){
            const key = this.closest('div').querySelector('h3').innerText;
            alert('da');
            console.log("Удаление " + key);
            localStorage.removeItem(key);
            displayDataFromLocalStorage();
        }

        function openEditModal(){
            const editModal = document.querySelector('#editModal');
            const editId = editModal.querySelector('h3');;
            const editName = editModal.querySelector('#editName');
            const editDesc = editModal.querySelector('#editDesc');
            const key = this.closest('div').querySelector('h3').innerText;

            editId.innerText = key;
            editName.value = this.closest('div').querySelectorAll('p')[0].innerText.replace("Задача: ","");
            editDesc.value = this.closest('div').querySelectorAll('p')[1].innerText.replace("Описание: ","");
            editModal.style.display = "block";
        }

        function editData(){
        const editModal = document.querySelector('#editModal');
        const editId = editModal.querySelector('h3');;
        const editName = editModal.querySelector('#editName').value;
        const editDesc = editModal.querySelector('#editDesc').value;
        const done = 0;

        const key = this.closest('div').querySelector('h3').innerText;
        const editedDataObject = {
                Задача: editName,
                Описание: editDesc,
                Готовность: done
            };




         localStorage.setItem(key, JSON.stringify(editedDataObject));
         displayDataFromLocalStorage();
         editModal.style.display = "none";
        }

        function doneData(){




            const key = this.closest('div').querySelector('h3').innerText;
            const editName = this.closest('div').querySelectorAll('p')[0].innerText.replace("Задача: ","");
            const editDesc = this.closest('div').querySelectorAll('p')[1].innerText.replace("Описание: ","");
            var done = this.closest('div').querySelectorAll('p')[2].innerText.replace("Готовность: ","");
            console.log(done);
            if (done == 0){ done = 1} else {done = 0};
            console.log(done);

        const editedDataObject = {
                Задача: editName,
                Описание: editDesc,
                Готовность: done
            };




         localStorage.setItem(key, JSON.stringify(editedDataObject));
         displayDataFromLocalStorage();
        }



        dataForm.addEventListener('submit', saveDataToLocalStorage);
        editDataForm.addEventListener('submit', editData);
        window.onload = displayDataFromLocalStorage;