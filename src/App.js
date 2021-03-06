import { useRef } from 'react';
import { FaUndo, FaRedo, FaRegTrashAlt } from 'react-icons/fa';
import {
  usePageTitle,
  useUndo,
  usePersistentState,
  useFocusElement,
} from './hooks';

function App() {
  const [message, setMessage, onUndo, onRedo] = useUndo(
    usePersistentState('txt', '')
  );
  const messageRef = useRef(null);

  usePageTitle('Hooks Helpers');

  useFocusElement(messageRef, true);

  const onChange = (e) => setMessage(e.target.value);
  const onClear = () => setMessage('');

  return (
    <div className='App'>
      <textarea ref={messageRef} onChange={onChange} value={message} />
      <button onClick={onUndo}>
        <FaUndo />
      </button>
      <button onClick={onRedo}>
        <FaRedo />
      </button>
      <button onClick={onClear}>
        <FaRegTrashAlt />
      </button>
    </div>
  );
}

export default App;
