## Deployment
### 1. Archiv packen und bestimmte Dateien ignorieren
```
tar -czf package.gz client config node_modules public server .env docker-compose.yml package.json
```

### 2. Gepacktes Archiv auf Remote-Server kopieren
```
scp package.gz maikpaulus@maikpaulus.com:/usr/app/webseite/package.gz
```

### 3. Archiv auf Remote-Server entpacken
```
ssh maikpaulus@maikpaulus.com 'cd /usr/app/webseite && tar -xzf package.gz
```

### 4. Auf Remote-Server Container herunterfahren
```
ssh maikpaulus@maikpaulus.com 'docker-compose -f docker-compose.yml down --rmi all'
```

### 5. Auf Remote-Server Container hochfahren
```
ssh maikpaulus@maikpaulus.com 'docker-compose -f docker-compose.yml up --build'
```

### 6. Aufräumen
```
rm -rf package.gz
ssh maikpaulus@maikpaulus.com 'cd /usr/app/webseite && rm package.gz'
```