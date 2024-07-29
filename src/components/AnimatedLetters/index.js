import './index.scss';

const AnimatedLetters = ({ letterClass, strArray, index }) => {
    return (
        <span>
            {
                strArray.map((text, i) =>
                    <span key={text + i} className={`${letterClass} _${i + index}`}>
                        {text}
                    </span>
                )
            }
        </span>
    )
}
export default AnimatedLetters;