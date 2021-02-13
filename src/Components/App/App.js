import React, { Component } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Modal } from './Modal';
import ImageFinder from '../../Utils/imageFinder';
import Loader from './Loader';

export default class App extends Component {
  state = {
    imageSet: [],
    query: '',
    large: false,
    spin: false,
  };

  imageFinder = new ImageFinder('19116097-91cfda2f798a07cacf5b2db64', 12);

  // function handling submit event of a search form
  handleSubmit = async e => {
    e.preventDefault();
    const value = e.target.elements.search.value;
    if (!value.length)
      return this.imageFinder.pushError('Enter the search word');
    this.imageFinder.count = 1;
    this.setState({ imageSet: [], spin: true });
    const { hits } = await this.imageFinder.fetchResult(value);
    const result = hits || [];
    this.setState({ imageSet: result, query: value, spin: false });
  };

  // function handling click event on a 'load more' button
  loadMore = async e => {
    this.setState({ spin: true });
    const { hits } = await this.imageFinder.fetchResult(this.state.query);
    const result = hits || [];
    this.setState(({ imageSet }) => {
      return { imageSet: [...imageSet, ...result], spin: false };
    });
  };

  // functions handling a lightbox logic
  //#1 openning a lightbox
  openModal = e => {
    if (e.target.nodeName !== 'IMG') return;
    const url = e.target.dataset.large;
    const tag = e.target.getAttribute('alt');
    this.setState({ large: { url, tag } });
  };
  //#2 closing a lightbox by clicking on a backdrop
  closeOnClick = e => {
    if (e.target.classList.contains('Overlay')) {
      this.setState({ large: false });
      this.removeListeners();
    }
  };
  //#3 closing a lightbox by pressing Esc
  closeOnPress = e => {
    if (e.code === 'Escape') {
      this.setState({ large: false });
      this.removeListeners();
    }
  };
  //#4 removing listeners
  removeListeners = () => {
    window.removeEventListener('keydown', this.closeOnPress);
    document.removeEventListener('click', this.closeOnClick);
  };

  componentDidUpdate(prevProps, { imageSet }) {
    if (this.state.large) {
      window.addEventListener('keydown', this.closeOnPress);
      document.addEventListener('click', this.closeOnClick);
    }
    if (this.state.imageSet.length > imageSet.length) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  render() {
    const { imageSet, spin } = this.state;
    const more = imageSet.length && imageSet.length % 12 === 0;
    const { url, tag } = this.state.large;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} value={this.state.query} />
        <ImageGallery images={imageSet} onClick={this.openModal} />
        {more && !spin ? <Button onClick={this.loadMore} /> : false}
        {url ? <Modal image={url} tag={tag} /> : false}
        {spin ? (
          <div className="Loader">
            <Loader />
          </div>
        ) : (
          false
        )}
      </div>
    );
  }
}
