import React,{Component} from "react";
class ProductDetails extends Component {

    handleSave = () =>{
        this.props.history.push('/products')
    }

  render() {
      return(
          <div>
              <h2>Product Details - {this.props.match.params.id}</h2>
              <button onClick={this.handleSave}>Save</button>
          </div>
      );
  }
}
export default ProductDetails;