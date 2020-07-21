import React from 'react';
import MainLayout from "./layout/MainLayout";
import Header from "./components/Header";
import DownloadApp from "./sections/DownloadApp";

function App() {
    return (
        <MainLayout>
            <Header/>
            <DownloadApp/>
        </MainLayout>
    );
}

export default App;
