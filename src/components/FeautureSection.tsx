export default function FeatureSection() {
    return (
      <div className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center">
          {/* High Quality */}
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">🏆</div>
            <h3 className="text-lg font-semibold mb-1">High Quality</h3>
            <p className="text-gray-600 text-sm">Crafted from top materials</p>
          </div>
  
          {/* Warranty Protection */}
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">✅</div>
            <h3 className="text-lg font-semibold mb-1">Warranty Protection</h3>
            <p className="text-gray-600 text-sm">Over 2 years</p>
          </div>
  
          {/* 24/7 Support */}
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">🎧</div>
            <h3 className="text-lg font-semibold mb-1">24 / 7 Support</h3>
            <p className="text-gray-600 text-sm">Dedicated support</p>
          </div>
        </div>
      </div>
    );
  }
  