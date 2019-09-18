import React from 'react';

class ItemShow extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchItem(this.props.match.params.id)
  }

  render() {
    if(!this.props.item){
      return(
        <div></div>
      )
    }
    const item = this.props.item;

    return (
      <div>
        <div className="item-show-top">
          <div className="item-left-col">
            <img src={this.props.item.image_url}/>
          </div>
          <div className="item-center-col">
            <h1 className="item-title">{item.title}</h1>
            <h4>Price: 
              <span className="item-price"> ${item.price}.00</span>
            </h4>
            <p>{item.description}</p>
          </div>
          <div className="item-right-col">
            <span className="item-price"> ${item.price}.00</span>
            <p>Want it by Friday? Too late. How about next month? Buy AmazonForest Prime and get it never.</p>
            <h3>In Stock.</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default ItemShow;