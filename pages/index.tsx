import Image from 'next/image'


export default function Home() {
  return (
    <>
      <div className="flex justify-center lg:items-center w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 rounded-2xl overflow-hidden">
          <div className="flex flex-col gap-10 max-w-[400px] p-16 bg-[#e28525]">
            <Image height={90} width={90} src="/images/icon-sedans.svg" alt="icon of car" />
            <h2 className=" font-big-shoulder text-6xl font-semibold text-white">SEDANS</h2>
            <p className="lg:h-48 font-lex-deca text-white leading-8 opacity-80">Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
            <button className="bg-white text-[#e28525] hover:bg-[#e28525] hover:text-white border-solid border-2 p-4 font-lex-deca text-white rounded-full mt-16 w-36" >Learn More</button>
          </div>
          <div className="flex flex-col gap-10 max-w-[400px] p-16 bg-[#016972]">
            <Image height={90} width={90} src="/images/icon-suvs.svg" alt="icon of car" />
            <h2 className=" font-big-shoulder text-6xl font-semibold text-white">SUVS</h2>
            <p className="lg:h-48 font-lex-deca text-white leading-8 opacity-80">Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation
  and off-road adventures.</p>
            <button className="bg-white text-[#016972] hover:bg-[#016972] hover:text-white border-solid border-2 p-4 font-lex-deca text-white rounded-full mt-16 w-36" >Learn More</button>
          </div>
          <div className="flex flex-col gap-10 max-w-[400px] p-16 bg-[#00403f]">
            <Image height={90} width={90} src="/images/icon-sedans.svg" alt="icon of car" />
            <h2 className=" font-big-shoulder text-6xl font-semibold text-white">SEDANS</h2>
            <p className="lg:h-48 font-lex-deca text-white leading-8 opacity-80">Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury
  rental and arrive in style.</p>
            <button className="bg-white text-[#00403f] hover:bg-[#00403f] hover:text-white text-border-solid border-2 p-4 font-lex-deca text-white rounded-full mt-16 w-36" >Learn More</button>
          </div>
        </div>
      </div>
    </>
  )
}
