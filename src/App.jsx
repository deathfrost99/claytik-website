import { motion } from "framer-motion";

export default function ClaytikWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-yellow-50 to-white text-gray-800 overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden min-h-screen flex items-center">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#f59e0b20,transparent_40%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-24 relative z-10">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >

              <p className="uppercase tracking-[0.4em] text-orange-500 font-bold mb-6">
                World Cup Innovation 2026
              </p>

              <h1 className="text-5xl sm:text-2xl md:text-4xl lg:text-6xl font-black leading-tight mb-6">
                ✨ CLAYTIK
              </h1>

              <span className="block text-orange-500 text-xl sm:text-2xl md:text-xl sm:text-2xl md:text-3xl lg:text-4xl lg:text-2xl sm:text-3xl md:text-xl sm:text-2xl md:text-3xl lg:text-4xl lg:text-5xl font-black mb-8">
                Create • Innovate • Sustain
              </span>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700 mb-10">
                An eco-friendly innovation that transforms batik learning into a
                fun, safe, and creative hands-on experience for students.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">

 <a
  href="https://youtu.be/dpLxiXLFTmE"
  target="_blank"
  rel="noopener noreferrer"
>
  <motion.button
    whileHover={{
      scale: 1.08,
      boxShadow: "0px 0px 40px rgba(249,115,22,0.5)"
    }}
    whileTap={{ scale: 0.95 }}
    className="bg-orange-500 hover:bg-orange-600 transition text-white px-5 py-3 sm:px-4 sm:px-6 md:px-8 sm:py-4 md:py-5 rounded-2xl font-bold shadow-2xl"
  >
    Explore CLAYTIK
  </motion.button>
