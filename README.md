# 🌟 Random Quote Generator

Eine einfache Frontend-only Web-Anwendung, die zufällige inspirierende Zitate anzeigt.

## ✨ Features

- 🎯 Zufällige inspirierende Zitate auf Knopfdruck
- 💫 Schöne, responsive Benutzeroberfläche
- ⌨️ Leertaste-Shortcut für neue Zitate
- 📱 Mobile-freundliches Design
- 🚀 Komplett Frontend-only - kein Backend nötig!
- ⚡ Sofort einsatzbereit

## 🚀 Schnellstart

```bash
# Lokalen Server starten
python3 -m http.server 3000 --directory frontend

# Dann öffne: http://localhost:3000/
```

## 📁 Projektstruktur

```
quote-generator/
├── frontend/
│   ├── index.html         # Hauptseite
│   ├── style.css         # Styling
│   └── script.js         # JavaScript mit eingebetteten Zitaten
├── package.json          # Projekt-Konfiguration
└── README.md            # Diese Datei
```

## 🌐 Deployment

### Netlify (Empfohlen)
1. Pushe das Projekt zu GitHub
2. Verbinde Repository mit Netlify
3. Build-Ordner: `frontend`
4. Publish directory: `frontend`

### Vercel
1. Pushe das Projekt zu GitHub
2. Import in Vercel
3. Root directory: `frontend`

## 🎯 Verwendung

- **Klicken**: Button "Neues Zitat generieren"
- **Tastatur**: Leertaste drücken
- **Mobile**: Touch-freundliche Bedienung

## 🛠️ Entwickelt mit

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Python Flask
- **Styling**: CSS Grid/Flexbox, Gradient-Design
- **API**: REST mit CORS-Unterstützung

---
*Erstellt in unter 30 Minuten! 🚀*
