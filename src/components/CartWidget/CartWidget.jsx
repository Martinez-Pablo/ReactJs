import imagen from '../../assets/react.svg'

const CartWidget = () => {
    return (
        <div>
            {/* Si la imagen esta en src utilizamos esta manera  */}
            {/* <img src={imagen} alt='imagen' /> */}
            {/* si esta en una carpeta publica (a la misma altura del index) hacemos lo siguiente  */}
            <img src='/public/vite.svg' alt='imagen' />
            {/* existe una tercera forma que es compiando la src directa de alguna imagen de internet  */}
        </div>
    )
}


export default CartWidget