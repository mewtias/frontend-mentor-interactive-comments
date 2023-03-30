import { GlobalStyle } from './components/global';
import { CommentSection } from './components/CommentSection';

import DATA from '../api/data.json'

function App() {
  const { comments } = DATA;
  console.log(comments)
  return (
    <>
      <GlobalStyle />
      <CommentSection comments={comments} />
    </>
  )
}

export default App
