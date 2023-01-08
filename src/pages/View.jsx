import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";

const View = () => {
  const [item, setItem] = useState(null);

  const params = useParams();
  const store = useAppContext();

  useEffect(() => {
    const book = store.getItem(params.bookId);
    setItem(book);
  }, []);

  if (!item) {
    return <Layout>Item not found</Layout>;
  }

  return (
    <Layout>
      <div className="row mt-5">
        <div className="col-4">
          {item?.cover ? (
            <img
              src={item.cover}
              width="400"
              alt={item.name}
              className="img-thumbnail animate__animated animate__flip"
            />
          ) : (
            ""
          )}
        </div>
        <div className="col-8">
          <h3>{item?.title}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Author:</b> {item?.author}
            </li>
            <li className="list-group-item">
              <b>Introduction:</b> {item?.intro}
            </li>
            <li className="list-group-item">
              <b>Completed:</b> {item?.completed ? "Leído" : "Por terminar"}
            </li>
            <li className="list-group-item">
              <b>Review:</b> {item?.review}
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default View;
