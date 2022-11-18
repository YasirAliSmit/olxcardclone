
export const Card = (props) => {
  
  return (

    <>
      <div className="cards card" style={{ width: "18rem" }}>
        <img src={props.data.image}  className="img-card card-img-top" alt="..." />
        {props.data.fav&&<button type="button" class="my-btn btn btn-warning">FEATURED</button> }     
        <div className="card-body"><p className="card-des">{props.data.Model}</p>
          <h5 className="card-title">{props.data.Price}</h5>
          <p className="card-text">
            {props.data.Location}
          </p>
          
        </div>
      </div>
    </>
  );
};
