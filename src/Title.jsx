const Title = ({ locked }) => {
  // <h1 className="title">Fancy Counter</h1>;
  return (
    <h1 className="title">
      {
        locked ?
          <span>Limit! Buy <b>Pro</b> for &gt;5</span> :
          'Fancy Counter'
      }
    </h1>
  );
};

export default Title;