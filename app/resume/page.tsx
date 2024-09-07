import Footer from "./footer";

export default function ResumePage() {
  return (
    <div className="container flex flex-col mx-auto py-4 px-4 sm:px-6 lg:px-8 max-w-4xl min-w-xl h-screen">
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <iframe
          src="https://tietje-resume-bucket.s3.amazonaws.com/Nicholas_Tietje_Resume.pdf#zoom=page-fit"
          style={{ height: '100%', width: 'calc(100vh * 8.5 / 11)'}}
          allowFullScreen
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}