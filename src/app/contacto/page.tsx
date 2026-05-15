'use client';
export default function ContactoPage() {
  const whatsappUrl = "https://wa.me/584222100167?text=Hola%2C%20bienvenido%20a%20Primarch%20System%20%F0%9F%9A%80"\;
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Contacto</h1>
      <p>📧 Correo: <a href="mailto:asistent.ai213@gmail.com" className="text-blue-400">asistent.ai213@gmail.com</a></p>
      <p>📱 WhatsApp: 
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-green-400 ml-2 inline-flex items-center">
          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.165-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.614-.916-2.21-.241-.58-.486-.5-.669-.51-.173-.01-.371-.01-.571-.01-.2 0-.522.074-.795.372-.273.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.086 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.569-.347zM12 2C6.48 2 2 6.48 2 12c0 1.733.424 3.365 1.18 4.8L2.05 21.95l5.15-1.13C8.635 21.576 10.274 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
          Enviar mensaje
        </a>
      </p>
    </div>
  );
}
