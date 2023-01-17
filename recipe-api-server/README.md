# Recipe API Server

> Hier befindet sich der Server, welcher die Daten für deine Recipe App bereitstellt.

Zum Starten des Servers:
```
npm start
```
Achte darauf, dass dein Terminal sich hierbei in dem Server Verzeichnis befindet (`recipe-api-server`).


___

## API Endpunkte

- **GET** http://localhost:8080/recipes - Um alle Rezept Daten zu fetchen
- **GET** http://localhost:8080/recipes/:id - Um ein Rezept anhand der id zu fetchen (**:id** mit der id Nummer ersetzen)
- **GET** http://localhost:8080/recipes/paginate?page=1&size=10 - Um die Rezept Daten in Teilen (paginated) zu fetchen (die Attribute für page und size können angepasst werden)
- **GET** http://localhost:8080/categories - Um alle Kategorien zu fetchen
- **GET** http://localhost:8080/countries - Um alle Länder der Küchenrichtungen zu fetchen
- **POST** http://localhost:8080/recipes - Um ein neues Rezept zum Server zu senden - das gesendete Object muss dabei zum Beispiel folgendermaßen aussehen:
```
"category": "Noodles",
"country": "Italy",
"title": "Spaghetti Napoli",
"description": "Super nice italian pasta fooda",
"picture": "http://localhost:8080/assets/images/recipes/spaghetti.jpg",
"cooktime": 20,
"ingredients": [
    "Pasta",
    "Water",
    "Salt"
],
"procedure": "1. Heat the salted water until it's boiling\n2. Put the pasta in the boiling water\n3. Wait 10 minutes\n4. Get the pasta out of the water\n5. Enjoy ;-)"

```
- **PUT** http://localhost:8080/recipes/:id - Um en Rezept anhand der ID zu bearbeiten - das gesendete Object muss dabei genauso aussehen, wie das aus der POST request
- **DELETE** http://localhost:8080/recipes/:id - Um ein Rezept anhand der id zu löschen

### Filtern der Daten

Es is Möglich, die die Rezept-Daten vom Server filtern zu lassen (auf *GET http://localhost:8080/recipes*)

Gefiltert werden kann nach:
- country
- category

Um die Filter anzuwenden, schreib den Namen des Filters, so wie auch bei der Pagination, als property hinter die server URL.
**Beispiel, um alle Ergebnisse für *deusche* Geriche, aus der *Category roast* zu erhalten:**
```http://localhost:8080/recipes/?country=germany&category=roast```

___




Im `src` Verzeichnis findest du die Daten, auf welche der Server zugreift (`data.js`).
Diese werden bei jedem Neustart des Servers zurück auf Anfang gesetzt. Das heißt, dass alle Veränderungen, welche via POST, PUT und DELETE passieren, danach wieder weg sind.

Im `misc` Verzeichnis findest du die json datei, welche ihr in Postman importieren könnt, um den Server komfortabel testen zu können.