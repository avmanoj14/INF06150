import "./Panel.css";

function Panel({ title, path, textbox1, textbox2, textbox3 }) {
  return (
    <div className="panel__item">
      <img src={path} alt={title} />
      <h1>{title}</h1>
      <p>{textbox1}</p>
      <p>{textbox2}</p>
      <p>{textbox3}</p>
    </div>
  );
}

export default Panel;
