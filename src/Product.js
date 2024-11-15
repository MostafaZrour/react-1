function Product({data:{id ,title , price, thumbnail}}) {
  return (
    <div className="col-3" key={id}>
      <div className="card shadow-sm">
        <img className="bd-placeholder-img card-img-top" src={"pictures/" + thumbnail} alt="" />
        <div className="card-body">
          <p className="card-title">{title}</p>
          <p className="card-text">{price}</p>
              <button type="button" className="btn btn-outline-secondary w-100 ">
                Ajouter au panier
              </button>
        </div>
      </div>
    </div>
  );
}

export default Product ;