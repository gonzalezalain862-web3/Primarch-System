'use client';
export default function ContactoPage() {
  const whatsappUrl = "https://wa.me/584222100167?text=Hola%2C%20bienvenido%20a%20Primarch%20System"\;
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Contacto</h1>
      <p>Correo: <a href="mailto:asistent.ai213@gmail.com" className="text-blue-400">asistent.ai213@gmail.com</a></p>
      <p>WhatsApp: 
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-green-400 ml-2 inline-flex items-center">
          Enviar mensaje de bienvenida
        </a>
      </p>
    </div>
  );
}
