import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Company({ member }) {
  const params = useParams();
  const memberId = params.id;
  const membe = member.find((element) => element.id === memberId);

  return (
    <div>
      <h1>Detalhes da Empresa</h1>

      <p>Nome da empresa: {membe && membe.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
}
export default Company;
