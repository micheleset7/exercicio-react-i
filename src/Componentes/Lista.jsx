import image from "./JsonInforme"

function Lista() {
    return (
        <div className='div'>
            {image.map(function (item) {
                return (
                    <ol key={item.id}>
                        <img className='img' src={item.imagem} alt="imagem de lugares" />
                        <h2>{item.nome}</h2>
                        <p className='descricao'>{item.descricao}</p>
                    </ol>
                )
            }
            )}

        </div>
    )
}
export default Lista