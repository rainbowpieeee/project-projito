import React, {FC} from 'react';
import styles from './app.module.css';
import {Route, Routes} from "react-router-dom";
import NewsPage from "../../pages/news-page/news-page";
import MainPage from "../../pages/main-page/main-page";
import JournalPage from "../../pages/journal-page/journal-page";
import SamplePage from "../../pages/sample-page/sample-page";
import NotFoundPage from "../../pages/not-found-page/not-found-page";
import Layout from '../layout/layout';

const App: FC = () => {
  return (
    <div className={styles.app}>
      <Layout>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/news"} element={<NewsPage />} />
          <Route path={"/journal"} element={<JournalPage />} />
          <Route path={`/sample/:page`} element={<SamplePage />} />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
