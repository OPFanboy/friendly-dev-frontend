
const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-900">
      { /* Intro */ }

      <div className="flex flex-col md:flex-row md:items-start 
        items-center gap-10 mb-12">
        <img
          src="/images/profile.jpg"
          alt="profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
        />
        <div>
            <h1 className="text-3xl font-bold text-white mb-2">
                  Hey, I'm Brad
            </h1>
            <p className="text-gray-300 text-lg">Testtest</p>
        </div>
      </div>        

    { /* Bio section */ }
    <div>
      <h2 className="text-2xl font-semibold text-white mb-4">My Mission</h2>
      <p className="text-gray-300 leading-relaxed">My mission is to create meaningful and impactful web experiences that connect people and technology in innovative ways.</p>
    </div>

    {/* Tech stack section */}
    <h2 className="text-2xl font-semibold text-white mb-4">Tech I Use</h2>
    <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
      {[
        'React', 
        'Next.js',
        'Vue',
        'Laravel',
        'MongoDB',
        'PostgreSQL',
        'Appwrite',
        'TypeScript', 
        'Node.js', 
        'Tailwind CSS']
        
        .map((tech) => (
        <li key={tech} className="bg-gray-700 px-3 py-1 rounded-md" >{tech}</li>
      ))}
    </ul>
    


    </div>
  );
}

export default AboutPage;
