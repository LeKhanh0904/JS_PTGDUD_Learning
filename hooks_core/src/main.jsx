import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseStateReview from './UseStateReview.jsx'
import UseEffectReview from './UseEffectReview.jsx'
import UseReducerReview from './UseReducerReview.jsx'
import UseReducerTest from './UseReducerTest.jsx'
import UseRefReview from './UseRefReview.jsx'
import UseRefTest from './UseRefTest.jsx'
import UseMemoReview from './UseMemoReview.jsx'
import UseCallbackReview from './UseCallbackReview.jsx'

import FetchReviewThen from './FetchReviewThen.jsx'
import FetchTest from './FetchTest.jsx'
import FetchReviewAsyncAwait from './FetchReviewAsyncAwait.jsx'
import AxiosReview from './AxiosReview.jsx'

import App_Examples_3_6 from './App_Examples_3_6.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <UseStateReview/> */}
    {/* <UseEffectReview/> */}
    {/* <UseRefTest/> */}
    {/* <UseReducerReview/> */}
    {/* <UseReducerTest/> */}
    {/* <UseRefReview/> */}
    {/* <UseMemoReview/> */}
    {/* <UseCallbackReview/> */}

    {/* <FetchReviewThen/> */}
    <FetchTest/>
    {/* <FetchReviewAsyncAwait/> */}
    {/* <AxiosReview/> */}

    {/* <App_Examples_3_6/> */}

  </StrictMode>,
)
