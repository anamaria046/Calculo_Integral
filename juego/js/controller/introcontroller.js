 const video = document.getElementById('videoIntro');
        const btnSaltar = document.getElementById('btnSaltar');

        // Inicia el video cuando el usuario hace clic en cualquier parte o en el botón
        const iniciarVideo = () => {
            video.play()
                .then(() => console.log('Video reproducido con sonido'))
                .catch(err => console.warn('El navegador bloqueó el autoplay con sonido:', err));
            document.removeEventListener('click', iniciarVideo);
        };

        document.addEventListener('click', iniciarVideo);
        btnSaltar.addEventListener('click', () => {
            // Aquí podrías redirigir o pasar a la siguiente página
            console.log('Intro saltada');
        });