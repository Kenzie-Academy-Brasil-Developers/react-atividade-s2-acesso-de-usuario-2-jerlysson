import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Customer({ member }) {
  const params = useParams();
  const memberId = params.id;
  const membe = member.find((element) => element.id === memberId);
  return (
    <div>
      <h1>Detalhes do cliente</h1>

      <p>Nome: {membe && membe.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
}

export default Customer;
