import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import admin from "firebase-admin";
import { init } from "~/firebase";

export const useData = routeLoader$(async () => {
  init();

  const dataRef = await admin.firestore().collection("data").limit(5).get();

  return dataRef.docs.map((doc: any) => {
    return {
      id: doc.id,
    };
  });
});

export default component$(() => {
  const data = useData();

  return (
    <>
      <h1>Hi 👋</h1>
      <p>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </p>
      <>
        {data.value.map((item: any) => (
          <div key={item.id}>{item.id}</div>
        ))}
      </>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
