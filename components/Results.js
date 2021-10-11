import Result_tile from "./Result_tile";

function Results({ fetch_details_list }) {
  return (
    <div className="flex justify-center items-center">
      <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  2xl:flex 2xl:flex-row 2xl:flex-wrap">
        {fetch_details_list.results.map((element, index) => (
          <Result_tile key={index} fetch_details={element} />
        ))}
      </div>
    </div>
  );
}

export default Results;
