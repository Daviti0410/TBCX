import PropTypes from "prop-types";

export function Box1(props) {
  return (
    <div className="box" style={{ backgroundColor: props.backgroundColor }}>
      <img src="/public/jeans.jpg" alt="Description1" className="image" />
      <p>Description of Line 1</p>
      <button type="button">Add to Cart</button>
    </div>
  );
}

export function Box2(props) {
  return (
    <div className="box" style={{ backgroundColor: props.backgroundColor }}>
      <img src="./public/sneakers.jpg" alt="Description2" className="image" />
      <p>Description of Line 2</p>
      <button type="button">Add to Cart</button>
    </div>
  );
}

export function Box3(props) {
  return (
    <div className="box" style={{ backgroundColor: props.backgroundColor }}>
      <img src="/public/T-shirt.jpg" alt="Description3" className="image" />
      <p>Description of Line 3</p>
      <button type="button">Add to Cart</button>
    </div>
  );
}
Box1.propTypes = {
  backgroundColor: PropTypes.string,
};

Box2.propTypes = {
  backgroundColor: PropTypes.string,
};

Box3.propTypes = {
  backgroundColor: PropTypes.string,
};
