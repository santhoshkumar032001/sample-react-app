import React from "react";
class ProductClass extends React.Component
{
    constructor()
    {
        super();

        //State Full Variable
        this.state = {productName: "Iphone 9", productPrice: "50000"};
    }
    
    render()
    {
        //Normal Variable / State Less Variable
        var myProductName = "Samsung A20";
        var myProductPrice = 20000;

        var productStyle ={color:'red',fontSize:"20px"}

        return <div>
                    Product 1 (using Stateless Variable): 
                    <h3 style={{color:'blue',fontSize:"20px"}}>{myProductName} : {myProductPrice}</h3>

                    Product 2 (using Statefull Variable): 
                    <h3 style={productStyle}>{this.state.productName} : {this.state.productPrice}</h3>

                    <button onClick={()=>this.ChangeProductName()}>Change Product Name</button>
                
                    Product 3 (using this.Props): 
                    <h3>{this.props.productName} : {this.props.productPrice}</h3>
                </div>
    }
   
    componentWillMount()
    {
        //alert("Component Will Mount Event is called");
    }

    componentDidMount()
    {
        //alert("Component Did Mount Event is called");
    }

    componentWillUpdate()
    {
        //alert("Component Will Update Event is called");
    }

    componentDidUpdate()
    {
        //alert("Component Did Update Event is called");
    }

    shouldComponentUpdate()
    {
        return true;
    }

    ChangeProductName()
    {
        this.setState(
            {
                productName:"Vivo",
                productPrice: 60000
            }
        );
    }
}

export default ProductClass;
