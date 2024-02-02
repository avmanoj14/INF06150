import './Cats.css';
import panel from '../panel/panel-list';
import Panel from '../panel/Panel';

function Cats() {
  return (
    <main className="panels">
      {panel.map((item, index) => (
        <Panel key={index} path={item.path} title={item.title}
        textbox1={item.textbox1} textbox2={item.textbox2} textbox3={item.textbox3}/>
      ))}
    </main>
  );
}

export default Cats;