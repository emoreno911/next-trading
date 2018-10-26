import React, {Component} from 'react';
import Head from 'next/head';
import appstyle from '../assets/style';
import searchIcon from '../assets/searchIcon';
import navIcon from '../assets/logoIcon';

class Layout extends Component {
  componentDidMount() {
    this.content.setAttribute('data-selected', 1);
    this.content.nextSibling.setAttribute('data-selected', 1);
  }
  toggleSearch = () => {
    const $search = this.content.querySelector('.search');
    $search.classList.toggle('open');
  }
  selectTabEvt = (evt) => {
    evt.preventDefault();
    const tab = evt.currentTarget.getAttribute('data-tab');
    this.selectTab(tab);
  }
  selectTab = (tab) => {
    this.content.setAttribute('data-selected', tab);
    this.content.nextSibling.setAttribute('data-selected', tab);
  }
  render() {
    return (
      <div>
        <Head>
          <title>Next Tradding App</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.1.3/solar/bootstrap.min.css" />
        </Head>
        <div className="root">
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand" href="#">
                <img src={navIcon} className="navIcon" alt="logo" /> Next Trading
              </a>
              <a href="#" className="search-toggler" onClick={this.toggleSearch}>
                <img src={searchIcon} alt="search"/>
              </a>
              <div className="collapse navbar-collapse" id="navbarText">
              </div>
            </nav>
            <div className="tab-content main" ref={el => this.content = el}>
              {this.props.children}
            </div>
            <nav className="fixed-bottom nav-custom-bottom">
              <div className="nav nav-tabs nav-justified" role="tablist">
                <a className="nav-item nav-link" data-tab="1" onClick={this.selectTabEvt}>Tickers</a>
                <a className="nav-item nav-link" data-tab="2" onClick={this.selectTabEvt}>Trade</a>
                <a className="nav-item nav-link" data-tab="3" onClick={this.selectTabEvt}>Orders</a>
              </div>
            </nav>
            <style jsx global>{appstyle}</style>
        </div>
      </div>
    )
  }
}

export default Layout;