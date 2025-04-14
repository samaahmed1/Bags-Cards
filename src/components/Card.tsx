import bagsData from "../data/data.json" assert { type: "json" };
export default function Card() {
  return (
    <>
      <section>
        <div className="container mx-auto px-5 flex justify-center items-center flex-wrap gap-10">
          {bagsData.map((bag) => {
            return (
              <div key={bag.id} className="card flex flex-col gap-3 shadow p-5 w-[350px] rounded-md">
                <img className="rounded-md w-fit h-[250px] m-auto" src={bag.image} alt={bag.name} />
                <h2 className="text-xl">
                  {bag.name} {bag.year}
                </h2>
                <span className="text-gray-600">{bag.brand}</span>
                <span className="font-medium">{parseInt(bag.price.replace("$", "")) > 60 ? `${bag.price} -` : bag.price}</span>
                <span className="font-medium">
                  {parseInt(bag.price.replace("$", "")) > 60 ? (
                    <>
                      <span className="text-xl text-red-500">Special Offer!</span>
                    </>
                  ) : (
                    bag.price
                  )}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
