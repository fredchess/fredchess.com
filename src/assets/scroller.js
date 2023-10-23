export default () => {
    let element = document.getElementById('scroll-top');

    element.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
}