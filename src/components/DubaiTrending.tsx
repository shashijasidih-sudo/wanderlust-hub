import { AlertTriangle } from "lucide-react";

const DubaiTrending = () => {
  return (
    <section className="py-10 md:py-14 bg-muted/30">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Dubai Trending Activities
        </h2>
        <div className="max-w-2xl mx-auto bg-amber-50 border-2 border-amber-400 rounded-2xl p-6 md:p-8 text-center">
          <AlertTriangle className="h-10 w-10 text-amber-500 mx-auto mb-4" />
          <p className="text-lg font-semibold text-amber-800 mb-2">
            Dubai Activities Temporarily Unavailable
          </p>
          <p className="text-amber-700">
            ⚠️ We will soon update the prices as per the ongoing War Situation
          </p>
        </div>
      </div>
    </section>
  );
};

export default DubaiTrending;
