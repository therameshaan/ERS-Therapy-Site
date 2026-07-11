import Image from 'next/image';

const lebronImages = [
  {
    src: 'https://res.cloudinary.com/duhszjpvc/image/upload/v1776975169/lebron_bcin1l.gif',
    alt: 'LeBron James animated GIF',
    width: 400,
    height: 300,
  },
  {
    src: 'https://res.cloudinary.com/duhszjpvc/image/upload/v1776975169/images_1_az8pnv.jpg',
    alt: 'LeBron James action shot',
    width: 400,
    height: 300,
  },
  {
    src: 'https://res.cloudinary.com/duhszjpvc/image/upload/v1776975169/download_1_m13xzg.jpg',
    alt: 'LeBron James portrait',
    width: 400,
    height: 300,
  },
  {
    src: 'https://res.cloudinary.com/duhszjpvc/image/upload/v1776975169/download_3_mzkkat.jpg',
    alt: 'LeBron James dunking',
    width: 400,
    height: 300,
  },
  {
    src: 'https://res.cloudinary.com/duhszjpvc/image/upload/v1776975169/download_2_t945pw.jpg',
    alt: 'LeBron James celebrating',
    width: 400,
    height: 300,
  },
];

export default function LeBronGallery() {
  return (
    <section className="pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-6">
          The King 👑 LeBron James Gallery
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          A curated collection of LeBron James' most iconic moments.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lebronImages.map((img, index) => (
            <div key={index} className="glass-card p-4 flex items-center justify-center">
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="rounded-lg hover:scale-105 transition-transform duration-300"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}