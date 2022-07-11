import { styled } from '../src/stitches.config'

const Button = styled('button', {
    backgroundColor: "black",
});

const Back = styled('div', {
    backgroundColor: "black",
    fontSize: "23px",
    color: "red",
});


function Sobre() {
    return (
        <div>
            <div className={Back}>
                <a href='../'>Página Inicial</a>
            </div>

            <div className={Button}>
                <a href='www.facebook.com' />facebook
            </div>
        </div>
    )
};

export default Sobre
