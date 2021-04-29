import {Button} from "reactstrap";

const Error = (props)=>{
    let goToHome = ()=>{
        props.history.push("/");
    }
    return(<div>
<div className="d-flex col-6 mx-auto bg-dark rounded mt-5">
  <img className="card-img-top flex-row  col-5" src="./assets/Wrong.jpg" alt="Card cap"/>
  <div className="card-body  text-white col-5">
    <h5 className="card-title ">Not Available Yet</h5>
    <p className="card-text">Some qui
    ck example text to build on the card title and make up the bul
    k of the card's content.</p>
    <Button onClick={goToHome} variant="contained" color="danger"  className="btn btn-lg btn-block">Home</Button>
  </div>
</div>

    </div>);
   
}
export default Error;