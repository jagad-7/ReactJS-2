import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NameList from './NameList';
import PersonList from './ListAndKey/PersonList';
import Name from './ListAndKey/Name';
import StyleSheet from './StyleSheet';
import Inline from './Inline';
import Form from './Form';
import LifecyleA from './Lifecycle/LifecyleA';
import LifecycleC from './Lifecycle/LifecycleC';
import FragmentDemo from './FragmentDemo';
import Table from './Table';
import PureCompo from './PureCompo';
import RegularCompo from './RegularCompo';
import ParentCompo from './ParentCompo';
import ParenComp from './ParenComp';
import RefcDemo from './RefcDemo';
import focusInput from './focusInput';
import FRParentInput from './FRParentInput';
import PortalDemo from './PortalDemo';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NameList />
    <PersonList />
    <Name />
    <StyleSheet />
    <Inline />
    <Form />
    <LifecyleA />
    <LifecycleC />
    <FragmentDemo />
    <Table />
    <ParentCompo />
    <ParenComp />
    <RefcDemo />
    <focusInput />
    <FRParentInput />
    <PortalDemo />
    <App />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
