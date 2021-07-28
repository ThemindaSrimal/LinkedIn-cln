import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => {

        return (
            <div className="widgets__article">
                <div className="widgets__articleLeft">
                    <FiberManualRecordIcon />
                </div>

                <div className="widgets__articleRight">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        )
    };

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle('Tesla profit surge driven by record car deliveries','Top news - 7896 readers')}
            {newsArticle('Key obtained to unlock files from cyber attack','Top news - 6456 readers')}
            {newsArticle('Pricey printer ink more expensive than champagne','Tech - 5643 readers')}
            {newsArticle('Face palm: The fight to get a new emoji made','Social - 3563 readers')}
            {newsArticle('Why remote working leaves us vulnerable to hacks','Security - 5643 readers')}
            
        </div>
    )
};

export default Widgets
