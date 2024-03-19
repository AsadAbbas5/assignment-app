import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { connect } from "react-redux";
import NoProduct from "../../NOproduct/NoProduct";
import { Link } from "react-router-dom";
function ShowProduct({ product, }) {
  return (
    <>
      {product && product.length > 0 ? (
        <Grid container spacing={3}>
          {product.map((productItem) =>{ 
            return (
            
            
            <Grid item xs={12} sm={6} md={4} key={productItem._id}>
              <Card style={{ maxWidth: 300, margin: "auto", marginTop: '5rem' }}>
                <Link to={`/products/${productItem._id}` } >
                  <CardMedia
                    component="img"
                    image={
                      process.env.REACT_APP_BASE_URL +
                      "content/product/" +
                      productItem.productImage
                    }
                    alt={productItem.ProductTitle}
                    style={{ height: 350, objectFit: "cover" }} 
                  />
                </Link>
                <CardContent>
                  <Typography variant="h5" component="p" align="center" color="secondary" fontWeight="bold" gutterBott>
                    Title:{productItem.ProductTitle}
                  </Typography>
                 
                  <Typography
                   variant="h5" component="p" align="center" color="secondary" fontWeight="bold" gutterBottom
                  >
                    Price:${productItem.productPrice}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )})}
        </Grid>
      ) : (
        <NoProduct />
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    product: state.product.product,

  };
};

export default connect(mapStateToProps)(ShowProduct);
