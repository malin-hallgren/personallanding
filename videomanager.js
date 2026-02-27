//selecting all close buttons since there are several on the page, they are just hidden
const closeModalButtons = document.querySelectorAll('.popup-close');

//defining behaviour for individual close buttons
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {

        const modal = button.closest('.popup');

        //In case we ever have more than one video per page
        const trailerVideo = modal?.querySelectorAll('iframe.video');

        trailerVideo?.forEach((trailerVideo) => {
            const videoSrc = trailerVideo.src;
            trailerVideo.src = '';
            trailerVideo.src = videoSrc;
        });
    });
});