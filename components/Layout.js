import React, {Component} from 'react';
import Head from 'next/head';
import appstyle from '../assets/style';

const searchIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAC20lEQVRIS7XVTWgTQRQA4DdvQVIJoVJQKRZ6EAXBUhAPRUEUsVD12AoiitD6Rw67k00OgrBY8Kftzu6hSHuyetCSVlG8CEJvIoJQf1DUevCQSpUqEhKa2tl5siUp+dmEGHWPw3vzzZt5M8sg4BsdHW1ZXl4+xRg7opTqQMQNRJRjjM0BwAwiTui6/joot3yMFQ8kk0ltfn4+5nneJUR8DgD3GWOzjLEfRNRERNsA4JBS6hgiPkbEqK7rX2tBa8D4+Pj6bDY7DQCtANDPOX9RLTFf4TUiOqxpWo9hGC+rxa4C/spTqdQjAFAA0Ms5X6qnfCHEOQAYBIAuzvmnoJxVwHGcBBEdzwfWNXlhMiHEIBF1t7W1dfX19XkVZ+CXm8vlPiPi/lrbUq0iy7LWRSKRNwBwhXN+qwKwbZszxno45wfr2ZagGMdxzkgpB+Lx+O4KQAgxAwDTnPMbjQLDw8MbGWMLSqnWRCKxUDwPGxkZWdQ07ahhGM8aBfw8IURKKXXaNM0nJYAQwkPEHbquf/hL4BUAXOWcT5YAtm1nEXFPrV6uBxZCfASAOOf8YXkF/iXxOyBZz0RBMZZlhcLhcBoAOk3TfFcOCACIcM77GwVc1+2WUt7MZDJbLMvyL+vax1zX7ZBSPg2FQu3RaPR7I4jjOP62vDUM42JFm+Y7YIqIfsZisYE/BfzVK6XuKKW2m6a5GAi4rrtJSjmLiJc552P1Io7jHJBS3tM07Wy1M1x7TR3H6SQiv4fH0un0oGVZv2pB/spXVlYmNU0L++9YLBabCoov+R8IIbZ6nndX07QIY8yWUj6Ix+PfCol+tzQ3N+8jogtEtBcAzhMRMcZuE9HJIKQE8CfKP90nPM+LMsZ2IeIXAPAPv0kp1Q4A/s2f8DxPFPbctu3eakgFUFzm0NDQZkTciYgtALCklJrLZDLvy1vRz6mG1ATqPexCXBDyT4GgSv45UI78F6AIuf4bc4ZqrMk9DXgAAAAASUVORK5CYII=";

class Layout extends Component {
  componentDidMount() {
    this.content.setAttribute('data-selected', 1);
    this.content.nextSibling.setAttribute('data-selected', 1);
  }
  toggleSearch = () => {
    const $search = this.content.querySelector('.search');
    $search.classList.toggle('open');
  }
  selectTab = (evt) => {
    evt.preventDefault();
    const tab = evt.currentTarget.getAttribute('data-tab');
    this.content.setAttribute('data-selected', tab);
    this.content.nextSibling.setAttribute('data-selected', tab);
  }
  render() {
    return (
      <div>
        <Head>
          <title>Tradding App</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.1.3/solar/bootstrap.min.css" />
        </Head>
        <div className="root">
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand" href="#">Trading App</a>
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
                <a className="nav-item nav-link" data-tab="1" onClick={this.selectTab}>Tickers</a>
                <a className="nav-item nav-link" data-tab="2" onClick={this.selectTab}>Trade</a>
                <a className="nav-item nav-link" data-tab="3" onClick={this.selectTab}>Orders</a>
              </div>
            </nav>
            <style jsx global>{appstyle}</style>
        </div>
      </div>
    )
  }
}

export default Layout;