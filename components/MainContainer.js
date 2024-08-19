import Head from "next/head";
import A from "./A";

function MainContainer({ children, keywords }) {
  return (
    <>
      <Head>
        <meta keywords={"arman, nextjs " + keywords}></meta>
        <title>Главная сраница</title>
      </Head>
      <div className="navbar">
        <A href="/" text={"Главная"} />
        <A href="/users" text={"Пользователи"} />
      </div>
      <div>{children}</div>
      <style jsx>{`
        .navbar {
          background: orange;
          paddidng: 15px;
        }
      `}</style>
    </>
  );
}

export default MainContainer;
