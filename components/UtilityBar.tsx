export default function UtilityBar() {
  return (
    <div className="bg-red-600 text-foreground text-xs py-2 px-4 flex justify-between items-center">
      <span className="font-semibold">STATUTORY WARNING: Tobacco is injurious to health.</span>
      <div className="flex gap-6 text-xs">
        <a href="#" className="hover:underline">Media</a>
        <a href="#" className="hover:underline">Contact</a>
        <a href="#" className="hover:underline">Careers</a>
        <button className="hover:underline">🌐 EN</button>
      </div>
    </div>
  )
}
