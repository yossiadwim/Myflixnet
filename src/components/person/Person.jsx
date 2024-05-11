import { useState } from "react";
import MovieCredit from "./MovieCredit";

/* eslint-disable react/prop-types */
const Person = ({ person }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="container flex">
        <aside className="w-1/5 ">
          <div className="">
            <img
              src={`https://image.tmdb.org/t/p/h632${person?.profile_path}`}
              alt=""
              className="rounded-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
            />
          </div>
          <div className="mt-64 border-r border-slate-800">
            <h1 className="text-4xl font-bold text-white">Personal Info</h1>
            <div className="my-5">
              <p className="text-2xl font-medium text-white">Stage Name</p>
              <p className="text-lg text-white">{person?.name}</p>
            </div>
            <div className="my-5">
              <p className="text-2xl font-medium text-white">Known For</p>
              <p className="text-lg text-white">
                {person?.known_for_department}
              </p>
            </div>
            <div className="my-5">
              <p className="text-2xl font-medium text-white">Known Credits</p>
              <p className="text-lg text-white">
                {person?.combined_credits?.cast?.length}
              </p>
            </div>
            <div className="my-5">
              <p className="text-2xl font-medium text-white">Gender</p>
              <p className="text-lg text-white">
                {person?.gender === 0
                  ? "Not set / not specified"
                  : person?.gender === 1
                    ? "Female"
                    : person?.gender === 2
                      ? "Male"
                      : "Non-binary"}
              </p>
            </div>
            <div className="my-5">
              <p className="text-2xl font-medium text-white">Birthday</p>
              <p className="text-lg text-white">
                {new Date(person?.birthday).toLocaleString("en-us", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}{" "}
                {} (
                {Math.floor(
                  (Date.now() - Date.parse(person?.birthday)) /
                    (1000 * 60 * 60 * 24 * 365.25),
                )}{" "}
                years old)
              </p>
            </div>
            <div className="my-5">
              <p className="text-2xl font-medium text-white">Place of Birth</p>
              <p className="text-lg text-white">{person?.place_of_birth}</p>
            </div>
            <div className="my-5">
              <p className="text-2xl font-medium text-white">Also Known As</p>
              {person?.also_known_as?.map((item, index) => (
                <p className="text-lg text-white" key={index}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </aside>
        <section className="w-4/5 ">
          <div className="mx-10">
            <h1 className="text-4xl font-bold text-white">{person.name}</h1>
            <p className="mb-3 mt-10 text-2xl font-medium text-white">
              Biography
            </p>
            <div className="text-lg font-medium text-white">
              {showMore ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: person.biography?.replace(/\n/g, "<br/>"),
                  }}
                />
              ) : (
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      person.biography
                        ?.substring(0, 450)
                        .replace(/\n/g, "<br/>") + "...",
                  }}
                />
              )}
            </div>

            <div className="flex justify-end">
              <button
                className="mt-3 font-medium text-red-500 hover:text-red-800"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Read less" : "Read more"}
              </button>
            </div>

            <p className="mx-6 mt-5 text-2xl font-medium text-white">
              Known for
            </p>
            <div className="overflow-y-hidden">
              <div className="custom-scrollbar bg-transparent">
                <div className="mx-5 my-5    flex h-fit w-fit flex-row ">
                  {person?.movie_credits?.cast
                    ?.sort((a, b) => b.popularity - a.popularity)
                    .slice(0, 10)
                    .map((movie, i) => {
                      return (
                        <MovieCredit
                          key={i}
                          id={movie.id}
                          poster_path={movie.poster_path}
                          title={movie.title}
                        ></MovieCredit>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Person;
