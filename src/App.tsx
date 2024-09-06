import LoginDialog from "./components/login-dialog";

export default function App() {
  return (
    <main className="min-h-screen min-w-full flex flex-col items-center justify-start">
      <div className="p-4 bg-zinc-100 flex justify-between items-center w-full border-b border-zinc-300/50 backdrop-blur-md sticky top-0">
        <h2 className="text-2xl font-bold">PMSSS</h2>
        <div className="flex gap-4 items-center">
          <a href="">About us</a>
          <a href="">About PMSSS</a>
          <a href="">Contact</a>
        </div>
      </div>
      <section className="flex justify-between items-center w-full p-4 lg:px-16 gap-20 min-h-full">
        <div className="w-1/2 flex flex-col gap-4">
          <h2 className="lg:text-7xl leading-relaxed text-6xl font-black text-zinc-950">
            The easy and better way to apply for PMSSS
          </h2>
          <p className="text-zinc-700 lg:text-2xl text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
          <LoginDialog />
        </div>
        <div className="w-1/2">
          <img
            src="https://illustrations.popsy.co/white/student-with-diploma.svg"
            alt="student"
            className="w-full h-full"
          />
        </div>
      </section>
      <footer className="w-full border-t border-zinc-300/50 bg-zinc-100 absolute bottom-0">
        <div className="flex justify-between items-center p-4">
          <p className="text-sm text-zinc-700">
            © 2021 PMSSS. All rights reserved.
          </p>
          <div className="flex gap-4 items-center">
            <a href="">Privacy Policy</a>
            <a href="">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
