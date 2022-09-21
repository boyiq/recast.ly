var Search = ({ searchHandlerProp }) => (
  <div className="search-bar form-inline">
    <input className="form-control" onChange={ searchHandlerProp } type="text" />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
