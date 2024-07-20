interface AddtoCartProperty {
  onClick: () => void;
}

const AddtoCartbtn: React.FC<AddtoCartProperty> = ({ onClick }) => {
  return (
    <div>
      <div className="add-to-cart-btn">
        <button onClick={onClick}>
          <span>Add to Cart</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="12" fill="#FF6B6B" />
            <path
              d="M12 6V18M18 12H6"
              stroke="#F7F7F7"
              stroke-width="1.5"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AddtoCartbtn;
