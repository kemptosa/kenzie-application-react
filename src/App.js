import './App.css';

function UserArticle(props) {
  return (
    <article className='user-item'>
      {props.user.name || "<NO NAME>"}
    </article>
  )
}

function App() {

  const users = [
    { name: "Randy Cox", id: 1 },
    { name: "Cody Thaller", id: 2 },
    { name: "Michelle Hoelzer", id: 3 }
  ];

  return (
    <div>
      <h1>User names</h1>
      <ul>
        {users.map((user)=>
        <li key={user.id}>
          <UserArticle user={user}/>
        </li>)}
      </ul>
    </div>
  );
}

export default App;
