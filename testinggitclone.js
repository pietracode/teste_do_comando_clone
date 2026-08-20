//Array
//para fazer uma Array no JS declaramos uma variavel com []
let listaDeExemplo = ['Pedro','Jõao', 'Roberta'];
// string sempre com '' e números não utilizam ''
let listaNumeros = [1, 2, 3, 4];
//para ver o tamanho de uma lista utilizamos o comando: length
//nomeDaLista.lenght
console.log(listaDeExemplo.length);
//vai mostrar 3, porque dentro desta lista tem 3 elemntos. 
//os elementos são guardados dentro dos [] 
//diferente dos elementos temos o indices que sempre começa do 0.
//então temos 2 indices (0,1,2)
//para acessar um elemento em especifico utilizamos o nome da lista e o elemento em especifico:
listaNumeros[2]
//vai mostrar o número 3. 
// > caso haja uma lista enormeee e você queira pegar o ultimo elemento daquela lista utilizamos o comando:
// nomeDaLista[nomeDaLista.length-1];
listaDeExemplo[listaDeExemplo.length-1];
//vai mostrar 'Roberta'.
//para adicionar um ou mais elementos ao final de uma lista utilizamos o .push()
//então se na listaNumeros eu quiser adicionar mais números 
listaNumeros.push(5,6)
//vai mostar listaNumeros[1, 2, 3, 4, 5, 6]

//>> a função .includes verifica se determinado elemento existe ou não dentro da list. ele devolve um valor booleano.
//nomeDaLista.includes(elementoParaProcurar);
listaNumeros.includes(5); // mostra true.
listaNumeros.includes(8); //mostra false.
//testando git pull remoto.
