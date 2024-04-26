import { useState } from "react";
import data from "../data";

import Person from "./Person";
export default function BirthDayList() {
  const [persons, setPersons] = useState(data);

  const handleDelete = () => {
    console.log("Delete person");
    setPersons([]);
  };

  const renderPerson = persons.map((person) => (
    <Person
      {...person}
      key={person.id}
    />
  ));

  return (
    <section className="md:min-w-[600px] px-8 py-6 h-auto bg-slate-50 capitalize">
      <h1 className="text-[32px] font-roboto mb-6">
        {persons.length} birthdays today
      </h1>

      <section className="grid gap-y-8">{renderPerson}</section>

      {persons.length > 0 ? (
        <button
          className="w-[100%] mt-5 bg-[#D946EF] block content-center h-7 "
          onClick={handleDelete}
        >
          <span className="text-white"> Clear all</span>
        </button>
      ) : (
        <button
          className="w-[100%] mt-5 bg-[#D946EF] block content-center h-7 "
          onClick={() => setPersons(data)}
        >
          <span className="text-white"> Reset</span>
        </button>
      )}
    </section>
  );
}
