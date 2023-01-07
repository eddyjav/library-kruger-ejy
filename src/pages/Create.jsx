import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [intro, setIntro] = useState("");
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState("");

  const store = useAppContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "author":
        setAuthor(value);
        break;
      case "intro":
        setIntro(value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "review":
        setReview(value);
        break;

      default:
    }
  };

  const handleOnChangeFile = (e) => {
    const element = e.target;
    const file = element.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = function () {
      setCover(reader.result.toString());
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      completed,
      review,
    };

    //TODO: mandar a registrar libros
    store.createitem(newBook);
    navigate("/");
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <div>
          <div>Title</div>
          <input
            onChange={handleChange}
            name="title"
            type="text"
            value={title}
          />
        </div>

        <div>
          <div>Author</div>
          <input
            onChange={handleChange}
            name="author"
            type="text"
            value={author}
          />
        </div>

        <div>
          <div>Cover</div>
          <input onChange={handleOnChangeFile} name="cover" type="file" />
          <div>
            {!!cover ? <img src={cover} width="200" alt="preview" /> : ""}
          </div>
        </div>

        <div>
          <div>Introduction</div>
          <input
            onChange={handleChange}
            name="intro"
            type="text"
            value={intro}
          />
        </div>

        <div>
          <div>Completed</div>
          <input
            onChange={handleChange}
            name="completed"
            type="checkbox"
            value={completed}
          />
        </div>

        <div>
          <div>Review</div>
          <input
            onChange={handleChange}
            name="review"
            type="text"
            value={review}
          />
        </div>

        <input type="submit" value="Register Book" />
      </form>
    </Layout>
  );
};

export default Create;
