import { Link } from "react-router-dom";

function Home({ member, setMember }) {
  return (
    <div>
      <ul>
        {member.map((elm) =>
          elm.type === "pj" ? (
            <li key={elm.id}>
              <Link to={`/company/${elm.id}`}>{elm.name}</Link>
            </li>
          ) : (
            <li key={elm.id}>
              <Link to={`/customer/${elm.id}`}>{elm.name}</Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
export default Home;
