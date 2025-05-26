import { useEffect } from "react";

const ResumePage = () => {
  useEffect(() => {
    document.title = "My Resume | Eslam Emam";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Download or view the resume of Eslam Emam, Full Stack Engineer.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-portfolio-dark">
        Eslam Emam's Resume
      </h1>

      <div className="flex justify-center mb-6">
        <a
          href="/files/my-resume-final.pdf"
          download
          className="bg-portfolio-green text-white px-6 py-3 rounded-md hover:bg-portfolio-green/90 transition"
        >
          Download Resume
        </a>
      </div>

      <iframe
        src="/files/my-resume-final.pdf"
        title="Eslam Emam Resume"
        className="w-full h-[80vh] border rounded"
      ></iframe>
    </div>
  );
};

export default ResumePage;
