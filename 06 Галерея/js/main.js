
        //Если не работает, то 50 запросов в день кончились.

const apiKey = 'gqFHkE5qkyaOInsV9UchQCGt_6tWoFovCAbRxPYq8YQ';
        const gallery = document.getElementById('gallery');
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modalImg');
        const loading = document.getElementById('loading');

        async function getUnsplashImages(count = 8) {
            const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return await response.json();
            } catch (error) {
                console.error('Ошибка фетча:', error);
                loading.textContent = 'Ошибка загрузки картинок.';
                return [];
            }
        }

        function showImages(images) {
            loading.style.display = 'none';
            if (images.length === 0) {
                loading.textContent = 'Нет картинок.';
                return;
            }

            images.forEach(image => {
                const galleryItem = document.createElement('div');
                galleryItem.classList.add('gallery-item');

                const img = document.createElement('img');
                img.src = image.urls.small;
                img.style.width = "150px";
                img.style.height = "150px";

                img.addEventListener('click', () => {
                    modal.style.display = "block";
                    modalImg.src = image.urls.regular;

                });

                galleryItem.appendChild(img);
                gallery.appendChild(galleryItem);
            });


            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            });
        }


        window.addEventListener('load', async () => {
            const images = await getUnsplashImages();
            showImages(images);
        });