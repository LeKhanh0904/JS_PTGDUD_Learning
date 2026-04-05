import UseStateReview from './UseStateReview.jsx'
import UseEffectReview from './UseEffectReview.jsx'
import UseReducerReview from './UseReducerReview.jsx'
import UseRefReview from './UseRefReview.jsx'
import UseMemoReview from './UseMemoReview.jsx'
import UseCallbackReview from './UseCallbackReview.jsx'

import FetchReviewThen from './FetchReviewThen';
import FetchAsyncAwait from './FetchReviewAsyncAwait';
import AxiosReview from './AxiosReview';
import { useState } from 'react';
import './App.css';

const HookcoreContainer = () => {
    return (
      <div style={{display: 'flex', gap: '20px', padding: '20px'}}>
        <UseStateReview />
        <UseEffectReview />
        <UseReducerReview />
        <UseRefReview />
        <UseMemoReview />
        <UseCallbackReview />
      </div>
    )
}

const ApiContainer = () => {
    return (
      <div style={{display: 'flex', gap: '20px', padding: '20px'}}>
        <FetchReviewThen />
        <FetchAsyncAwait />
        <AxiosReview />
      </div>
    )
}

function App() {
  // Sửa: Dùng string để biết đang ở tab nào ('api' hoặc 'hook')
  const [currentTab, setCurrentTab] = useState('api'); 

  return (
    <div>
      <div style={{marginBottom: 20}}>
        <button 
          onClick={() => setCurrentTab('api')}
          style={{backgroundColor: currentTab === 'api' ? 'green' : ''}}
        >
          Hiển thị API Review
        </button>
        
        <button 
          onClick={() => setCurrentTab('hook')}
          style={{marginLeft: 10, backgroundColor: currentTab === 'hook' ? 'green' : ''}}
        >
          Hiển thị Hook-core Review
        </button>
      </div>

      {currentTab === 'api' && <ApiContainer />}
      {currentTab === 'hook' && <HookcoreContainer />}
    </div>
  );
}

export default App;