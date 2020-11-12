# exercicio-react-i
Meu Primeiro Projeto React do Zero


# React I

## Olá, este é meu primeiro projeto React iniciado do zero!

O projeto faz parte da entrega do exercício semanal que tem o  objetivo de  desenvolver na prática a didática passada na aula de React-I do Reprograma.

Comecei  usando dois aquivos existente, o App.js e o Index.js, que foram devidamente modificados para receber os novos componentes do projeto.
Para da sequencia ao projeto, criei uma pasta componentes dentro do src e dentro dela criei os seguintes arquivos para serem usados:

### Titulo- 
Criei um componete titulo  usando função que recebeu uma props como parametro. Retornando um h1 para um titulo e h2 para um subtitulo, exportei com default e o nome da função criada. Importei passando o caminho no aquivo no App.js para ser renderizado na tela.

### Lista- 
O componente Lista foi criado para obter as informaçoes vindo do aquivo que criei simulando o JSON. Usando map() pude pegar esses dadaos e colocar dentro de uma <ol> as informaçoes, usando tags html que foram: <img> para inserir a imagem,<h2> para o nome e <p> para descrição. O id usei na tag ol colocando dentro de uma key, pois toda vez que usamos lista (array) no react ele pede uma chave única. Nas tags criei uma className para fazer um style.ccs.

### JsonInforme- 
Criei um  arquivo que simula o JSON, (onde tem dodas as informações a serem usadas)  para retornar os elementos que quero renderizar na tela, contendo 4 chaves e valores: id, nome, descrição e imagem. Exportei e no App.js importei como seguindo os procedimento de import e exports.

### Estilo- 
Foi criado um componente para colocar timidamente o style.ccs. Nele coloquei cores, modifiquei a font, também o posicionamento e tamanho.

### Footer-
 Foi criado só para colocar meu nome como criador. 
