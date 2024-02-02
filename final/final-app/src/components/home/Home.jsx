import Card from '../card/Card';
import cards from '../card/card-list';
import '../../App.css';
import '../../main.css';

function Home({pageChange}) {
  return (
    <main className="main">
        <div className="cards">
        {cards.map((item, index) => (
          <Card key={index} title={item.title} path={item.path} text={item.text} pageChange={pageChange} showButton={item.showButton}/>
        ))}
        </div>

      </main>
  );
}

export default Home;
