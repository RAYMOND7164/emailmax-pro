export default function handler(req, res) {
  // Ajouter les headers CORS pour permettre les requêtes depuis le frontend
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Gérer les requêtes OPTIONS (preflight)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  
  const apiKey = process.env.BREVO_API_KEY;
  
  if (!apiKey) {
    return res.status(500).json({ message: 'API key not configured' });
  }
  
  res.status(200).json({ apiKey });
}
