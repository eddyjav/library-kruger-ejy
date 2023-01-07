import Book from "../components/book";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";

const Index = () => {
  const store = useAppContext();
  return (
    <Layout>
      {store.items.map((item) => (
        <Book key={item.id} item={item} />
      ))}
    </Layout>
  );
};

export default Index;
