'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelectorAll('.contenitore_bottone_like');
    domContainer.forEach(domContainer => {
    const root = ReactDOM.createRoot(domContainer);
    root.render(
      e(LikeButton)
    );
  });