import { Button } from "../ui/button";

function HeroSection() {
  return (
    <>
      <div className="flex items-center justify-around p-20">
        <div className="flex flex-col gap-5">
          <div className="w-fit rounded-xl bg-sky-100">
            <p className="p-3 text-sm">🎉Discover Your Perfect Companion</p>
          </div>

          <div className="text-6xl font-extrabold">
            <p className="">Learn About</p>
            <p className="">Puppies</p>
          </div>
          <p className="text-muted-foreground w-100 text-sm">
            Discover how smart they are, how friendly with humans, and how to
            care for them. Find the perfect puppy breed for your lifestyle with
            our comprehensive guide.
          </p>
          <div className="flex gap-4">
            <Button className=""> 🔍 Expolre Breads </Button>
            <Button className=""> 📝 Take Quiz </Button>
          </div>
        </div>
        <div className="">
          <div className="h-100 w-180 bg-sky-200"></div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
