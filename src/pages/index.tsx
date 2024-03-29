import type { GetServerSideProps, NextPage } from "next";

import { getSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import NavBar from "~/components/NavBar";
import { api } from "~/utils/api";

interface Props {
  user: {
    id: string;
  } & {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
}
const Home: NextPage<Props> = ({ user }) => {
  const { data, error } = api.pixelProject.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar ProfilePic={user.image ?? "defaultUserProfile"} />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="mx-auto w-full max-w-screen-2xl">
          {error && <div className="text-red-500">{error.message}</div>}
          <h2>Your Projects</h2>{" "}
          {data && (
            <div className=" flex  flex-wrap justify-start gap-4 rounded-xl p-3">
              <div className="card flex w-96 items-center justify-center border-2 border-dashed border-sky-500 bg-base-100 shadow-xl">
                <button className="btn-primary btn">Start New Project</button>
              </div>
              {data.map((project) => (
                <div
                  className="card w-96 bg-base-100 shadow-xl"
                  key={project.id}
                >
                  <figure>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width="600"
                      height="300"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{project.title}</h2>
                    <p>{project.description}</p>
                    <p>
                      Last Update: <b>{new Date().toDateString()}</b>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  if (!session)
    return {
      props: {},
      redirect: {
        destination: "/login",
      },
    };

  return {
    props: {
      user: session.user,
    },
  };
};

export default Home;
