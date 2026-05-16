"use client";
export default function Contacto() {
  const whatsappUrl = "https://wa.me/584222100167?text=Hola%20bienvenido%20a%20Primarch%20System";
  return (
    <div className="glass-card" className="cyber-data">
      <h2>Contacto</h2>
      <p><strong>Correo:</strong> <a href="mailto:asistent.ai213@gmail.com">asistent.ai213@gmail.com</a></p>
      <p>
        <strong>WhatsApp:</strong>{" "}
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-block', marginTop: '1rem' }}>
          Enviar mensaje de bienvenida
        </a>
      </p>
    </div>
  );
}
