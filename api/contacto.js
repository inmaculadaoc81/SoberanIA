const nodemailer=require("./_correo.js");

const clean = (v, max = 4000) => String(v ?? "").replace(/[<>]/g, "").trim().slice(0, max);

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false });
  }

  try {
    const b = req.body || {};
    const nombre = clean(b.nombre, 120);
    const empresa = clean(b.empresa, 160);
    const email = clean(b.email, 180);
    const telefono = clean(b.telefono, 60);
    const interes = clean(b.interes, 120);
    const usuarios = clean(b.usuarios, 80);
    const mensaje = clean(b.mensaje);

    if (!nombre || !empresa || !email || !telefono || !mensaje) {
      return res.status(400).json({ ok: false });
    }

    const port = Number(process.env.SMTP_PORT || 465);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: String(process.env.SMTP_SECURE ?? "true") === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"SoberanIA - Web" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: "Nueva consulta - servidores de IA local",
      text:
        `Nombre: ${nombre}\n` +
        `Empresa: ${empresa}\n` +
        `Email: ${email}\n` +
        `Teléfono: ${telefono}\n` +
        `Interés: ${interes}\n` +
        `Usuarios/equipos: ${usuarios}\n\n` +
        `${mensaje}`,
    });

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ ok: false });
  }
};
