import '../css/homeview.global.scss';

import React, { Component } from 'react';
import HomeViewFeed from '../components/homeViewFeed';

interface HomeViewProps {
    selectedInstance: GameInstance;
}

interface HomeViewState {

}

class HomeView extends Component<HomeViewProps, HomeViewState> {
    render(): JSX.Element {
        return (
            <React.Fragment>
                <HomeViewFeed />
                <footer id="homeview__footer">
                    <button id="homeview__footer-play-btn" className="green-btn">Play</button>
                </footer>
            </React.Fragment>
        );
    }
}

export default HomeView;
