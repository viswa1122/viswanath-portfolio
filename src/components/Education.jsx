function Education() {
  const collages = [
    {
      degree: "B. Tech",
      name: "Audisankara college of engineering and technology, Nellore",
      from_to: "2014 - 2017",
    },
    {
      degree: "Diploma",
      name: "Government Polytechnic College, Nellore",
      from_to: "2014",
    },
    {
      degree: "Secondary (SSC)",
      name: "Shantiniketan School, Kadapa",
      from_to: "2011",
    },
  ];

  return (
    <section id="education" className="py-10 bg-gray-900 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          <span className="text-yellow-600">My</span> <span className="text-gray-400">Education</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Studies</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {collages.map((collage, i) => (
            <div
              key={i}
              className={`min-w-[16rem] max-w-[16rem] min-h-[14rem] p-4 bg-gray-800 rounded-xl`}
            >
              <h3 className="text-xl my-4 font-bold">{collage.degree}</h3>
              <h3 className={`text-lg text-slate-400 my-4`}>{collage.name}</h3>
              <h3 className={`text-lg text-slate-400 my-4`}>
                {collage.from_to}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
