# Formulário em React
Uns dos meus primeiros projetos feito em React, onde desta vez eu desenvolvi um pequeno formulário.
<h3>Imagem do projeto:</h3>
<img src="https://github.com/sian19/formulario/blob/master/src/img/img-projeto.png">
<p>Nesta simples aplicação o usuário digita seu nome, email e uma pequena descrição dele mesmo. Feito isso se retorna na tela oque o usuário digitou e um botão para voltar a tela anterior.<p/>
</br>
<h3>Oque foi usado no desenvolvimento da aplicação:</h3>
<ul>
  <li>Os componentes foram renderizados em tela usando hooks(Funções).</li>
  <li>Se criou states para receber os valores captados via input pelo usuário.</li>
  <li>Na função enviar dentro da aplicação se criou um alert que é disparado caso o usuário deixe de digitar algum campo, pois nenhum campo pode ficar vazio.</li>
  <li>O código foi organizado de forma que dentro do componente principal (form) existe 4 componentes que são eles Nome, Email, TextArea e Modal onde cada um possui sua utilidade específica dentro da aplicação, deixando assim o código mais organizado.</li>
  <li>Foram passadas funções como props para serem utilizadas dentro dos componentes onde elas pegam os valores digitados pelo usuário onde o trabalho delas é serem executadas dentro dos componentes e fazer com que os valores sejam colocados dentro do seu respectivo state, por exemplo o oque foi digitado como nome deve ser colocado dentro do state nome e assim por diante.</li>
  <li>Para fazer com que o modal apareça ao usuário digitar os valores pedidos, foi criado um state chamado show onde ao ser identificado que o usuário digitou todos os valores pedidos em tela ele muda o seu estado de false para true onde automaticamente dentro da aplicação através de um operador ternário uma classe ira ser chamada e em seguida renderizada em tela se o valor do state show for true, no caso oque vai ser renderizado será o modal.</li>
  <li>foi criado também um objeto para cada vez que o usuário digitar os valores é passado para uma classe através de um constructor e então com um new é criado um objeto que é passado como props para o componente modal para serem renderizados esses valores em tela.</li>
</ul>
<h3>Link do projeto:</h3>
<a href="">Clique aqui</a>
