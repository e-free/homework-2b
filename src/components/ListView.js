function ListView(props){
const productsData = props.productsData;

const items = productsData.map(function(item, index){
  return <div className="row list-view align-items-center mb-1" key={`row-key-${index}`}>
    <div className="col"><img src = {item["img"]} alt = {item["name"]}/></div>
    <div className="col text-center"><h2>{item["name"]}</h2></div>
    <div className="col text-center"><span className="color">{item["color"]}</span></div>
    <div className="col"><span className="fs-4 price text-danger">${item["price"]}</span></div>
    <div className="col"><button className="btn btn-outline-danger px-4 py-2 rounded-5 text-uppercase">Add to cart</button></div>   
  </div>
});


return (
    <>{items}</>
  )
}
export default ListView;