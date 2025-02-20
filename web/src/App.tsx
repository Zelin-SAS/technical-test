import { useEffect, useState } from 'react';
import './App.css'
import Router from './services/router';
import useReactPath from './services/hooks/usePath';

export default function App() {
  const [currentPage, setCurrentPage] = useState<ReturnType<typeof Router>>(Router());
  const path = useReactPath();

  useEffect(() => {
    setCurrentPage(Router());
  }, [path]);

  return typeof currentPage === 'function' ? currentPage() : currentPage;
}
