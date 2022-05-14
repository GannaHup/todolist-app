import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInitData } from './store/actions/todolist';
import ListPage from './pages/ListPage';
import FormPage from './pages/FormPage';

function App() {
  const { loading, currentPage } = useSelector(state => state.todolist)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getInitData())
  }, [])

  if (loading) return <div className='loading-page'>Loading...</div>

  return (
    <div className="App">
      {(() => {
        switch (currentPage) {
          case 'form-create':
            return <FormPage currentPage={currentPage} title="Create Todo" />
          case 'form-edit':
            return <FormPage currentPage={currentPage} title="Edit Todo" />
          default:
            return <ListPage />
        }
      })()}
    </div>
  );
}

export default App;
