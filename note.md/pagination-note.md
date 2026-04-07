# 📝 Note — C'est quoi `offset` ?

**`offset`** signifie littéralement **"décalage"** en anglais.

Dans le projet, c'est le nombre de résultats à **sauter** avant de commencer à retourner des données. C'est le mécanisme qui permet la pagination.

---

## L'analogie la plus simple

Imagine 44 bornes WiFi alignées en file :

```
[1][2][3]...[20][21][22]...[40][41][42][43][44]
```

```
offset=0  → commence depuis le début   → bornes 1 à 20
offset=20 → saute les 20 premières     → bornes 21 à 40
offset=40 → saute les 40 premières     → bornes 41 à 44
```

---

## Ce que ça donne dans l'URL

```
?limit=20&offset=0    → 1ère page  (bornes 1-20)
?limit=20&offset=20   → 2ème page  (bornes 21-40)
?limit=20&offset=40   → 3ème page  (bornes 41-44)
```

---

## Dans le code

```javascript
let offset = 0; // on commence au début

// Au clic sur "Charger plus" :
offset += 20; // on décale de 20
fetchBornes("", offset); // l'API reçoit offset=20, saute les 20 premières
```

---

## Pourquoi pas juste un numéro de page ?

Certaines API utilisent `page=1`, `page=2`... mais `offset` est plus flexible — tu peux demander n'importe quel point de départ, pas forcément un multiple de ta limite.

C'est un concept qu'on retrouve aussi en SQL :

```sql
SELECT * FROM bornes LIMIT 20 OFFSET 20
--                             ↑ même idée
```
