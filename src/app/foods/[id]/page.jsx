import Image from "next/image";
import { redirect } from "next/navigation";

export function generateStaticParams() {
  return [{ id: "52924" }, { id: "52838" }, { id: "52803" }];
}

export async function generateMetadata({ params }, parent) {
  const { id } = await params;

  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );
  const { details = {} } = await res.json();
  return {
    title: details.title,
    generator: "Next.js",
    applicationName: "Next.js",
    referrer: "origin-when-cross-origin",
    keywords: ["Next.js", "React", "JavaScript"],
    authors: [{ name: "Seb" }, { name: "Josh", url: "https://nextjs.org" }],
    creator: "Jiachi Liu",
    publisher: "Sebastian Markbåge",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: "Next.js",
      description: "The React Framework for the Web",
      url: "https://nextjs.org",
      siteName: "Next.js",
      images: [
        {
          url: "https://nextjs.org/og.png", // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: "https://nextjs.org/og-alt.png", // Must be an absolute URL
          width: 1800,
          height: 1600,
          alt: "My custom alt",
        },
      ],
      videos: [
        {
          url: "https://nextjs.org/video.mp4", // Must be an absolute URL
          width: 800,
          height: 600,
        },
      ],
      audio: [
        {
          url: "https://nextjs.org/audio.mp3", // Must be an absolute URL
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
    // { cache: "no-store" } // লেটেস্ট ডাটা পাওয়ার জন্য
  );
  const data = await res.json();
  return data.details;
};

const FoodDetailsPage = async ({ params }) => {
  const { id } = await params;
  const food = await getSingleFood(id);

  if (!food || !food.title) {
    redirect("/foods");
    // return (
    //   <div className="flex justify-center items-center h-screen">
    //     <h2 className="text-2xl font-bold text-red-500">Food Not Found!</h2>
    //   </div>
    // );
  }

  const { title, foodImg, price, category, area, video } = food;

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-xl rounded-3xl overflow-hidden p-6">
        {/* Left Side: Image */}
        <div className="relative h-96 w-full rounded-2xl overflow-hidden">
          <img
            src={foodImg}
            alt={title}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Side: Details */}
        <div className="flex flex-col justify-center space-y-4">
          <div className="flex gap-2">
            <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-xs font-semibold">
              {category}
            </span>
            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
              {area}
            </span>
          </div>

          <h1 className="text-4xl font-extrabold text-gray-800">{title}</h1>
          <p className="text-3xl font-bold text-emerald-600">৳ {price}</p>

          <div className="pt-4 space-y-3">
            <p className="text-gray-600 leading-relaxed">
              This delicious <strong>{title}</strong> is a popular{" "}
              <strong>{area}</strong> dish from the <strong>{category}</strong>{" "}
              category. Perfect for your next meal!
            </p>

            <div className="flex gap-4 pt-6">
              <button className="bg-emerald-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition shadow-lg shadow-emerald-200">
                Order Now
              </button>
              {video && (
                <a
                  href={video}
                  target="_blank"
                  className="border border-gray-300 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition text-red-600"
                >
                  Watch Recipe
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsPage;
