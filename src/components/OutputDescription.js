function OutputDescription(props) {
  const { resultsDescription, isLoading } = props;

  if (isLoading) {
    return <p className="col">...loading</p>;
  }

  return <h2 className="col">{resultsDescription}</h2>;
}

export default OutputDescription;
