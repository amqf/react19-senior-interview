import SyntaxHighlighter from 'react-syntax-highlighter';
import "../../App.css";
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Index() {
  const code = `
import { use } from 'react';

function UserDetails({ userId }) {
  const user = use(fetchUser(userId)); // Pode receber Promises diretamente
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
`;
  return (
    <>
      <h1>Novos Hooks Fundamentais</h1>
      <SyntaxHighlighter language="javascript" style={dark}>
        {code}
      </SyntaxHighlighter>
    </>
  );
}

export default Index;
