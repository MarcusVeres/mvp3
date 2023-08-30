import React from "react";

const data = [
  {
    Name: "30-under-30",
    Company: "Canada's Developer 30 Under 30",
    Keywords: ["Award"],
    Start: "2017",
    Title: "Recipient",
  },
  {
    Name: "bm-innovators",
    Bullets: [
      "Designed promotional material.",
      "Designed the company website.",
    ],
    Company: "BM Innovators",
    End: "2010-05",
    Keywords: ["HTML", "CSS", "JS"],
    Start: "2009-05",
    Title: "Graphic Designer",
  },
  {
    Name: "colorshadow",
    Bullets: [
      "Built a hybrid Flash-HTML compass navigation. ",
      "Produced animated gifs and banner ads.",
    ],
    Company: "Colorshadow Communications",
    End: "2009-02",
    Keywords: ["Actionscript", "HTML"],
    Start: "2008-08",
    Title: "Web Developer",
  },
  {
    Name: "cummins-and-partners",
    Bullets: [
      "Made working mock-ups for client proposals.",
      "Contributed design ideas.",
      "Assisted clients with web-related programming.",
    ],
    Company: "Cummins & Partners",
    End: "2015-07",
    Keywords: ["HTML", "CSS", "Angular", "JS", "UI / UX"],
    Start: "2015-03",
    Title: "Creative Engineer",
  },
  {
    Name: "desjardins",
    Bullets: [
      "Built a training application for sales staff.",
      "Collaborated on graphics and animations.",
    ],
    Company: "Desjardins Financial Security ",
    End: "2011-10",
    Keywords: ["Actionscript 3.0"],
    Start: "2011-09",
    Title: "Contract Developer",
  },
  {
    Name: "japan-camera",
    BannerAlt:
      "Graphic design examples, banners, brochures, posters, etc. Copy centre 3d graphic. ",
    Bullets: [
      "Designed business cards, leaflets, brochures and posters.",
      "Open/close, register, Ad-hoc IT support, equipment upkeep.",
      "Provided passport photos, photo editing and headshot portraits. ",
    ],
    Company: "Japan Camera",
    Start: "2007-11",
    End: "2009-05",
    Keywords: ["Retail / Sales", "Graphic Design", "Photography"],
    Title: "Store Associate",
  },
  {
    Name: "juice-mobile",
    Bullets: [
      "Built a team-based scorekeeping API in Python (Flask).",
      "CRUD for participants in a team race.",
      "Pixel-perfect implementation of client UI design.",
      "Assigned each runner an NFC bracelet and unique ID.",
    ],
    Company: "Juice Mobile",
    Keywords: ["Python", "HTML", "Angular JS", "CSS"],
    Start: "2014-09",
    Title: "Contract Web Developer",
  },
  {
    Name: "juice-mobile-2",
    Bullets: [
      "Developed interactive mobile ads (Celtra, JS).",
      "Made a presentation tool for sales and marketing.",
      "Developed and maintained corporate website. ",
      "Prototyping (360° AR ads, ice cream delivery, phone-controller).",
    ],
    Company: "Juice Mobile",
    End: "2017-01",
    Keywords: ["HTML", "JS", "AdTech", "Prototyping", "Wordpress"],
    Start: "2015-07",
    Title: "Sr Full Stack Developer",
  },
  {
    Name: "movia",
    BannerAlt: "Truck Banner 3D Render with UI examples on Computer Screen",
    Bullets: [
      "Integrated beacon-based retargeting for truck ad campaigns.",
      "Developed business relationships with strategic partners.",
      "Translated between management, programming & design.",
      "Designed wireframes, UI and UX for client-facing software.",
    ],
    Company: "MOVIA Media",
    End: "2022-04",
    Keywords: ["Ad Tech", "Business Development", "UX"],
    Start: "2021-11",
    Title: "Integrations Manager",
  },
  {
    Name: "odd-jobs",
    BannerAlt:
      "Copy Centre, and/or Elections office. At night. lights glowing outside. Inside, sitting at desk, counting votes, etc.",
    Bullets: [
      "Moved heavy kitchen and industrial equipment.",
      "Briefly sold life insurance.",
      "Designed marketing material for online learning app.",
      "Vector artwork for clothing brand (casual wear).",
      "Designed a CD Rom cover for SickKids Hospital.",
      "Field work and office administration for Elections Ontario.",
      "Area Manager for Elections Ontario and Elections Canada.",
      "Sales presentations / slide designs for VisualSonics.",
    ],
    Company: "Odd Jobs",
    End: "2010",
    Start: "2004",
    Title: "Various",
  },
  {
    Name: "parrot-marketing",
    Bullets: [
      "Single-page application programming (Angular JS).",
      "Implemented forms for web applications.",
      "UI for web-based drawing application.",
      "Back-end development in Python (Flask) and PHP (Laravel).",
    ],
    Company: "Parrot Marketing / Hive Digital",
    End: "2014-10",
    Keywords: [
      "HTML",
      "CSS",
      "Angular JS",
      "Python",
      "UI / UX",
      "PHP (Laravel)",
    ],
    Start: "2013-11",
    Title: "Sr Web Developer",
  },
  {
    Name: "printzone-cityplace",
    BannerAlt:
      "3D render of copy centre, at night, working the night away.. glow outside. making wp sites,",
    Bullets: [
      "Product and real-estate photography.",
      "Built promotional websites for small business owners.",
      "Worked directly with clients and third-party vendors.",
      "Designed promotional and sales material.",
    ],
    Company: "PrintZone (Longden Solutions)",
    End: "2013-10",
    Keywords: ["Graphic Design", "Sales", "Wordpress", "Photography"],
    Start: "2013-05",
    Title: "Contract Web Developer",
  },
  {
    Name: "q4-inc",
    BannerAlt:
      "MacBook Pro with contact management app, Sencha touch icon on the screen, amazon alexa unit on a desk. post-its on desk :) stocks on monitors in background",
    Bullets: [
      "Wrote application code for investor relations software.",
      "Worked on improvements to a stock-tracking feature.",
      "Prototyped a demo contact management application.",
      "Prototyped Alexa extension (our team won the 2017 hackathon).",
    ],
    Company: "Q4 Inc",
    End: "2017-03",
    Keywords: ["CSS", "JS"],
    Start: "2017-01",
    Title: "Sr Full Stack Developer",
  },
  {
    Name: "social-game-universe",
    BannerAlt:
      "In-game menu screenshot on old-school 2008 iMac, if I can find screenshot. If not.. use Adobe Flash icon",
    Bullets: [
      "Data entry for player item database.",
      "Produced animations and cutscenes.",
      "Programmed in-game menus.",
    ],
    Company: "Social Game Universe",
    End: "2009-10",
    Keywords: ["Flash", "Actionscript"],
    Start: "2008-12",
    Title: "Intern",
  },
  {
    Name: "sybaris-analytics",
    BannerAlt:
      "2013 Mac desktop monitor with CodeIgniter logo, maybe trackula design? screenshot of UI",
    Bullets: [
      "Added features to an online shopping & inventory system.",
      "Designed interfaces and ads that matched brand guidelines.",
      "Removed legacy code and performed regression testing.",
    ],
    Company: "Sybaris",
    End: "2013-10",
    Keywords: ["PHP", "HTML", "CSS", "JS"],
    Start: "2013-01",
    Title: "Web Developer",
  },
  {
    Name: "upsling",
    BannerAlt:
      "Photo of all the Upsling stuff on the floor and/or UpSling logo, and some materials",
    Bullets: [
      "UI + UX design for web-based and mobile apps.",
      "Interface programming with GWT, JS, Bootstrap, Foundation.",
      "API development with Java (Tomcat) and PHP (CodeIgniter).",
      "Product management and project management.",
    ],
    Company: "UpSling Inc",
    End: "2013-09",
    Keywords: [
      "Product Design",
      "UX",
      "Java",
      "JS",
      "CSS",
      "Graphic Design",
      "PHP",
      "Management",
    ],
    Start: "2010-07",
    Title: "Wantrepreneur",
  },
  {
    Name: "works-of-love",
    BannerAlt:
      "3D Render of spin-to-win, monitor w/ chrome logo (extension), sneaky mommies website UI, screenshot from QS",
    Bullets: [
      "Developed a spin-to-win lead-generation kiosk application.",
      "Wrote a Chrome extension that helps bloggers with article SEO.",
      "Developed interfaces for a highly-optimized high-traffic blog.",
      "Designed and developed interfaces for a desktop PC game.",
    ],
    Company: "Works of Love",
    End: "Present",
    Keywords: ["HTML", "CSS", "JS", "Chrome", "Go", "C#", "Blender", "Unity"],
    Start: "2018-06",
    Title: "Director",
  },
];

