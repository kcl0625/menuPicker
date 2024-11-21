import Chat from './Chat';
import './css/style.css';

function App() {
  return (
    <div id='wrap'>
      <div className='wrap-bg'>
        <h1 id='title'>오늘 뭐 먹지?</h1>
        <section className='content'>
          <Chat talker='user' work=''></Chat>
        </section>
      </div>
    </div>
  );
}

export default App;
