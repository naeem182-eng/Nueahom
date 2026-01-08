const TrustSection = () => {
  return (
    <section className="bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* headline */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6">
            ความพรีเมี่ยม<br />
            เริ่มจากความซื่อสัตย์
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            เราเชื่อว่าเนื้อที่ดี ไม่จำเป็นต้องพูดเยอะ  
            แค่รู้ที่มา เข้าใจกระบวนการ  
            และใส่ใจในทุกขั้นตอน
          </p>
        </div>

        {/* trust pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="space-y-4">
            <span className="text-sm text-neutral-500 tracking-widest">
              01
            </span>
            <h3 className="text-xl font-medium">
              คัดจากแหล่งที่ไว้ใจได้
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              เลือกเฉพาะเนื้อจากฟาร์มที่มีมาตรฐาน  
              ตรวจสอบย้อนกลับได้ทุกล็อต
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-sm text-neutral-500 tracking-widest">
              02
            </span>
            <h3 className="text-xl font-medium">
              กระบวนการที่โปร่งใส
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              ตั้งแต่การตัดแต่ง การจัดเก็บ  
              ไปจนถึงการส่งมอบ ไม่มีขั้นตอนไหนที่เรามองข้าม
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-sm text-neutral-500 tracking-widest">
              03
            </span>
            <h3 className="text-xl font-medium">
              คุณภาพสม่ำเสมอ
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              ไม่ใช่แค่ดีในครั้งแรก  
              แต่ต้องดีในทุกครั้งที่คุณกลับมา
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustSection;
