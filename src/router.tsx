import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Explore } from './screens/Explore';
import { Home } from './screens/Home';


export function Router(){
  return(
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </BrowserRouter>
  )
} 