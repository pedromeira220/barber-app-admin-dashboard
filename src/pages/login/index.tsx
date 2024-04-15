export function Login() {
  return (
    <div>
      <h1>Nessa tela terá a autenticação para o painel administrativo</h1>
      <p>
        Como essa aplicação apenas será acessada por nós (administradores do
        sistema) e terá funcionalidades que podem modificar o comportamento do
        nosso sistema temos que ter uma maneira de proteger essa aplicação de
        acessos não autorizados
      </p>
      <p>
        Por isso implementamos essa camada de autenticação para controle de
        acesso e apenas nós teremos a senha
      </p>
    </div>
  )
}
