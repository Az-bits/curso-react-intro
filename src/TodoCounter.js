import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <h1 className="TodoCounter">
      {completed === total ? (
        <>Felicidades has completado TODOS los TODOS.</>
      ) : (
        <>
          Haz completado <span>{completed}</span> de <span>{total}</span> TODOS
        </>
      )}
      {/* Haz completado <span>{completed}</span> de <span>{total}</span> TODOS */}
    </h1>
  );
}
export { TodoCounter };
