const TrustSection = () => {

    return (
    <section id="halal" className="bg-gray-300 text-black">
      <div className="mx-auto px-6 py-24">

        {/* headline */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-4xl font-light tracking-wide mb-6">
            ความพิถีพิถัน<br />
            เริ่มจากความซื่อสัตย์
          </h2>
          <p className="text-slate-700 text-2xl leading-relaxed">
            เนื้อที่ดี ต้องผ่านการควบคุมคุณภาพ
            รู้ที่มา เข้าใจกระบวนการ
            และใส่ใจในรายละเอียดทุกขั้นตอน
          </p>
        </div>

        {/* trust pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div className="space-y-4">
            <span className="text-3xl text-slate-700 tracking-widest">
              01
            </span>
            <h3 className="text-4xl font-medium">
              คัดจากแหล่งที่ไว้ใจได้
            </h3>
            <p className="text-slate-700 text-2xl leading-relaxed">
              เลือกเฉพาะเนื้อจากฟาร์มที่มีมาตรฐานฮาลาล
              ตรวจสอบย้อนกลับได้ทุกล็อต
            </p>
        </div>

          <div className="space-y-4">
            <span className="text-3xl text-slate-700 tracking-widest">
              02
            </span>
            <h3 className="text-4xl font-medium">
              กระบวนการที่โปร่งใส
            </h3>
            <p className="text-slate-700 text-2xl leading-relaxed">
              ตั้งแต่การตัดแต่ง การจัดเก็บ
              ไปจนถึงการส่งมอบ ไม่มีขั้นตอนไหนที่เรามองข้าม
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-3xl text-slate-700 tracking-widest">
              03
            </span>
            <h3 className="text-4xl font-medium">
              คุณภาพสม่ำเสมอ
            </h3>
            <p className="text-slate-700 text-2xl leading-relaxed">
              การรักษาคุณภาพของเนื้อ คือพันธกิจอันทรงคุณค่า ที่เราทุ่มเท ให้ความใส่ใจเสมอมา
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustSection;
