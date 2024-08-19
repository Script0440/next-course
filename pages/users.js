import Link from "next/link";
import MainContainer from "../components/MainContainer";

function Users({ users }) {
  return (
    <MainContainer keywords={"users next js"}>
      <div>
        <h1>Список пользователей</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link legacyBehavior href={`/users/${user.id}`}>
                <a>{user.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </MainContainer>
  );
}

export default Users;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return { props: { users } };
}
