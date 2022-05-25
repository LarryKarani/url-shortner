import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Context } from './context/context';
import Layout from './components/Layout';
import { useEffect, useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {

useEffect(() => {
  const urlsList = readValue('urls');
  if (urlsList && urlsList.length > 0){
     return 
  }else{
    setValue('urls', []);
  } 
})
const [contextValue, setContextValue] = useState<any>({
  urls: [],
});
  const queryClient = new QueryClient();

const [readValue, setValue, ,] = useLocalStorage();



  return (
    <div className='h-full bg-gray-100'>
      <BrowserRouter>
        <Context.Provider value={{ contextValue, setContextValue }}>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path='/' element={<Layout/>} />
            </Routes>
          </QueryClientProvider>
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
