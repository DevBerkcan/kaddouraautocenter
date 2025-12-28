# E-Mail-Versand Konfiguration

Das Kontaktformular verwendet **Nodemailer** für den E-Mail-Versand. Folgen Sie dieser Anleitung, um den E-Mail-Versand einzurichten.

## 1. Umgebungsvariablen konfigurieren

Bearbeiten Sie die Datei `.env.local` im Hauptverzeichnis des Projekts mit Ihren SMTP-Zugangsdaten.

### Gmail verwenden (Empfohlen für Tests)

1. **2-Faktor-Authentifizierung aktivieren**
   - Gehen Sie zu https://myaccount.google.com/security
   - Aktivieren Sie die 2-Faktor-Authentifizierung

2. **App-Passwort erstellen**
   - Gehen Sie zu https://myaccount.google.com/apppasswords
   - Wählen Sie "App auswählen" → "Sonstige"
   - Geben Sie einen Namen ein (z.B. "Autocenter Kaddoura")
   - Klicken Sie auf "Generieren"
   - Kopieren Sie das 16-stellige Passwort

3. **In .env.local eintragen**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=ihre-email@gmail.com
   SMTP_PASS=xxxx xxxx xxxx xxxx  # Das App-Passwort (ohne Leerzeichen)
   SMTP_FROM_NAME=Autocenter Kaddoura
   SMTP_FROM_EMAIL=ihre-email@gmail.com
   CONTACT_EMAIL=info@autocenterkaddoura.de
   ```

### Andere E-Mail-Provider

#### 1&1 IONOS
```env
SMTP_HOST=smtp.ionos.de
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=ihre-email@ihre-domain.de
SMTP_PASS=ihr-passwort
```

#### Strato
```env
SMTP_HOST=smtp.strato.de
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=ihre-email@ihre-domain.de
SMTP_PASS=ihr-passwort
```

#### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=ihre-email@outlook.com
SMTP_PASS=ihr-passwort
```

#### All-Inkl
```env
SMTP_HOST=smtp.all-inkl.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=ihre-email@ihre-domain.de
SMTP_PASS=ihr-passwort
```

## 2. Server neu starten

Nach dem Ändern der `.env.local` Datei:

```bash
# Development Server neu starten
npm run dev
```

## 3. Testen

1. Öffnen Sie http://localhost:3000
2. Scrollen Sie zum Kontaktformular
3. Füllen Sie das Formular aus und senden Sie es ab
4. Überprüfen Sie Ihr E-Mail-Postfach (CONTACT_EMAIL)

## Fehlerbehebung

### E-Mails kommen nicht an

1. **Überprüfen Sie die SMTP-Zugangsdaten**
   - Sind alle Felder in `.env.local` korrekt ausgefüllt?
   - Bei Gmail: Verwenden Sie ein App-Passwort, nicht Ihr normales Passwort

2. **Überprüfen Sie den Spam-Ordner**
   - E-Mails landen möglicherweise im Spam

3. **Überprüfen Sie die Browser-Konsole**
   - Öffnen Sie die Browser-Entwicklertools (F12)
   - Schauen Sie in die Konsole nach Fehlermeldungen

4. **Überprüfen Sie die Server-Logs**
   ```bash
   # Im Terminal wo npm run dev läuft
   # Sehen Sie nach Fehlermeldungen
   ```

### "Fehler beim Versand" Meldung

- **Gmail: "Less secure app access"**
  - Gmail erfordert jetzt App-Passwörter statt dem normalen Passwort
  - Erstellen Sie ein App-Passwort wie oben beschrieben

- **SMTP Port blockiert**
  - Einige Netzwerke blockieren Port 587
  - Versuchen Sie Port 465 mit `SMTP_SECURE=true`

- **Firewall**
  - Stellen Sie sicher, dass Ihre Firewall ausgehende SMTP-Verbindungen erlaubt

## Deployment (Vercel, Netlify, etc.)

Fügen Sie die Umgebungsvariablen in Ihrem Hosting-Dashboard hinzu:

### Vercel
1. Gehen Sie zu Ihrem Projekt → Settings → Environment Variables
2. Fügen Sie alle Variablen aus `.env.local` hinzu

### Netlify
1. Gehen Sie zu Site settings → Build & deploy → Environment
2. Fügen Sie alle Variablen hinzu

## Sicherheit

⚠️ **WICHTIG**: Die `.env.local` Datei ist in `.gitignore` enthalten und wird **NICHT** in Git committed.

- Teilen Sie niemals Ihre SMTP-Zugangsdaten öffentlich
- Verwenden Sie für Produktion separate E-Mail-Konten
- Ändern Sie regelmäßig Ihre Passwörter

## E-Mail-Format

Die gesendeten E-Mails enthalten:
- HTML-formatierte Nachricht
- Plain-Text Alternative
- Reply-To Header (ermöglicht direkte Antwort)
- Absender-Informationen

## Support

Bei Problemen:
1. Überprüfen Sie diese Anleitung
2. Schauen Sie in die Browser-Konsole und Server-Logs
3. Testen Sie Ihre SMTP-Zugangsdaten mit einem E-Mail-Client
