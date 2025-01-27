# CharleBin

CharleBin est une plateforme minimaliste de partage de texte en ligne où les données restent privées.  
Toutes les informations partagées sont chiffrées côté client avec AES 256 bits, ce qui signifie que le serveur n’a aucune connaissance des contenus.

## Fonctionnalités principales
- Chiffrement/déchiffrement côté client.
- Expiration automatique des données après un certain temps.
- Interface légère et minimaliste.

## Comment l'utiliser
1. Clonez ce dépôt : `git clone git@github.com:LukaSalvo/CharleBin.git`
2. Installez les dépendances : `make install`
3. Lancez le serveur : `make start`
4. Accédez à l'interface web via `http://localhost:8080`.

## Contribution
Pour contribuer, référez-vous au fichier [`CONTRIBUTING.md`](./CONTRIBUTING.md).