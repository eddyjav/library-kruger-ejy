import Book from "../components/book";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";

const Index = () => {
  const store = useAppContext();
  return (
    <Layout>
      <h1>Home</h1>
      <hr />
      <div className="card-columns animate__animated animate__fadeInRight">
        {store.items.map((item) => (
          <Book key={item.id} item={item} />
        ))}
      </div>
    </Layout>
  );
};

export default Index;
