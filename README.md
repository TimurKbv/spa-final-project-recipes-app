# SPA Final Project: Recipe App

Als Abschlussprojekt des Single Page Application Moduls soll für ein bestehende Rezepte-API eine mit React erstellte Frontend App entstehen.

## Projektaufbau
In diesem Projektordner sind zwei weitere Unterordner zu finden:
- `recipe-api-server/`
- `recipe-react-app/`

Das sind die Ordner für eure lokale API Kopie und das `React` Projekt, das ihr erweitern sollt.

### `recipe-api-server/`
Ein lokaler `node.js` Server, der eure lokale API Kopie abbildet.
Er beinhaltet bereits einige Beispieldaten, die bei jedem Serverstart zurückgesetzt werden.
Den lokalen API-Server kannst du im Ordner `recipe-api-server/` mit dem Befehl `npm install` installieren und mit dem Befehl `npm start` starten.
> ACHTUNG: Achte darauf, nur eine Instanz davon laufen zu lassen, damit es nicht zu Port Verschiebungen kommt.

In `recipe-api-server/README.md` findest du eine genaue Beschreibung der verwendbaren Routen und im Unterordner `recipe-api-server/misc` findest du eine sogenannte "Postman Collection", die du zum Testen in dein Postman importieren kannst.


### `recipe-react-app/`
Das ist eine `vite-react` Boilerplate wie bisher verwendet. Als Zusatz ist das Paket `axios` bereits installiert und in die `App.jsx` eingebunden.
Hierin soll die eigentliche App entwickelt werden.
Denke daran, deine Ordner Struktur sauber zu halten, lese also beispielsweise im `src/` Ordner einen `components` Ordner an, um deine eigenen Componenten sauber vom Rest zu trennen und damit das Projekt übersichtlich zu halten.

Zusätzlich zu den üblichen Ordnern und Dateien in der Boilerplate findest du noch den Ordner `src/data/`.
In diesem befindet sich die Datei `data.js`. Darin ist eine bereits exportierte `data`-Konstante, welche du für den ersten Entwurf deiner `react`-Anwendung nutzen kannst bevor du den Datenaustausch mit der `API` einbaust.

## Features
Der Umfang möglicher Funktionalität einer `react`-App zur Verwaltung von Rezepten, kann sehr unterschiedlich ausfallen.
Im folgenden werden einige geforderte Basisfeatures vorgestellt, sowie einige Bonusfeatures für die es bereits die nötige Funktionalität im mitgelieferten `API-Server` gibt.

### Geforderte Basisfeatures
- Eine Übersicht der Rezepteinträge von der `API`
- Eine Einzelansicht für Rezepteinträge von der `API`
- Die Möglichkeit, neue Rezepteinträge über die `API` anzulegen
- Die Möglichkeit, bestehende Rezepteinträge über die `API` zu bearbeiten
- Die Möglichkeit, bestehende Rezepteinträge über die `API` zu entfernen

Alle diese Features können vorerst ohne `API`-Anbindung eingebaut werden, sodass die benötigte `API`-Anbindung im Nachgang eingebaut werden kann.

### Bonusfeatures
- Nutzung der Pagination Route für die Übersicht der Rezepteinträge
- Nutzung der Filterung auf den Übersichtsrouten
- Einbindung des `react-router`
- Ganze App responsive

Weitere Bonusfeatures sind denkbar. Du darfst gerne kreativ werden. Wenn daran was am Server geändert werden müsste, können wir das besprechen.
