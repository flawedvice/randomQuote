import { useEffect } from 'react';
import { MdAutorenew } from 'react-icons/md';

const Randomizer = ({ getQuote }) => {

    // Animate icon while fetching new quote
    useEffect(() => {

        const iconRotate = (icon) => { icon.classList.add('icon-rotate') };
        const iconStatic = (icon) => { icon.classList.remove('icon-rotate') };

        const button = document.getElementById('randomizer');
        const icon = document.getElementById('icon-randomizer');

        button.addEventListener('click', () => {
            iconRotate(icon);
            setTimeout( () => iconStatic(icon), 1000);
        });
        return () => button.removeEventListener('click', () => iconRotate(icon));

    }, []);

    return (
        <button id="randomizer" onClick={ getQuote }>
            <p>random</p>
            <MdAutorenew id="icon-randomizer"/>
        </button>
    );
}

export default Randomizer;
