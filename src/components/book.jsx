import { Link } from "react-router-dom";

const Book = ({ item }) => {
  return (
    <div className="card ms-3" style={{ maxWidth: 540 }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <Link to={`/view/${item.id}`}>
            <img
              src={item.cover}
              width="200"
              alt={item.title}
              className="card-img"
            />
            {/* <div>{item.title}</div> */}
          </Link>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title"> {item.title} </h5>
            <p className="card-text"> {item.author} </p>
            <p className="card-text">
              <small className="text-muted">
                {item?.completed ? "Leído" : "Por terminar"}{" "}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
