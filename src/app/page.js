import Image from "next/image";

export default function Page() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="py-20 px-5 lg:flex lg:py-0 lg:px-0 min-h-screen max-h-screen overflow-hidden">
        <section className="basis-[60%] lg:px-10 lg:flex lg:items-center lg:w-full">
          <Image
            src="/image/logo.png"
            alt="Logo Minilemon app"
            width={80}
            height={80}
            className="absolute top-4 left-4"
          />
          <div className="min-w-[50%] mx-auto">
            <h1 className="font-bold text-center text-2xl ">Login to Dashboard</h1>
            <p className="text-center text-sm text-gray-500">Fill the form below to login</p>

            <form action="/home" className="py-20">
              <div className="py-3 flex gap-y-1 flex-col">
                <label htmlFor="email" className="font-semibold">Email</label>
                <input id="email" type="email" className="border w-full py-2 px-3 border-gray-300 rounded-lg outline-none" placeholder="Enter email address" />
              </div>
              <div className="py-3 flex gap-y-1 flex-col">
                <label htmlFor="Password" className="font-semibold">Password</label>
                <input id="Password" type="password" className="border w-full py-2 px-3 border-gray-300 rounded-lg outline-none" placeholder="Enter email address" />
              </div>

              <button className="bg-yellow-500 w-full p-2 rounded-xl text-white mt-10">Login</button>
            </form>

            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
              Made with ☕ by Syahal Tastari 🐺
            </footer>
          </div>
        </section>

        <section className="hidden lg:block lg:basis-[40%] lg:relative">
          <Image
            src={"/image/side-banner.png"}
            alt="Side banner"
            fill
            className="w-full h-auto object-cover"
          />
        </section>
      </main>
    </div>
  );
}