const Jobs = () => {
  // sort the data before using it
  /*
  const sortedData = data.sort((a, b) => {
    const startDateA = new Date(a.Start);
    const startDateB = new Date(b.Start);
    return startDateB - startDateA; // Descending order
  });
  */
  const sortedData = [...data].sort((a, b) => {
    if (a.End === "Present") return -1;
    if (b.End === "Present") return 1;

    const startDateA = new Date(a.Start);
    const startDateB = new Date(b.Start);

    return startDateB - startDateA; // Descending order
  });

  return (
    <>
      {sortedData.map((job) => (
        <div key={job.Name} className="container mx-auto my-8 mt-16 lg:mt-44">
          <div className="flex flex-col lg:mt-16 lg:flex-row">
            <div className="w-full lg:w-[38%] flex flex-col justify-between">
              <div className="flex flex-col justify-between pr-8">
                <div className="flex flex-col items-baseline justify-between sm:flex-row lg:flex-col">
                  <h1 className="text-3xl font-extrabold tracking-tighter lg:text-5xl">
                    {job.Title}
                  </h1>
                  <p className="pt-2 pr-8 text-xs text-gray-400 lg:text-sm lg:pt-20 xl:text-base">
                    {job.Start}
                    {job.End && ` - ${job.End}`}
                  </p>
                </div>
                {job.Keywords && job.Keywords.length > 0 && (
                  <ul className="flex flex-wrap mt-3 text-xs lg:-ml-1 lg:space-x-1 sm:text-sm lg:text-base">
                    {job.Keywords.map((keyword, index) => (
                      <li
                        key={index}
                        className="block px-2 py-0 mb-2 mr-1 text-sm font-light text-blue-300 duration-500 bg-transparent border border-blue-400 rounded-full lg:mr-0 lg:py-1 hover:bg-blue-600 hover:text-white hover:border-transparent"
                      >
                        {keyword}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="w-[62%] bg-whitex bg-opacity-10 rounded flex items-end"></div>
            </div>
            <div className="flex flex-col justify-between flex-1 text-2xl font-light bg-blue-800x items-left">
              <h3 className="pt-2 pb-2 text-2xl font-thin border-white lg:pt-4 lg:mt-4 lg:border-t lg:text-4xl border-opacity-20">
                {job.Company}
              </h3>
              {job.Bullets && job.Bullets.length > 0 && (
                <ul className="flex flex-col pt-2 text-base lg:pt-4 sm:text-lg gap-y-1 lg:text-xl">
                  {job.Bullets.map((bullet, index) => (
                    <li key={index}>• {bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Jobs;
