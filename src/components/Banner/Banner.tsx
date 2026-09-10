import bannerMain from "../../assets/bannerMain.png";

export default function Banner() {
  return (
    <section className="relative mx-auto mt-6 h-[545px] w-[1320px] overflow-hidden rounded-xl border border-blue-400 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 px-6 py-8 text-center">
      {/* Background Glow */}
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-500/60 blur-3xl"></div>

      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-300/40 blur-3xl"></div>

      {/* Banner Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        <img
          src={bannerMain}
          alt="Banner"
          className="mb-6 w-[280px] object-contain md:w-[340px]"
        />

        <h1 className="text-2xl font-bold text-white md:text-3xl">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>

        <p className="mt-3 text-sm text-gray-300 md:text-base">
          Beyond Boundaries Beyond Limits
        </p>
        <button className="mt-4 rounded-xl border-2 border-yellow-400 bg-yellow-300 px-7 py-3 text-base font-bold text-black shadow-[0_0_12px_rgba(250,204,21,0.5)] transition hover:bg-yellow-400">
          Claim Free Credit
        </button>
      </div>
    </section>
  );
}
