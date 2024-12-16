import Image from "next/image";

const popularStyles = [
  { id: 1, name: "White Chair 1", imageUrl: "/image2.webp" },
  { id: 2, name: "White Chair 2", imageUrl: "/image.webp" },
  { id: 3, name: "Gray Chair", imageUrl: "/image8.webp" },
  { id: 4, name: "White Chair 3", imageUrl: "/image.webp" },
];

export default function Style() {
  return (
    <section className="px-6 py-12">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Image */}
        <div className="w-full md:w-1/2 relative">
          <Image
            src="/Frame.webp" // Replace with actual path
            alt="Orange Chair"
            width={500}
            height={600}
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90">
            <p className="text-blue-500 font-bold tracking-widest">
              EXPLORE NEW AND POPULAR STYLES
            </p>
          </div>
        </div>

        {/* Right Grid */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
          {popularStyles.map((style) => (
            <div
              key={style.id}
              className="relative rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={style.imageUrl}
                alt={style.name}
                width={250}
                height={250}
                className="object-cover w-full h-48"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
