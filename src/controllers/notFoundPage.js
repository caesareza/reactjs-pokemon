import React from 'react';
import MissingPage from '../custom-404-page.jpg';

const NotFoundPage = () => (
    <div className="custom-404">
        <img src={MissingPage} alt="Missing Page" />
    </div>
)

export default NotFoundPage;