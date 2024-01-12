import "./styles.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-dom";

export default function Pagination() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, settotalPages] = useState(0);
  let limit = 10;

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${
          (page - 1) * limit
        }`
      );
      const data = await response.json();
      setProducts(data.products);
      setLoading(false);
      settotalPages(Math.ceil(data.total / limit));
    } catch (error) {
      console.error("Error occurred:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const selectPageHandler = (selectedpage) => {
    if (selectedpage >= 1 && selectedpage <= totalPages) setPage(selectedpage);
  };

  return (
    <>
      {isLoading === true ? (
        <p>Fetching Data from API.......</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>title</th>
                <th>Description</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>
                    <img
                      className="products-image"
                      src={product.thumbnail}
                      alt={product.title}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span
            className={page < 2 ? "disabledpagination" : ""}
            onClick={() => {
              selectPageHandler(page - 1);
            }}
          >
            Prev{" "}
          </span>

          {[...Array(totalPages)].map((_, index) => (
            <span
              key={index}
              className={page === index + 1 ? "pagination-selected" : ""}
              onClick={() => {
                selectPageHandler(index + 1);
              }}
            >
              {index + 1}
            </span>
          ))}
          <span
            className={totalPages === page ? "disabledpagination" : ""}
            onClick={() => {
              selectPageHandler(page + 1);
            }}
          >
            {" "}
            Next{" "}
          </span>
        </div>
      )}
    </>
  );
}