</a>

              </div>

            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="relative"
            >

              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5
                }}
                className="bg-white rounded-[2rem] shadow-2xl p-8 border border-orange-100 rotate-2 hover:rotate-0 transition duration-500"
              >

                <img
                  src="/team collab.jpeg"
                  alt="Students creating batik art"
                  className="rounded-2xl w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover"
                />

              </motion.div>

              <div className="absolute bottom-2 left-2 sm:-bottom-6 sm:-left-6 bg-yellow-100 px-5 py-4 rounded-2xl shadow-lg">
                <p className="font-bold text-xl">🌱 Eco-Friendly</p>
              </div>

              <div className="absolute top-2 right-2 sm:-top-6 sm:-right-6 bg-orange-100 px-5 py-4 rounded-2xl shadow-lg">
                <p className="font-bold text-xl">🎨 Creative Learning</p>
              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-24">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-2xl sm:text-3xl md:text-xl sm:text-2xl md:text-3xl lg:text-4xl lg:text-5xl md:text-6xl font-black mb-6">
            The Spirit of Malaysia 🇲🇾
          </h2>

          <p className="max-w-4xl mx-auto text-xl text-gray-600 leading-relaxed">
            Batik is more than art in Malaysia — it is part of our heritage and
            national identity. CLAYTIK brings this cultural tradition into
            modern classrooms through sustainability and innovation.
          </p>

        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {[
            {
              emoji: "🎨",
              title: "Creativity",
              desc: "Encourages students to express ideas through textile art."
            },
            {
              emoji: "🧒",
              title: "Safe Learning",
              desc: "Replaces hot wax with eco-resist clay for safer learning."
            },
            {
              emoji: "🌱",
              title: "Sustainability",
              desc: "Promotes environmentally friendly art practices."
            }
          ].map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -15 }}
              className="bg-white p-8 rounded-3xl shadow-2xl"
            >

              <div className="text-6xl mb-5">
                {item.emoji}
              </div>

              <h3 className="text-3xl font-black mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* PROBLEM & SOLUTION */}
      <section className="bg-orange-500 text-white py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <h2 className="text-2xl sm:text-3xl md:text-xl sm:text-2xl md:text-3xl lg:text-4xl lg:text-5xl font-black mb-10">
              ⚠ The Problem
            </h2>

            <div className="space-y-6 text-lg leading-relaxed">

              <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm">
                Traditional batik tools can be difficult and unsafe for young students.
              </div>

              <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm">
                Complex batik processes may limit creativity and confidence.
              </div>

              <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm">
                Many existing materials are not environmentally friendly.
              </div>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <h2 className="text-2xl sm:text-3xl md:text-xl sm:text-2xl md:text-3xl lg:text-4xl lg:text-5xl font-black mb-10">
              💡 Our Solution
            </h2>

            <div className="bg-white text-gray-800 p-10 rounded-[2rem] shadow-2xl">

              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-orange-500 mb-5">
                CLAYTIK
              </h3>

              <p className="text-xl leading-relaxed mb-8">
                A student-friendly eco-resist clay that replaces hot wax in batik learning.
              </p>

              <ul className="space-y-5 text-lg">
                <li>✅ Safer for students</li>
                <li>✅ Easier to learn</li>
                <li>✅ Encourages creativity</li>
                <li>✅ Supports sustainable education</li>
              </ul>

            </div>

          </motion.div>

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <h2 className="text-6xl font-black mb-6">
            How CLAYTIK Works
          </h2>

          <p className="text-xl text-gray-600">
            A simple 3-step creative process.
          </p>

        </motion.div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {[
    {
      media: "/apply clay.jpeg",
      type: "image",
      title: "Apply Clay",
      desc: "Students apply eco-resist clay onto fabric."
    },
    {
      media: "/add color.mp4",
      type: "video",
      title: "Add Colours",
      desc: "Students paint creatively using brushes and dyes."
    },
    {
      media: "/reveal art.jpeg",
      type: "image",
      title: "Reveal Art",
      desc: "Unique batik-inspired patterns are revealed."
    }
  ].map((step, i) => (
    <motion.div
      key={i}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-3xl shadow-xl overflow-hidden"
    >
      <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
        {step.type === "video" ? (
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-fill"
          >
            <source src={step.media} type="video/mp4" />
          </video>
        ) : (
          <img
            src={step.media}
            alt={step.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
        <p className="text-gray-600">{step.desc}</p>
      </div>
    </motion.div>
  ))}
</div>

      </section>

{/* IMPACT DATA DASHBOARD */}
<section className="bg-gray-900 text-white py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8">

  <div className="max-w-7xl mx-auto">

    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <h2 className="text-6xl font-black mb-6">
        CLAYTIK Impact Data 📊
      </h2>

      <p className="text-2xl text-gray-300">
        Measured impact across students, teachers, environment, and community
      </p>
    </motion.div>

    {/* OVERALL STATS */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">

      {[
        { number: "120", label: "Students" },
        { number: "3", label: "Teachers" },
        { number: "93%", label: "Overall Project Impact" },
        { number: "100%", label: "Teacher Satisfaction" }
      ].map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="bg-white/5 p-8 rounded-3xl text-center shadow-xl"
        >
          <h3 className="text-2xl sm:text-3xl md:text-xl sm:text-2xl md:text-3xl lg:text-4xl lg:text-5xl font-black text-orange-400 mb-4">
            {item.number}
          </h3>
          <p className="text-xl text-gray-300">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>

    {/* STUDENT IMPACT */}
    <div className="mb-20">
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-orange-400 mb-8">
        Student Impact
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {[
          { title: "Safety Improvement", value: "96%" },
          { title: "Creativity Enhancement", value: "92%" },
          { title: "Active Participation", value: "95%" },
          { title: "Confidence Growth", value: "88%" },
          { title: "Inclusive Learning", value: "97%" },
          { title: "STEM Improvement", value: "89%" }
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            className="bg-orange-500/10 border border-orange-400/30 p-6 rounded-2xl"
          >
            <h4 className="text-2xl font-bold mb-3">
              {item.title}
            </h4>
            <p className="text-2xl sm:text-3xl md:text-xl sm:text-2xl md:text-3xl lg:text-4xl lg:text-5xl font-black text-orange-300">
              {item.value}
            </p>
          </motion.div>
        ))}

      </div>
    </div>

    {/* ENVIRONMENT + COMMUNITY */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">

      <div className="bg-green-500/10 p-8 rounded-3xl">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-green-400 mb-6">
          Environment Impact 🌱
        </h3>

        <ul className="space-y-4 text-xl">
          <li>85% reduction in hot wax usage</li>
          <li>80% lower energy use</li>
          <li>90% cleaner classroom environment</li>
          <li>93% eco-awareness improvement</li>
        </ul>
      </div>

      <div className="bg-yellow-500/10 p-8 rounded-3xl">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-yellow-400 mb-6">
          Community Impact 🤝
        </h3>

        <ul className="space-y-4 text-xl">
          <li>5 workshops conducted</li>
          <li>80+ participants engaged</li>
          <li>91% cultural appreciation</li>
          <li>87% innovation interest</li>
        </ul>
      </div>

    </div>

    {/* TEACHER IMPACT */}
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white text-gray-900 rounded-3xl p-12 text-center"
    >
      <h3 className="text-2xl sm:text-3xl md:text-xl sm:text-2xl md:text-3xl lg:text-4xl lg:text-5xl font-black text-green-600 mb-6">
        Teacher Satisfaction
      </h3>

      <p className="text-5xl sm:text-6xl md:text-8xl font-black mb-6">
        100%
      </p>

      <p className="text-2xl leading-relaxed">
        All 3 teachers strongly agreed that CLAYTIK is effective,
        safe, easy to implement, and improves classroom learning.
      </p>
    </motion.div>

  </div>

</section>
{/* GALLERY */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28">

  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="text-center mb-20"
  >

    <h2 className="text-6xl font-black mb-6">
      Interactive Project Gallery 📸
    </h2>

    <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
      Explore the creative journey of CLAYTIK through hands-on learning,
      artistic exploration, and sustainable innovation.
    </p>

  </motion.div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

    {[
      {
        img: "/students2.jpeg",
        title: "Student Creativity",
        desc: "Students experimenting with textile art using CLAYTIK."
      },
      {
        img: "/students1.jpeg",
        title: "Hands-On Learning",
        desc: "Interactive classroom activities that encourage participation."
      },
      {
        img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
        title: "Sustainable Innovation",
        desc: "Eco-friendly materials supporting greener art education."
      },
      {
        img: "/team collab.jpeg",
        title: "Team Collaboration",
        desc: "Students collaborating creatively through batik-inspired projects."
      },
      {
        img: "/creative ex.jpeg",
        title: "Creative Expression",
        desc: "Encouraging imagination and confidence through art."
      },
      {
        img: "/future edu.jpeg",
        title: "Future Education",
        desc: "Transforming classrooms through innovation and sustainability."
      }
    ].map((item, index) => (

      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{
          y: -10,
          scale: 1.03
        }}
        className="group bg-white rounded-[2rem] overflow-hidden shadow-2xl"
      >

        <div className="overflow-hidden">

          <img
            src={item.img}
            alt={item.title}
            className="h-[220px] sm:h-[260px] md:h-[300px] w-full object-cover group-hover:scale-110 transition duration-700"
          />

        </div>

        <div className="p-8">

          <h3 className="text-3xl font-black mb-4">
            {item.title}
          </h3>

          <p className="text-lg text-gray-600 leading-relaxed">
            {item.desc}
          </p>

        </div>

      </motion.div>

    ))}

  </div>

</section>
      {/* UNIQUENESS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <img
              src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200&auto=format&fit=crop"
              alt="Creative textile artwork"
              className="rounded-[2rem] shadow-2xl h-[550px] object-cover w-full"
            />

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <h2 className="text-6xl font-black mb-10">
              What Makes CLAYTIK Unique?
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-gray-700">

              <div className="bg-orange-50 p-6 rounded-2xl border-l-4 border-orange-500">
                🎨 Combines art, sustainability, and accessibility.
              </div>

              <div className="bg-yellow-50 p-6 rounded-2xl border-l-4 border-yellow-500">
                🔥 Eliminates the use of hot wax.
              </div>

              <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-500">
                🌍 Encourages eco-friendly learning.
              </div>

              <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500">
                🤝 Suitable for beginners and all students.
              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-32 px-4 sm:px-6 md:px-8 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-400 text-white text-center">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white,transparent_60%)]"></div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-5xl mx-auto"
        >

          <h2 className="text-6xl md:text-7xl font-black leading-tight mb-10">
            Transforming Art Education
            For A Better Future ✨
          </h2>

          <p className="text-2xl leading-relaxed mb-12">
            We believe learning should be meaningful, creative, and sustainable.
            Join us in empowering the next generation through innovative art education.
          </p>

          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 40px rgba(255,255,255,0.5)"
            }}
            className="bg-white text-orange-500 px-12 py-6 rounded-3xl text-2xl font-black shadow-2xl"
          >
            Join The Innovation
          </motion.button>

        </motion.div>

      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-12 text-center">

        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-4">
          ✨ CLAYTIK ✨
        </h3>

        <p className="text-gray-400 text-lg">
          Create • Innovate • Sustain
        </p>

      </footer>

    </div>
  );
}