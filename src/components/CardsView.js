function CardsView(props){
  const productsData = props.productsData;
    
  const items = productsData.map(function(item, index){
    return <>
      <div className="card-container col-lg-4 col-md-6 col-sm-12 text-center p-3" key={`card-key-${index}`}>
        <div className="px-4 py-5 card-item">
          <h2>{item["name"]}</h2>
          <p><span className="color">{item["color"]}</span></p>
          <img src = {item["img"]} alt = {item["name"]}/>
          <div className="row">
            <div className="col-6"><span className="fs-4 price text-danger">${item["price"]}</span></div>
            <div className="col-6"><button className="btn btn-outline-danger px-4 py-2 rounded-5 text-uppercase">Add to cart</button></div>
          </div>
        </div>
      </div>
    </>
    });
    
    return (
      <div className="row cards-view align-items-center mb-1 some" >
        {items}
      </div>
      )
    }
export default CardsView;