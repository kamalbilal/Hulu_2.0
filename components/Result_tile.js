import Image from "next/image";
function Result_tile({ fetch_details }) {
  return (
    <div className="py-4 p-2 max-w-md sm:mx-3 sm:cursor-pointer sm:hover:scale-105 transition-all duration-75 group">
      <div className="bg-[#053846] p-4 rounded-3xl sm:group-hover:bg-[#074f63]">
        <div className="max-w-md">
          <Image
            src={
              "https://image.tmdb.org/t/p/original" +
              fetch_details.backdrop_path
            }
            width={1080}
            height={580}
            layout="responsive"
            className="rounded-3xl"
          />
        </div>

        <div>
          <h1 className="text-white sm:text-gray-400 px-3 py-2 text-xl group-hover:text-white">
            {fetch_details.original_title}
          </h1>
        </div>

        <div>
          <p
            className={`text-white sm:text-gray-400 max-w-md px-3 py-1 group-hover:text-white sm:truncate sm:hover:whitespace-pre-wrap`}
          >
            {fetch_details.overview}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Result_tile;
