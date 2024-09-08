import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

const CountButton = ({ type, setCount, locked }) => {
  const handleClick = (event) => {
    setCount((prevCount) => {
      if (type === 'minus') {
        const newCount = prevCount - 1;
        return newCount < 0 ? 0 : newCount;
      } else {
        const newCount = prevCount + 1;
        return newCount > 5 ? 5 : newCount;
      }
    });
    event.currentTarget.blur();
  };

  return (
    <button
      disabled={locked}
      onClick={handleClick}
      className="count-btn"
    >
      {
        type === 'plus' ?
          <PlusIcon className="count-btn-icon" /> :
          <MinusIcon className="count-btn-icon" />
      }
    </button>
  );
};

export default CountButton;