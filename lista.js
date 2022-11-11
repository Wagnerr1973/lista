function FuncaoAcrescentar() {

    // Crie uma linha no nó:
    const node = document.createElement("li")

    let itemlista = (document.getElementById("itemlista").value)

    // Criando um novo nó de texto:
    const textnode = document.createTextNode(itemlista)

    //Anexando o nó de texto ao nó da linha: (Em outras palavras: chamando o textnode
    // de filho do node:)
    node.appendChild(textnode)

    // Anexando a linha ao nó da lista: (Em outras palavras: chamando o node
    // de filho da lista "Minha Lista":)
    document.getElementById("MinhaLista").appendChild(node)

    let cor = "";

    cor = document.querySelector('input[name="cores"]:checked').value

    node.style.color = cor

}
