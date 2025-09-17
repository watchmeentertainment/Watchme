import WatchmeMockup from "../components/WatchmeMockup";
import FileUpload from "../components/FileUpload";
import Auth from "../components/Auth";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gray-100 p-4">
      <WatchmeMockup />
      <Auth />
      <FileUpload />
    </div>
  );
}
