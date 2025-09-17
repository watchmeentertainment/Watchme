import WatchmeMockup from "../components/WatchmeMockup";
import FileUpload from "../components/FileUpload";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-8">
      <WatchmeMockup />
      <FileUpload />
    </div>
  );
}
